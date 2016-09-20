'use strict';

$(document).ready(function() {
    function li(input) {
        return "<li>" + input + "</li>";
    }
    $('form').on('submit', function(event) {
        event.preventDefault();
        var toDoText = $(this).find('input[type="text"]').val();
        //Void the input form
        $(this).find('input[type="text"]').val('');
        $('#todo-list').append(li(toDoText));
    });
    $('#todo-list').sortable();
});
