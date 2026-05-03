const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let feedbackData = [];

app.post("/feedback", (req, res) => {
    const { name, email, feedback } = req.body;

    if (!name || !email || !feedback) {
        return res.status(400).json({
            message: "Please fill all required fields."
        });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return res.status(400).json({
            message: "Invalid email format."
        });
    }

    feedbackData.push({
        name,
        email,
        feedback,
        time: new Date()
    });

    res.status(200).json({
        message: "Feedback submitted successfully!"
    });
});

app.get("/", (req, res) => {
    res.send("Feedback API is running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});