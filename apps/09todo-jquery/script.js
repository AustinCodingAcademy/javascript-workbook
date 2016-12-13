'use strict';

$(document).ready(function() {

    $('form').submit(function(event) {
        event.preventDefault();

        var $todoText = $(this).find('#todo').val();

        $('#todo-list').append('<li><label class="checkbox-inline"><input type="checkbox" />' + $todoText + '</label></li>').sortable();

        var $clearInputText = $(this).find('#todo').val('');

        $('input').click(function(){
          if ($(this).is(':checked')) {
              $('input:checked').parent().parent().addClass('checkedItem');
          } else {
              $('input').not(':checked').parent().parent().removeClass('checkedItem');
          }
        });
    });
    $('#clearButton').click(function(event) {
        event.preventDefault();

        if ($('label input').is(':checked')) {
            $('input:checked').parent().parent().remove();
        }
    });
});
