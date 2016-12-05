//this lets the user set up their own ships

var shipWeArePlacingCurrently = null;
var startPoint = "null";
var secondPoint = null;
var symbol = null;
var totalPlaced = 0;
$(document).ready(function () {

    //when they click on the button, explain to them how it works, and how many spaces they get
    $("#carrier").click(function () {
        shipWeArePlacingCurrently = 5;
        symbol = "A";
        alert("OK lets place a 5 spot AIRCRAFT CARRIER, click on the tile you want the front of the ship to be on, and then click on the tile just above, below, to the left or the right to determine the direction of placement");
        $('#carrier').prop('disabled', true);
        //make sure the startpoint is reset before doing the 2 click loop below
        startPoint = null;
    });

    $("#battleship").click(function () {
        shipWeArePlacingCurrently = 4;
        symbol = "B";
        alert("OK lets place a 4 spot BATTLESHIP, click on the tile you want the front of the ship to be on, and then click on the tile just above, below, to the left or the right to determine the direction of placement");
        $('#battleship').attr('disabled', 'disabled');
        startPoint = null;
    });

    $("#cruiser").click(function () {
        shipWeArePlacingCurrently = 3;
        symbol = "C";
        alert("OK lets place a 3 spot CRUISER, click on the tile you want the front of the ship to be on, and then click on the tile just above, below, to the left or the right to determine the direction of placement");
        $('#cruiser').attr('disabled', 'disabled');
        startPoint = null;
    });

    $("#sub").click(function () {
        shipWeArePlacingCurrently = 3;
        symbol = "S";
        alert("OK lets place a 3 spot SUBMARINE, click on the tile you want the front of the ship to be on, and then click on the tile just above, below, to the left or the right to determine the direction of placement");
        $('#sub').attr('disabled', 'disabled');
        startPoint = null;
    });

    $("#destroyer").click(function () {
        shipWeArePlacingCurrently = 2;
        symbol = "D";
        alert("OK lets place a 2 spot DESTROYER, click on the tile you want the front of the ship to be on, and then click on the tile just above, below, to the left or the right to determine the direction of placement");
        $('#destroyer').attr('disabled', 'disabled');
        startPoint = null;
    });

    //this makes the first click be the startPoint and the second click be the secondPoint, so we can determine where and which direction the ship will go
    $('.innerRow').click(function () {
        var $this = $('this');
        if (!startPoint) {
            startPoint = this.id.toString();
        } else {
            secondPoint = this.id.toString();
            if (totalPlaced < 5) {
                runchecks(startPoint, secondPoint);
            }
        }
    });

});

//this function breaks out the coordiantes from the elements and determines which direction the ship is going.
function runchecks(startPoint, secondPoint) {

    var x1 = parseInt(startPoint[0]);
    var y1 = parseInt(startPoint[2]);
    var x2 = parseInt(secondPoint[0]);
    var y2 = parseInt(secondPoint[2]);
    var direction = null;
    if (x1 - x2 > 0) {
        //this does two things, determines the direction and ensures that the ship will fit on the board
        if (x1 - shipWeArePlacingCurrently > -1) {
            direction = "left";
        } else {
            //reset the button if the ship doesnt fit on the board
            reButton();
            return;
        }
    }

    if (x1 - x2 < 0) {
        if (x1 + shipWeArePlacingCurrently < 11) {
            direction = "right";
        } else {
            reButton();
            return;
        }
    }
    if (y1 - y2 > 0) {
        if (y1 - shipWeArePlacingCurrently > -1) {
            direction = "down";
        } else {
            reButton();
            return;
        }
    }
    if (y1 - y2 < 0) {
        if (y1 + shipWeArePlacingCurrently < 11) {
            direction = "up";
        } else {
            reButton();
            return;
        }
    }
    direction = "up";

    switch (direction) {
    case "left":
        tryToPlaceleft(x1, y1);
        break;
    case "right":
        tryToPlaceRight(x1, y1);
        break;
    case "up":
        tryToPlaceUp(x1, y1);
        break;
    case "down":
        tryToPlaceDown(x1, y1);
        break;
    default:
        return;
    }

    if (totalPlaced === 5) {
        alert("OK - lets go to sea, click on the board on the right to attack your enemy's ships - if you hit, the square will light up red with a big X, if you miss it will just go white - after your turn, the computer will take a shot, and things will go back and forth until one of you sinks all the other's battle ships.  Since the computer is superconfident in itself, you can go first!")

    }
}


function tryToPlaceleft(x1, y1) {
    var legalBoolean = true;
    var necessarySquares = new Array();
    for (i = 0; i < shipWeArePlacingCurrently; i++) {
        var currentId = (x1 - i) + "," + y1;
        var temp = document.getElementById(currentId).innerText;
        if (temp !== '-') {
            reButton();
            return false;
        }
    }
    for (i = 0; i < shipWeArePlacingCurrently; i++) {
        var currentId = (x1 - i) + "," + y1;
        document.getElementById(currentId).innerText = symbol;

    }
    totalPlacedCounter();
    return true;
}

function tryToPlaceRight(x1, y1) {
    var legalBoolean = true;
    var necessarySquares = new Array();
    for (i = 0; i < shipWeArePlacingCurrently; i++) {
        var currentId = (x1 + i) + "," + y1;
        var temp = document.getElementById(currentId).innerText;
        if (temp !== '-') {
            reButton();
            return false;
        }
    }
    for (i = 0; i < shipWeArePlacingCurrently; i++) {
        var currentId = (x1 + i) + "," + y1;
        document.getElementById(currentId).innerText = symbol;
    }
    totalPlacedCounter();
    return true;
}

function tryToPlaceDown(x1, y1) {
    var legalBoolean = true;
    var necessarySquares = new Array();
    for (i = 0; i < shipWeArePlacingCurrently; i++) {
        var currentId = (x1) + "," + (y1 - i);

        var temp = document.getElementById(currentId).innerText;
        if (temp !== '-') {
            reButton();
            return false;
        }
    }
    for (i = 0; i < shipWeArePlacingCurrently; i++) {
        var currentId = (x1) + "," + (y1 - i);
        document.getElementById(currentId).innerText = symbol;
    }
    totalPlacedCounter();
    return true;
}

function tryToPlaceUp(x1, y1) {
    var legalBoolean = true;
    var necessarySquares = new Array();
    for (i = 0; i < shipWeArePlacingCurrently; i++) {
        var currentId = (x1) + "," + (y1 + i);
        var temp = document.getElementById(currentId).innerText;
        if (temp !== '-') {
            reButton();
            return false;
        }
    }
    for (i = 0; i < shipWeArePlacingCurrently; i++) {
        var currentId = (x1) + "," + (y1 + i);
        document.getElementById(currentId).innerText = symbol;
    }
    totalPlacedCounter();
    return true;
}

function reButton() {
    alert("Please Play A Legal Move!");
    switch (symbol) {
    case "A":
        $('#carrier').prop('disabled', false);
        break;
    case "B":
        $('#battleship').prop('disabled', false);
        break;
    case "C":
        $('#cruiser').prop('disabled', false);
        break;
    case "S":
        $('#sub').prop('disabled', false);
        break;
    case "D":
        $('#destroyer').prop('disabled', false);
        break;
    default:
        return;
    }
}

function totalPlacedCounter() {
    startPoint = null;
    totalPlaced++;

}