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


document.addEventListener("DOMContentLoaded", function () {
    const students = [
        {
            name: "Mahesh Gowda M G",
            degree: "BE",
            passingYear: "2024",
            stream: "Computer Science",
            projectName: "Fitness training NEO GYM",
            githubLink: "https://github.com/maheshgowdamg/webapp.git",
            images: [
                "https://raw.githubusercontent.com/maheshgowdamg/webapp/refs/heads/main/Screenshot%202025-01-31%20122156.png",
                "https://raw.githubusercontent.com/maheshgowdamg/webapp/refs/heads/main/Screenshot%202025-01-31%20121948.png",
                "https://raw.githubusercontent.com/maheshgowdamg/webapp/refs/heads/main/Screenshot%202025-01-31%20122048.png",
                "https://raw.githubusercontent.com/maheshgowdamg/webapp/refs/heads/main/Screenshot%202025-01-31%20122011.png"
            ]
        },
        {
            name: "Sanjana",
            degree: "BE",
            passingYear: "2024",
            stream: "Electronics and Communication Engineering",
            projectName: "IKEA Clone",
            githubLink: "https://github.com/sanjana2580/IKEA_Clone_project.git",
            images: [
                "https://raw.githubusercontent.com/sanjana2580/IKEA_Clone_project/refs/heads/main/Screenshot%202025-01-31%20130545.png",
                "https://raw.githubusercontent.com/sanjana2580/IKEA_Clone_project/refs/heads/main/Screenshot%202025-01-31%20130630.png",
                "https://raw.githubusercontent.com/sanjana2580/IKEA_Clone_project/refs/heads/main/Screenshot%202025-01-31%20130708.png",
                "https://raw.githubusercontent.com/sanjana2580/IKEA_Clone_project/refs/heads/main/Screenshot%202025-01-31%20130806.png"
            ]
        },
        {
            name: "Harshitha H M",
            degree: "BE",
            passingYear: "2023",
            stream: "Information Science and Engineering",
            projectName: "Gear Shift Zone",
            githubLink: "https://github.com/harshitha-mallikarjunaiah/GearShiftZone.git",
            images: [
                "https://raw.githubusercontent.com/harshitha-mallikarjunaiah/GearShiftZone/refs/heads/main/webpage.jpeg",
                "https://raw.githubusercontent.com/harshitha-mallikarjunaiah/GearShiftZone/refs/heads/main/jenkins_img.jpeg",
                "https://raw.githubusercontent.com/harshitha-mallikarjunaiah/GearShiftZone/refs/heads/main/tomcat_img.jpeg",
                "https://raw.githubusercontent.com/harshitha-mallikarjunaiah/GearShiftZone/refs/heads/main/git-img.jpg"
            ]
        },
        {
            name: "Sneha N Prasad",
            degree: "BCA",
            passingYear: "2023",
            stream: "Computer Science",
            projectName: "Food Application",
            githubLink: "https://github.com/Nagendra1964/war.git",
            images: [
                "https://raw.githubusercontent.com/Nagendra1964/war/main/webapp.PNG",
                "https://raw.githubusercontent.com/Nagendra1964/war/main/webapp.PNG",
                "https://raw.githubusercontent.com/Nagendra1964/war/main/webapp.PNG"
            ]
        },
        {
            name: "Achuth M Palankar",
            degree: "BSC",
            passingYear: "2023",
            stream: "PCM",
            projectName: "Flippy Webapp",
            githubLink: "https://github.com/AchuthMPalankar/html-project.git",
            images: [
                "https://raw.githubusercontent.com/AchuthMPalankar/html-project/main/Capture.JPG",
                "https://raw.githubusercontent.com/AchuthMPalankar/html-project/main/Capture.JPG",
                "https://raw.githubusercontent.com/AchuthMPalankar/html-project/main/Capture.JPG"
            ]
        },
        {
            name: "Naresh",
            degree: "BE",
            passingYear: "2016",
            stream: "Mechanical",
            projectName: "Maintenance Services",
            githubLink: "https://github.com/nare893/project3.git",
            images: [
                "https://raw.githubusercontent.com/nare893/project3/main/Screenshotwebapp.png",
                "https://raw.githubusercontent.com/nare893/project3/main/Screenshotwebapp.png",
                "https://raw.githubusercontent.com/nare893/project3/main/Screenshotwebapp.png"
            ]
        },
        {
            name: "Shivaraja",
            degree: "BE",
            passingYear: "2018",
            stream: "Instrumentation Technology",
            projectName: "Clone Netflix Webapp",
            githubLink: "https://github.com/ShivaHK18/netflix.git",
            images: [
                "https://raw.githubusercontent.com/ShivaHK18/netflix/master/netflixprojectfrontpage.png",
                "https://raw.githubusercontent.com/ShivaHK18/netflix/master/netflixprojectfrontpage.png",
                "https://raw.githubusercontent.com/ShivaHK18/netflix/master/netflixprojectfrontpage.png"
            ]
        },
        {
            name: "Ramesh Chandra R",
            degree: "BE",
            passingYear: "2024",
            stream: "Mechanical Engineering",
            projectName: "Stock Market Webapp",
            githubLink: "https://github.com/Rameshchandrar/Web-Tech.git",
            images: [
                "https://raw.githubusercontent.com/Rameshchandrar/Web-Tech/refs/heads/master/screenshot.png",
                "https://raw.githubusercontent.com/Rameshchandrar/Web-Tech/refs/heads/master/screenshot.png",
                "https://raw.githubusercontent.com/Rameshchandrar/Web-Tech/refs/heads/master/screenshot.png"
            ]
        }
    ];

    const studentsList = document.getElementById("students-list");

    students.forEach((student, index) => {
        const studentDiv = document.createElement("div");
        studentDiv.className = "container mb-4";

        let carouselHtml = "";
        if (student.images.length > 1) {
            carouselHtml = `
                <div id="carousel${index}" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        ${student.images.map((img, i) =>
                `<div class="carousel-item ${i === 0 ? "active" : ""}">
                                <img src="${img}" class="d-block w-100" alt="${student.name}">
                            </div>`
            ).join("")}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel${index}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel${index}" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>`;
        } else {
            carouselHtml = `<img src="${student.images[0]}" class="d-block w-100" alt="${student.name}" style="max-width: 100%; height: auto;">`;
        }

        studentDiv.innerHTML = `
            <div class="student-info">
                <h2><strong>${student.name}</strong></h2>
                <p>Degree: ${student.degree}</p>
                <p>Year of Passing: ${student.passingYear}</p>
                <p>Stream: ${student.stream}</p>
                <p>Project Name: ${student.projectName}</p>
                <p>Project GitHub Link: <a href="${student.githubLink}" target="_blank">GitHub Repo</a></p>
            </div>
            <div class="text-center">${carouselHtml}</div>
        `;
        studentsList.appendChild(studentDiv);
    });
});
