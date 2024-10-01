function updateTimestamp() {
    const now = new Date();
    document.getElementById('timestamp').textContent = now.toLocaleString();
}
updateTimestamp();
setInterval(updateTimestamp, 1000);




























