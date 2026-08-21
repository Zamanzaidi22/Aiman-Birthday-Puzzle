// ==========================================
// Aiman Birthday Puzzle
// Main JavaScript
// ==========================================

const welcomeScreen =
    document.getElementById("welcomeScreen");

const gameScreen =
    document.getElementById("gameScreen");

const startButton =
    document.getElementById("startButton");

const backButton =
    document.getElementById("backButton");


// ==========================================
// START THE JOURNEY
// ==========================================

startButton.addEventListener(
    "click",
    function () {

        welcomeScreen.classList.add("hidden");

        gameScreen.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// ==========================================
// BACK TO WELCOME SCREEN
// ==========================================

backButton.addEventListener(
    "click",
    function () {

        gameScreen.classList.add("hidden");

        welcomeScreen.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);
