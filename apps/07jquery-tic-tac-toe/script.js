'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  var playerTurn = 'X';
  var $dataCell = $('[data-cell]');
  $('[data-cell]').click(function() {
    $(this).text(playerTurn);

    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
      

  })

  checkForWin ();
  clearBoard ();
  })


function checkForWin () {
  if($('[data-cell="0"]').text() === playerTurn && $('[data-cell="1"]').text() === playerTurn && $('[data-cell="2"]').text() === playerTurn) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }

  if(('[data-cell=3]').text() === playerTurn && ('[data-cell=4]').text() === playerTurn && ('[data-cell=5]').text() === playerTurn) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }

  if(('[data-cell=6]').text() === playerTurn && ('[data-cell=7]').text() === playerTurn && ('[data-cell=8]').text() === playerTurn) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }



  if(('[data-cell=0]').text() === playerTurn && ('[data-cell=3]').text() === playerTurn && ('[data-cell=6]').text() === playerTurn) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }

  if(('[data-cell=1]').text() === playerTurn && ('[data-cell=4]').text() === playerTurn && ('[data-cell=7]').text() === playerTurn) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }

  if(('[data-cell=2]').text() === playerTurn && ('[data-cell=5]').text() === playerTurn && ('[data-cell=8]').text() === playerTurn) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }


  if(('[data-cell=0]').text() === playerTurn && ('[data-cell=4]').text() === playerTurn && ('[data-cell=8]').text() === playerTurn) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }

  if(('[data-cell=2]').text() === playerTurn && ('[data-cell=4]').text() === playerTurn && ('[data-cell=6]').text() === playerTurn) {
    $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
    }




  function clearBoard () {
    $('#clear').click(function() {
      $('[data-cell]').empty();
      playerTurn = 'X';
      $('#announce-winner').empty();
    });
  }

  


}

  









// Add a button with an id="clear" that will not only clear the board, but reset the player to player 'X'


// function setup(){
//   $('data-cell').click(function(){
//     this.text(playerTurn);
//   });

// }

// function runThisCodeOnce(){
//   $('[data-cell]').click(handleDataCellDivClick);
//   $(this).text('X');
// }

// this variable will represent which of the divs are clicked on!!!
