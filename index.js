const boxes = document.querySelectorAll(".box");
const info = document.querySelector(".header");
const newGame = document.querySelector(".btn");
const X = document.querySelector(".scoreX");
const O = document.querySelector(".scoreY");
let currentPlayer;
let gameGrid;
let n; 
let x = 0;
let o = 0;
X.innerHTML =  `${x}`;
O.innerHTML = `${o}`;
let p;

const winningPositions = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [1,4,7],
    [2,5,8]
];

function checkWin(){
    winningPositions.forEach(position => {
        if((gameGrid[position[0]] != "")  &&  
            (gameGrid[position[0]] == gameGrid[position[1]] && gameGrid[position[1]] == gameGrid[position[2]] )){
                // disable clicking pointer event 
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                });
                //score
                if (gameGrid[position[0]] === "X") {
                    x++;
                    console.log("incremented X");
                    X.innerHTML = `${x}`;
                    console.log(x);
                } 
                if(gameGrid[position[0]] === "O"){
                    o++;
                    console.log("incremented O");
                    O.innerHTML = `${o}`;
                    console.log(o);
                }
                boxes[position[0]].style.backgroundColor = "#00800080";
                boxes[position[1]].style.backgroundColor = "#00800080";
                boxes[position[2]].style.backgroundColor = "#00800080";
                
                console.log(`won by ${currentPlayer}`);
                p = 1;
        }
    });
}

//funtion to initialize game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","","",];
    newGame.style.display = "none";
    info.innerHTML =   `Current Player-${currentPlayer}`;
    boxes.forEach((box) => {
        box.style.pointerEvents = "auto";
        box.innerHTML = "";
        box.style.backgroundColor = "transparent";
        p=0;
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
    checkWin();
      if(p!=0){
         info.innerHTML =   `${currentPlayer} Player Wins The Game`;
         return;
        }
      else {sswitch();}
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () =>{
        handleClick(index);
    })
})


function sswitch(){
    if(currentPlayer === "X"){
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













