// Custom JS (Optional: For extra interactivity, if needed)
console.log("Page loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
    const profileCards = document.querySelectorAll(".animate-profile");

    const revealProfiles = () => {
        profileCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                card.classList.add("visible");
            }
        });
    };

    revealProfiles(); // Reveal on load
    window.addEventListener("scroll", revealProfiles); // Reveal on scroll
});
document.getElementById("themeSwitcher").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    const themeIcon = document.getElementById("themeIcon");
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.classList.replace("bi-sun", "bi-moon");
    } else {
        themeIcon.classList.replace("bi-moon", "bi-sun");
    }
});
const sections = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
});
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Your Web App URL from Step 3
    const apiUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjPZyxM8Y5FDPRzEctOX2GSBtipl1BWG73G0GqldMosf0k5hX6CUNo_zCRyhO6tJzQ3azIxCwL-2De8-woGx_TS15x20IKZ4js5MYiTCnrG_MD7_4bHLoCQVfTNNFSiJPTkyKU797KjCoERkBR_GhqzVVj2M-wymFNMnfH5hKSuPl9piYZfvzbaDFSOip9EfeKKlSYDGnSqPFI_y3g84HsjUzD8__KeGc0oQ9ryiJagUmJwtrdm10n58Q_6Trg4AOu53GzN3lGjZJgqnPULN6A_WaY1Gg&lib=MKpBnPKA-kMPFE79w1ZOcyB4Y6hZm03YW"; // Replace with your Web App URL

    // Prepare the data to be sent
    const formData = { name, email, message };

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
});
console.log(formData);
const formData = { nam, email, message }; // Correct structure
fetch(apiUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then((data) => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
    })
    .catch((error) => {
        console.error("Error occurred:", error);
        alert("An error occurred: " + error.message);
    });
function doPost(e) {
    Logger.log("Request received: " + JSON.stringify(e.postData.contents)); // Log incoming data
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");

    try {
        const data = JSON.parse(e.postData.contents);
        sheet.appendRow([data.name, data.email, data.message, new Date()]);
        return ContentService.createTextOutput("Data saved successfully!");
    } catch (error) {
        Logger.log("Error: " + error.message);
        return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
    }
}
// Auto-scroll functionality
document.addEventListener("DOMContentLoaded", () => {
    const showcase = document.querySelector(".immersive-showcase");
    const items = document.querySelectorAll(".showcase-item");
    let currentIndex = 0;

    // Function to scroll to the next section
    function autoScroll() {
        currentIndex = (currentIndex + 1) % items.length; // Loop back to the first section
        showcase.scrollTo({
            left: currentIndex * window.innerWidth,
            behavior: "smooth",
        });
    }

    // Set interval for auto-scrolling every 5 seconds
    setInterval(autoScroll, 5000);
});



