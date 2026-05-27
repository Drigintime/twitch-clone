const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChat');
const chatMessages = document.getElementById('chatMessages');
const overlayChatMessages = document.getElementById('overlayChatMessages');

// Chat messages with various platforms
const crazyChatMessages = {
    1: [ // v0rtrox - Geometry Dash
        { user: 'ChatSpammer', message: 'LETS GOOOOO', platform: 'twitch' },
        { user: 'GDFan', message: 'This is insane bro', platform: 'twitch' },
        { user: 'TwitchUser123', message: 'E', platform: 'twitch' },
        { user: 'YT_Watcher', message: 'CYCLES X IS CRAZY', platform: 'youtube' },
        { user: 'ModChat', message: 'Keep it PG guys', platform: 'twitch' },
        { user: 'SpamBot', message: 'OOOOOO SO CLOSE', platform: 'twitch' },
        { user: 'GeomDashGod', message: '93% is mental', platform: 'youtube' },
        { user: 'RandomDude', message: 'how is this possible??', platform: 'twitch' },
        { user: 'ChatMod', message: 'MONKAS', platform: 'twitch' },
        { user: 'LurkingViewer', message: 'v0rtrox is too good', platform: 'twitch' },
        { user: 'YTGamer', message: 'POG', platform: 'youtube' },
        { user: 'Troll', message: 'L attempt', platform: 'twitch' },
        { user: 'Supporter', message: 'You got this!!!', platform: 'twitch' },
        { user: 'TwitchChat', message: 'OMEGALUL', platform: 'twitch' },
        { user: 'BadConnection', message: 'lag??', platform: 'youtube' },
        { user: 'SpeedrunFan', message: 'world record pace???', platform: 'twitch' },
        { user: 'EmoteSpam', message: '7 7 7', platform: 'twitch' },
        { user: 'Hype', message: 'HYPERS', platform: 'twitch' },
        { user: 'YTChat', message: 'This is nuts', platform: 'youtube' },
        { user: 'Veteran', message: 'seen it a thousand times', platform: 'twitch' },
    ],
    2: [ // Kingsammelot - Geometry Dash
        { user: 'GDCommunity', message: '40-100 IS POSSIBLE', platform: 'twitch' },
        { user: 'KingsChat', message: 'NOOOO SO CLOSE', platform: 'youtube' },
        { user: 'ExtremeGamer', message: 'THAT WAS MENTAL', platform: 'twitch' },
        { user: 'DemonRunner', message: '67%!! GET IT!', platform: 'twitch' },
        { user: 'ModChat', message: 'STOP SPAMMING', platform: 'twitch' },
        { user: 'YTViewer', message: 'how does he do this??', platform: 'youtube' },
        { user: 'ChatBot', message: 'EEEEEE', platform: 'twitch' },
        { user: 'Lurker', message: 'silvertown jumps are insane', platform: 'twitch' },
        { user: 'TwitchPrime', message: 'subbed!', platform: 'twitch' },
        { user: 'YT_Comments', message: 'WOW WOW WOW', platform: 'youtube' },
        { user: 'SpammerKing', message: 'OMEGA JUMP', platform: 'twitch' },
        { user: 'ExtremeSupport', message: 'U CAN DO IT', platform: 'twitch' },
        { user: 'GDVerified', message: 'this is legitimately insane', platform: 'youtube' },
        { user: 'Hype_Train', message: 'FULL MEGA', platform: 'twitch' },
        { user: 'Random', message: 'what game is this', platform: 'twitch' },
        { user: 'YTUser99', message: 'absolute legend', platform: 'youtube' },
        { user: 'ChatMadness', message: 'AHHHHHHH', platform: 'twitch' },
    ],
    3: [ // Robtop - Just Chatting
        { user: 'GDFan1', message: 'Robtop!!! love you', platform: 'twitch' },
        { user: 'Developer', message: 'thanks for the game', platform: 'youtube' },
        { user: 'ChatMod', message: 'Chill everyone', platform: 'twitch' },
        { user: 'CommunityMember', message: 'what about 2.2', platform: 'twitch' },
        { user: 'YT_Sub', message: 'CREATOR IS HERE', platform: 'youtube' },
        { user: 'Troll2', message: 'bring back 1.9', platform: 'twitch' },
        { user: 'Lurker2', message: 'just vibing', platform: 'twitch' },
        { user: 'Supporter2', message: 'thanks for years of content', platform: 'youtube' },
        { user: 'ChatSpam', message: '2.2 2.2 2.2', platform: 'twitch' },
        { user: 'RandomGuy', message: 'how many years now?', platform: 'twitch' },
    ],
    4: [ // ProGamer - Minecraft
        { user: 'MinecraftFan', message: 'LETS GOOOO', platform: 'twitch' },
        { user: 'SpeedrunnerChat', message: '45:32 is INSANE', platform: 'youtube' },
        { user: 'ChatMod2', message: 'sub hype', platform: 'twitch' },
        { user: 'BlockGame', message: 'minecraft speed runners are built different', platform: 'twitch' },
        { user: 'YT_Speedrun', message: 'world record pace???', platform: 'youtube' },
        { user: 'Bored', message: 'pog', platform: 'twitch' },
    ],
    5: [ // ValorantPro - Valorant
        { user: 'ValorantChat', message: 'RADIANT GRIND', platform: 'twitch' },
        { user: 'ProPlayer', message: 'nutty aim', platform: 'youtube' },
        { user: 'FPS', message: 'that headshot though', platform: 'twitch' },
        { user: 'Mod', message: 'GG', platform: 'twitch' },
        { user: 'YTGamer2', message: 'insane game sense', platform: 'youtube' },
    ],
    6: [ // CreativeStreamer - Just Chatting
        { user: 'ChillChat', message: 'vibes', platform: 'twitch' },
        { user: 'JustChilling', message: 'relaxing stream', platform: 'youtube' },
        { user: 'CasualWatcher', message: 'what are we talking about', platform: 'twitch' },
    ],
    7: [ // FortniteKing - Fortnite
        { user: 'FortniteChat', message: 'TOURNAMENT TIME', platform: 'twitch' },
        { user: 'BuildFighter', message: '360 no scope', platform: 'youtube' },
        { user: 'Gamer', message: 'BIG BRAIN PLAYS', platform: 'twitch' },
    ],
    8: [ // CodeMaster - Just Chatting
        { user: 'DevChat', message: 'React is better', platform: 'twitch' },
        { user: 'Programmer', message: 'what language?', platform: 'youtube' },
        { user: 'TechNerd', message: 'JavaScript go brrrr', platform: 'twitch' },
    ]
};

// Generate crazy chat
function generateCrazyChat(streamerId) {
    const messages = crazyChatMessages[streamerId] || crazyChatMessages[1];
    
    chatMessages.innerHTML = '';
    overlayChatMessages.innerHTML = '';
    
    messages.forEach((msg, index) => {
        setTimeout(() => {
            addChatMessage(msg.user, msg.message, msg.platform);
        }, index * 300);
    });
}

// Add chat message to both chat areas
function addChatMessage(user, message, platform = 'twitch') {
    // Main chat
    const chatEl = document.createElement('div');
    chatEl.className = 'chat-message';
    chatEl.innerHTML = `
        <span class="username">${user}</span>
        <span class="platform-badge ${platform === 'youtube' ? 'youtube-badge' : ''}">${platform === 'youtube' ? 'YT' : 'T'}</span>
        <span class="message">${message}</span>
    `;
    chatMessages.appendChild(chatEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Overlay chat
    const overlayEl = document.createElement('div');
    overlayEl.className = 'overlay-chat-message';
    overlayEl.innerHTML = `
        <span class="overlay-username">${user}</span>
        <span class="overlay-platform">${platform === 'youtube' ? '▶️' : '◀️'}</span>
        <span class="overlay-message-text">${message}</span>
    `;
    overlayChatMessages.appendChild(overlayEl);
    
    // Auto-scroll overlay and limit messages
    if (overlayChatMessages.children.length > 8) {
        overlayChatMessages.removeChild(overlayChatMessages.children[0]);
    }
    overlayChatMessages.scrollTop = overlayChatMessages.scrollHeight;
}

// Send message
sendChatBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        addChatMessage('You', message, 'twitch');
        chatInput.value = '';
        chatInput.focus();
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatBtn.click();
    }
});