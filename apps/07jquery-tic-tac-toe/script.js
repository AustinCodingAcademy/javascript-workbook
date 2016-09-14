'use strict';



$(document).on('ready', function() {
    var playerTurn = 'X';

    $('[data-cell]').click(function() {
        $(this).text(playerTurn);
        playerTurn === 'X' ? playerTurn = 'O' : playerTurn = 'X';
    });

    $('#clear').click(function() {
        for (var i = 0; i <= 8; i++) {
            $('[data-cell= ' + i + ']').text('')
        }
    });

    function checkForWin() {
        //check Horizontal
        var hWin = true;
        for (var i = 0; i < 3 && hWin; i++) {
            var $h1 = $('div[data-cell=' + i + ']'),
                $h2 = $('div[data-cell=' + (i + 3) + ']'),
                $h3 = $('div[data-cell=' + (i + 6) + ']'),
                hArray = [$h1, $h2, $h3];

            if ((hArray[0].text() !== playerTurn) ||
                (hArray[1].text() !== playerTurn) ||
                (hArray[2].text() !== playerTurn)) {
                hWin = false;
            }
        }
        if (hWin) {
            return true;
        }
    }
if (true)  {
  $('#announce-winner').text('player ' + playerTurn + ' wins!')
}
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
