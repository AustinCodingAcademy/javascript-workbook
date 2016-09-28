'use strict';

$(document).ready(function() {
    // App logic goes here

    var todoList = [];
    var todoText = null;
    var todoListItem = null;
    todoList = $('#todo-list');
    var todoListChildren = todoList.children();

    $('form').submit(function(event) {
        event.preventDefault();
        todoText = $(this).find('#todo').val();

        if (todoText === "" || todoText === null) {
            $('#announce-error').text('Error - please enter a todo item.');
        } else {
            $('#announce-error').text('');
            todoListItem = "<li>" + todoText + "</li>";
            todoList.append(todoListItem);
            $(this).find('#todo').val('');
        }

        $(function() {
            $("#todo-list").sortable();
            //$("#todo-list").disableSelection();
        });

    });




});
