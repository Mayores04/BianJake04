document.getElementById("submitBtn").addEventListener("click", function() {
    const nameInput = document.getElementById("nameInput").value.trim();
    const correctName = "Angelika Bianca"; // The correct name
    const initialScreen = document.getElementById("initialScreen");
    const heartContainer = document.querySelector(".heart-container");
    const heart = document.getElementById("heart");
    const greeting = document.getElementById("greeting");

    if (nameInput.toLowerCase() === correctName.toLowerCase()) {
        // If the input name matches the correct name
        initialScreen.classList.add("hidden"); // Hide the initial screen
        heartContainer.style.display = "block"; // Show the heart container

        // Gradually reveal the heart
        setTimeout(function() {
            heart.style.opacity = "1";
        }, 1000);

        // Show the greeting
        setTimeout(function() {
            greeting.style.display = "block";
        }, 3000);
    } else {
        alert("Sorry, you are not my Girlfriend.");
    }
});
