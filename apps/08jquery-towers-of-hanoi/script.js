'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null; 
  $('[data-stack]').click(function () {
    $block = $(this).children().last().detach();
    
  })

});
