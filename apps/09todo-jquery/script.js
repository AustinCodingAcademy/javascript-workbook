'use strict';

$(document).ready(function() {
  // App logic goes here
  $( 'form' ).submit(function( event ) {
    var todoInput = $('#todo', this);
    var todoText = todoInput.val();
    $('#todo-list').append('<li>' +'<input type="checkbox" id="checkbox" value="1" />' + ' ' +todoText+ ' ' + '<input type="submit" class="done" id="delete" value="Delete">' +'</li>');
      event.preventDefault();
    $("#todo").val("");

  });

  $(document).on('click', "#checkbox", completeTodoItem)

  $(document).on('click', "#delete", deleteTodoItem)

  function deleteTodoItem() {
    $(this).parent().remove();
  }

  function completeTodoItem() {
    $(this).parent().toggleClass("strike");
  }

  $(function() {
   $( "#todo-list" ).sortable();
   $( "#todo-list" ).disableSelection();
  });
});
