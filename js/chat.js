const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChat');
const chatMessages = document.getElementById('chatMessages');

const sampleMessages = [
    { username: 'Moderator', message: 'Welcome to the stream!' },
    { username: 'User123', message: 'This is awesome!' },
    { username: 'StreamFan', message: 'Great content as always' },
];

function addMessage(username, message) {
    const messageEl = document.createElement('div');
    messageEl.className = 'chat-message';
    messageEl.innerHTML = `
        <span class="username">${username}</span>
        <span class="message">${message}</span>
    `;
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function loadSampleMessages() {
    sampleMessages.forEach(msg => {
        addMessage(msg.username, msg.message);
    });
}

sendChatBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        addMessage('You', message);
        chatInput.value = '';
        chatInput.focus();
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatBtn.click();
    }
});

// Load sample messages on page load
document.addEventListener('DOMContentLoaded', () => {
    loadSampleMessages();
});