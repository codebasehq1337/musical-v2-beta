const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'database.json');
const JWT_SECRET = process.env.JWT_SECRET || 'musical_secret_key_1337';

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

function loadDB() {
  if (!fs.existsSync(DB_FILE)) {
    const initData = {
      users: {
        vey: {
          username: "vey",
          passwordHash: bcrypt.hashSync("password123", 10),
          isAdmin: true,
          badges: ["OG", "DEV", "ADMIN", "VERIFIED"],
          avatar: "https://i.imgur.com/6VBx3io.png",
          bio: "making music & running shit.",
          views: 1337,
          tracks: [
            { title: "demo track 1", url: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a7321d.mp3" }
          ],
          socials: { discord: "vey#0001", telegram: "vey_official", github: "codebasehq1337" },
          customization: {
            themeColor: "#ff0055",
            bgMode: "3d-particles"
          }
        }
      },
      forumPosts: [
        {
          id: "1",
          author: "vey",
          authorBadges: ["OG", "DEV"],
          title: "welcome to musical",
          content: "post tracks, chat with people, customize your profile n shit.",
          category: "General",
          createdAt: new Date().toISOString()
        }
      ],
      chatMessages: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initData, null, 2));
    return initData;
  }
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

function saveDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

let db = loadDB();

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'need to login first' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'session expired, login again' });
    req.user = decoded;
    next();
  });
}

// Auth
app.post('/api/auth/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'fill in both fields bro' });

  const cleanUser = username.toLowerCase().trim();
  if (cleanUser.length < 2 || cleanUser.length > 20) {
    return res.status(400).json({ error: 'username gotta be 2-20 chars' });
  }

  if (db.users[cleanUser]) return res.status(400).json({ error: 'username taken' });

  const isVey = cleanUser === 'vey';
  const newUser = {
    username: cleanUser,
    passwordHash: bcrypt.hashSync(password, 10),
    isAdmin: isVey,
    badges: isVey ? ["OG", "DEV", "ADMIN", "VERIFIED"] : ["MEMBER"],
    avatar: "https://i.imgur.com/6VBx3io.png",
    bio: "just joined musical.",
    views: 0,
    tracks: [],
    socials: { discord: "", telegram: "", soundcloud: "" },
    customization: {
      themeColor: "#ff0055",
      bgMode: "3d-particles"
    }
  };

  db.users[cleanUser] = newUser;
  saveDB(db);

  const token = jwt.sign({ username: cleanUser, isAdmin: newUser.isAdmin }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, username: cleanUser, isAdmin: newUser.isAdmin });
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'fill in both fields' });

  const cleanUser = username.toLowerCase().trim();
  const user = db.users[cleanUser];

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(400).json({ error: 'wrong username or password' });
  }

  const token = jwt.sign({ username: cleanUser, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, username: cleanUser, isAdmin: user.isAdmin });
});

// Users & Profiles
app.get('/api/users/:username', (req, res) => {
  const cleanUser = req.params.username.toLowerCase().trim();
  const user = db.users[cleanUser];

  if (!user) return res.status(404).json({ error: 'user not found' });

  user.views = (user.views || 0) + 1;
  saveDB(db);

  const { passwordHash, ...publicProfile } = user;
  res.json(publicProfile);
});

app.post('/api/users/customize', authMiddleware, (req, res) => {
  const user = db.users[req.user.username];
  if (!user) return res.status(404).json({ error: 'user not found' });

  const { bio, avatar, socials, customization, tracks } = req.body;
  if (bio !== undefined) user.bio = bio;
  if (avatar !== undefined) user.avatar = avatar;
  if (socials !== undefined) user.socials = socials;
  if (tracks !== undefined) user.tracks = tracks;
  if (customization !== undefined) user.customization = { ...user.customization, ...customization };

  saveDB(db);
  const { passwordHash, ...updated } = user;
  res.json({ success: true, user: updated });
});

// Admin Badges
app.post('/api/admin/badges', authMiddleware, (req, res) => {
  if (!req.user.isAdmin && req.user.username !== 'vey') {
    return res.status(403).json({ error: 'admin only' });
  }

  const { targetUsername, badge, action } = req.body;
  if (!targetUsername || !badge || !action) return res.status(400).json({ error: 'missing info' });

  const target = db.users[targetUsername.toLowerCase().trim()];
  if (!target) return res.status(404).json({ error: 'user not found' });

  if (action === 'add') {
    if (!target.badges.includes(badge)) target.badges.push(badge);
  } else if (action === 'remove') {
    target.badges = target.badges.filter(b => b !== badge);
  }

  saveDB(db);
  res.json({ success: true, targetUser: target.username, badges: target.badges });
});

// Forums
app.get('/api/forum/posts', (req, res) => {
  res.json(db.forumPosts || []);
});

app.post('/api/forum/posts', authMiddleware, (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'need title and content' });

  const authorObj = db.users[req.user.username];
  const newPost = {
    id: Date.now().toString(),
    author: req.user.username,
    authorBadges: authorObj ? authorObj.badges : [],
    title,
    content,
    category: category || 'General',
    createdAt: new Date().toISOString()
  };

  db.forumPosts.unshift(newPost);
  saveDB(db);
  res.json(newPost);
});

// WebSockets Chat
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    try {
      const parsed = JSON.parse(message);
      if (parsed.type === 'chat_message') {
        const userObj = db.users[parsed.username];
        const msgObj = {
          id: Date.now().toString(),
          username: parsed.username,
          badges: userObj ? userObj.badges : [],
          text: parsed.text,
          timestamp: new Date().toLocaleTimeString()
        };

        db.chatMessages.push(msgObj);
        if (db.chatMessages.length > 100) db.chatMessages.shift();
        saveDB(db);

        wss.clients.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'new_message', data: msgObj }));
          }
        });
      }
    } catch (e) {
      console.error(e);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(PORT, () => console.log(`running on port ${PORT}`));
