let currentUser = localStorage.getItem('musical_username') || null;
let authToken = localStorage.getItem('musical_token') || null;
let currentProfile = 'vey';
let ws = null;

let scene, camera, renderer, particleSystem;
let isAudioPlaying = false;

document.addEventListener("DOMContentLoaded", () => {
  init3DCanvas();
  setupClickToEnter();
  setupTiltEffect();
  updateAuthUI();
  setupWebSocket();

  lookupUser('vey');
});

function init3DCanvas() {
  const canvas = document.getElementById('bg-3d-canvas');
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 100;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const particleCount = 700;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 300;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0xff0055,
    size: 1.8,
    transparent: true,
    opacity: 0.7
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  function animate() {
    requestAnimationFrame(animate);
    if (particleSystem) particleSystem.rotation.y += 0.001;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

function update3DThemeColor(colorHex) {
  if (particleSystem) particleSystem.material.color.set(colorHex);
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function handleSearchKey(e) { if (e.key === 'Enter') performSearch(); }

function performSearch() {
  const query = document.getElementById('search-username').value.trim();
  if (query) lookupUser(query);
}

async function lookupUser(username) {
  try {
    const res = await fetch(`/api/users/${username}`);
    const data = await res.json();

    if (data.error) return alert(data.error);

    currentProfile = data.username;
    document.getElementById('view-avatar').src = data.avatar || 'https://i.imgur.com/6VBx3io.png';
    document.getElementById('view-username').innerText = data.username;
    document.getElementById('view-bio').innerText = data.bio || '';
    document.getElementById('view-count').innerText = data.views || 0;

    const badgeBox = document.getElementById('view-badges');
    badgeBox.innerHTML = '';
    (data.badges || []).forEach(b => {
      const span = document.createElement('span');
      span.className = 'badge';
      span.innerText = b;
      badgeBox.appendChild(span);
    });

    const socialBox = document.getElementById('view-socials');
    socialBox.innerHTML = '';
    if (data.socials) {
      Object.entries(data.socials).forEach(([platform, handle]) => {
        if (handle) {
          const a = document.createElement('a');
          a.className = 'social-link';
          a.href = '#';
          a.innerText = `${platform}: ${handle}`;
          socialBox.appendChild(a);
        }
      });
    }

    if (data.customization) {
      const color = data.customization.themeColor || '#ff0055';
      document.documentElement.style.setProperty('--primary-color', color);
      update3DThemeColor(color);

      const audioPlayer = document.getElementById('global-audio');
      if (data.customization.audioUrl) {
        audioPlayer.src = data.customization.audioUrl;
        document.getElementById('audio-toggle-btn').style.display = 'inline-block';
      } else {
        document.getElementById('audio-toggle-btn').style.display = 'none';
      }
    }

    showSection('profile-view');
  } catch (e) {
    console.error(e);
  }
}

function setupClickToEnter() {
  const overlay = document.getElementById('click-to-enter-overlay');
  overlay.addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.classList.add('hidden'), 800);

    const audioPlayer = document.getElementById('global-audio');
    if (audioPlayer.src) {
      audioPlayer.play().catch(() => {});
      isAudioPlaying = true;
      document.getElementById('audio-toggle-btn').innerText = 'pause music';
    }
  });
}

function toggleAudio() {
  const audioPlayer = document.getElementById('global-audio');
  const btn = document.getElementById('audio-toggle-btn');
  if (isAudioPlaying) {
    audioPlayer.pause();
    isAudioPlaying = false;
    btn.innerText = 'play music';
  } else {
    audioPlayer.play().catch(() => {});
    isAudioPlaying = true;
    btn.innerText = 'pause music';
  }
}

function setupTiltEffect() {
  const card = document.getElementById('bio-card');
  window.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 35;
    const y = (window.innerHeight / 2 - e.pageY) / 35;
    if (card) card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
}

function openAuthModal() { document.getElementById('auth-modal').classList.remove('hidden'); }
function closeAuthModal() { document.getElementById('auth-modal').classList.add('hidden'); }

async function handleAuth(type) {
  const username = document.getElementById('auth-username').value;
  const password = document.getElementById('auth-password').value;

  const endpoint = type === 'login' ? '/api/auth/login' : '/api/auth/register';
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (data.error) return alert(data.error);

  authToken = data.token;
  currentUser = data.username;
  localStorage.setItem('musical_token', authToken);
  localStorage.setItem('musical_username', currentUser);

  updateAuthUI();
  closeAuthModal();
  lookupUser(currentUser);
}

function updateAuthUI() {
  if (currentUser) {
    document.getElementById('auth-modal-btn').innerText = `logout (${currentUser})`;
    document.getElementById('auth-modal-btn').onclick = logout;
    document.getElementById('editor-nav-btn').classList.remove('hidden');

    if (currentUser === 'vey') {
      document.getElementById('admin-nav-btn').classList.remove('hidden');
    }
  } else {
    document.getElementById('auth-modal-btn').innerText = 'login / register';
    document.getElementById('auth-modal-btn').onclick = openAuthModal;
    document.getElementById('editor-nav-btn').classList.add('hidden');
    document.getElementById('admin-nav-btn').classList.add('hidden');
  }
}

function logout() {
  localStorage.removeItem('musical_token');
  localStorage.removeItem('musical_username');
  authToken = null;
  currentUser = null;
  updateAuthUI();
  lookupUser('vey');
}

async function saveProfile() {
  if (!authToken) return alert('login first');

  const avatar = document.getElementById('edit-avatar').value;
  const bio = document.getElementById('edit-bio').value;
  const audioUrl = document.getElementById('edit-audio').value;
  const themeColor = document.getElementById('edit-color').value;

  const socials = {
    discord: document.getElementById('edit-social-discord').value,
    telegram: document.getElementById('edit-social-telegram').value,
    soundcloud: document.getElementById('edit-social-soundcloud').value
  };

  const res = await fetch('/api/users/customize', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({ avatar, bio, socials, customization: { audioUrl, themeColor } })
  });

  const data = await res.json();
  if (data.success) {
    alert('saved!');
    lookupUser(currentUser);
  } else {
    alert(data.error);
  }
}

async function loadForumPosts() {
  const res = await fetch('/api/forum/posts');
  const posts = await res.json();

  const container = document.getElementById('forum-posts');
  container.innerHTML = '';

  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'forum-card';
    card.innerHTML = `
      <h3>${post.title} <span class="badge">${post.category}</span></h3>
      <div class="forum-meta">posted by <strong>${post.author}</strong> on ${new Date(post.createdAt).toLocaleDateString()}</div>
      <p>${post.content}</p>
    `;
    container.appendChild(card);
  });
}

function toggleThreadModal(show) {
  if (show) document.getElementById('thread-modal').classList.remove('hidden');
  else document.getElementById('thread-modal').classList.add('hidden');
}

async function submitThread() {
  if (!authToken) return alert('login first');

  const title = document.getElementById('thread-title').value;
  const category = document.getElementById('thread-category').value;
  const content = document.getElementById('thread-content').value;

  const res = await fetch('/api/forum/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({ title, category, content })
  });

  const data = await res.json();
  if (data.id) {
    toggleThreadModal(false);
    loadForumPosts();
  }
}

function setupWebSocket() {
  const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  ws = new WebSocket(`${protocol}://${location.host}`);

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.type === 'new_message') {
      const chatBox = document.getElementById('chat-box');
      const div = document.createElement('div');
      div.className = 'chat-msg';
      const badgeStr = msg.data.badges.map(b => `[${b}]`).join(' ');
      div.innerHTML = `<span style="color:var(--primary-color)">${badgeStr} ${msg.data.username}:</span> ${msg.data.text}`;
      chatBox.appendChild(div);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  };
}

function handleChatKey(e) { if (e.key === 'Enter') sendChatMessage(); }

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  if (!input.value || !currentUser) return alert('login first');

  ws.send(JSON.stringify({
    type: 'chat_message',
    username: currentUser,
    text: input.value
  }));

  input.value = '';
}

async function manageBadge(action) {
  const targetUsername = document.getElementById('admin-target').value;
  const badge = document.getElementById('admin-badge').value;

  const res = await fetch('/api/admin/badges', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({ targetUsername, badge, action })
  });

  const data = await res.json();
  if (data.success) alert(`badge updated`);
  else alert(data.error);
}
