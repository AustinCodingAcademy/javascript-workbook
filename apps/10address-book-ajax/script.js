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
    }

});

});

