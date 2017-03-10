'use strict';

$(document).ready(function() {
  var $todoList = $('#todo-list');
  $todoList.sortable();
  $('#todo').focus();

  $('form').submit(function(event) {
  	event.preventDefault();
  	var $todoText = $(this).find('input[type="text"]').val();

  	$todoList.append('<li><input type="checkbox" />' + $todoText + '<input type="button" class="delete-button" value="X" /></li>');

  	$(this).find('input[type="text"]').val('');

  	$('.delete-button').click(function(event) {
  		$(this).parent().remove();
  	});
  });
});