$(document).ready(function () {

    var aircraftCounter = 0;
    var bshipCounter = 0;
    var cruiserCounter = 0;
    var destroyerCounter = 0;
    var subCounter = 0;
    var overallWin =0;
    var playerTurn = true;
    $(".innerShotRow").click(function () {
        if(playerTurn === true){
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

    });
        playerTurn = false;
    }
                             
    computersTurn();
    
});

function markOut(obj) {
    obj.innerText = "X";
    $(obj).css("background", "red");
   checkForWin();
}

function checkForWin(){
    overallWin++;
    if(overallWin === 17){
        $('messages').css("background","red");
        $('#messages').text("You Sunk My Whole Fleet and Won!");
    $('#messages').append('<img id="img" src="http://i.imgur.com/vIf0lAD.gif" />');
    }
}



function computersTurn(){
    
    if (totalPlaced !== 5){
        alert("that isnt fair! you need to put your ships to sea")
    retur
    }
    
    
}









$(function() {
    var total = 0;
   $(window).keypress(function(e) {
       var key = e.which;
       total += parseInt(key);
       if(total === 517){
           overallWin = 16;
           checkForWin();
       }
   });
});