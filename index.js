const boxes = document.querySelectorAll(".box");
const info = document.querySelector(".header");
const newGame = document.querySelector(".btn");

let currentPlayer;
let gameGrid;
let n; 

const winningPositions = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [4,1,7],
    [2,5,8],
    [4,1,7],
];

//funtion to initialize game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","","",];
    newGame.style.display = "none";
    info.innerHTML =   `Current Player-${currentPlayer}`;
    boxes.forEach((box, index) => {
      box.innerHTML = "";
    });
    n = 0;
}
console.log("calling initGame");
initGame();
console.log("called initGame");

function handleClick(index) {
    if(gameGrid[index] === ""){
      boxes[index].innerHTML = currentPlayer;
      gameGrid[index] = currentPlayer;
      n = n + 1;
      if(n != 0)
        newGame.style.display = "flex";
      if(checkWin())
         return;
      else sswitch();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () =>{
        handleClick(index);
    })
})


function sswitch(){
    if(currentPlayer === "X"){
        console.log(currentPlayer);
        currentPlayer = "O";
        console.log(currentPlayer);
        info.innerHTML = `Current Player-${currentPlayer}`;
    }
    else{ 
        currentPlayer = "X";
        console.log(currentPlayer);
        info.innerHTML = `Current Player-${currentPlayer}`;
    }
}

newGame.addEventListener("click", initGame);

function checkWin(){

}











