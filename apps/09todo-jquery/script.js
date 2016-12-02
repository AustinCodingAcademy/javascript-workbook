'use strict';

$(document).ready(function() {
    // App logic goes here
    function countTasks() {
      var count = $('#todo-list li').length;
      $('#item-count').text(count);
      console.log("task count is " + count)
      if (count > 0) {
        $('#item-count').css("visibility","visible");
      } else {
        $('#item-count').css("visibility","hidden");
      }
    };

    $('form').submit(function(event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
        var todoText = $(this).find('input[type="text"]').val();
        if (todoText == '') {
            $("#alert-prompt").text("Please enter a task.");
            event.preventDefault();
            return;
        } else {
            $("#alert-prompt").text("");
            event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
            console.log($(this)); // let's log out our "this" context (our form element) as a jQuery object
            console.log("todo text is " + todoText);
            $('#todo-list').append('<li>' + todoText + '<div><span class="fa fa-minus-square"></span></div><div><input type="checkbox" value="done"></div></li>');
            $(this).find('input[type="text"]').val('');
            countTasks();
        }
    });

    $("#clear-all").click(function() {
        if (confirm("This will completely empty your list.  Are you sure?")) {
            $('#todo-list').empty();
            countTasks();
        }
    });

    $('#todo-list').on('click', '.fa-minus-square', function() {
        $(this).parent().parent().remove();
        console.log("clicked remove");
        countTasks();
    });

    $("#clear-done").click(function() {
        $("#todo-list input[type='checkbox']:checked").parent().parent().remove();
        countTasks();
    });

    $("#todo-list").sortable();

});
