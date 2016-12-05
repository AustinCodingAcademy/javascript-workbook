var overallWin = 0;
var overallCompWin = 0;
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

        //we want a fair playing ground, make sure user puts in all 5 ships before starting.
        if (totalPlaced !== 5) {
            alert("that isnt fair! you need to put your ships to sea");
            return false;
        }

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
var shotObj;
var carrierHit1 = false;
var bshipHit1 = false;
var cruiserHit1 = false;
var subHit1 = false;
var destroyerHit1 = false;
var shipWeAreAttacking = null;
var carrierBoolean = false;
var subBoolean = false;
var cruiserBoolean = false;
var bshipBoolean = false;
var destroyerBoolean = false;

function computersTurn() {



    shotObj = false;
    //run a check to make sure that we got a variable and that it has everything we need, if not, do it again
    while (!shotObj || shotObj.innerText === 'X' || shotObj.innerText === "") {
        //if we arent chaining, get a random number
        if (!chaining) {
            xShot = getRandomInt(0, 9);
            yShot = getRandomInt(0, 9);
            shotObj = document.getElementById(xShot + ',' + yShot);
        } else {
            //if we are chaining, keep shooting along the defined spots
            shotObj = continueShooting(shotObj);
        }
    }

    //we've got a shot! time to cycle through the possibilities.
    switch (shotObj.innerText) {
    case "A":
        if (aircraftCompCounter < 4) {
            $('#messages2').text("I Hit Your Aircraft Carrier!");
            aircraftCompCounter++;
            shipWeAreAttacking = "A";
            chaining = true;
            //if this is a first hit, we are going to set up all the next shots in an array
            if (aircraftCompCounter === 1) {
                carrierHit1 = shotObj;
                setUpPossibilities(shotObj, 0);
            }
        } else {
            $('#messages2').text("I Sunk Your Aircraft Carrier!");

            if (!shootAnotherShip()) {
                chaining = false;
            }
        }
        //put an X on the current div when we pass through the above statements
        markOutComp(shotObj);
        break;
    case "B":
        if (bshipCompCounter < 3) {
            $('#messages2').text("I Hit Your Battleship!");
            bshipCompCounter++;
            shipWeAreAttacking = "B";
            chaining = true;
            if (bshipCompCounter === 1) {
                bshipHit1 = shotObj;
                setUpPossibilities(shotObj, 0);
            }
        } else {
            $('#messages2').text("I Sunk Your Battleship!");
            if (!shootAnotherShip()) {
                chaining = false;
            }
        }
        markOutComp(shotObj);
        break;
    case "C":
        if (cruiserCompCounter < 2) {
            $('#messages2').text("I Hit Your Cruiser!");
            cruiserCompCounter++;
            shipWeAreAttacking = "C";
            chaining = true;
            if (cruiserCompCounter === 1) {
                cruiserHit1 = shotObj;
                setUpPossibilities(shotObj, 0);
            }
        } else {
            $('#messages2').text("I Sunk Your Cruiser!");
            if (!shootAnotherShip()) {
                chaining = false;
            }
        }
        markOutComp(shotObj);
        break;
    case "S":
        if (subCompCounter < 2) {
            $('#messages2').text("I Hit Your Submarine!");
            subCompCounter++;
            shipWeAreAttacking = "S";
            chaining = true;
            if (subCompCounter === 1) {
                subHit1 = shotObj;
                setUpPossibilities(shotObj, 0);
            }
        } else {
            $('#messages2').text("I Sunk Your Submarine!");
            if (!shootAnotherShip()) {
                chaining = false;
            }
        }
        markOutComp(shotObj);
        break;
    case "D":
        if (destroyerCompCounter < 1) {
            $('#messages2').text("I Hit Your Destroyer!");
            destroyerCompCounter++;
            shipWeAreAttacking = "D";
            chaining = true;
            if (destroyerCompCounter === 1) {
                destroyerHit1 = shotObj;
                setUpPossibilities(shotObj, 0);
            }
        } else {
            $('#messages2').text("I Sunk Your Destroyer!");
            if (!shootAnotherShip()) {
                chaining = false;
            }
        }
        markOutComp(shotObj);
        break;
    default:
        $('#messages2').text("I Missed!");
        $(shotObj).css("background", "white");
        $(shotObj).text(' ');
    }

}

var carrierArray = new Array();
var cruiserArray = new Array();
var subArray = new Array();
var bshipArray = new Array();
var destroyerArray = new Array();


//this function is called to make sure that if two ships are side by side, if the program hits the second ship while attacking the first, it will change its focus to the second ship, so it needs to go back and finish off the first ship before going back to random shots.
function shootAnotherShip() {
    if (aircraftCompCounter < 4 && aircraftCompCounter > 0) {
        shipWeAreAttacking = "A";
        return true;
    }
    if (bshipCompCounter < 3 && bshipCompCounter > 0) {
        shipWeAreAttacking = "B";
        return true;
    }
    if (cruiserCompCounter < 2 && cruiserCompCounter > 0) {
        shipWeAreAttacking = "C";
        return true;
    }
    if (destroyerCompCounter < 1 && destroyerCompCounter > 0) {
        shipWeAreAttacking = "D";
        return true;
    }
    if (subCompCounter < 2 && subCompCounter > 0) {
        shipWeAreAttacking = "S";
        return true;
    }
    return false;
}


//this function is used twice, once to set up the initial 4 shots around the first hit and second to set up all the other shots once the second hit occurs
function setUpPossibilities(shotObj, select) {
    switch (shipWeAreAttacking) {
    case "A":
        //if its the first time, we return the first array with the 4 spaces around the initial hit
        if (select === 0) {
            carrierArray = doArrayTricks(shotObj);
        }
        //if its the second time, we return the new shot pattern array
        if (select === 1) {
            carrierArray = doSecondArrayTricks(shotObj);
        }
        break;
    case "D":
        if (select === 0) {
            destroyerArray = doArrayTricks(shotObj);
        }
        if (select === 1) {
            destroyerArray = doSecondArrayTricks(shotObj);
        }
        break;
    case "B":
        if (select === 0) {
            bshipArray = doArrayTricks(shotObj);
        }
        if (select === 1) {
            bshipArray = doSecondArrayTricks(shotObj);
        }
        break;
    case "S":
        if (select === 0) {
            subArray = doArrayTricks(shotObj);
        }
        if (select === 1) {
            subArray = doSecondArrayTricks(shotObj);
        }
        break;
    case "C":
        if (select === 0) {
            cruiserArray = doArrayTricks(shotObj);
        }
        if (select === 1) {
            cruiserArray = doSecondArrayTricks(shotObj);
        }
        break;
    default:
        return;
    }
}

//this function finds the 4 squares around the original hit space and loads them into the array for each ship
function doArrayTricks(shotObj) {
    chainingId = shotObj.id;
    var tempObj = null;
    var xShot;
    var yShot;
    var tempArray = new Array();
    //square directly to the right
    xShot = parseInt(chainingId[0]) + 1;
    yShot = parseInt(chainingId[2]);
    tempObj = document.getElementById(xShot + ',' + yShot);
    //make sure the object exists on the board before adding it to the queue
    if (tempObj) {
        tempArray.push(tempObj);
    }
    //square directly to the left
    xShot = (parseInt(chainingId[0]) - 1);
    yShot = parseInt(chainingId[2]);
    tempObj = document.getElementById(xShot + ',' + yShot);
    if (tempObj) {
        tempArray.push(tempObj);
    }
    //square directly above
    xShot = parseInt(chainingId[0]);
    yShot = parseInt(chainingId[2]) - 1;
    tempObj = document.getElementById(xShot + ',' + yShot);
    if (tempObj) {
        tempArray.push(tempObj);
    }
    //square directly below
    xShot = parseInt(chainingId[0]);
    yShot = parseInt(chainingId[2]) + 1;
    tempObj = document.getElementById(xShot + ',' + yShot);
    if (tempObj) {
        tempArray.push(tempObj);
    }
    return tempArray;
}

//this function is called from the top if the chaining boolean is true
function continueShooting(shotObj) {
    switch (shipWeAreAttacking) {
    case "A":
        //get the last value in the array of spaces around hitspace1
        shotObj = carrierArray.pop();
        //if this value is also a hit, reset the carrier array based on the direction of the shop, but we only want to do this reset once
        if (shotObj.innerText === 'A' && !carrierBoolean) {
            //reset the carrier array (future shorts) to go inline with the first and second hit
            setUpPossibilities(shotObj, 1);
            carrierBoolean = true;
        }
        return shotObj;
        break;
    case "D":
        shotObj = destroyerArray.pop();
        if (shotObj.innerText === 'D' && !destroyerBoolean) {
            setUpPossibilities(shotObj, 1);
            destroyerBoolean = true;
        }
        return shotObj;
        break;
    case "B":
        shotObj = bshipArray.pop();
        if (shotObj.innerText === 'B' && !bshipBoolean) {
            setUpPossibilities(shotObj, 1);
            bshipBoolean = true;
        }
        return shotObj;
        break;
    case "S":
        shotObj = subArray.pop();
        if (shotObj.innerText === 'S' && !subBoolean) {
            setUpPossibilities(shotObj, 1);
            subBoolean = true;
        }
        return shotObj;
        break;
    case "C":
        shotObj = cruiserArray.pop();
        if (shotObj.innerText === 'C' && !cruiserBoolean) {
            setUpPossibilities(shotObj, 1);
            cruiserBoolean = true;
        }
        return shotObj;
        break;
    default:
        return;
    }
    return shotObj;
}

//once we get the second hit - we can work with it and the first shot to dictate the next few shots for the computer to sink the ship
function doSecondArrayTricks(shotObj) {
    var tempArray = new Array();
    var initialId;
    var secondId;
    var x1;
    var x2;
    var y1;
    var y2;

    //this is our current shotObj, where we've hit a second time, we get the coordinates from it
    secondId = shotObj.id;
    x2 = parseInt(secondId[0]);
    y2 = parseInt(secondId[2]);

    switch (shotObj.innerText) {
    case "A":
        //using the initial hit, we also get the coordinates from that, then we send it all to produce Secondary Array
        initialId = carrierHit1.id;
        x1 = parseInt(initialId[0]);
        y1 = parseInt(initialId[2]);
        tempArray = produceSecondary(x1, x2, y1, y2);
        break;
    case "D":
        initialId = destroyerHit1.id;
        x1 = parseInt(initialId[0]);
        y1 = parseInt(initialId[2]);
        tempArray = produceSecondary(x1, x2, y1, y2);
        break;
    case "B":
        initialId = bshipHit1.id;
        x1 = parseInt(initialId[0]);
        y1 = parseInt(initialId[2]);
        tempArray = produceSecondary(x1, x2, y1, y2);
        break;
    case "S":
        initialId = subHit1.id;
        x1 = parseInt(initialId[0]);
        y1 = parseInt(initialId[2]);
        tempArray = produceSecondary(x1, x2, y1, y2);
        break;
    case "C":
        initialId = cruiserHit1.id;
        x1 = parseInt(initialId[0]);
        y1 = parseInt(initialId[2]);
        tempArray = produceSecondary(x1, x2, y1, y2);
        break;
    default:
        return;
    }
    return tempArray;
}

//this takes in two points and prints out a plan of attack for the computer, it has special exceptions at the bottom for a battleship and an aircraft carrier
function produceSecondary(x1, x2, y1, y2) {
    var sendBackArray = new Array();
    //save initial values for simplicity
    var x1not = x1;
    var y1not = y1;
    var temp1;
    var temp2;
    var temp3;
    var temp4;
    var temp5;

    //basically if hit2 is to the right of hit1, these are the squares you want to try next
    if (x2 - x1 === -1) {
        x1 = x1not - 2;
        temp1 = document.getElementById(x1 + ',' + y1);
        x1 = x1not + 1;
        temp2 = document.getElementById(x1 + ',' + y1);
        x1 = x1not - 3;
        temp3 = document.getElementById(x1 + ',' + y1);
        x1 = x1not + 2;
        temp4 = document.getElementById(x1 + ',' + y1);
        x1 = x1not - 4;
        temp5 = document.getElementById(x1 + ',' + y1);

    }
    if (x2 - x1 === 1) {
        x1 = x1not + 2;
        temp1 = document.getElementById(x1 + ',' + y1);
        x1 = x1not - 1;
        temp2 = document.getElementById(x1 + ',' + y1);
        x1 = x1not + 3;
        temp3 = document.getElementById(x1 + ',' + y1);
        x1 = x1not - 2;
        temp4 = document.getElementById(x1 + ',' + y1);
        x1 = x1not + 4;
        temp5 = document.getElementById(x1 + ',' + y1);

    }

    if (y2 - y1 === -1) {
        y1 = y1not - 2;
        temp1 = document.getElementById(x1 + ',' + y1);
        y1 = y1not + 1;
        temp2 = document.getElementById(x1 + ',' + y1);
        y1 = y1not - 3;
        temp3 = document.getElementById(x1 + ',' + y1);
        y1 = y1not + 2;
        temp4 = document.getElementById(x1 + ',' + y1);
        y1 = y1not - 4;
        temp5 = document.getElementById(x1 + ',' + y1);

    }
    if (y2 - y1 === 1) {
        y1 = y1not + 2;
        temp1 = document.getElementById(x1 + ',' + y1);
        y1 = y1not - 1;
        temp2 = document.getElementById(x1 + ',' + y1);
        y1 = y1not + 3;
        temp3 = document.getElementById(x1 + ',' + y1);
        y1 = y1not - 2;
        temp4 = document.getElementById(x1 + ',' + y1);
        y1 = y1not + 4;
        temp5 = document.getElementById(x1 + ',' + y1);

    }

    //we now push all the elements into an array, so that we can pop them off one by and one sink the ship
    if (temp5) {
        sendBackArray.push(temp5);
    }
    //this is a special case for when you are on the end of a battleship to make the shot pattern logical

    if (temp4) {
        sendBackArray.push(temp4);
        //if (temp4.innerText != '-' && temp4.innerText != "X" && temp4.innerText != " ") {
        if (temp4.innerText !== 'A' && shipWeAreAttacking === 'A') {
            sendBackArray.pop();
        }
    }
    if (temp3) {
        sendBackArray.push(temp3);
        if (temp3.innerText !== 'B' && shipWeAreAttacking === 'B') {
            sendBackArray.pop();
        }
    }
    if (temp2) {
        sendBackArray.push(temp2);
    }
    if (temp1) {
        sendBackArray.push(temp1);
    }
    return sendBackArray;
}

//this is a cheat code: type the word cheat when you first get to the game to win automatically
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