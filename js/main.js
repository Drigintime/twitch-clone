// DOM Elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');
const navMenu = document.querySelector('.nav-menu');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeButtons = document.querySelectorAll('.close');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    navMenu.classList.toggle('active');
});

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

// Sample Stream Data
const sampleStreams = [
    {
        id: 1,
        thumbnail: 'https://via.placeholder.com/300x168?text=Stream+1',
        title: 'Chill Gaming Session',
        streamer: 'GamerPro',
        avatar: 'https://via.placeholder.com/32',
        viewers: 1250,
        live: true
    },
    {
        id: 2,
        thumbnail: 'https://via.placeholder.com/300x168?text=Stream+2',
        title: 'Just Chatting',
        streamer: 'ContentCreator',
        avatar: 'https://via.placeholder.com/32',
        viewers: 3420,
        live: true
    },
    {
        id: 3,
        thumbnail: 'https://via.placeholder.com/300x168?text=Stream+3',
        title: 'Music Production Live',
        streamer: 'MusicProducer',
        avatar: 'https://via.placeholder.com/32',
        viewers: 850,
        live: true
    },
    {
        id: 4,
        thumbnail: 'https://via.placeholder.com/300x168?text=Stream+4',
        title: 'Coding Challenge',
        streamer: 'CodeMaster',
        avatar: 'https://via.placeholder.com/32',
        viewers: 2100,
        live: true
    },
    {
        id: 5,
        thumbnail: 'https://via.placeholder.com/300x168?text=Stream+5',
        title: 'Speedrun Attempt',
        streamer: 'SpeedRunner',
        avatar: 'https://via.placeholder.com/32',
        viewers: 5600,
        live: true
    },
    {
        id: 6,
        thumbnail: 'https://via.placeholder.com/300x168?text=Stream+6',
        title: 'Game Development',
        streamer: 'IndieCreator',
        avatar: 'https://via.placeholder.com/32',
        viewers: 1890,
        live: true
    }
];

// Render Stream Cards
function renderStreams() {
    const streamsGrid = document.getElementById('streamsGrid');
    streamsGrid.innerHTML = '';

    sampleStreams.forEach(stream => {
        const streamCard = document.createElement('div');
        streamCard.className = 'stream-card';
        streamCard.innerHTML = `
            <div class="stream-card-thumbnail">
                <img src="${stream.thumbnail}" alt="${stream.title}">
                <div class="live-indicator">LIVE</div>
                <div class="viewer-count">👁️ ${stream.viewers.toLocaleString()}</div>
            </div>
            <div class="stream-card-info">
                <div class="stream-card-header">
                    <img src="${stream.avatar}" alt="${stream.streamer}" class="stream-card-avatar">
                    <div class="stream-card-details">
                        <h3>${stream.title}</h3>
                        <p>${stream.streamer}</p>
                    </div>
                </div>
            </div>
        `;

        streamCard.addEventListener('click', () => {
            console.log(`Clicked stream: ${stream.title}`);
            // Update featured stream
            document.getElementById('streamerName').textContent = stream.streamer;
            document.getElementById('streamTitle').textContent = stream.title;
        });

        streamsGrid.appendChild(streamCard);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderStreams();
});