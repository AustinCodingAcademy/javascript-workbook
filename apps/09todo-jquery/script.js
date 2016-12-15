'use strict';

$(document).ready(function() {
    // App logic goes here

$('#todo-list').sortable();
$('form').submit(function(event) {

  event.preventDefault();
  console.log($(this))
   var todoText = $(this).find('input[type="text"]').val();

   if (todoText === "") {
             return;
           }

           $('#todo-list').append('<li> <input type ="checkbox" name="test" value="test"/>' + todoText + '<button class ="done"></button></li>');

           $('body').on('click', 'button', function(event) {
               $(this).parent().remove();

           });

$(this).find('input[type="text"]').val('');

$('#todo-list').on('click', '.done', function(e) {
    e.preventDefault();
    $(this).parent().remove();
    //if ($('#todo-list').children().length === 0) {
    //    $('#todo-list').append('<li id="default-li"><span class="todo-text">You finished your list! Feel free to start over!</span></li>');
        }
    });
});
