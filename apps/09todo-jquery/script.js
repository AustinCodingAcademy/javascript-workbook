'use strict';

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function(event) {
        event.preventDefault();
        var todoText = $(this).find('#todo').val();
        $('#todo-list').append('<li><input type="checkbox">  ' + todoText + '  </input><a class="remove-item" href="#">Remove</a></li>');
        $('#todo-list').sortable();
        $('#todo').val('');
    });

    $('a.remove-item').click(function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });
});
