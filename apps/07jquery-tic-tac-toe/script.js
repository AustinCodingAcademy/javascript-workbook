'use strict';

$(document).on('ready', function() {
  //
  console.log('start');

  var playerTurn = 'X';
  // Clear board function
  function clearBoard() {
    $('[data-cell]').text('');
  }
  // Clear game on click
  $('#clear').on('click', function() {
    clearBoard();
    playerTurn = 'X';
    console.log('clear');
  });

  jQuery('div[data-cell]').on('click', function() {
    //When data cells are clicked make a mark
    $(this).text(playerTurn);
    //
    //
    checkForWin();
    playerTurn = playerTurn === 'X' ? 'O' : 'X';
  });

  function checkForWin() {

    // Get text for 0,1,2
    if ($('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=1]').text() === playerTurn &&
      $('div[data-cell=2]').text() === playerTurn) {
      console.log('Win in first row');
      clearBoard();
    };
    // Get text for 3,4,5
    if ($('div[data-cell=3]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=5]').text() === playerTurn) {
      console.log('Win in second row');
      clearBoard();
    };
    // Get text for 6,7,8
    if ($('div[data-cell=6]').text() === playerTurn &&
      $('div[data-cell=7]').text() === playerTurn &&
      $('div[data-cell=8]').text() === playerTurn) {
      console.log('Win in third row');
      clearBoard();
    };
    // Get text for 0,3,6 Vert
    if ($('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=3]').text() === playerTurn &&
      $('div[data-cell=6]').text() === playerTurn) {
      console.log('Win in first column');
      clearBoard();
    };
    // Get text for 1,4,7 Vert
    if ($('div[data-cell=1]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=7]').text() === playerTurn) {
      console.log('Win in second column');
      clearBoard();
    };
    // Get text for 2,5,8 Vert
    if ($('div[data-cell=2]').text() === playerTurn &&
      $('div[data-cell=5]').text() === playerTurn &&
      $('div[data-cell=8]').text() === playerTurn) {
      console.log('Win in third column');
      clearBoard();
    };
    // Get text for 0,4,8 Diag
    if ($('div[data-cell=0]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=8]').text() === playerTurn) {
      console.log('Win Diag');
      clearBoard();
    };
    // Get text for 2,4,6 Diag
    if ($('div[data-cell=2]').text() === playerTurn &&
      $('div[data-cell=4]').text() === playerTurn &&
      $('div[data-cell=6]').text() === playerTurn) {
      console.log('Win Diag');
      clearBoard();
    };
  };

});
