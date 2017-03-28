'use strict';

$(document).ready(function() {
    $('#todo-list').sortable();
    //$('li').checkboxradio();

    // App logic goes here
    $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
      event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
      console.log( $(this) ); // let's log out our "this" context (our form element) as a jQuery object
      var value = $(this).find('input[type="text"]').val();

      //Append the submitted information as a list item into the unordered list.
      //$('ul').append('<li>' + value + '</li>');
      $('ul').append(
        '<li>' +
          '<label for="checkbox-1">' + value + ' ' + '</label>' +
          '<input type="checkbox" name="checkbox-1" id="basic-checkbox">' +
        '</li>'
        );

      //Set the input value of the form back to empty.
      $(this).find('input[type="text"]').val('')
    });
});
