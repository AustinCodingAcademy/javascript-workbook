'use strict';

$(document).ready(function() {
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(userArray) {
      userArray.forEach(function(users) {
        var str = "<tr>" + 
                    "<td>" + users.id + "</td>" + 
                    "<td>" + users.first_name + "</td>" +
                    "<td>" + users.last_name + "</td>" +
                    "<td>" + "<a href='#' data-id='" + users.id + "'>view</a>" + "</td>" +
                  "</tr>";
        $('tbody').append(str);
      })  
      viewUser();  
    }
  });

  

});

function viewUser() {
  $('a').click(function() {
    event.preventDefault();
    $('#details').empty();
    var url = 'https://reqres-api.herokuapp.com/api/users/';
    url = url + $(this).data('id');
    console.log('user was clicked');
    $.ajax(url, {
      success: function(userArray) {
        var viewStr = "<h3>" + userArray.first_name + "</h3>" +
                      "<h4>" + userArray.occupation + "</h4>" +
                      "<p>" + userArray.phone + "</p>" +
                      "<p>" + userArray.address + "</p>" +
                      "<img src='" + userArray.avatar + "'>";
        $('#details').append(viewStr);
      }
    });
  });
}


 