document.getElementById("feedbackForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
    const message = document.getElementById("message");

    try {
        const response = await fetch("http://localhost:3000/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                feedback
            })
        });

        const data = await response.json();

        message.innerText = data.message;

        if (response.ok) {
            message.style.color = "green";
            document.getElementById("feedbackForm").reset();
        } else {
            message.style.color = "red";
        }

    } catch (error) {
        message.innerText = "Server connection failed.";
        message.style.color = "red";
    }
});