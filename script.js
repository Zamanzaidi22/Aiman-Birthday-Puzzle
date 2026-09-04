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

const continueButton = 
    document.getElementById("continueButton");

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

const journeyProgressFill =
    document.getElementById("journeyProgressFill");

const piecesDisplay =
    document.getElementById("piecesDisplay");

const finalSurpriseScreen =
    document.getElementById("finalSurpriseScreen");

const revealGiftButton =
    document.getElementById("revealGiftButton");

const giftReveal =
    document.getElementById("giftReveal");

const birthdaySong =
    document.getElementById("birthdaySong");

const ambientMusic =
    document.getElementById("ambientMusic");

const musicToggle =
    document.getElementById("musicToggle");

let musicMuted = false;

// ==========================================
// MUSIC TRANSITION
// Birthday Song → Ambient Music
// ==========================================

birthdaySong.addEventListener(
    "ended",
    function () {

        ambientMusic.currentTime = 0;
        ambientMusic.volume = 0.28;

        ambientMusic.play().catch(
            function () {
                console.log(
                    "Ambient playback was blocked."
                );
            }
        );

    }
);

// ==========================================
// MUSIC ON / OFF CONTROL
// ==========================================

function updateMusicButton() {

    if (musicMuted) {

        musicToggle.textContent = "🔇";

        musicToggle.classList.add(
            "music-muted"
        );

        musicToggle.classList.remove(
            "music-playing"
        );

    } else {

        musicToggle.textContent = "♫";

        musicToggle.classList.remove(
            "music-muted"
        );

        if (
            !birthdaySong.paused ||
            !ambientMusic.paused
        ) {

            musicToggle.classList.add(
                "music-playing"
            );

        }

    }

}


musicToggle.addEventListener(
    "click",
    function () {

        musicMuted =
            !musicMuted;

        birthdaySong.muted =
            musicMuted;

        ambientMusic.muted =
            musicMuted;

        updateMusicButton();

    }
);
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
    },

    {
        image:
            "assets/photos/level12.jpg",

        message:
            "Wrapped in grace, touched by light… some moments look almost like a dream. ✨"
    },

    {
        image:
            "assets/photos/level13.jpg",

        message:
            "Tum yun hi muskura diya karo… kuch lamhe bina wajah bhi khoobsurat hone chahiye. ❤️✨"
    },

    {
        image:
            "assets/photos/level14.jpg",

        message:
            "No grand occasion, no perfect scene… just you, being effortlessly you. ✨"
    },

    {
        image:
            "assets/photos/level15.jpg",

        message:
            "Nigahon mein thehra hua ek sukoon sa hai, jaise kisi khoobsurat dua ka noor sa hai… ✨❤️"
    },

    // ======================================
    // LEVEL 16 — MAKKAH
    // 4 × 4 PUZZLE STARTS FROM HERE
    // ======================================

    {
        image:
            "assets/photos/level16.jpg",

        message:
            "Khwahish sirf Kaaba dekhne ki nahi… ek dua ye bhi hai, kabhi yahan tum saath ho. 🕋🤍"
    },

    {
    image:
        "assets/photos/level17.jpg",

    message:
        "Kaaba se chale to ek dua Madina tak aa pahunchi… umeed hai ek din ye tasveer khwaab nahi, hamari haqeeqat hogi. 🤍🕌"
    },

    {
    image:
        "assets/photos/level18.jpg",

    message:
        "Safar ki agli dua Jamkaran ke naam… umeed hai ek din hum yahan saath khade hokar apni adhuri duaon ko mukammal karenge. 🤍✨"
    },

    {
    image:
        "assets/photos/level19.jpg",

    message:
        "Ibteda-e-Ishq meri kuch iss tarah se ho, Saath humsafar ke safar ‘Karbala’ ka ho. 🖤"
    },

    {
    image:
        "assets/photos/level20.jpg",

    message:
        "Istanbul ki shaam ho, tum saath ho… phir manzil kahan hai, ye poochhne ki zarurat hi kya hai. ❤️🇹🇷"
    },

    {
    image:
        "assets/photos/level21.jpg",

    message:
        "Kabhi in parindon ki tarah hum bhi nikal padenge… na waqt ki fikr hogi, na manzil ki—bas tum, main aur ek khoobsurat safar. 🕊️❤️"
    },

    {
    image:
        "assets/photos/level22.jpg",

    message:
        "Ek khwaab ye bhi hai… kabhi zameen se thoda upar, duniya se thoda door, Cappadocia ke aasman mein tumhare saath udna hai. 🎈❤️"
    },

    {
    image:
        "assets/photos/level23.jpg",

    message:
        "Kabhi in pahadon ke beech yun hi nikal padenge… raaste lambe honge, baatein be-hisaab, aur lautne ki koi jaldi nahi hogi. 🤍🏔️"
    },

    {
    image:
        "assets/photos/level24.jpg",

    message:
        "Kabhi samandar ke kinaare ek shaam yun bhi guzregi… lehron ka shor hoga, dhalta hua suraj hoga, aur saath tumhara. 🌊❤️"
    },

    {
    image:
        "assets/photos/level25.jpg",

    message:
        "Kashmir ki waadiyan ho, Dal Lake ka sukoon ho… aur ek Shikara ho, jisme safar humara or tumhara saath ho. 🏔️🛶❤️"
    },

    {
    image:
        "assets/photos/level26.jpg",

    message:
        "Ek aisi baarish bhi naseeb ho… jahan duniya se door bas sukoon ho, garam chai ho, aur saamne tum ho. ☕🌧️❤️"
    },

    {
    image:
        "assets/photos/level27.jpg",

    message:
        "Ek tasveer Taj Mahal ke saamne apni bhi hogi… jagah mohabbat ki hogi, aur uss lamhe mein saath Aiman Hayaati Hogi. ❤️✨"
    },

    {
    image:
        "assets/photos/level28.jpg",

    message:
        "Edinburgh… tumhare sapno ki woh duniya, jiska zikr tumne kabhi mujhse kiya tha… umeed hai ek din hum is khwaab ko saath jeeyenge. 🏰❤️"
    },

    {
    image:
        "assets/photos/level29.jpg",

    message:
        "Jis jagah ke geet main aksar gaya karta hoon… tamanna hai ek din usi Darjeeling ki waadiyon mein, tumhare saath koi naya geet likhoon. ❤️✨"
    },

    {
    image:
        "assets/photos/level30.jpg",

    message:
        "29 tasveeron tak safar tumhara tha… 30vi tasveer par bas ek khwaab mera hai— zindagi humein jahaan bhi le jaaye, kisi khoobsurat mod par hum yun hi humesha saath nazar aayein. ❤️✨"
    }

];


// ==========================================
// GAME VARIABLES
// ==========================================

let currentLevel = 0;

// ==========================================
// SAVE PROGRESS
// ==========================================

const SAVE_KEY = "aimanBirthdayPuzzleProgress";

function getSavedLevel() {
    const savedLevel = localStorage.getItem(SAVE_KEY);

    if (savedLevel === null) {
        return null;
    }

    const level = parseInt(savedLevel, 10);

    if (isNaN(level) || level <= 0 || level >= levels.length) {
        return null;
    }

    return level;
}

function updateContinueButton() {
    const savedLevel = getSavedLevel();

    if (savedLevel !== null) {
        continueButton.classList.remove("hidden");
        continueButton.textContent =
            `Continue From Memory ${savedLevel + 1} →`;
    } else {
        continueButton.classList.add("hidden");
    }
}

let pieces = [];

let selectedIndex = null;

let moves = 0;

let gameStarted = false;


// ==========================================
// PUZZLE DIFFICULTY
// ==========================================

function getGridSize() {

    // Level 1–15 = 3 × 3
    // Level 16 onward = 4 × 4

    if (currentLevel < 15) {

        return 3;

    }

    return 4;

}


function getTotalPieces() {

    const gridSize =
        getGridSize();

    return gridSize * gridSize;

}


// ==========================================
// START JOURNEY
// ==========================================

startButton.addEventListener(
    "click",
    function () {

        currentLevel = 0;
        birthdaySong.currentTime = 0;

birthdaySong.volume = 0.55;

birthdaySong.play().catch(
    function () {
        console.log(
            "Audio playback was blocked."
        );
    }
);
        updateMusicButton();

        welcomeScreen.classList.add(
            "hidden"
        );

        gameScreen.classList.remove(
            "hidden"
        );

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

    movesCount.textContent =
        "0";


    levelTitle.textContent =
        `Level ${currentLevel + 1}`;


    levelProgress.textContent =
        `Memory ${currentLevel + 1} of 30`;

    const progressPercentage =
    ((currentLevel + 1) / 30) * 100;

journeyProgressFill.style.width =
    `${progressPercentage}%`;

    const gridSize =
    getGridSize();

piecesDisplay.textContent =
    `${gridSize} × ${gridSize}`;


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

    movesCount.textContent =
        "0";

    puzzleBoard.innerHTML =
        "";


    const gridSize =
        getGridSize();

    const totalPieces =
        getTotalPieces();


    // Change board automatically:
    // 3 columns for old levels
    // 4 columns from Level 16

    puzzleBoard.style.gridTemplateColumns =
        `repeat(${gridSize}, 1fr)`;
    puzzleBoard.style.gridTemplateRows =
    `repeat(${gridSize}, 1fr)`;


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

    puzzleBoard.innerHTML =
        "";


    const level =
        levels[currentLevel];


    const gridSize =
        getGridSize();


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
                    pieceNumber
                    / gridSize
                );


            const column =
                pieceNumber
                % gridSize;


            piece.style.backgroundImage =
                `url("${level.image}")`;


            piece.style.backgroundSize =
                `${gridSize * 100}% ${gridSize * 100}%`;


            const positionStep =
                100 / (gridSize - 1);


            piece.style.backgroundPosition =
                `${column * positionStep}% ${row * positionStep}%`;


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

        selectedIndex =
            index;

        renderPuzzle();

        return;

    }


    if (
        selectedIndex
        === index
    ) {

        selectedIndex =
            null;

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


    selectedIndex =
        null;

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

        selectedIndex =
            null;

        moves =
            0;

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

    localStorage.setItem(SAVE_KEY, currentLevel + 1);
    gameStarted =
        false;

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
        "One Last Surprise 🎁";

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

            gameScreen.classList.add(
                "hidden"
            );

            finalSurpriseScreen.classList.remove(
                "hidden"
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }
);


// ==========================================
// BACK BUTTON
// ==========================================

backButton.addEventListener(
    "click",
    function () {

        gameStarted =
            false;

        selectedIndex =
            null;

        birthdaySong.pause();

birthdaySong.currentTime = 0;

        ambientMusic.pause();

ambientMusic.currentTime = 0;
        musicMuted = false;

birthdaySong.muted = false;
ambientMusic.muted = false;

updateMusicButton();

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

// ==========================================
// FINAL GIFT REVEAL
// ==========================================

revealGiftButton.addEventListener(
    "click",
    function () {

        revealGiftButton.classList.add(
            "hidden"
        );

        giftReveal.classList.remove(
            "hidden"
        );

        setTimeout(
            function () {

                giftReveal.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            },
            200
        );

    }
);

updateContinueButton();
