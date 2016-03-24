'use strict';

$(document).on('ready', function() {
	var playerTurn = "X";
    var turns = 0;
    $('[data-cell]').click(function() {
        var $this = $(this);
        if ($this.text() === "") {
    	   $($this).text(playerTurn);
           $('#announce-winner').empty();
           turns++;
           checkForWin();
    	   playerTurn = (playerTurn === 'X') ? 'O' : 'X';
           checkForTie();
        }
        else {
            $('#announce-winner').text('There\'s a piece already there! Try again.');
        }
    });

    function winningCombo() {

    var winingPositions = [[0,1,2], [3,4,5],[6,7,8], [0,3,6],
                           [1,4,7],[2,5,8],[0,4,8], [2,4,6]];

    for(var i = 0; i < 8; i++){
        var po1 = winingPositions[i][0];
        var po2 = winingPositions[i][1];
        var po3 = winingPositions[i][2];
            
        if ($('[data-cell="'+po1+'"]').text() === playerTurn && $('[data-cell="'+po2+'"]').text() === playerTurn && $('[data-cell="'+po3+'"]').text() === playerTurn){
            return true;
            }
        }
    }

    function checkForWin() {
        if(winningCombo()) {
            $('#announce-winner').text('Player ' + playerTurn + ' Won!');
                $('[data-cell]').each(function() {
                    $(this).empty();
                    turns = 0;
                });
        }
    }

    function checkForTie() {
        if(turns === 9) {
            $('#announce-winner').text('It was a tie!');
            $('[data-cell]').each(function() {
                $(this).empty();
                turns = 0;
            }); 
        }
    }
});
