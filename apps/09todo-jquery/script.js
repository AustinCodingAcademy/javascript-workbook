'use strict';

$(document).ready(function() {
  // App logic goes here

  var todoText = $(this).find('input[type="text"]').val();

  $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
    event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
    console.log( $(this) ); // let's log out our "this" context (our form element) as a jQuery object
  });
});
