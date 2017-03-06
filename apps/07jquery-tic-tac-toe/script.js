'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  runThisCodeOnce();
});

function setup(){
  $('#box').click(function(){
    this.text('X');
  });

}

function runThisCodeOnce(){
  $('[data-cell]').click(handleDataCellDivClick);
  $(this).text('X');
}

// this variable will represent which of the divs are clicked on!!!

function clickX(){
  $('[data-cell]').click(handleDataCellDivClick);
  $(this).text('X');
}