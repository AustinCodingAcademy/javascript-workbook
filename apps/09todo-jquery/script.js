'use strict';

$(document).ready(function() {
    //SPEC 4: Make the list sortable
    $('ul').sortable();

    //Bonus Spec 5: Add a check box to each list item.
    

    $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
      event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
      console.log( $(this) ); // let's log out our "this" context (our form element) as a jQuery object

      //SPEC 2:
      var todoText = $(this).find('#todo').val();

      //SPEC 3:
      $('#todo-list').append('<li>' + todoText + '</li>');

    });//!('form').submit()

});//!(document).ready()
