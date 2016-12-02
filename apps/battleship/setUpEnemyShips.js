var ebattleship;
var eaircraft;
var edestroyer;
var esubmarine;
var patrol;

var enemyBoard = new Array(10);

for (i = 0; i < 10; i++) {
    enemyBoard[i] = new Array(10);
    for (j = 0; j < 10; j++) {
        enemyBoard[i][j] = '-';
    }
};

//aircraft carrier
placeShip(5, 'A');
//battleship
placeShip(4, 'B');
//Cruiser
placeShip(3, 'C');
//submarine
placeShip(3, 'S');
//destroyer
placeShip(2, 'D');


function placeShip(numberOfSpots, symbol) {
    var placed = false;

    while (!placed) {

        var direction = getRandomInt(0, 3);
        var xCoordinate = getRandomInt(0, 9);
        var yCoordinate = getRandomInt(0, 9);
        
        switch (direction) {
        case 0:
            if(yCoordinate+numberOfSpots <10){
            placed = tryToPlace0(numberOfSpots, symbol,xCoordinate,yCoordinate);
            }
            break;
        case 1:
            if(xCoordinate+numberOfSpots <10){
            placed = tryToPlace1(numberOfSpots, symbol,xCoordinate,yCoordinate);
            }
            break;
        case 2:
            if(xCoordinate-numberOfSpots > -1){
            placed = tryToPlace2(numberOfSpots, symbol,xCoordinate,yCoordinate);
            }
            break;
        case 3:
            if(yCoordinate-numberOfSpots > -1){
            placed = tryToPlace3(numberOfSpots, symbol,xCoordinate,yCoordinate);
            }
            break;
        default:
        placed = false;
        }
    }
}



function tryToPlace0(numberOfSpots, symbol,xCoordinate,yCoordinate) {

    //save the initial board
    var initialBoard = enemyBoard;

    //try to place a ship in the direction randomly selected
    for (i = 0; i < numberOfSpots; i++) {
        if (enemyBoard[xCoordinate][yCoordinate + i] === "-") {
            enemyBoard[xCoordinate][yCoordinate + i] = symbol;
            if (i === numberOfSpots-1) {
                return true;
            }
        } else {
            enemyBoard = initialBoard;
            return false;
        }
    }
}

                
function tryToPlace1(numberOfSpots, symbol,xCoordinate,yCoordinate) {

    //save the initial board
    var initialBoard = enemyBoard;
    
    //try to place a ship in the direction randomly selected
    for (i = 0; i < numberOfSpots; i++) {
        if (enemyBoard[xCoordinate+i][yCoordinate] === "-") {
            enemyBoard[xCoordinate+i][yCoordinate] = symbol;
            if (i === numberOfSpots-1) {
                return true;
            }
        } else {
            enemyBoard = initialBoard;
            return false;
        }
    }
}
                
function tryToPlace2(numberOfSpots, symbol,xCoordinate,yCoordinate) {

    //save the initial board
    var initialBoard = enemyBoard;
    
    //try to place a ship in the direction randomly selected
    for (i = 0; i < numberOfSpots; i++) {
        if (enemyBoard[xCoordinate-i][yCoordinate] === "-") {
            enemyBoard[xCoordinate-i][yCoordinate] = symbol;
            if (i === numberOfSpots-1) {
                return true;
            }
        } else {
            enemyBoard = initialBoard;
            return false;
        }
    }
}
                
function tryToPlace3(numberOfSpots, symbol,xCoordinate,yCoordinate) {

    //save the initial board
    var initialBoard = enemyBoard;
    
    //try to place a ship in the direction randomly selected
    for (i = 0; i < numberOfSpots; i++) {
        if (enemyBoard[xCoordinate][yCoordinate - i] === "-") {
            enemyBoard[xCoordinate][yCoordinate - i] = symbol;
            if (i === numberOfSpots-1) {
                return true;
            }
        } else {
            enemyBoard = initialBoard;
            return false;
        }
    }
}
                
                
                
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}