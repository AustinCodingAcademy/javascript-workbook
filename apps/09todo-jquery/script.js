'use strict';

$(document).ready(function() {
  var $form = $('form');
  var $this = $(this);
  var $value;
  var $toDoList = $('#todo-list');
  var $listItem = $('li');
  var $input = $('input');
  var $toDoListContainer = $('.to-do-list-item');

  $form.submit(function(event) {
    event.preventDefault();
    $value = $this.find('input[type="text"]').val();
    $toDoList.append('<div class="to-do-list-item"> <li>' + $value + '</li>' + '<input id="finishTask" type="checkbox" value="Finish Task"/>' + '<span id="complete-checkbox">Mark Complete</span>' + '</div>');
    $toDoList.sortable();
    $input.val("");
  });

  $toDoList.on('change', 'input', function(event) {
    if ($(this).is(":checked")) {
      $($(this)).closest('.to-do-list-item').remove();
    }  
  });

  $toDoList.on('click', 'li', function(event) {
    $($(this)).closest('.to-do-list-item').remove();
  });
});
