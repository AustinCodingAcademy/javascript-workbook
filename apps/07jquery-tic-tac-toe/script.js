'use strict';



$(document).on('ready', function() {
    var playerTurn = 'X';

    $('[data-cell]').click(function() {
        $(this).text(playerTurn);
        checkForWin();
        playerTurn === 'X' ? playerTurn = 'O' : playerTurn = 'X';
    });

    $('#clear').click(function() {
        for (var i = 0; i <= 8; i++) {
            $('[data-cell= ' + i + ']').text('')
        }
    });

    function checkForWin() {
        for (var i = 0; i < 8; i++) {
          var winningPositions = [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6]
          ];
            var $h1 = $('[data-cell="' + winningPositions[i][0] + '"]'),
                $h2 = $('[data-cell="' + winningPositions[i][1] + '"]'),
                $h3 = $('[data-cell="' + winningPositions[i][2] + '"]');
            if (($h1.text() === playerTurn) && ($h2.text() === playerTurn) && ($h3.text() === playerTurn))  {
              $('#announce-winner').text('player ' + playerTurn + ' wins!');
              return true;
            }
        }
    }

    // if (true)  {
    // }
});


// var horiz = true;
// for (var i = 0; i <= 2; i++) {
//     for (var j = i * 3; j <= (i * 3) + 3; j++) {
//         if ($('div[data-cell' + (i + j) + ']') === playerTurn) {
//             horiz = false;
//         }
//     }
//     if (horiz) {
//         return true;
//     }
//
// }
