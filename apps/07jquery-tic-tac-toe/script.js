// Coded by Alex Gaw. Please don't judge me for the lightEmUp function. Or, if you do, please know that I'm happy to get advice. I would love to make this more concise.

'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X';
  var play = true;
  var turns = 0;

  // Set up #announce-winner with text so it takes up space. Visibility is set to hidden until someone wins.
  $('#announce-winner').html('Player <span id="winner">X</span> Wins!');

  function stopGame() {
    $('div[data-cell]:empty').html('<span></span>');
    play = false;
  }

  function checkForWin() {
    // Check for horizontal win
    if (($("div[data-cell='0']").text() === playerTurn && $("div[data-cell='1']").text() === playerTurn && $("div[data-cell='2']").text() === playerTurn) || ($("div[data-cell='3']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='5']").text() === playerTurn) || ($("div[data-cell='6']").text() === playerTurn && $("div[data-cell='7']").text() === playerTurn && $("div[data-cell='8']").text() === playerTurn)) {
      return true;
    }
    // Check for vertical win
    if (($("div[data-cell='0']").text() === playerTurn && $("div[data-cell='3']").text() === playerTurn && $("div[data-cell='6']").text() === playerTurn) || ($("div[data-cell='1']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='7']").text() === playerTurn) || ($("div[data-cell='2']").text() === playerTurn && $("div[data-cell='5']").text() === playerTurn && $("div[data-cell='8']").text() === playerTurn)) {
      return true;
    }
    // Check for diagonal win
    if (($("div[data-cell='0']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='8']").text() === playerTurn) || ($("div[data-cell='2']").text() === playerTurn && $("div[data-cell='4']").text() === playerTurn && $("div[data-cell='6']").text() === playerTurn)) {
      return true;
    }
    // If it gets here, no win yet so return false
    return false;
  }

  function checkForTie() {
    return turns === 8;
  }

//  This ugly function finds the specific squares that were responsible for the win and turns their background old-computer green.
  function lightEmUp() {
    var $divH = '', cellNumberH = 0, winArrayH = []; // Variables for horizontal check
    var $divV = '', cellNumberV = 0, winArrayV = []; // Variables for vertical check
    var $divD = '', cellNumberD = 0, winArrayD = []; // Variables for diagonal check
    var $divD2 = '', cellNumberD2 = 0, winArrayD2 = []; // Variables for other diagonal check
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        cellNumberH = j + (i * 3);
        cellNumberV = i + (j * 3);
        cellNumberD = (2 * i) + (2 * j);
        cellNumberD2 = 4 * j;
        $divH = $('div[data-cell="' + cellNumberH + '"]');
        $divV = $('div[data-cell="' + cellNumberV + '"]');
        $divD = $('div[data-cell="' + cellNumberD + '"]');
        $divD2 = $('div[data-cell="' + cellNumberD2 + '"]');
        if($divH.text() === playerTurn) {
          winArrayH.push($divH);
        }
        if($divV.text() === playerTurn) {
          winArrayV.push($divV);
        }
        if($divD.text() === playerTurn) {
          winArrayD.push($divD);
        }
        if($divD2.text() === playerTurn) {
          winArrayD2.push($divD2);
        }

      }
      // Check for horizontal win
      if(winArrayH.length === 3) {
        for(var i = 0; i < 3; i++) {
          winArrayH[i].css('color', '#33ff66');
        }
        return;
      } else {
        winArrayH = [];
      }

      // Check for vertical win
      if(winArrayV.length === 3) {
        for(var i = 0; i < 3; i++) {
          winArrayV[i].css('color', '#33ff66');
        }
        return;
      } else {
        winArrayV = [];
      }

      // Check for diagonal win
      if(winArrayD.length === 3) {
        for(var i = 0; i < 3; i++) {
          winArrayD[i].css('color', '#33ff66');
        }
        return;
      } else {
        winArrayD = [];
      }

      // Check for OTHER diagonal win. There's gotta be a better way.
      if(winArrayD2.length === 3) {
        for(var i = 0; i < 3; i++) {
          winArrayD2[i].css('color', '#33ff66');
        }
        return;
      } else {
        winArrayD2 = [];
      }
    }
  }

  $('div[data-cell]').click( function() {
    if ($(this).text() === '' && play) {
      $(this).text(playerTurn);
      if (checkForWin()) {
        stopGame();
        lightEmUp();
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
      $('div[data-cell]').text('').css('color', 'black');
      playerTurn = 'X';
      $('#announce-winner').css('visibility', 'hidden').html('Player <span id="winner">X</span> Wins!');
      play = true;
      turns = 0;
  })


});
