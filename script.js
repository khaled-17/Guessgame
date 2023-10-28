
// all words
const words = [
    {
        word: "react",
        disc: "JavaScript library",
    },
    {
        word: "vue",
        disc: "JavaScript Framework",
    },
    {
        word: "angular",
        disc: "JavaScript MVW Framework",
    },
    {
        word: "nodejs",
        disc: "JavaScript runtime environment",
    },
    {
        word: "php",
        disc: "general-purpose scripting language",
    },
    {
        word: "ruby",
        disc: "open source programming language",
    },
    {
        word: "python",
        disc: "Programming Language",
    },
    {
        word: "tailwind",
        disc: "A utility-first CSS framework",
    },
    {
        word: "bootstrap",
        disc: "world's most famous free CSS framework",
    },
];




const inputsContener = document.querySelector(".inputs"),
    diskTitle = document.querySelector(".disk"),
    quessCount = document.querySelector(".guess_count"),
    winner = document.querySelector(".winner"),
    resetBTn = document.querySelector('button'),
    typing = document.querySelector('.typing'),
    succ = new Audio("./sound/success.mp3"),
    gameOver = new Audio("./sound/gameover.mp3"),
    ping = new Audio("./sound/ping.mp3");

//all var
let word, maxGuess = 12, countTowin = []



//lesen to keydown
document.addEventListener('keydown', () => typing.focus())
//get random word
function getRandomWoed() {
    let randomNum = Math.floor(Math.random() * words.length)
    let randomObject = words[randomNum]

    word = randomObject.word

    let disc = randomObject.disc
    diskTitle.innerHTML = disc
    quessCount.innerText = maxGuess

    //creat inputs
    let inputs = "";
    for (let index = 0; index < word.length; index++) {

        inputs += `<input type="text" disabled >`

    }

    inputsContener.innerHTML = inputs

}


getRandomWoed()

//stat game on click btn 

typing.addEventListener('input', statGame)

function statGame(e) {
    console.log("------------");

    let char = e.target.value;


    if (!char.match(/[a-z]/i)) {
        // console.log(" is not match ");
        return
    }


    console.log(word);

    if (word.includes(char)) {
        for (let i = 0; i < word.length; i++) {
            if (
                word[i] === char
                && !inputsContener.querySelectorAll("input")[i].value
            ) {
                console.log("yes");
                inputsContener.querySelectorAll("input")[i].value = char
                console.log(word[i]);
                countTowin.push(char)
                //      console.log(countTowin);
            }
        }

        console.log(maxGuess);

    } else {
        maxGuess--;
        console.log("maxGuess : " + maxGuess);
    }
    quessCount.innerHTML = maxGuess;
    typing.value = "";




    console.log(countTowin.length);
    console.log(word.length);
    if (countTowin.length === word.length) {
        succ.play();
        winner.classList.remove("hidden")
    winner.classList.remove("hidden");

        countTowin = [];
        // s


    }
    setTimeout(() => {
        if (maxGuess <= 0) {
            gameOver.play();
            alert("lose")
            for (let i = 0; i < word.length; i++) {

                inputsContener.querySelectorAll('input')[i].value = word[i];
            }

        }
    });




}

resetBTn.addEventListener("click", function () {
    console.log("ddd");
    getRandomWoed()
    ping.play();



})


