'use strict';

$(document).ready(function() {
    $('form').submit(function(event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use

        event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
        console.log($(this)); // let's log out our "this" context (our form element) as a jQuery object
        var todoText = $(this).find('input[type="text"]').val();
        //.val if empty will be "" or could have taken the falsey approach --> !todoText
        if (todoText === "") {
          return;
        }

        $('#todo-list').append('<li> <input type ="checkbox" name="test" value="test"/>' + todoText + '<button class ="done"></button></li>');

        $('body').on('click', 'button', function(event) {
            $(this).parent().remove();


        });

        //this is the button in the scenario above.

        $(this).find('input[type="text"]').val('');

        $('ul').sortable(); //could also put draggable here. Interacting with the DOM
        // $("#todo-list").children('li').each(function() {
        // //     $(this).append('<input type="checkbox" name="test" value="test" />');
        // });
        // // $('li').click(function(){
        // //   $(this).remove();
        // });
    });


});


//.val only works for inputs. Specific for inputs in general. Whatever you type that is the value of the textbox of the form or whatever you are working with.
