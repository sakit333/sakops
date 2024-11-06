// function updateTimestamp() {
//     const now = new Date();
//     document.getElementById('timestamp').textContent = now.toLocaleString('en-GB');}
// updateTimestamp();
// setInterval(updateTimestamp, 1000);

function checkLogin(event) {
    event.preventDefault();
    var username = prompt("Enter username:");
    var password = prompt("Enter password:");
    if (username === "sak" && password === "sak333") {
        window.location.href = "notes_info.html";
    } else {
        // window.location.href = "index.html";
        alert("Incorrect username or password. \nPlease try again.");
    }
}
























