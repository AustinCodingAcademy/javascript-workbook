'use strict';

$(document).ready(function() {
  var $form = $('form');
  var $this = $(this);
  var $value;
  var $toDoList = $('#todo-list');
  var $listItem = $('li');

  $form.submit(function(event) {
    event.preventDefault();
    $value = $this.find('input[type="text"]').val();
    $toDoList.append('<li>' + $value + '</li>');
    $toDoList.sortable();
  });

  $("#todo-list").on('click', 'li', function(event) {
    $(this).closest('li').remove();
  });
});
