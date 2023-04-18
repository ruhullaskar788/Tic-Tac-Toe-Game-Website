console.log("Welcome to Tic Tac Toe");

let music = new Audio("songs/music.mp3");
let gameover = new Audio("songs/gameover.mp3");
let audioTurn = new Audio("songs/ting.mp3");
let isgameover = false;

let turn = "X";

//Function to change Turn

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//Function to check for Win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText !== "") && (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)) {
            document.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerText + " WON";
            isgameover = true;
            gameover.play();
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "50%";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
        }
    })

}

//GAME LOGIC
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener("click", () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (isgameover=== false){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
            
        }
    })
})


//Adding listener to reset button

// let reset = document.getElementById("reset");
reset.addEventListener("click", ()=>{
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText= "Turn For " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";

})
