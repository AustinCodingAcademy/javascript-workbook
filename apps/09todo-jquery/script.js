'use strict';

$(document).ready(function() {

    //Adding radio buttons to pre-existing items
    $('li').prepend("<label><input type='radio'></label>")
    $('input[type="radio"]').checkboxradio()
    $('#todo').attr('placeholder', "Add tasks here...")
    function liAdd(input) {
        return "<li>" + input + "</li>";
    }

    //Remove first example
    $('#todo-list').children().first().remove();

    //Adding items to the list
    $('form').on('submit', function(event) {
        event.preventDefault();

        //Select input
        var toDoText = $(this).find('input[type="text"]').val();
        //Void the input form
        ////$(event.currentTarget) will also work
        $(this).find('input[type="text"]').val('');
        $('#todo-list').append(liAdd(toDoText));

        //Adding radio button to newly-created item
        $('#todo-list').children().last().prepend("<label><input type='radio'></label>");
        $('input[type="radio"]').checkboxradio({
          classes:  {
            "ui-checkboxradio": "highlight"
          }
        });

        //Adding Button
        var $todoList = $('#todo-list').children().last().append("<button></button>");
        $('button').button({
          classes:  {
            "ui-button": "highlight"
          }
        });
        //Making button remove its parent
        //// This did not work when I placed it into the
        //// global context. This is because that context
        //// is restricted to when the document is ready.
        $('button').on('click', function()  {
          $(this).parent().remove();
        });
    });

    //Make the list sortable
    $('#todo-list').sortable();
});
