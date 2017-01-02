// Coded by Alex Gaw. If you judge me for the lightEmUp function, I'll judge you for judging me. Fair warning!

'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X';
  var play = true;
  var turns = 0;
  var winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  // Set up #announce-winner with text so it takes up space. Visibility is set to hidden until someone wins.
  $('#announce-winner').html('Player <span id="winner">X</span> Wins!');

  function stopGame() {
    $('div[data-cell]:empty').html('<span></span>');
    play = false;
  }

  function getText(cell) {
    return $('div[data-cell="' + cell + '"]').text();
  }



  function checkForWin() {
    var winArray = [];
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 3; j++) {
        if (getText(winCombinations[i][j]) === playerTurn) {
          winArray.push($('div[data-cell="' + winCombinations[i][j] + '"]'));
        }
      }
      if (winArray.length === 3) {
        lightEmUp(winArray);
        return true;
      } else {
        winArray = [];
      }
    }
  }

  function checkForTie() {
    return turns === 8;
  }

//This function adds a class to the winning squares so we can style them
  function lightEmUp(winners) {
    for (var i = 0; i < 3; i++) {
      winners[i].addClass('winner');
    }
  }

  $('div[data-cell]').click( function() {
    if ($(this).text() === '' && play) {
      $(this).text(playerTurn);
      if (checkForWin()) {
        stopGame();
        $('#winner').text(playerTurn);
        $('#announce-winner').css('visibility', 'visible');
      } else if (checkForTie()) {
        $('#announce-winner').html('Tie game!').css('visibility', 'visible');
      }
      turns++;
      playerTurn = (playerTurn === 'X') ? 'O' : 'X';
    }
  })

  $('#clear').click( function() {
      $('div[data-cell]').text('').removeClass('winner');
      playerTurn = 'X';
      $('#announce-winner').css('visibility', 'hidden').html('Player <span id="winner">X</span> Wins!');
      play = true;
      turns = 0;
  })


});
