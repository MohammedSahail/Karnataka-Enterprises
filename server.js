// Dragging Support
let navbar = document.querySelector('.draggable');
let isDragging = false;
let offset = { x: 0, y: 0 };

navbar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offset.x = e.clientX - navbar.getBoundingClientRect().left;
    offset.y = e.clientY - navbar.getBoundingClientRect().top;
    navbar.style.position = 'absolute';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        navbar.style.left = `${e.clientX - offset.x}px`;
        navbar.style.top = `${e.clientY - offset.y}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Mobile Animation
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
        navbar.classList.remove('show'); // Hide on scroll down
    } else {
        navbar.classList.add('show'); // Show on scroll up
    }
    lastScrollTop = currentScrollTop;
});

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// Send the data to Google Sheets via the Web App
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.text())
        .then((data) => {
            alert("Form submitted successfully!");
            console.log(data);
        })
        .catch((error) => {
            alert("An error occurred. Please try again.");
            console.error(error);
        });
console.log(formData);
const formData = { nam, email, message }; // Correct structure

