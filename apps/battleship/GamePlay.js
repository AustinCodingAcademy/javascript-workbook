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



function computersTurn() {
    //
    //    if (totalPlaced !== 5 && !playerTurn) {
    //        alert("that isnt fair! you need to put your ships to sea")
    //        return;
    //    }
    playerTurn = true;
    var chaining = false;
    var chainingArray = new Array();
    
    if (!chaining){
    var xShot = getRandomInt(0, 9);
    var yShot = getRandomInt(0, 9);
    }
    
    else{
        chainingFunction();
        
        }
    
    var shotObj = document.getElementById(xShot + ',' + yShot);
    
    
    switch (shotObj.innerText) {
    case "A":
        if (aircraftCompCounter < 4) {
            $('#messages2').text("I Hit Your Aircraft Carrier!");
            aircraftCompCounter++;
            chaining = true;
        } else {
            $('#messages2').text("I Sunk Your Aircraft Carrier!");
        }
        markOutComp(shotObj);
        break;
    case "B":
        if (bshipCompCounter < 3) {
            $('#messages2').text("I Hit Your Battleship!");
            bshipCompCounter++;
        } else {
            $('#messages2').text("I Sunk Your Battleship!");
        }
        markOutComp(shotObj);
    case "C":
        if (cruiserCompCounter < 2) {
            $('#messages2').text("I Hit Your Cruiser!");
            cruiserCompCounter++;
        } else {
            $('#messages2').text("I Sunk Your Cruiser!");
        }
        markOutComp(shotObj);
        break;
    case "S":
        if (subCompCounter < 2) {
            $('#messages2').text("I Hit Your Submarine!");
            subCompCounter++;
        } else {
            $('#messages2').text("I Sunk Your Submarine!");
        }
        markCompOut(shotObj);
        break;
    case "D":
        if (destroyerCompCounter < 1) {
            $('#messages2').text("I Hit Your Destroyer!");
            destroyerCompCounter++;
        } else {
            $('#messages2').text("I Sunk Your Destroyer!");
        }
        markcompOut(shotObj);
        break;
    default:
        $('#messages2').text("I Missed!");
        $(shotObj).css("background", "white");

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