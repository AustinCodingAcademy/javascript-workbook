'use strict';

$(document).ready(function () {
    //target the form submit
    $('form').submit(function (event) {
        //prevent the default action  
        event.preventDefault();
        var $this = $(this);
        //use val to put the value of the input into a string
        var todoText = $this.find('input[type="text"]').val();
        //create a li object to append
        var $tempString = $('<li>' + todoText + '</li>');
        //apend the li object
        $('#todo-list').append($tempString);
        //make the list sortable
        $('#todo-list').sortable();
        //click on anyt list element and it removes itself
        $('li').click(function () {
            $(this).remove();
        })


    });


});