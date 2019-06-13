let turn = "X"
let count = 0;

function setMessage(msg) {
    const messageBox = document.getElementById("message");
    messageBox.innerText = msg;
}

//parent function
function nextMove(id) {
    let square = document.getElementById(id);
    if (square.innerText == "") {
        square.innerText = turn;
        count++;
        console.log("count:", count)
        switchTurn();
    }
    console.log("check:", checkForWinner(id))
}
// switchturn
function switchTurn () {
    if (turn == "X") {
        turn = "O";
    }else {
        turn = "X";
    }
    setMessage("It's" + turn + "'s turn!");
}

function checkForWinner(id){
    const messageBox = document.getElementById("message");
    let box = document.getElementById(id).innerText;
    if(isWin()){
        messageBox.innerText = "YOU WON!!"
    }
    
}
// this function  for win
function isWin(){
    const boxOne = document.getElementById("0_0").innerText;
    const boxTwo = document.getElementById("0_1").innerText;
    const boxThree = document.getElementById("0_2").innerText;
    const boxFour = document.getElementById("1_0").innerText;
    const boxFive = document.getElementById("1_1").innerText;
    const boxSix = document.getElementById("1_2").innerText;
    const boxSeven = document.getElementById("2_0").innerText;
    const boxEight = document.getElementById("2_1").innerText;
    const boxNine = document.getElementById("2_2").innerText;
    if(boxOne !== "" && boxOne === boxTwo && boxTwo === boxThree ||
        boxFour !== "" && boxFour === boxFive && boxFive === boxSix ||
        boxSeven !== "" && boxSeven === boxEight && boxEight === boxNine ||
        boxOne !== "" && boxOne === boxFour && boxFour === boxSeven ||
        boxTwo !== "" && boxTwo === boxFive && boxFive === boxEight ||
        boxThree !== "" && boxThree === boxSix && boxSix === boxNine ||
        boxOne !== "" && boxOne === boxFive && boxFive === boxNine || 
        boxThree !== "" && boxThree === boxFive && boxFive === boxSeven
    ){
        return true
    }
    return false
}

// this function check for when the game is over
function gameOver(){
    const board = document.getElementsByClassName('tic');
    console.log("BOARD:", board)
    for(let i = 0; i < board.length; i++){
        board[i].innerHTML = ""
    }
}
