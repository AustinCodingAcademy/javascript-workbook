'use strict';

$(document).ready(function() {
  // App logic goes here
  $(document).ready(function() {
    $('form').submit(function (event) { 
        event.preventDefault(); 
        
        var value = $(this).find('input[type="text"]').val();
        $('#todo-list').append('<li><input type="checkbox"/>' + value + '<button>remove</button></li>'); // input type is bonus spec 5
        $('#todo-list').sortable();

      });

      // use on click instead of .click(), because .click() would only work with hard coded elements. There are no hard coded buttons in the html.
      $('body').on('click','button',function() {
        // this is the button
        // parent is the li
        $(this).parent().remove();
      })
  })
});
