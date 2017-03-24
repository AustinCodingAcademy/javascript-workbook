'use strict';

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    // assigns the value of the input field to toDoText to be used later
    var toDoText = $(this).find('#todo').val();
    $("#todo-list").append("<li>" + toDoText + "</li>");
    $("#todo-list").sortable();
  })
});

    // did not work.
    // $('#draggable').draggable();
    // var newLI = document.createElement("li");
    // newLI.id = "draggable";
    // newLI.innerHTML = toDoText;
    // $('#todo-list').append(newLI);
    // $("#draggable").classList.add('');
    // , 'ui-draggable', 'ui-draggable-handle'
    // $('#todo-list').append(newLI);
    //'<li>' + toDoText + '</li>'
    //$('<li />', {html: text}).appendTo('ul.justList')
    // $('<li />', toDoText).appendTo($('#todo-list'));
    // $("#yourUL").append("<li>" + $("#yourinputtextbox").val() + "</li>");
    // $( "#sortable" ).sortable();
    // $( "#sortable" ).disableSelection();
    // $("long-List").sortable();