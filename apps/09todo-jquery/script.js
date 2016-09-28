'use strict';

$(document).ready(function() {
  $("form").on("submit", function (event) {
    event.preventDefault();

    var todoText = $(this).find('#todo').val();
    var checkBox =
      $('#checks').on("click", function(){
        $(this).prop().change();
    }); //Closes .click() var function

    $('#todo-list').append($('<li>' + todoText + '</li>')).sortable();
      console.log("Append & sortable");
    $(this).find('#todo').val('');
      console.log("find & value");

    $('checkBox');
      console.log("checkbox");

  }); //Closes .submit()
}); // Closes .ready()
