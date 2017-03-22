'use strict';

$(document).ready(function() {
  // App logic goes here


  $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
       event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
       //console.log( $(this) ); // let's log out our "this" context (our form element) as a jQuery object

       var value = $(this).find('input[type="text"]').val();

       $('#todo-list').append('<li><input type="checkbox"/>' + value + '<button>remove </button></li>');
       $('#todo-list').sortable();

  });  //end of submit

  $('body').on('click', 'button', function(){
    console.log('hello?');
    //this is the button clicked
    //parent is the li
    //remove is removing the thing from under parent ( <li> )
    $(this).parent().remove();

  }); //end of click

});  //end of read function
