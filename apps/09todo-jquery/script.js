'use strict';

$(document).ready(function() {
    // App logic goes here
    //Using jQuery, put a submit event listener on the form.
    $('form').submit(function(event) {
        event.preventDefault();
        var todoText = $(this).find('#todo').val();
        $('#todo-list').append('<li><input type="checkbox">' + todoText + '<button class ="remove">remove</button></li>').sortable();
        todoText = $(this).find('#todo').val("");
        $('body').on('click', 'button', function() {
            $(this).parent().remove();
        });

    });
}); 
