'use strict';

$(document).ready(function() {

    $('form').submit(function (event) {
      event.preventDefault();
      console.log(this);
      var todoText = $(this).find('#todo').val();
      $('#todo-list').append('<li>' + todoText + '</li>');



    });
});
