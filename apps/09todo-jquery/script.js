'use strict';

$(document).ready(function() {
  // App logic goes here
  $('form').submit(function (event) {
    event.preventDefault();
    var todoText = $(this).find('#todo').val();  
    var doneBtn =  '&nbsp; <button type="button">DONE?</button>';
    var listItem = '<li>' + todoText + doneBtn + '</li>';
    $('#todo-list').append(listItem);
    $('#todo-list').sortable();
    $('body').on('click', 'button', function(){
      $(this).parent().remove();
    });
    

   // doneBtn.click(.parent());

//Remove the default task form the html. Add a button or link to each list item. When you click it, it should remove() its .parent() list item.

   // $(this).click(.remove().parent())


  });
});
