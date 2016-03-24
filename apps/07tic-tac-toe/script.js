'use strict';

$(document).on('ready', function() {
	var playerTurn = "X";
    $('[data-cell]').click(function() {
    	$(this).text(playerTurn);
        console.log(playerTurn);
        checkForWin();
        console.log(playerTurn);
    	playerTurn = (playerTurn === 'X') ? 'O' : 'X';
        console.log(playerTurn);
    });

    function winningCombo() {

    var winingPositions = [[0,1,2], [3,4,5],[6,7,8],
                    [0,3,6], [1,4,7],[2,5,8],
                    [0,4,8], [2,4,6]];

    for(var i = 0; i < 8; i++){
        var po1 = winingPositions[i][0];
        var po2 = winingPositions[i][1];
        var po3 = winingPositions[i][2];
            
        if ($('[data-cell="'+po1+'"]').text() === playerTurn && $('[data-cell="'+po2+'"]').text() === playerTurn && $('[data-cell="'+po3+'"]').text() === playerTurn ){
            return true;
            }
        }
    }

    function checkForWin() {
        if(winningCombo()) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
    }
});
