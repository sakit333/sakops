function updateTimestamp() {
    const now = new Date();
    document.getElementById('timestamp').textContent = now.toLocaleString('en-GB');}
updateTimestamp();
setInterval(updateTimestamp, 1000);




























