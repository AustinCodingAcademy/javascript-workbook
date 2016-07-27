'use strict';

$(document).ready(function() {

    $('form').submit(function(event) {
      event.preventDefault();
      var todoText =$(this).find("#todo").val();
      $('#todo-list').append('<li>'+todoText+'<button class="button" id="remove">Remove</button>'+'</li>');
      $('input[type="text"]').val('');
      $('#todo-list').sortable();
      $(this).find('#todo').val('');
    });
    $('#todo-list').on('click', 'button', function () {
    $(this).parent().remove();
  });
});
// <div class="squaredTwo"><input type="checkbox" value="None" id="squaredTwo" name="check" checked/><label for="squaredTwo"></label></div>
