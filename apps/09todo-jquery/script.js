'use strict';

$(document).ready(function() {

  // $('form').on.function('submit', function(event) {
  $('form').submit(function (event) {
    event.preventDefault();
    var todoText = $(this).find("input[type='text']").val();

    var $todoList = $("#todo-list");
    var $checkItem = $('<li><input class="myCheckbox" type="checkbox" value="">'+todoText+' <input class="myButton" type="button" value="Remove"></li>')

    $todoList.append($checkItem);

    $todoList.sortable();

    $checkItem.find(".myButton").on("click", function() {
      $(this).parent().remove();
    } );

  });



});
