// DOM Elements
const hamburger = document.getElementById('hamburger');
const streamerList = document.getElementById('streamerList');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeButtons = document.querySelectorAll('.close');

// Modal Controls
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === signupModal) signupModal.style.display = 'none';
});

function switchToSignup() {
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
}

function switchToLogin() {
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
}

// Streamer Data
const streamers = [
    {
        id: 1,
        name: 'v0rtrox',
        game: 'Geometry Dash',
        title: 'Cycles x 93%',
        progress: '93%',
        avatar: 'https://via.placeholder.com/40?text=v0rtrox',
        description: 'Attempting Cycles x! This extreme demon is intense!',
        videoUrl: '' // You'll add this
    },
    {
        id: 2,
        name: 'Kingsammelot',
        game: 'Geometry Dash',
        title: '40-100 Challenge',
        progress: '67%',
        avatar: 'https://via.placeholder.com/40?text=Kings',
        description: 'Extreme jumps! Let\'s see if we can hit this!',
        videoUrl: '' // You'll add this
    },
    {
        id: 3,
        name: 'Robtop',
        game: 'Just Chatting',
        title: 'Development Update',
        progress: '-',
        avatar: 'https://via.placeholder.com/40?text=Robtop',
        description: 'Talking about the latest updates to Geometry Dash and the community!',
        videoUrl: '' // You'll add this
    },
    {
        id: 4,
        name: 'ProGamer',
        game: 'Minecraft',
        title: 'Speedrun Practice',
        progress: '45:32',
        avatar: 'https://via.placeholder.com/40?text=ProGamer',
        description: 'Training for the next speedrun competition!',
        videoUrl: '' // You'll add this
    },
    {
        id: 5,
        name: 'ValorantPro',
        game: 'Valorant',
        title: 'Ranked Climbing',
        progress: 'Radiant Push',
        avatar: 'https://via.placeholder.com/40?text=VPro',
        description: 'Grinding to top of leaderboard. 5-stack ready!',
        videoUrl: '' // You'll add this
    },
    {
        id: 6,
        name: 'CreativeStreamer',
        game: 'Just Chatting',
        title: 'Chill Stream',
        progress: '-',
        avatar: 'https://via.placeholder.com/40?text=Creative',
        description: 'Vibing with the chat and answering questions!',
        videoUrl: '' // You'll add this
    },
    {
        id: 7,
        name: 'FortniteKing',
        game: 'Fortnite',
        title: 'Arena Tournament',
        progress: 'Finals',
        avatar: 'https://via.placeholder.com/40?text=FortniteK',
        description: 'Competing in the weekly arena tournament!',
        videoUrl: '' // You'll add this
    },
    {
        id: 8,
        name: 'CodeMaster',
        game: 'Just Chatting',
        title: 'Dev Talk',
        progress: '-',
        avatar: 'https://via.placeholder.com/40?text=Code',
        description: 'Discussing web development and new frameworks!',
        videoUrl: '' // You'll add this
    }
];

let currentStreamer = streamers[0];

// Render Streamer List
function renderStreamerList() {
    streamerList.innerHTML = '';
    streamers.forEach(streamer => {
        const streamerItem = document.createElement('li');
        streamerItem.className = 'streamer-item' + (streamer.id === currentStreamer.id ? ' active' : '');
        streamerItem.innerHTML = `
            <img src="${streamer.avatar}" alt="${streamer.name}" class="streamer-avatar">
            <div class="streamer-info">
                <span class="streamer-name">${streamer.name}</span>
                <span class="streamer-game">${streamer.game}</span>
            </div>
            <span class="live-badge">LIVE</span>
        `;
        
        streamerItem.addEventListener('click', () => {
            loadStreamer(streamer);
        });
        
        streamerList.appendChild(streamerItem);
    });
}

// Load Streamer
function loadStreamer(streamer) {
    currentStreamer = streamer;
    
    // Update UI
    document.getElementById('streamerName').textContent = streamer.name;
    document.getElementById('streamTitle').textContent = streamer.title;
    document.getElementById('streamGameInfo').textContent = `Game: ${streamer.game}`;
    document.getElementById('streamDescription').textContent = streamer.description;
    document.getElementById('overlayGameName').textContent = streamer.game;
    document.getElementById('overlayGameProgress').textContent = streamer.progress;
    
    // Update video source
    if (streamer.videoUrl) {
        document.getElementById('mainPlayer').src = streamer.videoUrl;
    }
    
    // Update active streamer in sidebar
    document.querySelectorAll('.streamer-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.streamer-item').classList.add('active');
    
    // Clear chat and reload
    document.getElementById('chatMessages').innerHTML = '';
    document.getElementById('overlayChatMessages').innerHTML = '';
    loadChatForStreamer(streamer.id);
}

// Load chat for streamer
function loadChatForStreamer(streamerId) {
    // This will be populated by chat.js
    generateCrazyChat(streamerId);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderStreamerList();
    loadStreamer(currentStreamer);
});