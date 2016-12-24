'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(users){
      users.forEach(function(user){
        var str = "`<tr><td>${user.id}</td><td>${user.first_name}</td><td>${user.last_name}</td><td><a href='#' data-id='${user.id}'>View</a></tr>`";
        $('tbody').append(str)
      })

      $('a').click(function(event){
        event.preventDefault;
        var url = 'https://reqres-api.herokuapp.com/api/users/';
        url += $(this).data('id');
        $.ajax(url, {
          success: function(user){
            
          }
        })
      }
    }


  });


});
