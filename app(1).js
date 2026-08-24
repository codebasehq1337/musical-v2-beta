const APP = {
  defaultUsers: [
    { id: 'u1', username: 'alex', password: 'alex', name: 'alex chen', bio: 'shoegaze till i die', pronouns: 'they/them', location: 'seattle', occupation: 'student', genres: ['shoegaze', 'dream pop', 'post-rock'], theme: 'blue', connections: { spotify: true, lastfm: true, discord: false }, playlists: [{name:'late night drives',emoji:'🌙',tracks:42},{name:'shoegaze essentials',emoji:'🎸',tracks:68}], recentTracks: [{title:'alison',artist:'slowdive',time:'2 min ago'},{title:'when you sleep',artist:'my bloody valentine',time:'8 min ago'},{title:'machine gun',artist:'slowdive',time:'15 min ago'}], stats: {tracks:1247,artists:42,hours:128,obscurity:94}, status: 'online', nowPlaying: 'slowdive — sugar for the pill', views: 342, uniqueVisitors: [], badges: ['beta'], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#4a7fc9', links: [{platform:'spotify',url:'https://open.spotify.com/user/alex'},{platform:'lastfm',url:'https://last.fm/user/alexchen'}], created: Date.now() - 86400000 * 30, customCSS: '', backgroundVideo: '', musicURL: '', particles: 'none', layout: 'default', glowEffect: false, typingEffect: false, customDivider: 'default', hearts: 12, lastSeen: Date.now(), urlSlug: 'alex' },
    { id: 'u2', username: 'maya', password: 'maya', name: 'maya okafor', bio: 'techno and ambient only', pronouns: 'she/her', location: 'berlin', occupation: 'dj', genres: ['techno', 'ambient', 'idm'], theme: 'purple', connections: { spotify: true, lastfm: false, discord: true }, playlists: [{name:'warehouse',emoji:'🏭',tracks:55},{name:'focus',emoji:'🧠',tracks:30}], recentTracks: [{title:'alberto balsalm',artist:'aphex twin',time:'5 min ago'},{title:'spastik',artist:'plastikman',time:'12 min ago'}], stats: {tracks:892,artists:28,hours:96,obscurity:88}, status: 'offline', nowPlaying: 'aphex twin — alberto balsalm', views: 189, uniqueVisitors: [], badges: [], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#7c6bdb', links: [{platform:'spotify',url:'https://open.spotify.com/user/maya'},{platform:'discord',url:'https://discord.com/users/maya'}], created: Date.now() - 86400000 * 20, customCSS: '', backgroundVideo: '', musicURL: '', particles: 'none', layout: 'default', glowEffect: false, typingEffect: false, customDivider: 'default', hearts: 8, lastSeen: Date.now() - 3600000, urlSlug: 'maya' },
    { id: 'u3', username: 'jordan', password: 'jordan', name: 'jordan smith', bio: 'indie rock kid', pronouns: 'he/him', location: 'portland', occupation: 'barista', genres: ['indie rock', 'shoegaze', 'jangle pop'], theme: 'teal', connections: { spotify: false, lastfm: true, discord: false }, playlists: [{name:'summer 2024',emoji:'☀️',tracks:40}], recentTracks: [{title:'under the sun',artist:'diiv',time:'1 min ago'},{title:'loomer',artist:'my bloody valentine',time:'10 min ago'}], stats: {tracks:2100,artists:67,hours:156,obscurity:72}, status: 'online', nowPlaying: 'diiv — under the sun', views: 567, uniqueVisitors: [], badges: ['verified'], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#2db4a3', links: [{platform:'lastfm',url:'https://last.fm/user/jordansmith'}], created: Date.now() - 86400000 * 15, customCSS: '', backgroundVideo: '', musicURL: '', particles: 'none', layout: 'default', glowEffect: false, typingEffect: false, customDivider: 'default', hearts: 23, lastSeen: Date.now(), urlSlug: 'jordan' },
    { id: 'u4', username: 'riley', password: 'riley', name: 'riley park', bio: 'hip hop head', pronouns: 'they/them', location: 'chicago', occupation: 'producer', genres: ['hip hop', 'jazz rap', 'lo-fi'], theme: 'amber', connections: { spotify: true, lastfm: true, discord: true }, playlists: [{name:'beats to study to',emoji:'📖',tracks:120}], recentTracks: [{title:'rapp snitch knishes',artist:'mf doom',time:'3 min ago'}], stats: {tracks:3400,artists:89,hours:210,obscurity:61}, status: 'online', nowPlaying: 'mf doom — rapp snitch knishes', views: 891, uniqueVisitors: [], badges: ['verified','premium'], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#d49a3a', links: [{platform:'spotify',url:'https://open.spotify.com/user/riley'},{platform:'lastfm',url:'https://last.fm/user/rileypark'},{platform:'discord',url:'https://discord.com/users/riley'}], created: Date.now() - 86400000 * 45, customCSS: '', backgroundVideo: '', musicURL: '', particles: 'none', layout: 'default', glowEffect: false, typingEffect: false, customDivider: 'default', hearts: 45, lastSeen: Date.now(), urlSlug: 'riley' },
    { id: 'u5', username: 'sam', password: 'sam', name: 'sam torres', bio: 'heavy music only', pronouns: 'he/him', location: 'austin', occupation: 'engineer', genres: ['metalcore', 'post-hardcore', 'math rock'], theme: 'rose', connections: { spotify: false, lastfm: true, discord: false }, playlists: [{name:'mosh pit',emoji:'🤘',tracks:45}], recentTracks: [{title:'concubine',artist:'converge',time:'20 min ago'}], stats: {tracks:1560,artists:34,hours:98,obscurity:82}, status: 'offline', nowPlaying: 'converge — concubine', views: 123, uniqueVisitors: [], badges: [], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#e05a7a', links: [{platform:'lastfm',url:'https://last.fm/user/samtorres'}], created: Date.now() - 86400000 * 5, customCSS: '', backgroundVideo: '', musicURL: '', particles: 'none', layout: 'default', glowEffect: false, typingEffect: false, customDivider: 'default', hearts: 3, lastSeen: Date.now() - 7200000, urlSlug: 'sam' },
    { id: 'u6', username: 'casey', password: 'casey', name: 'casey kim', bio: 'synthwave forever', pronouns: 'she/her', location: 'tokyo', occupation: 'designer', genres: ['synthwave', 'retrowave', 'darkwave'], theme: 'blue', connections: { spotify: true, lastfm: false, discord: true }, playlists: [{name:'nightcall',emoji:'🌃',tracks:38}], recentTracks: [{title:'sunset',artist:'the midnight',time:'7 min ago'}], stats: {tracks:780,artists:22,hours:64,obscurity:75}, status: 'online', nowPlaying: 'the midnight — sunset', views: 445, uniqueVisitors: [], badges: ['beta'], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#4a7fc9', links: [{platform:'spotify',url:'https://open.spotify.com/user/casey'},{platform:'discord',url:'https://discord.com/users/casey'}], created: Date.now() - 86400000 * 25, customCSS: '', backgroundVideo: '', musicURL: '', particles: 'none', layout: 'default', glowEffect: false, typingEffect: false, customDivider: 'default', hearts: 18, lastSeen: Date.now(), urlSlug: 'casey' },
    { id: 'u7', username: 'taylor', password: 'taylor', name: 'taylor reed', bio: 'folk and feelings', pronouns: 'they/them', location: 'nashville', occupation: 'writer', genres: ['folk', 'indie folk', 'singer-songwriter'], theme: 'purple', connections: { spotify: true, lastfm: true, discord: false }, playlists: [{name:'campfire',emoji:'🔥',tracks:52}], recentTracks: [{title:'white winter hymnal',artist:'fleet foxes',time:'30 min ago'}], stats: {tracks:920,artists:41,hours:74,obscurity:68}, status: 'offline', nowPlaying: 'fleet foxes — white winter hymnal', views: 234, uniqueVisitors: [], badges: [], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#7c6bdb', links: [{platform:'spotify',url:'https://open.spotify.com/user/taylor'},{platform:'lastfm',url:'https://last.fm/user/taylorreed'}], created: Date.now() - 86400000 * 12, customCSS: '', backgroundVideo: '', musicURL: '', particles: 'none', layout: 'default', glowEffect: false, typingEffect: false, customDivider: 'default', hearts: 7, lastSeen: Date.now() - 1800000, urlSlug: 'taylor' },
    { id: 'u8', username: 'drew', password: 'drew', name: 'drew nakamura', bio: 'have a nice life or have no life', pronouns: 'he/him', location: 'osaka', occupation: 'photographer', genres: ['shoegaze', 'noise rock', 'slowcore'], theme: 'blue', connections: { spotify: false, lastfm: true, discord: true }, playlists: [{name:'depression hours',emoji:'🖤',tracks:90}], recentTracks: [{title:'bloodhail',artist:'have a nice life',time:'4 min ago'}], stats: {tracks:4500,artists:56,hours:312,obscurity:97}, status: 'online', nowPlaying: 'have a nice life — bloodhail', views: 1203, uniqueVisitors: [], badges: ['verified','beta','premium'], banner: '', avatar: '', font: 'Inter', cursor: 'default', accent: '#4a7fc9', links: [{platform:'lastfm',url:'https://last.fm/user/drewnakamura'},{platform:'discord',url:'https://discord.com/users/drew'}], created: Date.now() - 86400000 * 60, customCSS: '', backgroundVideo: '', musicURL: '', particles: 'none', layout: 'default', glowEffect: false, typingEffect: false, customDivider: 'default', hearts: 67, lastSeen: Date.now(), urlSlug: 'drew' },
    { id: 'u9', username: 'vey', password: 'vey', name: 'vey', bio: 'site admin. building musical.', pronouns: 'they/them', location: 'the internet', occupation: 'admin', genres: ['everything'], theme: 'blue', connections: { spotify: true, lastfm: true, discord: true }, playlists: [{name:'admin vibes',emoji:'⚡',tracks:999}], recentTracks: [{title:'admin panel',artist:'the system',time:'now'}], stats: {tracks:9999,artists:999,hours:999,obscurity:100}, status: 'online', nowPlaying: 'the system — admin panel', views: 9999, uniqueVisitors: [], badges: ['admin','verified','beta','premium','owner'], banner: '', avatar: '', font: 'JetBrains Mono', cursor: 'crosshair', accent: '#4a7fc9', links: [{platform:'github',url:'https://github.com/codebasehq1337'},{platform:'discord',url:'https://discord.com/users/vey'}], created: Date.now(), isAdmin: true, customCSS: '', backgroundVideo: '', musicURL: '', particles: 'none', layout: 'default', glowEffect: true, typingEffect: true, customDivider: 'wave', hearts: 420, lastSeen: Date.now(), urlSlug: 'vey' },
  ],

  badgeDefs: {
    admin:     { label: 'ADMIN',      color: '#ef4444', icon: '👑', desc: 'Site administrator' },
    owner:     { label: 'OWNER',      color: '#f59e0b', icon: '🔥', desc: 'Site owner' },
    verified:  { label: 'VERIFIED',   color: '#22c55e', icon: '✓',  desc: 'Verified user' },
    premium:   { label: 'PREMIUM',    color: '#a855f7', icon: '💎', desc: 'Premium member' },
    beta:      { label: 'BETA',       color: '#3b82f6', icon: '⚡', desc: 'Beta tester' },
    og:        { label: 'OG',         color: '#ec4899', icon: '🌟', desc: 'Original gangster' },
    artist:    { label: 'ARTIST',     color: '#f97316', icon: '🎵', desc: 'Verified artist' },
    dev:       { label: 'DEV',        color: '#06b6d4', icon: '💻', desc: 'Developer' },
    mod:       { label: 'MOD',        color: '#8b5cf6', icon: '🛡️', desc: 'Moderator' },
    supporter: { label: 'SUPPORTER',  color: '#eab308', icon: '⭐', desc: 'Supporter' },
    of:        { label: 'OF',         color: '#00aff0', icon: '🔞', desc: 'Content creator' },
  },

  platforms: {
    spotify:    { icon: 'fab fa-spotify',     color: '#1db954', label: 'Spotify' },
    lastfm:     { icon: 'fab fa-lastfm',      color: '#d51007', label: 'Last.fm' },
    discord:    { icon: 'fab fa-discord',     color: '#5865f2', label: 'Discord' },
    twitter:    { icon: 'fab fa-twitter',     color: '#1da1f2', label: 'Twitter' },
    github:     { icon: 'fab fa-github',      color: '#ffffff', label: 'GitHub' },
    instagram:  { icon: 'fab fa-instagram',   color: '#e4405f', label: 'Instagram' },
    youtube:    { icon: 'fab fa-youtube',     color: '#ff0000', label: 'YouTube' },
    twitch:     { icon: 'fab fa-twitch',      color: '#9146ff', label: 'Twitch' },
    tiktok:     { icon: 'fab fa-tiktok',      color: '#ffffff', label: 'TikTok' },
    steam:      { icon: 'fab fa-steam',       color: '#1b2838', label: 'Steam' },
    reddit:     { icon: 'fab fa-reddit',      color: '#ff4500', label: 'Reddit' },
    telegram:   { icon: 'fab fa-telegram',    color: '#0088cc', label: 'Telegram' },
    soundcloud: { icon: 'fab fa-soundcloud',  color: '#ff5500', label: 'SoundCloud' },
    bandcamp:   { icon: 'fab fa-bandcamp',    color: '#1da0c3', label: 'Bandcamp' },
    paypal:     { icon: 'fab fa-paypal',      color: '#003087', label: 'PayPal' },
    cashapp:    { icon: 'fas fa-dollar-sign', color: '#00d632', label: 'Cash App' },
    venmo:      { icon: 'fab fa-vimeo-v',     color: '#008cff', label: 'Venmo' },
    'ko-fi':    { icon: 'fas fa-coffee',      color: '#ff5e5b', label: 'Ko-fi' },
    linktree:   { icon: 'fas fa-tree',        color: '#43e660', label: 'Linktree' },
    website:    { icon: 'fas fa-globe',       color: '#ffffff', label: 'Website' },
    email:      { icon: 'fas fa-envelope',    color: '#ea4335', label: 'Email' },
    onlyfans:   { icon: 'fas fa-lock',        color: '#00aff0', label: 'OnlyFans' },
    snapchat:   { icon: 'fab fa-snapchat',    color: '#fffc00', label: 'Snapchat' },
    pinterest:  { icon: 'fab fa-pinterest',   color: '#e60023', label: 'Pinterest' },
    linkedin:   { icon: 'fab fa-linkedin',    color: '#0077b5', label: 'LinkedIn' },
    patreon:    { icon: 'fab fa-patreon',     color: '#ff424d', label: 'Patreon' },
    kick:       { icon: 'fas fa-bolt',        color: '#53fc18', label: 'Kick' },
    rumble:     { icon: 'fas fa-play',        color: '#85c742', label: 'Rumble' },
    substack:   { icon: 'fas fa-newspaper',   color: '#ff6719', label: 'Substack' },
    mastodon:   { icon: 'fab fa-mastodon',    color: '#6364ff', label: 'Mastodon' },
    threads:    { icon: 'fab fa-threads',     color: '#ffffff', label: 'Threads' },
    bluesky:    { icon: 'fas fa-cloud',       color: '#0085ff', label: 'Bluesky' },
  },

  themes: {
    blue:     { name: 'Blue',     bg: '#0a0e1a', accent: '#4a7fc9', gradient: 'linear-gradient(135deg, #4a7fc9, #2d5a9e)' },
    purple:   { name: 'Purple',   bg: '#0a0a1a', accent: '#7c6bdb', gradient: 'linear-gradient(135deg, #7c6bdb, #5a3db8)' },
    teal:     { name: 'Teal',     bg: '#0a1a18', accent: '#2db4a3', gradient: 'linear-gradient(135deg, #2db4a3, #1a7a6e)' },
    rose:     { name: 'Rose',     bg: '#1a0a10', accent: '#e05a7a', gradient: 'linear-gradient(135deg, #e05a7a, #b03a5a)' },
    amber:    { name: 'Amber',    bg: '#1a140a', accent: '#d49a3a', gradient: 'linear-gradient(135deg, #d49a3a, #a07020)' },
    green:    { name: 'Green',    bg: '#0a1a0a', accent: '#4ade80', gradient: 'linear-gradient(135deg, #4ade80, #22c55e)' },
    red:      { name: 'Red',      bg: '#1a0a0a', accent: '#f87171', gradient: 'linear-gradient(135deg, #f87171, #dc2626)' },
    pink:     { name: 'Pink',     bg: '#1a0a14', accent: '#f472b6', gradient: 'linear-gradient(135deg, #f472b6, #db2777)' },
    orange:   { name: 'Orange',   bg: '#1a100a', accent: '#fb923c', gradient: 'linear-gradient(135deg, #fb923c, #ea580c)' },
    gray:     { name: 'Gray',     bg: '#0f0f0f', accent: '#9ca3af', gradient: 'linear-gradient(135deg, #9ca3af, #6b7280)' },
    midnight: { name: 'Midnight', bg: '#050510', accent: '#6366f1', gradient: 'linear-gradient(135deg, #6366f1, #4338ca)' },
    forest:   { name: 'Forest',   bg: '#0a1a0e', accent: '#22c55e', gradient: 'linear-gradient(135deg, #22c55e, #15803d)' },
    ocean:    { name: 'Ocean',    bg: '#0a141a', accent: '#0ea5e9', gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)' },
    sunset:   { name: 'Sunset',   bg: '#1a0a0a', accent: '#f43f5e', gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)' },
    cyber:    { name: 'Cyber',    bg: '#0a0a0a', accent: '#00ff88', gradient: 'linear-gradient(135deg, #00ff88, #00cc6a)' },
  },

  fonts: [
    { name: 'Inter', family: "'Inter', sans-serif" },
    { name: 'JetBrains Mono', family: "'JetBrains Mono', monospace" },
    { name: 'Space Grotesk', family: "'Space Grotesk', sans-serif" },
    { name: 'Playfair Display', family: "'Playfair Display', serif" },
    { name: 'Bebas Neue', family: "'Bebas Neue', sans-serif" },
    { name: 'Creepster', family: "'Creepster', cursive" },
    { name: 'Poppins', family: "'Poppins', sans-serif" },
    { name: 'Fira Code', family: "'Fira Code', monospace" },
    { name: 'Outfit', family: "'Outfit', sans-serif" },
    { name: 'DM Sans', family: "'DM Sans', sans-serif" },
    { name: 'Syne', family: "'Syne', sans-serif" },
    { name: 'Space Mono', family: "'Space Mono', monospace" },
  ],

  cursors: ['default','crosshair','pointer','help','text','wait','move','not-allowed','zoom-in','grab','cell','alias','none','context-menu','copy'],
  particles: ['none','snow','rain','stars','fireflies','matrix','bubbles','hearts'],
  layouts: ['default','centered','minimal','wide','card','split'],
  dividers: ['default','wave','zigzag','dashed','dots','gradient','none'],

  sanitize(str) { if (!str) return ''; const div = document.createElement('div'); div.textContent = str; return div.innerHTML; },
  escapeAttr(str) { if (!str) return ''; return str.replace(/["&<>]/g, c => ({'"':'&quot;','&':'&amp;','<':'&lt;','>':'&gt;'}[c])); },
  timeAgo(ts) { const s = Math.floor((Date.now() - ts) / 1000); if (s < 60) return 'just now'; if (s < 3600) return Math.floor(s/60) + 'm ago'; if (s < 86400) return Math.floor(s/3600) + 'h ago'; return Math.floor(s/86400) + 'd ago'; },
  formatDate(ts) { return new Date(ts).toLocaleString(); },

  getAccounts() {
    let accounts = JSON.parse(localStorage.getItem('musical_accounts') || 'null');
    if (!accounts) {
      accounts = JSON.parse(JSON.stringify(this.defaultUsers));
      localStorage.setItem('musical_accounts', JSON.stringify(accounts));
    }
    accounts.forEach(u => {
      if (!u.views) u.views = Math.floor(Math.random() * 500);
      if (!u.badges) u.badges = [];
      if (!u.links) u.links = [];
      if (!u.font) u.font = 'Inter';
      if (!u.cursor) u.cursor = 'default';
      if (!u.accent) u.accent = this.themes[u.theme || 'blue']?.accent || '#4a7fc9';
      if (!u.created) u.created = Date.now() - Math.floor(Math.random() * 86400000 * 30);
      if (u.username === 'vey' && !u.isAdmin) u.isAdmin = true;
      if (!u.uniqueVisitors) u.uniqueVisitors = [];
      if (!u.hearts && u.hearts !== 0) u.hearts = Math.floor(Math.random() * 50);
      if (!u.lastSeen) u.lastSeen = Date.now();
      if (!u.urlSlug) u.urlSlug = u.username;
      if (!u.pronouns) u.pronouns = '';
      if (!u.location) u.location = '';
      if (!u.occupation) u.occupation = '';
      if (u.customCSS === undefined) u.customCSS = '';
      if (u.backgroundVideo === undefined) u.backgroundVideo = '';
      if (u.musicURL === undefined) u.musicURL = '';
      if (!u.particles) u.particles = 'none';
      if (!u.layout) u.layout = 'default';
      if (u.glowEffect === undefined) u.glowEffect = false;
      if (u.typingEffect === undefined) u.typingEffect = false;
      if (!u.customDivider) u.customDivider = 'default';
      if (!u.usernameEffect) u.usernameEffect = 'none';
      if (!u.bioLinks) u.bioLinks = [];
      if (!u.discordStatus) u.discordStatus = 'online';
      if (!u.welcomeTitle) u.welcomeTitle = '';
      if (!u.welcomeMsg) u.welcomeMsg = '';
      if (!u.welcomeEmoji) u.welcomeEmoji = '👋';
      if (!u.welcomeColor) u.welcomeColor = '';
      if (!u.profileWelcome) u.profileWelcome = { enabled: false, title: '', message: '', bgType: 'solid', bgColor: '#000000', bgColor2: '#1a1a2e', bgImage: '', blur: 0, textColor: '#ffffff', fontSize: '32px', textAlign: 'center' };
      if (!u.profileEffect) u.profileEffect = 'none';
      if (!u.borderStyle) u.borderStyle = 'none';
    });
    return accounts;
  },
  saveAccounts(a) { localStorage.setItem('musical_accounts', JSON.stringify(a)); },
  getSession() { return JSON.parse(localStorage.getItem('musical_session') || 'null'); },
  setSession(s) { localStorage.setItem('musical_session', JSON.stringify(s)); },
  clearSession() { localStorage.removeItem('musical_session'); },
  getRequests() { return JSON.parse(localStorage.getItem('musical_requests') || '[]'); },
  saveRequests(r) { localStorage.setItem('musical_requests', JSON.stringify(r)); },
  getFriends() { return JSON.parse(localStorage.getItem('musical_friends') || '[]'); },
  saveFriends(f) { localStorage.setItem('musical_friends', JSON.stringify(f)); },
  getChatMessages() { return JSON.parse(localStorage.getItem('musical_chat') || '[]'); },
  saveChatMessages(m) { localStorage.setItem('musical_chat', JSON.stringify(m)); },

  getForums() {
    let forums = JSON.parse(localStorage.getItem('musical_forums') || 'null');
    if (!forums) {
      forums = [
        { id: 'f1', title: 'welcome to musical', author: 'vey', authorId: 'u9', category: 'general', replies: 3, views: 156, created: Date.now() - 86400000 * 5, pinned: true },
        { id: 'f2', title: 'what are you listening to right now?', author: 'alex', authorId: 'u1', category: 'music', replies: 12, views: 89, created: Date.now() - 86400000 * 2, pinned: false },
        { id: 'f3', title: 'best shoegaze albums of 2024', author: 'jordan', authorId: 'u3', category: 'music', replies: 8, views: 234, created: Date.now() - 86400000 * 1, pinned: false },
        { id: 'f4', title: 'bug reports and feedback', author: 'maya', authorId: 'u2', category: 'meta', replies: 5, views: 67, created: Date.now() - 86400000 * 3, pinned: true },
      ];
      localStorage.setItem('musical_forums', JSON.stringify(forums));
    }
    return forums;
  },
  saveForums(f) { localStorage.setItem('musical_forums', JSON.stringify(f)); },

  getForumPosts(threadId) {
    const key = 'musical_forum_posts_' + threadId;
    let posts = JSON.parse(localStorage.getItem(key) || 'null');
    if (!posts) {
      if (threadId === 'f1') posts = [
        { id: 'p1', author: 'vey', authorId: 'u9', content: 'welcome everyone! this is the official musical forum. introduce yourself here.', created: Date.now() - 86400000 * 5 },
        { id: 'p2', author: 'alex', authorId: 'u1', content: 'hey! alex here. big shoegaze fan. excited to be here.', created: Date.now() - 86400000 * 4 },
        { id: 'p3', author: 'riley', authorId: 'u4', content: 'riley from chicago. producer and hip hop head. lets connect.', created: Date.now() - 86400000 * 3 },
      ];
      else if (threadId === 'f2') posts = [
        { id: 'p1', author: 'alex', authorId: 'u1', content: 'currently spinning slowdive — souvlaki. absolute masterpiece.', created: Date.now() - 86400000 * 2 },
      ];
      else if (threadId === 'f3') posts = [
        { id: 'p1', author: 'jordan', authorId: 'u3', content: 'my picks: 1. nothing — the great dismal 2. whirr — around 3. slowdive — everything is alive', created: Date.now() - 86400000 * 1 },
      ];
      else if (threadId === 'f4') posts = [
        { id: 'p1', author: 'maya', authorId: 'u2', content: 'if you find any bugs, report them here. thanks!', created: Date.now() - 86400000 * 3 },
      ];
      else posts = [];
      localStorage.setItem(key, JSON.stringify(posts));
    }
    return posts;
  },
  saveForumPosts(threadId, posts) { localStorage.setItem('musical_forum_posts_' + threadId, JSON.stringify(posts)); },

  getProfileComments(profileId) { return JSON.parse(localStorage.getItem('musical_comments_' + profileId) || '[]'); },
  saveProfileComments(profileId, c) { localStorage.setItem('musical_comments_' + profileId, JSON.stringify(c)); },
  getProfileLikes(profileId) { return JSON.parse(localStorage.getItem('musical_likes_' + profileId) || '[]'); },
  saveProfileLikes(profileId, l) { localStorage.setItem('musical_likes_' + profileId, JSON.stringify(l)); },
  getMessages() { return JSON.parse(localStorage.getItem('musical_messages') || '[]'); },
  saveMessages(m) { localStorage.setItem('musical_messages', JSON.stringify(m)); },

  getUser(id) {
    const accounts = this.getAccounts();
    return accounts.find(u => u.id === id) || accounts.find(u => u.username === id);
  },
  getMe() {
    const s = this.getSession();
    return s ? this.getUser(s.userId) : null;
  },
  updateMe(data) {
    const s = this.getSession();
    if (!s) return;
    const accounts = this.getAccounts();
    const idx = accounts.findIndex(u => u.id === s.userId);
    if (idx !== -1) {
      accounts[idx] = { ...accounts[idx], ...data };
      this.saveAccounts(accounts);
    }
  },
  updateUser(userId, data) {
    const accounts = this.getAccounts();
    const idx = accounts.findIndex(u => u.id === userId);
    if (idx !== -1) {
      accounts[idx] = { ...accounts[idx], ...data };
      this.saveAccounts(accounts);
      return true;
    }
    return false;
  },

  isLogin: true,

  initAuthPage() {
    const form = document.getElementById('auth-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('auth-user').value.trim().toLowerCase();
      const pass = document.getElementById('auth-pass').value;
      const confirm = document.getElementById('auth-confirm')?.value;

      if (!user || !pass) { this.toast('fill in both fields'); return; }
      if (user.length < 2) { this.toast('username too short (min 2 chars)'); return; }
      if (pass.length < 2) { this.toast('password too short (min 2 chars)'); return; }

      if (this.isLogin) {
        const accounts = this.getAccounts();
        const found = accounts.find(a => a.username === user && a.password === pass);
        if (!found) { this.toast('wrong name or password'); return; }
        this.setSession({ userId: found.id, username: found.username });
        this.updateUser(found.id, { lastSeen: Date.now(), status: 'online' });
        window.location.href = 'discover.html';
      } else {
        if (pass !== confirm) { this.toast('passwords do not match'); return; }
        const accounts = this.getAccounts();
        if (accounts.find(a => a.username === user)) { this.toast('name taken'); return; }
        const themeKeys = Object.keys(this.themes);
        const randomTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
        const newUser = {
          id: 'u' + Date.now(),
          username: user,
          password: pass,
          name: user,
          bio: 'new here. still building my sound.',
          pronouns: '',
          location: '',
          occupation: '',
          genres: ['indie', 'rock', 'electronic'],
          theme: randomTheme,
          connections: { spotify: false, lastfm: false, discord: false },
          playlists: [{ name: 'my favorites', emoji: '⭐', tracks: 0 },{ name: 'recent finds', emoji: '🔍', tracks: 0 }],
          recentTracks: [{ title: 'welcome to musical', artist: 'the app', time: 'just now' }],
          stats: { tracks: 0, artists: 0, hours: 0, obscurity: 50 },
          status: 'online',
          nowPlaying: 'nothing yet',
          views: 0,
          uniqueVisitors: [],
          badges: [],
          banner: '',
          avatar: '',
          font: 'Inter',
          cursor: 'default',
          accent: this.themes[randomTheme].accent,
          links: [],
          created: Date.now(),
          customCSS: '',
          backgroundVideo: '',
          musicURL: '',
          particles: 'none',
          layout: 'default',
          glowEffect: false,
          typingEffect: false,
          customDivider: 'default',
          hearts: 0,
          lastSeen: Date.now(),
          urlSlug: user,
        };
        accounts.push(newUser);
        this.saveAccounts(accounts);
        this.setSession({ userId: newUser.id, username: newUser.username });
        this.toast('account created');
        window.location.href = 'discover.html';
      }
    });
  },

  toggleAuth() {
    this.isLogin = !this.isLogin;
    const title = document.getElementById('auth-title');
    const sub = document.getElementById('auth-sub');
    const btn = document.getElementById('auth-btn');
    const toggleText = document.getElementById('auth-toggle-text');
    const toggleBtn = document.getElementById('auth-toggle');
    const confirmGroup = document.getElementById('confirm-group');
    if (title) title.textContent = this.isLogin ? 'log in' : 'sign up';
    if (sub) sub.textContent = this.isLogin ? 'no email. just a name and password.' : 'pick a name and password. that is it.';
    if (btn) btn.textContent = this.isLogin ? 'log in' : 'create account';
    if (toggleText) toggleText.textContent = this.isLogin ? 'no account?' : 'have an account?';
    if (toggleBtn) toggleBtn.textContent = this.isLogin ? 'sign up' : 'log in';
    if (confirmGroup) confirmGroup.style.display = this.isLogin ? 'none' : 'block';
  },

  logout() {
    const s = this.getSession();
    if (s) this.updateUser(s.userId, { status: 'offline', lastSeen: Date.now() });
    this.clearSession();
    window.location.href = 'index.html';
  },

  requireAuth() {
    if (!this.getSession()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },

  renderNav() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    const session = this.getSession();
    const me = this.getMe();
    let links = session
      ? '<a href="discover.html">discover</a><a href="chat.html">chat</a><a href="forums.html">forums</a><a href="profile.html">profile</a><a href="settings.html">settings</a>' + (me?.isAdmin ? '<a href="admin.html">admin</a>' : '')
      : '<a href="login.html">log in</a>';
    nav.innerHTML = '<a href="index.html" class="nav-logo">musical</a><div class="nav-links">' + links +
      (session ? '<a href="profile.html" class="nav-user"><div class="nav-avatar" style="' + (me?.avatar ? 'background-image:url(\'' + this.escapeAttr(me.avatar) + '\');background-size:cover;background-position:center;color:transparent;' : '') + '">' + (me?.avatar ? '' : (me ? me.name.charAt(0).toUpperCase() : '?')) + '</div></a>' : '') +
      '</div>';
    const path = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
    });
  },

  initDiscover() {
    this.renderDiscover();
    document.querySelectorAll('.filter').forEach(f => {
      f.addEventListener('click', () => {
        document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
        f.classList.add('active');
        this.renderDiscover(f.dataset.filter);
      });
    });
  },

  renderDiscover(filter) {
    filter = filter || 'all';
    const list = document.getElementById('discover-list');
    if (!list) return;
    list.innerHTML = '';
    const accounts = this.getAccounts();
    const session = this.getSession();
    const friends = this.getFriends();
    const requests = this.getRequests();
    const me = this.getMe();

    accounts.forEach(user => {
      if (session && user.id === session.userId) return;
      const isFriend = friends.some(f => (f.a === session?.userId && f.b === user.id) || (f.b === session?.userId && f.a === user.id));
      const isPending = requests.some(r => r.from === session?.userId && r.to === user.id && r.status === 'pending');
      const isIncoming = requests.some(r => r.from === user.id && r.to === session?.userId && r.status === 'pending');
      const comp = me ? this.calcCompatibility(me, user) : Math.floor(Math.random() * 40 + 50);

      if (filter !== 'all' && !user.genres.some(g => g.toLowerCase().includes(filter.toLowerCase()))) return;

      const row = document.createElement('div');
      row.className = 'user-row';
      row.innerHTML = '<a href="profile.html?id=' + user.id + '" class="user-avatar" style="' + (user.avatar ? 'background-image:url(\'' + this.escapeAttr(user.avatar) + '\');background-size:cover;background-position:center;color:transparent;' : '') + '">' + (user.avatar ? '' : this.sanitize(user.name.charAt(0).toUpperCase())) + '</a>' +
        '<div class="user-info"><h3><a href="profile.html?id=' + user.id + '">' + this.sanitize(user.name) + '</a>' + this.renderBadgesInline(user.badges) + '</h3>' +
        '<p>@' + this.sanitize(user.username) + ' &middot; ' + this.sanitize(user.genres.slice(0,2).join(', ')) + ' &middot; ' + (user.views || 0) + ' views &middot; ' + (user.hearts || 0) + ' hearts</p></div>' +
        '<div class="user-meta"><span class="compatibility">' + comp + '%</span><span class="now-playing">🎧 ' + this.sanitize(user.nowPlaying || 'nothing') + '</span>' +
        (isFriend ? '<span class="muted" style="font-size:12px;">friends</span>' :
          isPending ? '<button class="btn btn-ghost btn-sm" disabled>sent</button>' :
          isIncoming ? '<button class="btn btn-primary btn-sm" onclick="APP.acceptRequest(\'' + user.id + '\')">accept</button>' :
          '<button class="btn btn-primary btn-sm" onclick="APP.sendRequest(\'' + user.id + '\')">add</button>') +
        '</div>';
      list.appendChild(row);
    });
  },

  calcCompatibility(a, b) {
    const shared = a.genres.filter(g => b.genres.includes(g));
    return Math.min(99, Math.floor(50 + shared.length * 15 + Math.random() * 10));
  },

  sendRequest(toId) {
    const session = this.getSession();
    if (!session) return;
    const requests = this.getRequests();
    if (requests.find(r => r.from === session.userId && r.to === toId && r.status === 'pending')) { this.toast('already sent'); return; }
    requests.push({ from: session.userId, to: toId, status: 'pending', time: Date.now() });
    this.saveRequests(requests);
    this.toast('request sent');
    this.renderDiscover();
  },

  acceptRequest(fromId) {
    const session = this.getSession();
    if (!session) return;
    const requests = this.getRequests();
    const req = requests.find(r => r.from === fromId && r.to === session.userId && r.status === 'pending');
    if (!req) return;
    req.status = 'accepted';
    this.saveRequests(requests);
    const friends = this.getFriends();
    friends.push({ a: session.userId, b: fromId, since: Date.now() });
    this.saveFriends(friends);
    this.toast('friend added');
    this.renderDiscover();
  },

  renderBadgesInline(badges) {
    if (!badges || badges.length === 0) return '';
    return ' ' + badges.map(b => {
      const def = this.badgeDefs[b];
      if (!def) return '';
      return '<span class="badge-inline" style="background:' + def.color + '22;color:' + def.color + ';border:1px solid ' + def.color + '44;" title="' + this.escapeAttr(def.desc) + '">' + def.icon + ' ' + def.label + '</span>';
    }).join('');
  },

  renderBadgesBlock(badges) {
    if (!badges || badges.length === 0) return '';
    return '<div class="badges-row">' + badges.map(b => {
      const def = this.badgeDefs[b];
      if (!def) return '';
      return '<span class="badge-block" style="background:' + def.color + '22;color:' + def.color + ';border:1px solid ' + def.color + '44;" title="' + this.escapeAttr(def.desc) + '">' + def.icon + ' ' + def.label + '</span>';
    }).join('') + '</div>';
  },

  renderProfilePage() {
    const params = new URLSearchParams(window.location.search);
    const viewId = params.get('id');
    const session = this.getSession();
    const me = this.getMe();
    const user = viewId ? this.getUser(viewId) : me;
    if (!user) { window.location.href = 'index.html'; return; }
    const isSelf = session && user.id === session.userId;

    if (!isSelf) {
      const accounts = this.getAccounts();
      const idx = accounts.findIndex(u => u.id === user.id);
      if (idx !== -1) {
        accounts[idx].views = (accounts[idx].views || 0) + 1;
        if (session && !accounts[idx].uniqueVisitors.includes(session.userId)) {
          accounts[idx].uniqueVisitors.push(session.userId);
        }
        APP.recordProfileView(user.id);
        this.saveAccounts(accounts);
      }
    }

    this.applyUserTheme(user);

    let customStyle = document.getElementById('profile-custom-css');
    if (!customStyle) {
      customStyle = document.createElement('style');
      customStyle.id = 'profile-custom-css';
      document.head.appendChild(customStyle);
    }
    customStyle.textContent = user.customCSS || '';

    const bgVideo = document.getElementById('profile-bg-video');
    if (bgVideo) {
      if (user.backgroundVideo && user.backgroundVideo.trim()) {
        bgVideo.innerHTML = '<video autoplay muted loop playsinline style="position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-2;opacity:0.3;"><source src="' + this.escapeAttr(user.backgroundVideo) + '"></video>';
      } else {
        bgVideo.innerHTML = '';
      }
    }

    this.renderParticles(user.particles);

    const bannerEl = document.getElementById('p-banner');
    if (bannerEl) {
      if (user.banner && user.banner.trim()) {
        bannerEl.innerHTML = '<img src="' + this.escapeAttr(user.banner) + '" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.style.display=\'none\';this.parentElement.style.background=\'' + (this.themes[user.theme]?.gradient || this.themes.blue.gradient) + '\'">';
        bannerEl.style.background = 'none';
      } else {
        bannerEl.innerHTML = '';
        bannerEl.style.background = this.themes[user.theme]?.gradient || this.themes.blue.gradient;
      }
    }

    const avatarEl = document.getElementById('p-avatar');
    if (avatarEl) {
      if (user.avatar && user.avatar.trim()) {
        avatarEl.innerHTML = '<img src="' + this.escapeAttr(user.avatar) + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;" onerror="this.style.display=\'none\';this.parentElement.textContent=\'' + this.sanitize(user.name.charAt(0).toUpperCase()) + '\'">';
      } else {
        avatarEl.textContent = user.name.charAt(0).toUpperCase();
      }
    }

    const statusEl = document.getElementById('p-status');
    if (statusEl) {
      const statusColors = { online: '#22c55e', idle: '#f59e0b', dnd: '#ef4444', offline: '#6b7280' };
      statusEl.style.background = statusColors[user.status] || statusColors.offline;
      statusEl.title = user.status || 'offline';
    }

    const nameEl = document.getElementById('p-name');
    if (nameEl) { nameEl.innerHTML = '<span style="' + (this.usernameEffects[user.usernameEffect]?.css || '') + '">' + this.sanitize(user.name) + '</span>' + this.renderBadgesInline(user.badges) + this.renderDiscordStatus(user); }

    const handleEl = document.getElementById('p-handle');
    if (handleEl) handleEl.textContent = '@' + user.username;

    const bioEl = document.getElementById('p-bio');
    if (bioEl) {
      if (user.typingEffect && user.bio) {
        bioEl.innerHTML = '<span class="typing-text" data-text="' + this.escapeAttr(user.bio) + '"></span><span class="typing-cursor">|</span>';
        this.initTypingEffect(bioEl.querySelector('.typing-text'));
      } else {
        bioEl.textContent = user.bio || 'no bio yet.';
      }
    }

    const metaEl = document.getElementById('p-meta');
    if (metaEl) {
      const parts = [];
      if (user.pronouns) parts.push(this.sanitize(user.pronouns));
      if (user.location) parts.push('📍 ' + this.sanitize(user.location));
      if (user.occupation) parts.push('💼 ' + this.sanitize(user.occupation));
      parts.push('👁️ ' + (user.views || 0).toLocaleString() + ' views');
      parts.push('❤️ ' + (user.hearts || 0) + ' hearts');
      parts.push('🕐 ' + this.timeAgo(user.lastSeen || Date.now()));
      metaEl.innerHTML = parts.map(p => '<span class="meta-tag">' + p + '</span>').join('');
    }

    const connEl = document.getElementById('p-connections');
    if (connEl) {
      connEl.innerHTML = '';
      if (user.connections?.spotify) connEl.innerHTML += '<span class="connection-badge spotify"><i class="fab fa-spotify"></i> spotify</span>';
      if (user.connections?.lastfm) connEl.innerHTML += '<span class="connection-badge lastfm"><i class="fab fa-lastfm"></i> last.fm</span>';
      if (user.connections?.discord) connEl.innerHTML += '<span class="connection-badge discord"><i class="fab fa-discord"></i> discord</span>';
      if (user.links && user.links.length > 0) {
        user.links.forEach(link => {
          const plat = this.platforms[link.platform];
          if (plat && link.url) {
            connEl.innerHTML += '<a href="' + this.escapeAttr(link.url) + '" target="_blank" rel="noopener" class="connection-badge" style="color:' + plat.color + ';border-color:' + plat.color + '44;"><i class="' + plat.icon + '"></i> ' + plat.label + '</a>';
          }
        });
      }
    }

    const bioLinksEl = document.getElementById('p-biolinks');
    if (bioLinksEl) bioLinksEl.innerHTML = APP.renderBioLinks(user);

    const actions = document.getElementById('p-actions');
    if (actions) {
      let html = '';
      if (isSelf) {
        html = '<a href="settings.html" class="btn btn-secondary btn-sm">edit profile</a>';
      } else {
        if (session) {
          const friends = this.getFriends();
          const isFriend = friends.some(f => (f.a === session.userId && f.b === user.id) || (f.b === session.userId && f.a === user.id));
          const isPending = this.getRequests().some(r => r.from === session.userId && r.to === user.id && r.status === 'pending');
          if (isFriend) html += '<span class="muted" style="font-size:13px;">you are friends</span>';
          else if (isPending) html += '<button class="btn btn-ghost btn-sm" disabled>request sent</button>';
          else html += '<button class="btn btn-primary btn-sm" onclick="APP.sendRequest(\'' + user.id + '\');setTimeout(()=>location.reload(),500)">add friend</button>';
          html += ' <button class="btn btn-secondary btn-sm" onclick="APP.heartProfile(\'' + user.id + '\')">❤️ ' + (user.hearts || 0) + '</button>';
          html += ' <button class="btn btn-secondary btn-sm" onclick="APP.copyProfileLink(\'' + user.id + '\')">🔗 copy link</button>';
        } else {
          html = '<a href="login.html" class="btn btn-secondary btn-sm">log in to interact</a>';
        }
      }
      actions.innerHTML = html;
    }

    const tracksEl = document.getElementById('p-tracks');
    if (tracksEl) {
      tracksEl.innerHTML = (user.recentTracks || []).map(t => '<div class="track"><div class="track-art">♪</div><div class="track-info"><h4>' + this.sanitize(t.title) + '</h4><p>' + this.sanitize(t.artist) + '</p></div><span class="track-time">' + this.sanitize(t.time) + '</span></div>').join('');
    }

    const stats = user.stats || {tracks:0,artists:0,hours:0,obscurity:50};
    const statsEl = document.getElementById('p-stats');
    if (statsEl) {
      statsEl.innerHTML = '<div class="stat"><div class="stat-num">' + stats.tracks.toLocaleString() + '</div><div class="stat-label">tracks</div></div>' +
        '<div class="stat"><div class="stat-num">' + stats.artists.toLocaleString() + '</div><div class="stat-label">artists</div></div>' +
        '<div class="stat"><div class="stat-num">' + stats.hours + 'h</div><div class="stat-label">this month</div></div>' +
        '<div class="stat"><div class="stat-num">' + stats.obscurity + '%</div><div class="stat-label">obscurity</div></div>' +
        '<div class="stat"><div class="stat-num">' + (user.views || 0).toLocaleString() + '</div><div class="stat-label">profile views</div></div>' +
        '<div class="stat"><div class="stat-num">' + (user.uniqueVisitors || []).length + '</div><div class="stat-label">unique visitors</div></div>' +
        '<div class="stat"><div class="stat-num">' + Math.floor((Date.now() - (user.created || Date.now())) / 86400000) + 'd</div><div class="stat-label">member</div></div>' +
        '<div class="stat"><div class="stat-num">' + (user.hearts || 0) + '</div><div class="stat-label">hearts</div></div>';
    }

    const genresEl = document.getElementById('p-genres');
    if (genresEl) {
      genresEl.innerHTML = (user.genres || []).map(g => '<span class="tag">' + this.sanitize(g) + '</span>').join('');
    }

    const playlistsEl = document.getElementById('p-playlists');
    if (playlistsEl) {
      playlistsEl.innerHTML = (user.playlists || []).map(p => '<div class="playlist"><span class="playlist-emoji">' + p.emoji + '</span><span class="playlist-name">' + this.sanitize(p.name) + '</span><span class="playlist-count">' + p.tracks + ' tracks</span></div>').join('');
    }

    const allFriends = this.getFriends();
    const accounts = this.getAccounts();
    const userFriends = allFriends
      .filter(f => f.a === user.id || f.b === user.id)
      .map(f => { const fid = f.a === user.id ? f.b : f.a; return accounts.find(a => a.id === fid); })
      .filter(Boolean);

    const friendsList = document.getElementById('p-friends');
    if (friendsList) {
      if (userFriends.length === 0) {
        friendsList.innerHTML = '<p class="muted" style="font-size:13px;">no friends yet</p>';
      } else {
        friendsList.innerHTML = userFriends.map(f => '<div class="friend"><a href="profile.html?id=' + f.id + '" class="friend-avatar" style="' + (f.avatar ? 'background-image:url(\'' + this.escapeAttr(f.avatar) + '\');background-size:cover;background-position:center;color:transparent;' : '') + '">' + (f.avatar ? '' : this.sanitize(f.name.charAt(0).toUpperCase())) + '</a><div><a href="profile.html?id=' + f.id + '" class="friend-name">' + this.sanitize(f.name) + '</a><div class="friend-status">' + (f.status === 'online' ? '🟢 online' : '⚫ offline') + ' — ' + this.sanitize(f.nowPlaying || 'nothing') + '</div></div></div>').join('');
      }
    }

    const musicEl = document.getElementById('p-music');
    if (musicEl) {
      if (user.musicURL && user.musicURL.trim()) {
        musicEl.innerHTML = '<audio controls loop style="width:100%;margin-top:12px;"><source src="' + this.escapeAttr(user.musicURL) + '"></audio>';
      } else {
        musicEl.innerHTML = '';
      }
    }

    const dividerEl = document.getElementById('p-divider');
    if (dividerEl) {
      dividerEl.innerHTML = this.renderDivider(user.customDivider, user.accent);
    }

    this.renderProfileComments(user.id, isSelf);
    this.renderProfileStats(user);
    this.renderProfileWelcome(user);
    this.applyProfileEffect(user.profileEffect);
    this.applyBorderStyle(user.borderStyle, user.accent);
    const spotifyEl = document.getElementById('p-spotify');
    if (spotifyEl) spotifyEl.innerHTML = this.renderSpotifyNowPlaying(user);
  },

  renderDivider(style, color) {
    if (style === 'none') return '';
    if (style === 'wave') return '<svg viewBox="0 0 1200 120" preserveAspectRatio="none" style="width:100%;height:40px;display:block;margin:20px 0;"><path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" fill="' + color + '22"></path></svg>';
    if (style === 'zigzag') return '<div style="width:100%;height:12px;background:repeating-linear-gradient(45deg,' + color + '22,' + color + '22 10px,transparent 10px,transparent 20px);margin:20px 0;"></div>';
    if (style === 'dashed') return '<div style="width:100%;height:2px;border-top:2px dashed ' + color + '44;margin:20px 0;"></div>';
    if (style === 'dots') return '<div style="width:100%;height:8px;background:radial-gradient(circle,' + color + '66 2px,transparent 2px);background-size:12px 12px;margin:20px 0;"></div>';
    if (style === 'gradient') return '<div style="width:100%;height:3px;background:linear-gradient(90deg,transparent,' + color + ',transparent);margin:20px 0;"></div>';
    return '<div style="width:100%;height:1px;background:var(--border);margin:20px 0;"></div>';
  },

  renderProfileComments(profileId, isSelf) {
    const container = document.getElementById('p-comments');
    if (!container) return;
    const comments = this.getProfileComments(profileId);
    const session = this.getSession();
    const accounts = this.getAccounts();

    let html = '<h2>## guestbook</h2>';
    if (session && !isSelf) {
      html += '<div style="margin-bottom:20px;"><textarea id="comment-input" placeholder="leave a message..." style="width:100%;min-height:60px;padding:10px;background:var(--bg-raised);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);font-family:var(--font);resize:vertical;"></textarea>' +
        '<button class="btn btn-primary btn-sm" style="margin-top:8px;" onclick="APP.postComment(\'' + profileId + '\')">post comment</button></div>';
    }
    if (comments.length === 0) {
      html += '<p class="muted" style="font-size:13px;">no comments yet. be the first!</p>';
    } else {
      html += '<div class="comments-list">' + comments.slice().reverse().map(c => {
        const author = accounts.find(a => a.id === c.authorId);
        return '<div class="comment"><div class="comment-header"><a href="profile.html?id=' + c.authorId + '" class="comment-author">' + this.sanitize(author ? author.name : 'unknown') + '</a>' + this.renderBadgesInline(author ? author.badges : []) + '<span class="comment-time">' + this.timeAgo(c.created) + '</span></div><div class="comment-body">' + this.sanitize(c.content) + '</div></div>';
      }).join('') + '</div>';
    }
    container.innerHTML = html;
  },

  postComment(profileId) {
    const input = document.getElementById('comment-input');
    if (!input) return;
    const content = input.value.trim();
    if (!content) { this.toast('write something first'); return; }
    const session = this.getSession();
    if (!session) return;
    const comments = this.getProfileComments(profileId);
    comments.push({ id: 'c' + Date.now(), authorId: session.userId, content, created: Date.now() });
    this.saveProfileComments(profileId, comments);
    this.toast('comment posted');
    this.renderProfileComments(profileId, false);
  },

  heartProfile(profileId) {
    const session = this.getSession();
    if (!session) return;
    const likes = this.getProfileLikes(profileId);
    if (likes.includes(session.userId)) { this.toast('already hearted'); return; }
    likes.push(session.userId);
    this.saveProfileLikes(profileId, likes);
    const user = this.getUser(profileId);
    if (user) {
      this.updateUser(profileId, { hearts: (user.hearts || 0) + 1 });
    }
    this.toast('hearted!');
    location.reload();
  },

  copyProfileLink(profileId) {
    const url = window.location.origin + '/profile.html?id=' + profileId;
    navigator.clipboard.writeText(url).then(() => this.toast('link copied!'));
  },

  initTypingEffect(el) {
    if (!el) return;
    const text = el.dataset.text || '';
    el.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
      }
    };
    type();
  },

  renderParticles(type) {
    let container = document.getElementById('particles-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'particles-container';
      container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden;';
      document.body.insertBefore(container, document.body.firstChild);
    }
    container.innerHTML = '';
    if (type === 'none') return;

    const count = type === 'matrix' ? 50 : 30;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.style.position = 'absolute';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.opacity = Math.random() * 0.5 + 0.1;
      p.style.pointerEvents = 'none';

      if (type === 'snow') {
        p.style.width = p.style.height = Math.random() * 4 + 2 + 'px';
        p.style.background = '#fff';
        p.style.borderRadius = '50%';
        p.style.animation = 'fall ' + (Math.random() * 5 + 5) + 's linear infinite';
        p.style.animationDelay = Math.random() * 5 + 's';
      } else if (type === 'rain') {
        p.style.width = '1px';
        p.style.height = Math.random() * 15 + 10 + 'px';
        p.style.background = 'rgba(100,150,255,0.4)';
        p.style.animation = 'fall ' + (Math.random() * 0.5 + 0.5) + 's linear infinite';
        p.style.animationDelay = Math.random() * 2 + 's';
      } else if (type === 'stars') {
        p.style.width = p.style.height = Math.random() * 3 + 1 + 'px';
        p.style.background = '#fff';
        p.style.borderRadius = '50%';
        p.style.animation = 'pulse ' + (Math.random() * 3 + 2) + 's ease-in-out infinite';
        p.style.animationDelay = Math.random() * 3 + 's';
      } else if (type === 'fireflies') {
        p.style.width = p.style.height = Math.random() * 6 + 3 + 'px';
        p.style.background = '#fbbf24';
        p.style.borderRadius = '50%';
        p.style.boxShadow = '0 0 10px #fbbf24';
        p.style.animation = 'float ' + (Math.random() * 6 + 4) + 's ease-in-out infinite';
        p.style.animationDelay = Math.random() * 4 + 's';
      } else if (type === 'matrix') {
        p.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
        p.style.color = '#0f0';
        p.style.fontFamily = 'monospace';
        p.style.fontSize = Math.random() * 10 + 10 + 'px';
        p.style.animation = 'fall ' + (Math.random() * 3 + 2) + 's linear infinite';
        p.style.animationDelay = Math.random() * 3 + 's';
      } else if (type === 'bubbles') {
        p.style.width = p.style.height = Math.random() * 20 + 5 + 'px';
        p.style.border = '1px solid rgba(255,255,255,0.2)';
        p.style.borderRadius = '50%';
        p.style.animation = 'rise ' + (Math.random() * 8 + 4) + 's ease-in infinite';
        p.style.animationDelay = Math.random() * 5 + 's';
      } else if (type === 'hearts') {
        p.textContent = '❤';
        p.style.color = '#e05a7a';
        p.style.fontSize = Math.random() * 14 + 10 + 'px';
        p.style.animation = 'rise ' + (Math.random() * 6 + 3) + 's ease-in infinite';
        p.style.animationDelay = Math.random() * 4 + 's';
      }
      container.appendChild(p);
    }

    let style = document.getElementById('particles-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'particles-style';
      document.head.appendChild(style);
    }
    style.textContent = `
      @keyframes fall { from { transform: translateY(-10vh); } to { transform: translateY(110vh); } }
      @keyframes rise { from { transform: translateY(110vh); opacity:0; } to { transform: translateY(-10vh); opacity:0.6; } }
      @keyframes pulse { 0%,100% { opacity:0.2; } 50% { opacity:0.8; } }
      @keyframes float { 0%,100% { transform: translate(0,0); } 25% { transform: translate(20px,-30px); } 50% { transform: translate(-10px,-50px); } 75% { transform: translate(15px,-20px); } }
    `;
  },

  applyUserTheme(user) {
    if (!user) return;
    const theme = this.themes[user.theme] || this.themes.blue;
    const accent = user.accent || theme.accent;
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--accent-hover', accent);
    document.documentElement.style.setProperty('--bg', theme.bg);
    const fontObj = this.fonts.find(f => f.name === user.font);
    if (fontObj) document.body.style.fontFamily = fontObj.family;
    if (user.cursor && user.cursor !== 'default') document.body.style.cursor = user.cursor;
    else document.body.style.cursor = 'auto';

    const glowStyle = document.getElementById('glow-style');
    if (user.glowEffect) {
      if (!glowStyle) {
        const s = document.createElement('style');
        s.id = 'glow-style';
        document.head.appendChild(s);
      }
      document.getElementById('glow-style').textContent = '.profile-avatar-large, .profile-banner, .badge-block { box-shadow: 0 0 20px ' + accent + '44; }';
    } else if (glowStyle) {
      glowStyle.textContent = '';
    }
  },


  saveProfileWelcome() {
    const pw = {
      enabled: document.getElementById('settings-pw-enabled')?.checked || false,
      title: document.getElementById('settings-pw-title')?.value.trim() || '',
      message: document.getElementById('settings-pw-message')?.value.trim() || '',
      bgType: document.getElementById('settings-pw-bgType')?.value || 'solid',
      bgColor: document.getElementById('settings-pw-bgColor')?.value.trim() || '#000000',
      bgColor2: document.getElementById('settings-pw-bgColor2')?.value.trim() || '#1a1a2e',
      bgImage: document.getElementById('settings-pw-bgImage')?.value.trim() || '',
      blur: parseInt(document.getElementById('settings-pw-blur')?.value || '0'),
      textColor: document.getElementById('settings-pw-textColor')?.value.trim() || '#ffffff',
      fontSize: document.getElementById('settings-pw-fontSize')?.value.trim() || '32px',
      textAlign: document.getElementById('settings-pw-textAlign')?.value || 'center',
    };
    this.updateMe({ profileWelcome: pw });
    this.toast('welcome screen saved');
  },

  renderProfileWelcomeSettings() {
    const me = this.getMe();
    if (!me || !me.profileWelcome) return;
    const pw = me.profileWelcome;
    const fields = ['title','message','bgType','bgColor','bgColor2','bgImage','blur','textColor','fontSize','textAlign'];
    fields.forEach(f => {
      const el = document.getElementById('settings-pw-' + f);
      if (el) el.value = pw[f] !== undefined ? pw[f] : '';
    });
    const enabledEl = document.getElementById('settings-pw-enabled');
    if (enabledEl) enabledEl.checked = !!pw.enabled;
  },
  renderSettings() {
    const me = this.getMe();
    if (!me) return;

    ['welcomeTitle','welcomeMsg','welcomeEmoji','welcomeColor','discordStatus'].forEach(f => {
      const el = document.getElementById('settings-' + f);
      if (el) el.value = me[f] || '';
    });

    ['spotify','lastfm','discord'].forEach(p => {
      const btn = document.getElementById('connect-'+p);
      if (!btn) return;
      const connected = me.connections?.[p];
      btn.textContent = connected ? 'disconnect' : 'connect';
      btn.className = connected ? 'btn btn-ghost btn-sm' : 'btn btn-secondary btn-sm';
      btn.onclick = () => {
        const conns = { ...me.connections, [p]: !connected };
        this.updateMe({ connections: conns });
        this.toast(p + ' ' + (!connected ? 'connected' : 'disconnected'));
        this.renderSettings();
      };
    });

    const fields = ['name','bio','avatar','banner','pronouns','location','occupation','urlSlug','backgroundVideo','musicURL','customCSS'];
    fields.forEach(f => {
      const el = document.getElementById('settings-' + f);
      if (el) el.value = me[f] || '';
    });

    const statusSelect = document.getElementById('settings-status');
    if (statusSelect) statusSelect.value = me.status || 'online';

    const themeContainer = document.getElementById('theme-picker');
    if (themeContainer) {
      themeContainer.innerHTML = Object.entries(this.themes).map(([key, t]) => '<button class="theme-btn ' + (me.theme === key ? 'active' : '') + '" data-theme="' + key + '" style="background: ' + t.accent + ';" title="' + t.name + '" onclick="APP.setTheme(\'' + key + '\')"></button>').join('');
    }

    const accentContainer = document.getElementById('accent-picker');
    if (accentContainer) {
      const colors = ['#4a7fc9','#7c6bdb','#2db4a3','#e05a7a','#d49a3a','#4ade80','#f87171','#f472b6','#fb923c','#9ca3af','#ec4899','#06b6d4','#eab308','#ffffff','#000000','#ff0000','#00ff00','#0000ff'];
      accentContainer.innerHTML = colors.map(c => '<button class="accent-btn ' + (me.accent === c ? 'active' : '') + '" style="background:' + c + ';" onclick="APP.setAccent(\'' + c + '\')"></button>').join('');
    }

    const fontContainer = document.getElementById('font-picker');
    if (fontContainer) {
      fontContainer.innerHTML = this.fonts.map(f => '<button class="font-btn ' + (me.font === f.name ? 'active' : '') + '" onclick="APP.setFont(\'' + f.name + '\')" style="font-family:' + f.family + ';">' + f.name + '</button>').join('');
    }

    const cursorContainer = document.getElementById('cursor-picker');
    if (cursorContainer) {
      cursorContainer.innerHTML = this.cursors.map(c => '<button class="cursor-btn ' + (me.cursor === c ? 'active' : '') + '" onclick="APP.setCursor(\'' + c + '\')" style="cursor:' + c + ';">' + c + '</button>').join('');
    }

    const particleContainer = document.getElementById('particle-picker');
    if (particleContainer) {
      particleContainer.innerHTML = this.particles.map(p => '<button class="cursor-btn ' + (me.particles === p ? 'active' : '') + '" onclick="APP.setParticles(\'' + p + '\')">' + p + '</button>').join('');
    }

    const layoutContainer = document.getElementById('layout-picker');
    if (layoutContainer) {
      layoutContainer.innerHTML = this.layouts.map(l => '<button class="cursor-btn ' + (me.layout === l ? 'active' : '') + '" onclick="APP.setLayout(\'' + l + '\')">' + l + '</button>').join('');
    }

    const dividerContainer = document.getElementById('divider-picker');
    if (dividerContainer) {
      dividerContainer.innerHTML = this.dividers.map(d => '<button class="cursor-btn ' + (me.customDivider === d ? 'active' : '') + '" onclick="APP.setDivider(\'' + d + '\')">' + d + '</button>').join('');
    }

    const glowCheck = document.getElementById('settings-glow');
    if (glowCheck) glowCheck.checked = !!me.glowEffect;

    const typingCheck = document.getElementById('settings-typing');
    if (typingCheck) typingCheck.checked = !!me.typingEffect;

    this.renderLinksEditor();

    if (me.isAdmin) {
      const badgeContainer = document.getElementById('badge-editor');
      if (badgeContainer) {
        badgeContainer.innerHTML = Object.entries(this.badgeDefs).map(([key, def]) => '<label class="badge-checkbox"><input type="checkbox" value="' + key + '" ' + (me.badges?.includes(key) ? 'checked' : '') + ' onchange="APP.toggleBadge(\'' + key + '\')"><span style="color:' + def.color + ';border-color:' + def.color + '44;">' + def.icon + ' ' + def.label + '</span></label>').join('');
      }
    }

    this.applyUserTheme(me);
  },

  renderLinksEditor() {
    const me = this.getMe();
    const container = document.getElementById('links-editor');
    if (!container || !me) return;
    container.innerHTML = (me.links || []).map((link, i) => '<div class="link-row"><select onchange="APP.updateLink(' + i + ', \'platform\', this.value)">' + Object.entries(this.platforms).map(([k,p]) => '<option value="' + k + '" ' + (link.platform === k ? 'selected' : '') + '>' + p.label + '</option>').join('') + '</select><input type="text" value="' + this.escapeAttr(link.url || '') + '" placeholder="https://..." onchange="APP.updateLink(' + i + ', \'url\', this.value)"><button class="btn btn-ghost btn-sm" onclick="APP.removeLink(' + i + ')"><i class="fas fa-trash"></i></button></div>').join('');
  },

  addLink() {
    const me = this.getMe();
    if (!me) return;
    const links = [...(me.links || []), { platform: 'website', url: '' }];
    this.updateMe({ links });
    this.renderLinksEditor();
  },

  updateLink(index, field, value) {
    const me = this.getMe();
    if (!me) return;
    const links = [...(me.links || [])];
    links[index] = { ...links[index], [field]: value };
    this.updateMe({ links });
  },

  removeLink(index) {
    const me = this.getMe();
    if (!me) return;
    const links = [...(me.links || [])];
    links.splice(index, 1);
    this.updateMe({ links });
    this.renderLinksEditor();
  },

  setTheme(theme) { this.updateMe({ theme }); this.applyUserTheme(this.getMe()); this.renderSettings(); this.toast('theme saved'); },
  setAccent(color) { this.updateMe({ accent: color }); this.applyUserTheme(this.getMe()); this.renderSettings(); this.toast('accent saved'); },
  setFont(fontName) { this.updateMe({ font: fontName }); this.applyUserTheme(this.getMe()); this.renderSettings(); this.toast('font saved'); },
  setCursor(cursor) { this.updateMe({ cursor }); document.body.style.cursor = cursor === 'default' ? 'auto' : cursor; this.renderSettings(); this.toast('cursor saved'); },
  setParticles(p) { this.updateMe({ particles: p }); this.renderSettings(); this.toast('particles saved'); },
  setLayout(l) { this.updateMe({ layout: l }); this.renderSettings(); this.toast('layout saved'); },
  setDivider(d) { this.updateMe({ customDivider: d }); this.renderSettings(); this.toast('divider saved'); },

  toggleBadge(badge) {
    const me = this.getMe();
    if (!me || !me.isAdmin) return;
    const badges = [...(me.badges || [])];
    const idx = badges.indexOf(badge);
    if (idx > -1) badges.splice(idx, 1);
    else badges.push(badge);
    this.updateMe({ badges });
    this.renderSettings();
    this.toast('badge ' + (idx > -1 ? 'removed' : 'added'));
  },

  saveSettings() {
    const fields = {};
    ['name','bio','avatar','banner','pronouns','location','occupation','urlSlug','backgroundVideo','musicURL','customCSS','welcomeTitle','welcomeMsg','welcomeEmoji','welcomeColor'].forEach(f => {
      const el = document.getElementById('settings-' + f);
      if (el) fields[f] = el.value.trim();
    });
    const statusEl = document.getElementById('settings-status');
    if (statusEl) fields.status = statusEl.value;
    const glowEl = document.getElementById('settings-glow');
    if (glowEl) fields.glowEffect = glowEl.checked;
    const typingEl = document.getElementById('settings-typing');
    if (typingEl) fields.typingEffect = typingEl.checked;
    const discordStatusEl = document.getElementById('settings-discordStatus');
    if (discordStatusEl) fields.discordStatus = discordStatusEl.value;
    this.updateMe(fields);
    this.toast('profile saved');
  },

  renderAdmin() {
    const me = this.getMe();
    if (!me || !me.isAdmin) { window.location.href = 'index.html'; return; }

    const accounts = this.getAccounts();
    const totalUsers = accounts.length;
    const totalViews = accounts.reduce((sum, u) => sum + (u.views || 0), 0);
    const onlineUsers = accounts.filter(u => u.status === 'online').length;
    const totalHearts = accounts.reduce((sum, u) => sum + (u.hearts || 0), 0);

    const statsEl = document.getElementById('admin-stats');
    if (statsEl) {
      statsEl.innerHTML = '<div class="admin-stat"><div class="admin-stat-num">' + totalUsers + '</div><div class="admin-stat-label">total users</div></div>' +
        '<div class="admin-stat"><div class="admin-stat-num">' + totalViews.toLocaleString() + '</div><div class="admin-stat-label">total views</div></div>' +
        '<div class="admin-stat"><div class="admin-stat-num">' + onlineUsers + '</div><div class="admin-stat-label">online now</div></div>' +
        '<div class="admin-stat"><div class="admin-stat-num">' + totalHearts + '</div><div class="admin-stat-label">total hearts</div></div>';
    }

    const userList = document.getElementById('admin-users');
    if (userList) {
      userList.innerHTML = accounts.map(u => '<div class="admin-user-row"><div class="admin-user-info"><strong>' + this.sanitize(u.name) + '</strong><span class="muted">@' + this.sanitize(u.username) + '</span>' + this.renderBadgesInline(u.badges) + '</div>' +
        '<div class="admin-user-meta"><span>' + (u.views || 0) + ' views</span><span class="status-dot ' + u.status + '"></span>' +
        '<button class="btn btn-secondary btn-sm" onclick="APP.adminEditUser(\'' + u.id + '\')">edit</button>' +
        '<button class="btn btn-danger btn-sm" onclick="APP.adminDeleteUser(\'' + u.id + '\')">delete</button></div></div>').join('');
    }
  },

  adminEditUser(userId) {
    const user = this.getUser(userId);
    if (!user) return;
    const modal = document.getElementById('admin-modal');
    const content = document.getElementById('admin-modal-content');
    if (!modal || !content) return;

    content.innerHTML = '<h3>edit @' + this.sanitize(user.username) + '</h3>' +
      '<div class="form-group"><label>display name</label><input type="text" id="admin-name" value="' + this.escapeAttr(user.name) + '"></div>' +
      '<div class="form-group"><label>bio</label><input type="text" id="admin-bio" value="' + this.escapeAttr(user.bio) + '"></div>' +
      '<div class="form-group"><label>badges</label><div class="badge-editor">' + Object.entries(this.badgeDefs).map(([key, def]) => '<label class="badge-checkbox"><input type="checkbox" value="' + key + '" ' + (user.badges?.includes(key) ? 'checked' : '') + ' onchange="APP.adminToggleBadge(\'' + userId + '\', \'' + key + '\')"><span style="color:' + def.color + ';border-color:' + def.color + '44;">' + def.icon + ' ' + def.label + '</span></label>').join('') + '</div></div>' +
      '<div class="form-group"><label>status</label><select id="admin-status" onchange="APP.adminSetStatus(\'' + userId + '\', this.value)">' +
      '<option value="online" ' + (user.status === 'online' ? 'selected' : '') + '>online</option>' +
      '<option value="idle" ' + (user.status === 'idle' ? 'selected' : '') + '>idle</option>' +
      '<option value="dnd" ' + (user.status === 'dnd' ? 'selected' : '') + '>dnd</option>' +
      '<option value="offline" ' + (user.status === 'offline' ? 'selected' : '') + '>offline</option>' +
      '</select></div>' +
      '<div class="form-group"><label>theme</label><select id="admin-theme" onchange="APP.adminSetTheme(\'' + userId + '\', this.value)">' + Object.entries(this.themes).map(([k,t]) => '<option value="' + k + '" ' + (user.theme === k ? 'selected' : '') + '>' + t.name + '</option>').join('') + '</select></div>' +
      '<div class="form-group"><label>admin status</label><select id="admin-isAdmin" onchange="APP.adminSetAdmin(\'' + userId + '\', this.value === \'true\')"><option value="false" ' + (!user.isAdmin ? 'selected' : '') + '>user</option><option value="true" ' + (user.isAdmin ? 'selected' : '') + '>admin</option></select></div>' +
      '<button class="btn btn-primary btn-sm" onclick="APP.adminSaveUser(\'' + userId + '\');document.getElementById(\'admin-modal\').classList.remove(\'active\')">save changes</button>';
    modal.classList.add('active');
  },

  adminToggleBadge(userId, badge) {
    const accounts = this.getAccounts();
    const idx = accounts.findIndex(u => u.id === userId);
    if (idx === -1) return;
    const badges = [...(accounts[idx].badges || [])];
    const i = badges.indexOf(badge);
    if (i > -1) badges.splice(i, 1);
    else badges.push(badge);
    accounts[idx].badges = badges;
    this.saveAccounts(accounts);
    this.renderAdmin();
    this.toast('badge ' + (i > -1 ? 'removed from' : 'added to') + ' @' + accounts[idx].username);
  },

  adminSetStatus(userId, status) {
    this.updateUser(userId, { status });
    this.renderAdmin();
    this.toast('status updated');
  },

  adminSetTheme(userId, theme) {
    this.updateUser(userId, { theme, accent: this.themes[theme].accent });
    this.renderAdmin();
    this.toast('theme updated');
  },

  adminSetAdmin(userId, isAdmin) {
    this.updateUser(userId, { isAdmin });
    this.renderAdmin();
    this.toast('admin status updated');
  },

  adminSaveUser(userId) {
    const name = document.getElementById('admin-name')?.value.trim();
    const bio = document.getElementById('admin-bio')?.value.trim();
    const updates = {};
    if (name) updates.name = name;
    if (bio !== undefined) updates.bio = bio;
    this.updateUser(userId, updates);
    this.renderAdmin();
    this.toast('user saved');
  },

  adminDeleteUser(userId) {
    if (!confirm('are you sure you want to delete this user?')) return;
    const me = this.getMe();
    if (me && me.id === userId) { this.toast('cannot delete yourself'); return; }
    let accounts = this.getAccounts();
    accounts = accounts.filter(u => u.id !== userId);
    this.saveAccounts(accounts);
    this.renderAdmin();
    this.toast('user deleted');
  },

  // ========== CHAT ==========
  initChat() {
    this.renderChat();
    this.renderChatUsers();
    setInterval(() => { this.renderChat(); this.renderChatUsers(); }, 1000);
    const form = document.getElementById('chat-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.sendChatMessage();
      });
    }
  },

  renderChat() {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    const messages = this.getChatMessages();
    const accounts = this.getAccounts();
    const session = this.getSession();
    const me = this.getMe();

    const currentScroll = container.scrollTop;
    const isAtBottom = container.scrollHeight - container.clientHeight - currentScroll < 50;

    container.innerHTML = messages.map(m => {
      const author = accounts.find(a => a.id === m.authorId);
      const isMe = session && m.authorId === session.userId;
      return '<div class="chat-message ' + (isMe ? 'chat-me' : '') + '"><div class="chat-avatar" style="' + (author?.avatar ? 'background-image:url(\'' + this.escapeAttr(author.avatar) + '\');background-size:cover;' : '') + '">' + (author?.avatar ? '' : (author ? author.name.charAt(0).toUpperCase() : '?')) + '</div>' +
        '<div class="chat-bubble"><div class="chat-header"><a href="profile.html?id=' + m.authorId + '">' + this.sanitize(author ? author.name : 'unknown') + '</a>' + this.renderBadgesInline(author ? author.badges : []) + '<span class="chat-time">' + this.timeAgo(m.created) + '</span></div>' +
        '<div class="chat-body">' + this.sanitize(m.content) + '</div></div>' +
        (me?.isAdmin ? '<button class="btn btn-ghost btn-sm chat-delete" onclick="APP.deleteChatMessage(\'' + m.id + '\')">×</button>' : '') +
        '</div>';
    }).join('');

    if (isAtBottom || messages.length <= 20) {
      container.scrollTop = container.scrollHeight;
    }
  },

  renderChatUsers() {
    const container = document.getElementById('chat-users');
    if (!container) return;
    const accounts = this.getAccounts();
    const online = accounts.filter(u => u.status === 'online');
    container.innerHTML = '<h3>online (' + online.length + ')</h3>' + online.map(u =>
      '<a href="profile.html?id=' + u.id + '" class="chat-user"><div class="chat-user-avatar" style="' + (u.avatar ? 'background-image:url(\'' + this.escapeAttr(u.avatar) + '\');background-size:cover;' : '') + '">' + (u.avatar ? '' : u.name.charAt(0).toUpperCase()) + '</div><span>' + this.sanitize(u.name) + '</span></a>'
    ).join('');
  },

  sendChatMessage() {
    const input = document.getElementById('chat-input');
    if (!input) return;
    const content = input.value.trim();
    if (!content) return;
    const session = this.getSession();
    if (!session) return;
    const messages = this.getChatMessages();
    if (messages.length > 200) messages.splice(0, messages.length - 200);
    messages.push({ id: 'm' + Date.now(), authorId: session.userId, content, created: Date.now() });
    this.saveChatMessages(messages);
    input.value = '';
    this.renderChat();
  },

  deleteChatMessage(msgId) {
    const me = this.getMe();
    if (!me || !me.isAdmin) return;
    const messages = this.getChatMessages().filter(m => m.id !== msgId);
    this.saveChatMessages(messages);
    this.renderChat();
    this.toast('message deleted');
  },

  // ========== FORUMS ==========
  initForums() {
    this.renderForums();
    const form = document.getElementById('forum-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.createForumThread();
      });
    }
  },

  renderForums() {
    const container = document.getElementById('forum-list');
    if (!container) return;
    const forums = this.getForums();
    const accounts = this.getAccounts();

    container.innerHTML = forums.map(f => {
      const author = accounts.find(a => a.id === f.authorId);
      return '<a href="thread.html?id=' + f.id + '" class="forum-row ' + (f.pinned ? 'forum-pinned' : '') + '"><div class="forum-icon">' + (f.pinned ? '📌' : '💬') + '</div>' +
        '<div class="forum-info"><h3>' + this.sanitize(f.title) + '</h3><p>by <a href="profile.html?id=' + f.authorId + '">' + this.sanitize(author ? author.name : 'unknown') + '</a> &middot; ' + this.renderBadgesInline(author ? author.badges : []) + ' &middot; ' + f.category + ' &middot; ' + this.timeAgo(f.created) + '</p></div>' +
        '<div class="forum-meta"><span>' + f.replies + ' replies</span><span>' + f.views + ' views</span></div></a>';
    }).join('');
  },

  createForumThread() {
    const titleInput = document.getElementById('forum-title');
    const catInput = document.getElementById('forum-category');
    if (!titleInput || !catInput) return;
    const title = titleInput.value.trim();
    const category = catInput.value;
    if (!title) { this.toast('enter a title'); return; }
    const session = this.getSession();
    if (!session) return;
    const forums = this.getForums();
    const newThread = { id: 'f' + Date.now(), title, author: this.getMe()?.name || 'unknown', authorId: session.userId, category, replies: 0, views: 0, created: Date.now(), pinned: false };
    forums.unshift(newThread);
    this.saveForums(forums);
    titleInput.value = '';
    this.toast('thread created');
    this.renderForums();
  },

  initThread() {
    const params = new URLSearchParams(window.location.search);
    const threadId = params.get('id');
    if (!threadId) { window.location.href = 'forums.html'; return; }
    const thread = this.getForums().find(f => f.id === threadId);
    if (!thread) { window.location.href = 'forums.html'; return; }

    const titleEl = document.getElementById('thread-title');
    if (titleEl) titleEl.textContent = thread.title;
    const metaEl = document.getElementById('thread-meta');
    if (metaEl) metaEl.innerHTML = 'by <a href="profile.html?id=' + thread.authorId + '">' + this.sanitize(thread.author) + '</a> &middot; ' + thread.category + ' &middot; ' + this.timeAgo(thread.created);

    this.renderThreadPosts(threadId);

    const form = document.getElementById('thread-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.postThreadReply(threadId);
      });
    }

    // increment views
    const forums = this.getForums();
    const idx = forums.findIndex(f => f.id === threadId);
    if (idx !== -1) { forums[idx].views++; this.saveForums(forums); }
  },

  renderThreadPosts(threadId) {
    const container = document.getElementById('thread-posts');
    if (!container) return;
    const posts = this.getForumPosts(threadId);
    const accounts = this.getAccounts();

    container.innerHTML = posts.map(p => {
      const author = accounts.find(a => a.id === p.authorId);
      return '<div class="thread-post"><div class="post-header"><a href="profile.html?id=' + p.authorId + '" class="post-avatar" style="' + (author?.avatar ? 'background-image:url(\'' + this.escapeAttr(author.avatar) + '\');background-size:cover;' : '') + '">' + (author?.avatar ? '' : (author ? author.name.charAt(0).toUpperCase() : '?')) + '</a>' +
        '<div><a href="profile.html?id=' + p.authorId + '">' + this.sanitize(author ? author.name : 'unknown') + '</a>' + this.renderBadgesInline(author ? author.badges : []) + '<span class="post-time">' + this.timeAgo(p.created) + '</span></div></div>' +
        '<div class="post-body">' + this.sanitize(p.content) + '</div></div>';
    }).join('');
  },

  postThreadReply(threadId) {
    const input = document.getElementById('thread-reply');
    if (!input) return;
    const content = input.value.trim();
    if (!content) { this.toast('write something'); return; }
    const session = this.getSession();
    if (!session) return;
    const posts = this.getForumPosts(threadId);
    posts.push({ id: 'p' + Date.now(), authorId: session.userId, content, created: Date.now() });
    this.saveForumPosts(threadId, posts);

    const forums = this.getForums();
    const idx = forums.findIndex(f => f.id === threadId);
    if (idx !== -1) { forums[idx].replies = posts.length; this.saveForums(forums); }

    input.value = '';
    this.toast('reply posted');
    this.renderThreadPosts(threadId);
  },

  exportData() {
    const data = {
      accounts: this.getAccounts(),
      session: this.getSession(),
      friends: this.getFriends(),
      requests: this.getRequests(),
      chat: this.getChatMessages(),
      forums: this.getForums(),
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'musical-backup-' + Date.now() + '.json';
    a.click();
    URL.revokeObjectURL(url);
    this.toast('data exported');
  },

  importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.accounts) localStorage.setItem('musical_accounts', JSON.stringify(data.accounts));
        if (data.friends) localStorage.setItem('musical_friends', JSON.stringify(data.friends));
        if (data.requests) localStorage.setItem('musical_requests', JSON.stringify(data.requests));
        if (data.chat) localStorage.setItem('musical_chat', JSON.stringify(data.chat));
        if (data.forums) localStorage.setItem('musical_forums', JSON.stringify(data.forums));
        this.toast('data imported. refresh the page.');
      } catch (err) {
        this.toast('invalid file');
      }
    };
    reader.readAsText(file);
  },

  toast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 200); }, 2500);
  },
};


  // ========== FILE UPLOAD ==========
  handleFileUpload(input, field) {
    const file = input.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { this.toast('file too big (max 2mb)'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      this.updateMe({ [field]: e.target.result });
      this.toast(field + ' uploaded');
      this.renderSettings();
    };
    reader.readAsDataURL(file);
  },

  // ========== WELCOME SCREEN ==========
  renderWelcomeScreen() {
    const me = this.getMe();
    if (!me) return;
    const lastWelcome = localStorage.getItem('musical_welcome_' + me.id);
    if (lastWelcome && Date.now() - parseInt(lastWelcome) < 86400000) return;

    let modal = document.getElementById('welcome-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'welcome-modal';
      modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);backdrop-filter:blur(20px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity .3s;';
      document.body.appendChild(modal);
    }

    const welcomeTitle = me.welcomeTitle || 'welcome back, ' + me.name;
    const welcomeMsg = me.welcomeMsg || 'you have ' + (this.getFriends().filter(f => f.a === me.id || f.b === me.id).length) + ' friends and ' + (me.views || 0) + ' profile views.';
    const welcomeColor = me.welcomeColor || me.accent || '#4a7fc9';

    modal.innerHTML = '<div style="background:var(--bg-raised);border:1px solid var(--border);border-radius:var(--radius);padding:48px;max-width:480px;width:100%;text-align:center;position:relative;transform:translateY(20px);transition:transform .3s;">' +
      '<div style="font-size:48px;margin-bottom:16px;">' + (me.welcomeEmoji || '👋') + '</div>' +
      '<h2 style="font-size:24px;font-weight:700;color:var(--text-bright);margin-bottom:12px;">' + this.sanitize(welcomeTitle) + '</h2>' +
      '<p style="color:var(--text-muted);margin-bottom:24px;">' + this.sanitize(welcomeMsg) + '</p>' +
      '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">' +
      '<button class="btn btn-primary" onclick="APP.dismissWelcome()">continue</button>' +
      '<a href="settings.html" class="btn btn-secondary">customize</a>' +
      '</div>' +
      '<button onclick="APP.dismissWelcome()" style="position:absolute;top:16px;right:16px;background:none;border:none;color:var(--text-muted);font-size:18px;cursor:pointer;">×</button>' +
      '</div>';

    requestAnimationFrame(() => { modal.style.opacity = '1'; modal.querySelector('div').style.transform = 'translateY(0)'; });
  },

  dismissWelcome() {
    const me = this.getMe();
    if (me) localStorage.setItem('musical_welcome_' + me.id, Date.now().toString());
    const modal = document.getElementById('welcome-modal');
    if (modal) { modal.style.opacity = '0'; setTimeout(() => modal.remove(), 300); }
  },

  // ========== USERNAME EFFECTS ==========
  usernameEffects: {
    none: { name: 'None', css: '' },
    rainbow: { name: 'Rainbow', css: 'background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: rainbow-shift 3s linear infinite;' },
    glow: { name: 'Glow', css: 'text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor;' },
    glitch: { name: 'Glitch', css: 'position: relative; animation: glitch 2s infinite;' },
    wave: { name: 'Wave', css: 'display: inline-block; animation: wave 2s ease-in-out infinite;' },
    pulse: { name: 'Pulse', css: 'animation: pulse-scale 2s ease-in-out infinite;' },
    neon: { name: 'Neon', css: 'text-shadow: 0 0 5px var(--accent), 0 0 10px var(--accent), 0 0 20px var(--accent), 0 0 40px var(--accent);' },
    outline: { name: 'Outline', css: '-webkit-text-stroke: 1px var(--accent); color: transparent;' },
    retro: { name: 'Retro', css: 'font-family: "Space Mono", monospace; text-transform: uppercase; letter-spacing: 2px;' },
  },

  renderUsernameEffects() {
    const me = this.getMe();
    const container = document.getElementById('username-effect-picker');
    if (!container || !me) return;
    container.innerHTML = Object.entries(this.usernameEffects).map(([key, eff]) =>
      '<button class="cursor-btn ' + (me.usernameEffect === key ? 'active' : '') + '" onclick="APP.setUsernameEffect(\'' + key + '\')">' + eff.name + '</button>'
    ).join('');
  },

  setUsernameEffect(effect) {
    this.updateMe({ usernameEffect: effect });
    this.renderUsernameEffects();
    this.toast('username effect saved');
  },

  applyUsernameEffect(el, effect) {
    if (!el || !effect || effect === 'none') return;
    const def = this.usernameEffects[effect];
    if (def) el.style.cssText = def.css;
  },

  // ========== DISCORD STATUS ==========
  renderDiscordStatus(user) {
    if (!user || !user.connections?.discord) return '';
    const status = user.discordStatus || 'online';
    const colors = { online: '#22c55e', idle: '#f59e0b', dnd: '#ef4444', offline: '#6b7280' };
    const labels = { online: 'Online', idle: 'Idle', dnd: 'DND', offline: 'Offline' };
    return '<span class="discord-status" style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:' + colors[status] + ';background:' + colors[status] + '11;border:1px solid ' + colors[status] + '33;padding:3px 10px;border-radius:var(--radius);margin-left:8px;">' +
      '<span style="width:8px;height:8px;border-radius:50%;background:' + colors[status] + ';display:inline-block;"></span>' +
      '<i class="fab fa-discord"></i> ' + labels[status] + '</span>';
  },

  // ========== BIO LINKS (like guns.lol) ==========
  getBioLinks() {
    const me = this.getMe();
    return me?.bioLinks || [];
  },

  saveBioLinks(links) {
    this.updateMe({ bioLinks: links });
  },

  renderBioLinksEditor() {
    const me = this.getMe();
    const container = document.getElementById('biolinks-editor');
    if (!container || !me) return;
    container.innerHTML = (me.bioLinks || []).map((link, i) =>
      '<div class="link-row">' +
      '<input type="text" value="' + this.escapeAttr(link.label || '') + '" placeholder="label" onchange="APP.updateBioLink(' + i + ', \'label\', this.value)">' +
      '<input type="text" value="' + this.escapeAttr(link.url || '') + '" placeholder="https://..." onchange="APP.updateBioLink(' + i + ', \'url\', this.value)">' +
      '<input type="text" value="' + this.escapeAttr(link.icon || '') + '" placeholder="emoji or icon" onchange="APP.updateBioLink(' + i + ', \'icon\', this.value)">' +
      '<button class="btn btn-ghost btn-sm" onclick="APP.removeBioLink(' + i + ')"><i class="fas fa-trash"></i></button>' +
      '</div>'
    ).join('');
  },

  addBioLink() {
    const me = this.getMe();
    if (!me) return;
    const links = [...(me.bioLinks || []), { label: 'new link', url: '', icon: '🔗', clicks: 0 }];
    this.saveBioLinks(links);
    this.renderBioLinksEditor();
  },

  updateBioLink(index, field, value) {
    const me = this.getMe();
    if (!me) return;
    const links = [...(me.bioLinks || [])];
    links[index] = { ...links[index], [field]: value };
    this.saveBioLinks(links);
  },

  removeBioLink(index) {
    const me = this.getMe();
    if (!me) return;
    const links = [...(me.bioLinks || [])];
    links.splice(index, 1);
    this.saveBioLinks(links);
    this.renderBioLinksEditor();
  },

  renderBioLinks(user) {
    if (!user?.bioLinks || user.bioLinks.length === 0) return '';
    return '<div class="biolinks-grid">' + user.bioLinks.map((link, i) =>
      '<a href="' + this.escapeAttr(link.url) + '" target="_blank" rel="noopener" class="biolink-card" onclick="APP.trackBioLinkClick(\'' + user.id + '\', ' + i + ')">' +
      '<span class="biolink-icon">' + (link.icon || '🔗') + '</span>' +
      '<span class="biolink-label">' + this.sanitize(link.label) + '</span>' +
      '<span class="biolink-clicks">' + (link.clicks || 0) + ' clicks</span>' +
      '</a>'
    ).join('') + '</div>';
  },

  trackBioLinkClick(userId, linkIndex) {
    const user = this.getUser(userId);
    if (!user || !user.bioLinks) return;
    const links = [...user.bioLinks];
    links[linkIndex] = { ...links[linkIndex], clicks: (links[linkIndex].clicks || 0) + 1 };
    this.updateUser(userId, { bioLinks: links });
  },

  // ========== 3D TILT EFFECT ==========
  init3DTilt() {
    const card = document.getElementById('profile-3d-card');
    if (!card) return;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  },

  // ========== ENHANCED ADMIN ==========
  renderAdminEnhanced() {
    const me = this.getMe();
    if (!me || !me.isAdmin) { window.location.href = 'index.html'; return; }

    this.renderAdmin();
    this.renderAdminChat();
    this.renderAdminForums();
    this.renderAdminAnnouncements();
    this.renderAdminActivityLog();
  },

  renderAdminChat() {
    const container = document.getElementById('admin-chat');
    if (!container) return;
    const messages = this.getChatMessages().slice(-50);
    const accounts = this.getAccounts();

    container.innerHTML = '<h2>## recent chat messages</h2>' +
      (messages.length === 0 ? '<p class="muted">no messages</p>' :
      messages.slice().reverse().map(m => {
        const author = accounts.find(a => a.id === m.authorId);
        return '<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);">' +
          '<span style="font-size:12px;color:var(--text-muted);font-family:var(--font-mono);">' + this.timeAgo(m.created) + '</span>' +
          '<a href="profile.html?id=' + m.authorId + '" style="font-weight:600;font-size:13px;">' + this.sanitize(author?.name || 'unknown') + '</a>' +
          '<span style="flex:1;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + this.sanitize(m.content) + '</span>' +
          '<button class="btn btn-ghost btn-sm" onclick="APP.deleteChatMessage(\'' + m.id + '\');APP.renderAdminChat();">delete</button>' +
          '</div>';
      }).join(''));
  },

  renderAdminForums() {
    const container = document.getElementById('admin-forums');
    if (!container) return;
    const forums = this.getForums();
    container.innerHTML = '<h2>## forum threads</h2>' +
      forums.map(f => '<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);">' +
        '<span style="font-size:12px;color:var(--text-muted);">' + (f.pinned ? '📌' : '💬') + '</span>' +
        '<a href="thread.html?id=' + f.id + '" style="flex:1;font-size:14px;">' + this.sanitize(f.title) + '</a>' +
        '<span style="font-size:12px;color:var(--text-muted);">' + f.replies + ' replies</span>' +
        '<button class="btn btn-ghost btn-sm" onclick="APP.adminTogglePin(\'' + f.id + '\')">' + (f.pinned ? 'unpin' : 'pin') + '</button>' +
        '<button class="btn btn-danger btn-sm" onclick="APP.adminDeleteThread(\'' + f.id + '\')">delete</button>' +
        '</div>').join('');
  },

  adminTogglePin(threadId) {
    const forums = this.getForums();
    const idx = forums.findIndex(f => f.id === threadId);
    if (idx !== -1) { forums[idx].pinned = !forums[idx].pinned; this.saveForums(forums); }
    this.renderAdminForums();
    this.toast('thread ' + (forums[idx]?.pinned ? 'pinned' : 'unpinned'));
  },

  adminDeleteThread(threadId) {
    if (!confirm('delete this thread?')) return;
    let forums = this.getForums();
    forums = forums.filter(f => f.id !== threadId);
    this.saveForums(forums);
    localStorage.removeItem('musical_forum_posts_' + threadId);
    this.renderAdminForums();
    this.toast('thread deleted');
  },

  renderAdminAnnouncements() {
    const container = document.getElementById('admin-announcements');
    if (!container) return;
    const ann = JSON.parse(localStorage.getItem('musical_announcement') || 'null');
    container.innerHTML = '<h2>## site announcement</h2>' +
      '<div class="form-group"><input type="text" id="admin-announce-text" placeholder="announcement text..." value="' + (ann?.text || '') + '"></div>' +
      '<div class="form-group"><input type="text" id="admin-announce-color" placeholder="color (hex)" value="' + (ann?.color || '#4a7fc9') + '"></div>' +
      '<button class="btn btn-primary btn-sm" onclick="APP.setAnnouncement()">set announcement</button>' +
      '<button class="btn btn-ghost btn-sm" onclick="APP.clearAnnouncement()">clear</button>';
  },

  setAnnouncement() {
    const text = document.getElementById('admin-announce-text')?.value.trim();
    const color = document.getElementById('admin-announce-color')?.value.trim() || '#4a7fc9';
    if (!text) { this.toast('enter text'); return; }
    localStorage.setItem('musical_announcement', JSON.stringify({ text, color, created: Date.now() }));
    this.toast('announcement set');
  },

  clearAnnouncement() {
    localStorage.removeItem('musical_announcement');
    this.toast('announcement cleared');
    this.renderAdminAnnouncements();
  },

  renderAdminActivityLog() {
    const container = document.getElementById('admin-activity');
    if (!container) return;
    const log = JSON.parse(localStorage.getItem('musical_activity_log') || '[]');
    container.innerHTML = '<h2>## activity log</h2>' +
      (log.length === 0 ? '<p class="muted">no activity yet</p>' :
      log.slice().reverse().slice(0, 20).map(entry =>
        '<div style="font-size:13px;padding:8px 0;border-bottom:1px solid var(--border);">' +
        '<span style="color:var(--text-muted);font-family:var(--font-mono);font-size:11px;">' + new Date(entry.time).toLocaleTimeString() + '</span> ' +
        '<span style="color:var(--text-bright);">' + this.sanitize(entry.user) + '</span> ' +
        this.sanitize(entry.action) +
        '</div>'
      ).join(''));
  },

  logActivity(action) {
    const me = this.getMe();
    const log = JSON.parse(localStorage.getItem('musical_activity_log') || '[]');
    log.push({ user: me?.name || 'guest', action, time: Date.now() });
    if (log.length > 100) log.shift();
    localStorage.setItem('musical_activity_log', JSON.stringify(log));
  },

  adminMassBadge() {
    const badge = document.getElementById('admin-mass-badge')?.value;
    const action = document.getElementById('admin-mass-action')?.value;
    if (!badge || !action) return;
    const accounts = this.getAccounts();
    accounts.forEach(u => {
      const badges = [...(u.badges || [])];
      if (action === 'add' && !badges.includes(badge)) badges.push(badge);
      if (action === 'remove') { const idx = badges.indexOf(badge); if (idx > -1) badges.splice(idx, 1); }
      u.badges = badges;
    });
    this.saveAccounts(accounts);
    this.renderAdmin();
    this.toast('mass badge ' + action + ' done');
  },

  adminSearchUsers(query) {
    query = query.toLowerCase();
    const accounts = this.getAccounts();
    const filtered = accounts.filter(u => u.name.toLowerCase().includes(query) || u.username.toLowerCase().includes(query));
    const userList = document.getElementById('admin-users');
    if (!userList) return;
    userList.innerHTML = filtered.map(u => '<div class="admin-user-row"><div class="admin-user-info"><strong>' + this.sanitize(u.name) + '</strong><span class="muted">@' + this.sanitize(u.username) + '</span>' + this.renderBadgesInline(u.badges) + '</div>' +
      '<div class="admin-user-meta"><span>' + (u.views || 0) + ' views</span><span class="status-dot ' + u.status + '"></span>' +
      '<button class="btn btn-secondary btn-sm" onclick="APP.adminEditUser(\'' + u.id + '\')">edit</button>' +
      '<button class="btn btn-danger btn-sm" onclick="APP.adminDeleteUser(\'' + u.id + '\')">delete</button></div></div>').join('');
  },

  // ========== ANNOUNCEMENT BAR ==========
  renderAnnouncement() {
    const ann = JSON.parse(localStorage.getItem('musical_announcement') || 'null');
    if (!ann) return;
    let bar = document.getElementById('announcement-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'announcement-bar';
      bar.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9998;padding:10px 16px;text-align:center;font-size:13px;font-weight:500;cursor:pointer;';
      document.body.insertBefore(bar, document.body.firstChild);
      bar.addEventListener('click', () => { bar.style.display = 'none'; });
    }
    bar.style.background = ann.color + '22';
    bar.style.color = ann.color;
    bar.style.borderBottom = '1px solid ' + ann.color + '44';
    bar.textContent = ann.text;
    document.body.style.paddingTop = '40px';
  },


  // ========== PROFILE WELCOME SCREEN (visitor) ==========
  renderProfileWelcome(user) {
    if (!user?.profileWelcome?.enabled) return;
    let overlay = document.getElementById('profile-welcome-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'profile-welcome-overlay';
      overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer;transition:opacity .8s ease;';
      document.body.appendChild(overlay);
    }
    const pw = user.profileWelcome;
    const bgType = pw.bgType || 'solid';
    const bgColor = pw.bgColor || '#000000';
    const bgImage = pw.bgImage || '';
    const blur = pw.blur ? 'backdrop-filter:blur(' + pw.blur + 'px);' : '';
    const textColor = pw.textColor || '#ffffff';
    const fontSize = pw.fontSize || '32px';
    const textAlign = pw.textAlign || 'center';

    let bgStyle = '';
    if (bgType === 'solid') bgStyle = 'background:' + bgColor + ';';
    else if (bgType === 'gradient') bgStyle = 'background:linear-gradient(135deg,' + bgColor + ',' + (pw.bgColor2 || '#1a1a2e') + ');';
    else if (bgType === 'image' && bgImage) bgStyle = 'background:url(' + this.escapeAttr(bgImage) + ') center/cover no-repeat;';
    else if (bgType === 'blur') bgStyle = 'background:rgba(0,0,0,0.7);' + blur;

    overlay.style.cssText += bgStyle;
    overlay.innerHTML = '<div style="color:' + textColor + ';font-size:' + fontSize + ';font-weight:700;text-align:' + textAlign + ';padding:40px;max-width:600px;line-height:1.4;font-family:var(--font);">' +
      (pw.title ? '<div style="margin-bottom:16px;font-size:' + (parseInt(fontSize) * 1.3) + 'px;">' + this.sanitize(pw.title) + '</div>' : '') +
      '<div style="font-size:' + (parseInt(fontSize) * 0.6) + 'px;opacity:0.8;font-weight:400;">' + this.sanitize(pw.message || 'click anywhere to enter') + '</div>' +
      '<div style="margin-top:32px;font-size:14px;opacity:0.5;animation:pulse-scale 2s infinite;">👆 click to enter</div>' +
      '</div>';

    overlay.onclick = () => {
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 800);
    };
  },

  // ========== PROFILE STATS / ANALYTICS ==========
  getProfileViewsHistory(userId, days) {
    days = days || 30;
    const key = 'musical_views_history_' + userId;
    let history = JSON.parse(localStorage.getItem(key) || '[]');
    const now = Date.now();
    // Ensure we have entries for last N days
    const result = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now - i * 86400000);
      const dateStr = d.toISOString().split('T')[0];
      const existing = history.find(h => h.date === dateStr);
      result.push({ date: dateStr, views: existing ? existing.views : 0, label: d.toLocaleDateString('en', { month: 'short', day: 'numeric' }) });
    }
    return result;
  },

  recordProfileView(userId) {
    const key = 'musical_views_history_' + userId;
    let history = JSON.parse(localStorage.getItem(key) || '[]');
    const today = new Date().toISOString().split('T')[0];
    const idx = history.findIndex(h => h.date === today);
    if (idx > -1) history[idx].views++;
    else history.push({ date: today, views: 1 });
    // Keep last 90 days
    history = history.filter(h => Date.now() - new Date(h.date).getTime() < 86400000 * 90);
    localStorage.setItem(key, JSON.stringify(history));
  },

  renderProfileStats(user) {
    const container = document.getElementById('p-analytics');
    if (!container) return;
    const history7 = this.getProfileViewsHistory(user.id, 7);
    const history30 = this.getProfileViewsHistory(user.id, 30);
    const total7 = history7.reduce((s, h) => s + h.views, 0);
    const total30 = history30.reduce((s, h) => s + h.views, 0);
    const peak = Math.max(...history30.map(h => h.views), 1);
    const avg = Math.round(total30 / 30);

    container.innerHTML = '<h2>## analytics</h2>' +
      '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px;">' +
      '<div style="background:var(--bg-raised);border:1px solid var(--border);border-radius:var(--radius);padding:16px;text-align:center;">' +
      '<div style="font-family:var(--font-mono);font-size:24px;color:var(--accent);">' + total7 + '</div><div style="font-size:11px;color:var(--text-muted);">last 7 days</div></div>' +
      '<div style="background:var(--bg-raised);border:1px solid var(--border);border-radius:var(--radius);padding:16px;text-align:center;">' +
      '<div style="font-family:var(--font-mono);font-size:24px;color:var(--accent);">' + total30 + '</div><div style="font-size:11px;color:var(--text-muted);">last 30 days</div></div>' +
      '<div style="background:var(--bg-raised);border:1px solid var(--border);border-radius:var(--radius);padding:16px;text-align:center;">' +
      '<div style="font-family:var(--font-mono);font-size:24px;color:var(--accent);">' + peak + '</div><div style="font-size:11px;color:var(--text-muted);">peak day</div></div>' +
      '<div style="background:var(--bg-raised);border:1px solid var(--border);border-radius:var(--radius);padding:16px;text-align:center;">' +
      '<div style="font-family:var(--font-mono);font-size:24px;color:var(--accent);">' + avg + '</div><div style="font-size:11px;color:var(--text-muted);">daily avg</div></div>' +
      '</div>' +
      '<h3 style="font-size:13px;color:var(--text-muted);margin-bottom:12px;">last 7 days</h3>' +
      '<canvas id="chart-7" width="600" height="160" style="width:100%;max-width:600px;background:var(--bg-raised);border:1px solid var(--border);border-radius:var(--radius);"></canvas>' +
      '<h3 style="font-size:13px;color:var(--text-muted);margin:24px 0 12px;">last 30 days</h3>' +
      '<canvas id="chart-30" width="600" height="160" style="width:100%;max-width:600px;background:var(--bg-raised);border:1px solid var(--border);border-radius:var(--radius);"></canvas>';

    this.drawBarChart('chart-7', history7, user.accent);
    this.drawBarChart('chart-30', history30, user.accent);
  },

  drawBarChart(canvasId, data, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const padding = { top: 20, right: 10, bottom: 30, left: 10 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;
    const maxVal = Math.max(...data.map(d => d.views), 1);
    const barW = (chartW / data.length) * 0.7;
    const gap = (chartW / data.length) * 0.3;

    ctx.clearRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();
    }

    // Bars
    data.forEach((d, i) => {
      const x = padding.left + i * (barW + gap) + gap / 2;
      const barH = (d.views / maxVal) * chartH;
      const y = padding.top + chartH - barH;

      // Bar
      const gradient = ctx.createLinearGradient(0, y, 0, y + barH);
      gradient.addColorStop(0, color + 'aa');
      gradient.addColorStop(1, color + '33');
      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barW, barH);

      // Value on top
      if (d.views > 0) {
        ctx.fillStyle = color;
        ctx.font = '10px ' + getComputedStyle(document.body).fontFamily;
        ctx.textAlign = 'center';
        ctx.fillText(d.views, x + barW / 2, y - 4);
      }

      // Label
      ctx.fillStyle = 'rgba(200,212,232,0.4)';
      ctx.font = '9px ' + getComputedStyle(document.body).fontFamily;
      ctx.textAlign = 'center';
      ctx.fillText(d.label, x + barW / 2, h - 8);
    });
  },

  // ========== MORE PROFILE CUSTOMIZATION ==========
  profileEffects: {
    none: { name: 'None' },
    scanlines: { name: 'Scanlines' },
    vignette: { name: 'Vignette' },
    noise: { name: 'Noise' },
    crt: { name: 'CRT' },
    glass: { name: 'Glass' },
    blur: { name: 'Blur Edges' },
  },

  renderProfileEffectPicker() {
    const me = this.getMe();
    const container = document.getElementById('profile-effect-picker');
    if (!container || !me) return;
    container.innerHTML = Object.entries(this.profileEffects).map(([key, eff]) =>
      '<button class="cursor-btn ' + (me.profileEffect === key ? 'active' : '') + '" onclick="APP.setProfileEffect(\'' + key + '\')">' + eff.name + '</button>'
    ).join('');
  },

  setProfileEffect(effect) {
    this.updateMe({ profileEffect: effect });
    this.renderProfileEffectPicker();
    this.toast('profile effect saved');
  },

  applyProfileEffect(effect) {
    if (!effect || effect === 'none') return;
    let overlay = document.getElementById('profile-effect-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'profile-effect-overlay';
      overlay.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2;';
      document.body.appendChild(overlay);
    }
    const styles = {
      scanlines: 'background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px);',
      vignette: 'background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%);',
      noise: 'background-image: url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.08\'/%3E%3C/svg%3E");',
      crt: 'background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03)); background-size: 100% 3px, 3px 100%;',
      glass: 'background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, rgba(255,255,255,0.03) 100%);',
      blur: 'background: radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%);',
    };
    overlay.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2;' + (styles[effect] || '');
  },

  // ========== PROFILE BORDER STYLES ==========
  borderStyles: ['none', 'solid', 'dashed', 'glow', 'gradient', 'double'],

  renderBorderPicker() {
    const me = this.getMe();
    const container = document.getElementById('border-picker');
    if (!container || !me) return;
    container.innerHTML = this.borderStyles.map(s =>
      '<button class="cursor-btn ' + (me.borderStyle === s ? 'active' : '') + '" onclick="APP.setBorderStyle(\'' + s + '\')">' + s + '</button>'
    ).join('');
  },

  setBorderStyle(style) {
    this.updateMe({ borderStyle: style });
    this.renderBorderPicker();
    this.toast('border style saved');
  },

  applyBorderStyle(style, accent) {
    const card = document.getElementById('profile-3d-card');
    if (!card) return;
    const styles = {
      none: 'border: none;',
      solid: 'border: 2px solid ' + accent + '44;',
      dashed: 'border: 2px dashed ' + accent + '44;',
      glow: 'border: 1px solid ' + accent + '22; box-shadow: 0 0 30px ' + accent + '22, inset 0 0 30px ' + accent + '11;',
      gradient: 'border: 2px solid transparent; border-image: linear-gradient(135deg, ' + accent + ', ' + accent + '66) 1;',
      double: 'border: 4px double ' + accent + '44;',
    };
    card.style.cssText += styles[style] || '';
  },

  // ========== SPOTIFY NOW PLAYING MOCK ==========
  renderSpotifyNowPlaying(user) {
    if (!user.connections?.spotify || !user.nowPlaying) return '';
    return '<div class="spotify-now-playing" style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#1db95411;border:1px solid #1db95433;border-radius:var(--radius);margin-top:12px;">' +
      '<div style="width:40px;height:40px;background:linear-gradient(135deg,#1db954,#1ed760);border-radius:var(--radius);display:flex;align-items:center;justify-content:center;font-size:18px;">🎵</div>' +
      '<div style="flex:1;min-width:0;"><div style="font-size:12px;color:#1db954;font-weight:600;">NOW PLAYING ON SPOTIFY</div>' +
      '<div style="font-size:14px;color:var(--text-bright);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + this.sanitize(user.nowPlaying) + '</div></div>' +
      '<div style="display:flex;gap:2px;align-items:flex-end;height:20px;">' +
      '<div style="width:3px;background:#1db954;border-radius:2px;animation:spotify-bar 0.8s ease-in-out infinite;"></div>' +
      '<div style="width:3px;background:#1db954;border-radius:2px;animation:spotify-bar 1.1s ease-in-out infinite 0.1s;"></div>' +
      '<div style="width:3px;background:#1db954;border-radius:2px;animation:spotify-bar 0.9s ease-in-out infinite 0.2s;"></div>' +
      '</div></div>';
  },
