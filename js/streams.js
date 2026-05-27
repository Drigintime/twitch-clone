// Stream management functions

function followStreamer(streamerId) {
    console.log(`Followed streamer: ${streamerId}`);
    // In a real app, this would send a request to the backend
}

function shareStream(streamerId) {
    console.log(`Shared stream: ${streamerId}`);
    // Implement share functionality
}

function reportStream(streamerId) {
    console.log(`Reported stream: ${streamerId}`);
    // Implement report functionality
}

// Listen for stream card interactions
document.addEventListener('click', (e) => {
    if (e.target.closest('.stream-card')) {
        const card = e.target.closest('.stream-card');
        console.log('Stream card clicked');
    }
});