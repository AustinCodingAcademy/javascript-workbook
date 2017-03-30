'use strict';

$(document).ready(function() {
  // App logic goes here
  $('form').submit(function(event){ //spec 1: add a submit event on the 'form'
    event.preventDefault();         // spec 2: prevent the default event from occuring in your submit
    var value = $(this).find('#todo').val() // spec 2.1: find the value of 'todo' and assign it to todoText
    $('#todo-list').append('<li><input type="checkbox"/>' + value + '<button>remove</button</li>'); // spec 3: append the html string to the end of the list

  $('#todo-list').sortable(); // spec 4: make the list sortable using sortable();
});

$('body').on('click', 'button',function(){
  //console.log('hello?');
  $(this).parent().remove('li');

})

});