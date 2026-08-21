// ==========================================
// Aiman Birthday Puzzle
// Level 1 Puzzle Engine
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

const nextLevelButton =
    document.getElementById("nextLevelButton");


// ==========================================
// GAME SETTINGS
// ==========================================

const totalPieces = 9;

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

        welcomeScreen.classList.add("hidden");

        gameScreen.classList.remove("hidden");

        previewCard.classList.remove("hidden");

        puzzleArea.classList.add("hidden");

        solvedCard.classList.add("hidden");

        moves = 0;

        movesCount.textContent = "0";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(
            function () {

                previewCard.classList.add("hidden");

                puzzleArea.classList.remove("hidden");

                createPuzzle();

                gameStarted = true;

            },
            3000
        );

    }
);


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
                    Math.random() * (i + 1)
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

    pieces.forEach(
        function (pieceNumber, index) {

            const piece =
                document.createElement("div");

            piece.classList.add("puzzle-piece");

            piece.dataset.index = index;

            piece.dataset.piece =
                pieceNumber;


            const row =
                Math.floor(
                    pieceNumber / 3
                );

            const column =
                pieceNumber % 3;


            piece.style.backgroundSize =
                "300% 300%";

            piece.style.backgroundPosition =
                `${column * 50}% ${row * 50}%`;


            if (selectedIndex === index) {

                piece.classList.add(
                    "selected"
                );

            }


            piece.addEventListener(
                "click",
                function () {

                    handlePieceClick(index);

                }
            );


            puzzleBoard.appendChild(piece);

        }
    );

}


// ==========================================
// PIECE CLICK
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


    if (selectedIndex === index) {

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

    movesCount.textContent = moves;

    renderPuzzle();


    if (isSolved()) {

        setTimeout(
            showSolvedScreen,
            350
        );

    }

}


// ==========================================
// CHECK IF SOLVED
// ==========================================

function isSolved() {

    return pieces.every(
        function (piece, index) {

            return piece === index;

        }
    );

}


// ==========================================
// SHUFFLE BUTTON
// ==========================================

shuffleButton.addEventListener(
    "click",
    function () {

        selectedIndex = null;

        moves = 0;

        movesCount.textContent = "0";

        shufflePieces();

        renderPuzzle();

    }
);


// ==========================================
// SOLVED SCREEN
// ==========================================

function showSolvedScreen() {

    gameStarted = false;

    puzzleArea.classList.add("hidden");

    solvedCard.classList.remove("hidden");

    finalMoves.textContent = moves;

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

        alert(
            "Level 2 coming next ❤️"
        );

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

        gameScreen.classList.add("hidden");

        welcomeScreen.classList.remove("hidden");

        previewCard.classList.remove("hidden");

        puzzleArea.classList.add("hidden");

        solvedCard.classList.add("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);
