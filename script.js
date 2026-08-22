// ==========================================
// Aiman Birthday Puzzle
// Multi-Level Puzzle Engine
// ==========================================


// ==========================================
// ELEMENTS
// ==========================================

const welcomeScreen =
    document.getElementById("welcomeScreen");

const gameScreen =
    document.getElementById("gameScreen");

const startButton =
    document.getElementById("startButton");

const backButton =
    document.getElementById("backButton");

const previewCard =
    document.getElementById("previewCard");

const previewImage =
    document.querySelector(".preview-image");

const puzzleArea =
    document.getElementById("puzzleArea");

const puzzleBoard =
    document.getElementById("puzzleBoard");

const movesCount =
    document.getElementById("movesCount");

const finalMoves =
    document.getElementById("finalMoves");

const shuffleButton =
    document.getElementById("shuffleButton");

const solvedCard =
    document.getElementById("solvedCard");

const solvedImage =
    document.querySelector(".solved-image");

const solvedMessage =
    document.querySelector(".solved-message");

const nextLevelButton =
    document.getElementById("nextLevelButton");

const levelTitle =
    document.getElementById("levelTitle");

const levelProgress =
    document.querySelector(".level-progress");


// ==========================================
// LEVEL DATA
// ==========================================

const levels = [

    {
        image:
            "assets/photos/level1.jpg",

        message:
            "Some pictures are more than pictures... they quietly hold a little piece of time."
    },

    {
        image:
            "assets/photos/level2.jpg",

        message:
            "Some smiles don’t ask for attention... they simply make a moment feel softer."
    },

    {
        image:
            "assets/photos/level3.jpg",

        message:
            "Some smiles don't need a reason to be remembered... they simply become a reason to smile again. ❤️"
    },

    {
    image:
        "assets/photos/level4.jpg",

    message:
        "Pata nahi is tasveer mein kya khaas hai… bas jab bhi dekho, kuch pal ke liye nazar yahin ruk jaati hai. ❤️"
    },

    {
    image:
        "assets/photos/level5.jpg",

    message:
        "Titli to filter wali hai… 🦋 par is tasveer ki masoomiyat bilkul asli hai. ❤️"
    },

    {
    image:
        "assets/photos/level6.jpg",

    message:
        "Saadgi bhi kitni khoobsurat ho sakti hai, ye tasveer har baar bata deti hai. 🤍✨"
    },

    {
    image:
        "assets/photos/level7.jpg",

    message:
        "Tab na duniya ki fikr thi, na waqt ka hisaab… bas ek chhoti si Aiman thi, aur uski masoom si duniya. 🥹❤️"
    },

    {
    image:
        "assets/photos/level8.jpg",

    message:
        "Libaas ki khoobsurti apni jagah… magar saadgi jab chehre par utar aaye, to baat hi kuch aur hoti hai. ✨❤️"
    },

    {
    image:
        "assets/photos/level9.jpg",

    message:
        "Laal rang pehle bhi khoobsurat tha… par tumne pehna, to thoda zyada ho gaya. ❤️😄"
    },

    {
    image:
        "assets/photos/level10.jpg",

    message:
        "Some faces fade with passing years, but yours somehow grows brighter in memory. ❤️"
    },

    {
    image:
        "assets/photos/level11.jpg",

    message:
        "Kuch chehre bas dekhe nahi jaate… dil unhe khamoshi se yaad rakh leta hai. ❤️"
    }
];

// ==========================================
// GAME VARIABLES
// ==========================================

const totalPieces = 9;

let currentLevel = 0;

let pieces = [];

let selectedIndex = null;

let moves = 0;

let gameStarted = false;


// ==========================================
// START JOURNEY
// ==========================================

startButton.addEventListener(
    "click",
    function () {

        currentLevel = 0;

        welcomeScreen.classList.add("hidden");

        gameScreen.classList.remove("hidden");

        loadLevel();

    }
);


// ==========================================
// LOAD LEVEL
// ==========================================

function loadLevel() {

    const level =
        levels[currentLevel];


    gameStarted = false;

    selectedIndex = null;

    moves = 0;

    movesCount.textContent = "0";


    levelTitle.textContent =
        `Level ${currentLevel + 1}`;


    levelProgress.textContent =
        `Memory ${currentLevel + 1} of 30`;


    previewImage.src =
        level.image;


    solvedImage.src =
        level.image;


    solvedMessage.textContent =
        level.message;


    previewCard.classList.remove(
        "hidden"
    );

    puzzleArea.classList.add(
        "hidden"
    );

    solvedCard.classList.add(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    setTimeout(
        function () {

            previewCard.classList.add(
                "hidden"
            );

            puzzleArea.classList.remove(
                "hidden"
            );

            createPuzzle();

            gameStarted = true;

        },
        3000
    );

}


// ==========================================
// CREATE PUZZLE
// ==========================================

function createPuzzle() {

    pieces = [];

    selectedIndex = null;

    moves = 0;

    movesCount.textContent = "0";

    puzzleBoard.innerHTML = "";


    for (
        let i = 0;
        i < totalPieces;
        i++
    ) {

        pieces.push(i);

    }


    shufflePieces();

    renderPuzzle();

}


// ==========================================
// SHUFFLE
// ==========================================

function shufflePieces() {

    do {

        for (
            let i = pieces.length - 1;
            i > 0;
            i--
        ) {

            const randomIndex =
                Math.floor(
                    Math.random()
                    * (i + 1)
                );


            [
                pieces[i],
                pieces[randomIndex]
            ] = [
                pieces[randomIndex],
                pieces[i]
            ];

        }

    } while (isSolved());

}


// ==========================================
// RENDER PUZZLE
// ==========================================

function renderPuzzle() {

    puzzleBoard.innerHTML = "";

    const level =
        levels[currentLevel];


    pieces.forEach(
        function (
            pieceNumber,
            index
        ) {

            const piece =
                document.createElement(
                    "div"
                );


            piece.classList.add(
                "puzzle-piece"
            );


            const row =
                Math.floor(
                    pieceNumber / 3
                );


            const column =
                pieceNumber % 3;


            piece.style.backgroundImage =
                `url("${level.image}")`;


            piece.style.backgroundSize =
                "300% 300%";


            piece.style.backgroundPosition =
                `${column * 50}% ${row * 50}%`;


            if (
                selectedIndex
                === index
            ) {

                piece.classList.add(
                    "selected"
                );

            }


            piece.addEventListener(
                "click",
                function () {

                    handlePieceClick(
                        index
                    );

                }
            );


            puzzleBoard.appendChild(
                piece
            );

        }
    );

}


// ==========================================
// HANDLE PIECE TAP
// ==========================================

function handlePieceClick(index) {

    if (!gameStarted) {
        return;
    }


    if (selectedIndex === null) {

        selectedIndex = index;

        renderPuzzle();

        return;

    }


    if (
        selectedIndex
        === index
    ) {

        selectedIndex = null;

        renderPuzzle();

        return;

    }


    [
        pieces[selectedIndex],
        pieces[index]
    ] = [
        pieces[index],
        pieces[selectedIndex]
    ];


    selectedIndex = null;

    moves++;

    movesCount.textContent =
        moves;


    renderPuzzle();


    if (isSolved()) {

        setTimeout(
            showSolvedScreen,
            350
        );

    }

}


// ==========================================
// CHECK SOLVED
// ==========================================

function isSolved() {

    return pieces.every(
        function (
            piece,
            index
        ) {

            return (
                piece === index
            );

        }
    );

}


// ==========================================
// SHUFFLE AGAIN
// ==========================================

shuffleButton.addEventListener(
    "click",
    function () {

        selectedIndex = null;

        moves = 0;

        movesCount.textContent =
            "0";

        shufflePieces();

        renderPuzzle();

    }
);


// ==========================================
// SOLVED SCREEN
// ==========================================

function showSolvedScreen() {

    gameStarted = false;

    puzzleArea.classList.add(
        "hidden"
    );

    solvedCard.classList.remove(
        "hidden"
    );

    finalMoves.textContent =
        moves;


    if (
        currentLevel
        === levels.length - 1
    ) {

        nextLevelButton.textContent =
            "More Memories Coming ❤️";

    }

    else {

        nextLevelButton.textContent =
            "Next Memory →";

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// NEXT LEVEL
// ==========================================

nextLevelButton.addEventListener(
    "click",
    function () {

        if (
            currentLevel
            < levels.length - 1
        ) {

            currentLevel++;

            loadLevel();

        }

        else {

            alert(
                "More memories are coming soon ❤️"
            );

        }

    }
);


// ==========================================
// BACK BUTTON
// ==========================================

backButton.addEventListener(
    "click",
    function () {

        gameStarted = false;

        selectedIndex = null;

        gameScreen.classList.add(
            "hidden"
        );

        welcomeScreen.classList.remove(
            "hidden"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);
