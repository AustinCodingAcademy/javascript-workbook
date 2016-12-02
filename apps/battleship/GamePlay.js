var overallWin = 0;
var overallCompWin = 0;
var playerTurn = true;
var aircraftCounter = 0;
var bshipCounter = 0;
var cruiserCounter = 0;
var destroyerCounter = 0;
var subCounter = 0;

var aircraftCompCounter = 0;
var bshipCompCounter = 0;
var cruiserCompCounter = 0;
var destroyerCompCounter = 0;
var subCompCounter = 0;

$(document).ready(function () {

    $(".innerShotRow").click(function () {
        if (playerTurn === true) {
            var currentId = this.id;
            var obj = document.getElementById(currentId);
            var checkInside = obj.innerText;
            if (checkInside !== '-') {
                alert("You already played there! Try another spot!");
                return;
            } else {
                var valueOfCell = enemyBoard[parseInt(currentId[1])][parseInt(currentId[3])];
                switch (valueOfCell) {
                case "A":
                    if (aircraftCounter < 4) {
                        $('#messages').text("You Hit My Aircraft Carrier!");
                        aircraftCounter++;
                    } else {
                        $('#messages').text("You Sunk My Aircraft Carrier!");
                    }
                    markOut(obj);
                    break;
                case "B":
                    if (bshipCounter < 3) {
                        $('#messages').text("You Hit My Battleship!");
                        bshipCounter++;
                    } else {
                        $('#messages').text("You Sunk My Battleship!");
                    }
                    markOut(obj);
                case "C":
                    if (cruiserCounter < 2) {
                        $('#messages').text("You Hit My Cruiser!");
                        cruiserCounter++;
                    } else {
                        $('#messages').text("You Sunk My Cruiser!");
                    }
                    markOut(obj);
                    break;
                case "S":
                    if (subCounter < 2) {
                        $('#messages').text("You Hit My Submarine!");
                        subCounter++;
                    } else {
                        $('#messages').text("You Sunk My Submarine!");
                    }
                    markOut(obj);
                    break;
                case "D":
                    if (destroyerCounter < 1) {
                        $('#messages').text("You Hit My Destroyer!");
                        destroyerCounter++;
                    } else {
                        $('#messages').text("You Sunk My Destroyer!");
                    }
                    markOut(obj);
                    break;
                default:
                    $('#messages').text("Miss!");
                    $(obj).css("background", "white");

                }
            }
            playerTurn = false;
        }

        computersTurn();

    });




});

function markOut(obj) {
    obj.innerText = "X";
    $(obj).css("background", "red");
    overallWin++
    checkForWin();
}

function markOutComp(obj) {
    obj.innerText = "X";
    $(obj).css("background", "red");
    overallCompWin++
    checkForWin();
}

function checkForWin() {
    if (overallWin === 17) {
        $('messages').css("background", "red");
        $('#messages').text("You Sunk My Whole Fleet and Won!");
        $('#messages2').append('<img id="img" src="http://i.imgur.com/vIf0lAD.gif" />');
    }
    if (overallCompWin === 17) {
        $('messages2').css("background", "red");
        $('#messages2').text("I Sunk Your Whole Fleet and Won!");
        $('#messages2').append('<img id="img" src="http://i.imgur.com/vIf0lAD.gif" />');
    }
}


var chaining = false;
var chainingNext;

function computersTurn() {
    //
    //    if (totalPlaced !== 5 && !playerTurn) {
    //        alert("that isnt fair! you need to put your ships to sea")
    //        return;
    //    }
    

    if (!chaining) {
        var xShot = getRandomInt(0, 9);
        var yShot = getRandomInt(0, 9);
        var shotObj = document.getElementById(xShot + ',' + yShot);

    } else {
        var shotObj = chainingNext;
            
    }
    
    if (shotObj.innerText === 'X'){
        return;
    }
playerTurn = true;

    switch (shotObj.innerText) {
    case "A":
        if (aircraftCompCounter < 4) {
            $('#messages2').text("I Hit Your Aircraft Carrier!");
            aircraftCompCounter++;
            chaining = true;
            chainingNext = chainingFunction(shotObj);
            iterator=checkTheDirection(iterator);
        } else {
            $('#messages2').text("I Sunk Your Aircraft Carrier!");
            chaining = false;
            whichDirection="null";
            iterator=0;
        }
        markOutComp(shotObj);
        break;
    case "B":
        if (bshipCompCounter < 3) {
            $('#messages2').text("I Hit Your Battleship!");
            bshipCompCounter++;
            chaining = true;
            chainingNext = chainingFunction(shotObj);
        } else {
            $('#messages2').text("I Sunk Your Battleship!");
            chaining = false;
            whichDirection="null";
            iterator=0;
        }
        markOutComp(shotObj);
            break;
    case "C":
        if (cruiserCompCounter < 2) {
            $('#messages2').text("I Hit Your Cruiser!");
            cruiserCompCounter++;
            chaining = true;
            chainingNext = chainingFunction(shotObj);
        } else {
            $('#messages2').text("I Sunk Your Cruiser!");
            chaining = false;
            whichDirection="null";
            iterator=0;
        }
        markOutComp(shotObj);
        break;
    case "S":
        if (subCompCounter < 2) {
            $('#messages2').text("I Hit Your Submarine!");
            subCompCounter++;
            chaining = true;
            chainingNext = chainingFunction(shotObj);
        } else {
            $('#messages2').text("I Sunk Your Submarine!");
            chaining = false;
            whichDirection="null";
            iterator=0;
        }
        markOutComp(shotObj);
        break;
    case "D":
        if (destroyerCompCounter < 1) {
            $('#messages2').text("I Hit Your Destroyer!");
            destroyerCompCounter++;
            chaining = true;
            chainingNext = chainingFunction(shotObj);
        } else {
            $('#messages2').text("I Sunk Your Destroyer!");
            chaining = false;
            whichDirection="null";
            iterator=0;
        }
        markOutComp(shotObj);
        break;
    default:
        $('#messages2').text("I Missed!");
        $(shotObj).css("background", "white");
            if(chaining===true){
                chainingNext = chainingFunction(shotObj);
            }
    }
}


function checkTheDirection(iterator){
    switch (whichDirection){
        case "right":
            return 0;
            break;
            case "left":
            return 1;
            break;
            case "up":
            return 2;
            break;
            case "down":
            return 3;
            break;
        default:
            return iterator;
    }
}

var whichDirection;
var iterator = 0;
function chainingFunction(shotObj) {
    var chainingId = shotObj.id;
    switch (iterator) {
    case 0:
        var xShot = parseInt(chainingId[0]) + 1;
        var yShot = parseInt(chainingId[2]);
            iterator++;
            whichDirection="right"
        break;
    case 1:
        var xShot = parseInt(chainingId[0]) - 2;
        var yShot = parseInt(chainingId[2]);
        iterator++;
            whichDirection="left"
            break;
    case 2:
        var xShot = parseInt(chainingId[0]) +1;
        var yShot = parseInt(chainingId[2]) + 1;
        iterator++;
            whichDirection="up"
            break;
    case 3:
        var xShot = parseInt(chainingId[0]);
        var yShot = parseInt(chainingId[2]) - 2;
        iterator++;
            whichDirection="down"
            break;
    default:
        iterator = 0;
    }
    
    var shotObj = document.getElementById(xShot + ',' + yShot);
    return shotObj;
    }






$(function () {
    var total = 0;
    $(window).keypress(function (e) {
        var key = e.which;
        total += parseInt(key);
        if (total === 517) {
            overallWin = 17;
            checkForWin();
        }
    });
});