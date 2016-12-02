'use strict';

$(document).ready(function() {
    //target the form submit
  $('form').submit(function (event) {
      //prevent the default action  
      event.preventDefault(); 
      var $this = $(this);
      console.log($this);
      var todoText = $this.find('input[type="text"]').val();
      console.log(todoText);
      var $tempString = $('<li>'+todoText+'</li>');
      console.log($tempString);
      $('#todo-list').append($tempString);
      $('#todo-list').sortable();

      $this.append($('<input>', { id : todoText + "VisibleCheckbox", type:"checkbox", name: todoText + "VisibleCheckbox"}));
  });
    
    
});
