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
var whichDirection;
var iterator = 0;

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
                    break;
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
                    obj.innerText = ' ';

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
    overallWin++;
    checkForWin();
}

function markOutComp(obj) {
    obj.innerText = "X";
    $(obj).css("background", "red");
    overallCompWin++;
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
var shotObj;
var carrierHit1 = false;
var bshipHit1 = false;
var cruiserHit1 = false;
var subHit1 = false;
var destroyerHit1 = false;
var carrierHit2 = false;
var bshipHit2 = false;
var cruiserHit2 = false;
var subHit2 = false;
var destroyerHit2 = false;
var carrierSplitToggle=false;
var bshipSplitToggle=false;
var cruiserSplitToggle=false;
var subSplitToggle=false;
var destroyerSplitToggle=false;

function computersTurn() {
    //
    //    if (totalPlaced !== 5 && !playerTurn) {
    //        alert("that isnt fair! you need to put your ships to sea")
    //        return;
    //    }

    var ShotObj;

    if (!chaining) {
        var xShot = 4;// getRandomInt(0, 9);
        var yShot = 4;//getRandomInt(0, 9);
        shotObj = document.getElementById(xShot + ',' + yShot);

    } else {
        shotObj = chainingNext;
        
    }


    if (shotObj.innerText === 'X' || shotObj.innerText === ' ') {
        if (!chaining) {
            return;
        } else {
            chainingNext = chainingFunction(shotObj);
            return;
        }
    }

    switch (shotObj.innerText) {
    case "A":
        if (aircraftCompCounter < 4) {
            $('#messages2').text("I Hit Your Aircraft Carrier!");
            if (aircraftCompCounter === 0) {
                carrierHit1 = shotObj;
            }
            if (aircraftCompCounter === 1) {
                carrierHit2 = shotObj;
            }
            aircraftCompCounter++;
            chaining = true;
            if (carrierHit2 || carrierSplitToggle) {
                iterator = checkTheDirection();
            }
            
            chainingNext = chainingFunction(shotObj);
            
        } else {
            $('#messages2').text("I Sunk Your Aircraft Carrier!");
            chaining = false;
            whichDirection = "null";
            iterator = 0;
        }
        markOutComp(shotObj);
        break;
    case "B":
        if (bshipCompCounter < 3) {
            $('#messages2').text("I Hit Your Battleship!");
            if (bshipCompCounter === 0) {
                bshipHit1 = shotObj;
            }
            if (bshipCompCounter === 1) {
                bshipHit2 = shotObj;
            }
            bshipCompCounter++;
            chaining = true;
            if (bshipHit1 || bshipSplitToggle) {
                iterator = checkTheDirection();
            }
            chainingNext = chainingFunction(shotObj);

        } else {
            $('#messages2').text("I Sunk Your Battleship!");
            chaining = false;
            whichDirection = "null";
            iterator = 0;
        }
        markOutComp(shotObj);
        break;
    case "C":
        if (cruiserCompCounter < 2) {
            $('#messages2').text("I Hit Your Cruiser!");
            if (cruiserCompCounter === 0) {
                cruiserHit1 = shotObj;
            }
            if (cruiserCompCounter === 1) {
                cruiserHit2 = shotObj;
            }
            cruiserCompCounter++;
            chaining = true;
            if (cruiserHit1 || cruiserSplitToggle) {
                iterator = checkTheDirection();
            }
            chainingNext = chainingFunction(shotObj);
        } else {
            $('#messages2').text("I Sunk Your Cruiser!");
            chaining = false;
            whichDirection = "null";
            iterator = 0;
        }
        markOutComp(shotObj);
        break;
    case "S":
        if (subCompCounter < 2) {
            $('#messages2').text("I Hit Your Submarine!");
            if (subCompCounter === 0) {
                subHit1 = shotObj;
            }
            if (subCompCounter === 1) {
                subHit2 = shotObj;
            }
            subCompCounter++;
            chaining = true;
            if (subHit1 || subSplitToggle) {
                iterator = checkTheDirection();
            }
            chainingNext = chainingFunction(shotObj);
        } else {
            $('#messages2').text("I Sunk Your Submarine!");
            chaining = false;
            whichDirection = "null";
            iterator = 0;
        }
        markOutComp(shotObj);
        break;
    case "D":
        if (destroyerCompCounter < 1) {
            $('#messages2').text("I Hit Your Destroyer!");
            if (destroyerCompCounter === 0) {
                subHit1 = shotObj;
            }
            if (destroyerCompCounter === 1) {
                subHit2 = shotObj;
            }
            destroyerCompCounter++;
            chaining = true;
            if (destroyerHit1 || destroyerSplitToggle) {
                iterator = checkTheDirection();
            }
            chainingNext = chainingFunction(shotObj);

        } else {
            $('#messages2').text("I Sunk Your Destroyer!");
            chaining = false;
            whichDirection = "null";
            iterator = 0;
        }
        markOutComp(shotObj);
        break;
    default:
            $('#messages2').text("I Missed!");
            $(shotObj).css("background", "white");
            $(shotObj).text(' ');
            
        if (!cleanUpShots()) {
            if (chaining === true) {
                chainingNext = chainingFunction(shotObj);
            }
            
        }
    }
    playerTurn = true;
}


function checkTheDirection() {
    switch (whichDirection) {
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


function chainingFunction(shotObj) {
    var chainingId;
    var i =0;
    if (carrierHit1) {
        chainingId = carrierHit1.id;
    }
    if(carrierSplitToggle=== true){
        i++;
    }
    if ((carrierHit2) || carrierSplitToggle) {
        chainingId = shotObj.id;
    }
    var xShot;
    var yShot;
    
    switch (iterator) {
    case 0:
        xShot = parseInt(chainingId[0]) + 1;
        yShot = parseInt(chainingId[2]);
        iterator++;
        whichDirection = "right";
        break;
    case 1:
        xShot = (parseInt(chainingId[0]) - 1);
        yShot = parseInt(chainingId[2]);
        iterator++;
        whichDirection = "left";
        break;
    case 2:
        xShot = parseInt(chainingId[0]);
        yShot = parseInt(chainingId[2]) - 1;
        iterator++;
        whichDirection = "up";
        break;
    case 3:
        xShot = parseInt(chainingId[0]);
        yShot = parseInt(chainingId[2]) + 1;
        iterator++;
        whichDirection = "down";
        break;
    default:
        iterator = 0;
    }

    shotObj = document.getElementById(xShot + ',' + yShot);
    
    return shotObj;
}



function cleanUpShots() {
    if (carrierHit2) {
        flipTheDirection();
        iterator = checkTheDirection();
        carrierHit2 = false;
        chainingNext = chainingFunction(shotObj);
        carrierSplitToggle=true;
        return true;
    }
    return false;
}

function flipTheDirection() {
    switch (whichDirection) {
    case "right":
        whichDirection = "left";
        break;
    case "left":
        whichDirection = "right";
        break;
    case "up":
        whichDirection = "down";
        break;
    case "down":
        whichDirection = "up";
        break;
    default:
        return iterator;
    }

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