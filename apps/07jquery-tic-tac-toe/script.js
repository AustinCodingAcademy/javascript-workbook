'use strict';

$(document).on('ready', function() {
  // Put app logic in here
  setup();
});

function setup(){
  $('#box').click(function(){
    this;
  });

}

function runThisCodeOnce(){
  $('[data-cell]').click(handleDataCellDivClick);
  $(this).text('X');
}

// this variable will represent whic of the divs are clicked on!!!