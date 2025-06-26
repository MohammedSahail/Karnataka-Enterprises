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

