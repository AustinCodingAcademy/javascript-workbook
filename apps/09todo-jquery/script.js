'use strict';

$(document).ready(function() {
  var $todo = $('#todo');
  var $todoList = $('#todo-list');
  var $errorText = $('#error');

  $todoList.sortable();
  $todo.focus();

  $('form').submit(function(event) {
  	event.preventDefault();
  	var $todoText = $todo.val();

    if (!$todoText) {
      $errorText.text('Text required');
    } else {
      $errorText.text('');
      $todoList.append(`<li><input type="checkbox" />${$todoText}<input type="button" class="delete-button" value="X" /></li>`);
    }

  	$todo.val('');

  	$('.delete-button').click(function(event) {
  		$(this).parent().remove();
  	});
  });
});