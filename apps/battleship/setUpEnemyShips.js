//this sets up the enemy ships, we dont need them to be visually represented anywhere, so we will set them up in a javascript array and refer to this array everytime the player shoots at the game to determine a hit or a miss.

var ebattleship;
var eaircraft;
var edestroyer;
var esubmarine;
var patrol;

//sets up the array
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

    //we try to place a ship starting at a random spot, if that ship hits the end of the board or another ship, we try again.
    while (!placed) {

        //get random start point and which way the shop is going to go
        var direction = getRandomInt(0, 3);
        var xCoordinate = getRandomInt(0, 9);
        var yCoordinate = getRandomInt(0, 9);

        //depening on the direction we try to place the ship, the if statement ensures that the ship will not go off the board
        switch (direction) {
        case 0:
            if (yCoordinate + numberOfSpots < 10) {
                placed = tryToPlace0(numberOfSpots, symbol, xCoordinate, yCoordinate);
            }
            break;
        case 1:
            if (xCoordinate + numberOfSpots < 10) {
                placed = tryToPlace1(numberOfSpots, symbol, xCoordinate, yCoordinate);
            }
            break;
        case 2:
            if (xCoordinate - numberOfSpots > -1) {
                placed = tryToPlace2(numberOfSpots, symbol, xCoordinate, yCoordinate);
            }
            break;
        case 3:
            if (yCoordinate - numberOfSpots > -1) {
                placed = tryToPlace3(numberOfSpots, symbol, xCoordinate, yCoordinate);
            }
            break;
        default:
            //if we dont place a ship, do it again.
            placed = false;
        }
    }
}


//i separated out these functions because they were easy to replicate and genearlly very self contained, i could have made it one big switch statement, but these actually play the ships by filling out the array with the appropriate letter - passed through by the symbol parameter- in the right configuration for each ship, depending on transformation of the x and y coordinates 
function tryToPlace0(numberOfSpots, symbol, xCoordinate, yCoordinate) {

    //save the initial board
    var initialBoard = enemyBoard;

    //try to place a ship using the right number of spots
    for (i = 0; i < numberOfSpots; i++) {
        //here is where the ship direction comes into play, transforming the coordinates
        if (enemyBoard[xCoordinate][yCoordinate + i] === "-") {
            enemyBoard[xCoordinate][yCoordinate + i] = symbol;
            if (i === numberOfSpots - 1) {
                return true;
            }
        } else {
            //if we cant place it, put back the inital board and return false so we can try again.
            enemyBoard = initialBoard;
            return false;
        }
    }
}


function tryToPlace1(numberOfSpots, symbol, xCoordinate, yCoordinate) {

    //save the initial board
    var initialBoard = enemyBoard;

    //try to place a ship in the direction randomly selected
    for (i = 0; i < numberOfSpots; i++) {
        if (enemyBoard[xCoordinate + i][yCoordinate] === "-") {
            enemyBoard[xCoordinate + i][yCoordinate] = symbol;
            if (i === numberOfSpots - 1) {
                return true;
            }
        } else {
            enemyBoard = initialBoard;
            return false;
        }
    }
}

function tryToPlace2(numberOfSpots, symbol, xCoordinate, yCoordinate) {

    //save the initial board
    var initialBoard = enemyBoard;

    //try to place a ship in the direction randomly selected
    for (i = 0; i < numberOfSpots; i++) {
        if (enemyBoard[xCoordinate - i][yCoordinate] === "-") {
            enemyBoard[xCoordinate - i][yCoordinate] = symbol;
            if (i === numberOfSpots - 1) {
                return true;
            }
        } else {
            enemyBoard = initialBoard;
            return false;
        }
    }
}

function tryToPlace3(numberOfSpots, symbol, xCoordinate, yCoordinate) {

    //save the initial board
    var initialBoard = enemyBoard;

    //try to place a ship in the direction randomly selected
    for (i = 0; i < numberOfSpots; i++) {
        if (enemyBoard[xCoordinate][yCoordinate - i] === "-") {
            enemyBoard[xCoordinate][yCoordinate - i] = symbol;
            if (i === numberOfSpots - 1) {
                return true;
            }
        } else {
            enemyBoard = initialBoard;
            return false;
        }
    }
}


//random integer function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}