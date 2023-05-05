console.log('WELCOME TO TIC TAC TOE!')
let music = new Audio("music.mp3")
let audio_turn = new Audio("ting.mp3")
let audio_gameover = new Audio("gameover.mp3")

let turn = "X"
let gameover = false;
// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check for a win
const checkWin = () => {
    let box_texts = document.getElementsByClassName('box_text')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 5, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [2, 4, 6, 5, 15, 135],
        [0, 4, 8, 5, 15, 45],
    ]
    wins.forEach(e => {
        if ((box_texts[e[0]].innerText === box_texts[e[1]].innerText) && (box_texts[e[1]].innerText === box_texts[e[2]].innerText) && (box_texts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = box_texts[e[0]].innerText + "Won"
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "20vw"
            music.play()
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let box_text = element.querySelector('.box_text')
    element.addEventListener('click', () => {
        if (box_text.innerText === "") {
            box_text.innerText = turn;
            turn = changeTurn();
            audio_turn.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerHTML = 'Turn for' + turn

            }
        }
    })
})


// Add onclick listener to Reset Button
reset.addEventListener('click', () => {
    let box_text = document.querySelectorAll('.box_text')
    Array.from(box_text).forEach(element => {
        element.innerText = ""
    })
    turn = "X";
    gameover = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0vw"
    document.getElementsByClassName("info")[0].innerHTML = 'Turn for' + turn
    music.pause()
})  