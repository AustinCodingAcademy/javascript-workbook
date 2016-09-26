'use strict';

$(document).ready(function() {
    // App logic goes here

    var todoList = [];
    var todoText = null;
    var todoListItem = null;
    todoList = $('#todo-list');
    var todoListChildren = todoList.children();

    // console.log(todoListChildren);


    $('form').submit(function(event) {
        event.preventDefault();


        todoText = $(this).find('#todo').val();

        if (todoText === "" || todoText === null) {
            $('#announce-error').text('Error - please enter a todo item.');
        } else {
            $('#announce-error').text('');


            // console.log(todoText);

            todoListItem = "<li>" + todoText + "</li>";

            todoList.append(todoListItem);

            // for (var i = 0; i < todoList.length; i++) {
            //     console.log(todoList[i]);
            // }

            $(this).find('#todo').val('');

        }

    });


    $(function() {
        $("#todo-list").sortable();
        $("#todo-list").disableSelection();
    });




});
