'use strict';

$(document).ready(function() {
    //add radio to pre-existing items
    $('li').prepend("<label><input type='radio'></label>")
    $('input[type="radio"]').checkboxradio()
    $('#todo').attr('placeholder', "Add tasks here...")
    function liAdd(input) {
        return "<li>" + input + "</li>";
    }

    $('form').on('submit', function(event) {
        event.preventDefault();

        //Select input
        var toDoText = $(this).find('input[type="text"]').val();
        //Void the input form
        $(this).find('input[type="text"]').val('');

        $('#todo-list').append(liAdd(toDoText));
        //add radio to newly-created item
        $('#todo-list').children().last().prepend("<label><input type='radio'></label>")
        $('input[type="radio"]').checkboxradio();
        // $('#todo-list').children().last().fadeOut(1500);
        
    });
    $('#todo-list').sortable();
});
