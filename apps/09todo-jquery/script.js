'use strict';

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function(event) {
        // this only sends the info we want not whatever the web page wants
        event.preventDefault();

        // this finds the value of the id "todo", and saves it in  a variable.
        var todoText = $(this).find('#todo').val();

        // .sortable() allows the user to re-sort the unordered list.
        // this adds the li into the unordered list.
        // you can add full html using jquery by putting it into a string.
        $("#todo-list").append("<li><input type='checkbox'>" + todoText + "<i class='button fa fa-times' aria-hidden='true'></i></li>").sortable();

        // this makes the submit box empty after you click the button
        todoText = $(this).find("#todo").val("");

        // this allows the user to delete an item when they click on the button
        $("body").on('click', '.button', function() {
            $(this).parent().remove();

        });



    });
});
