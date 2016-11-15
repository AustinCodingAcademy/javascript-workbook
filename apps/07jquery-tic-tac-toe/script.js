'use strict';

$(document).on('ready', function () {

    var winConditionX = 0;
    var winConditionO = 0;
    var winArray = [7, 56, 448, 73, 146, 292, 273, 84];
    var playerTurn = "X";

    $('[data-cell]').click(function () {
        var $this = $(this);
        if ($this.text()==="X" || $this.text() ==="O"){
            alert("play on a free spot, please!");
            return;
        }
        $this.text(playerTurn);
        if (checkForWin($this)) {
            alert("player "+ playerTurn + " wins!");
        }
        playerTurn = (playerTurn === "X") ? "O" : "X";
    });

    $('#clear').click(function () {
        $('[data-cell]').text("");
        playerTurn = "X";
    })

    function checkForWin($this) {
        if ($this.text() === "X") {
            winConditionX += Math.pow(2, $this.data("cell"));
        }
        if ($this.text() === "O") {
            winConditionO += Math.pow(2, $this.data("cell"));
        }
        if (winArray.some(function (arrVal) {
                return (arrVal === (winConditionX & arrVal) || arrVal === (winConditionO & arrVal));
            })) {
            return true;
        }
        return false;
    }


});