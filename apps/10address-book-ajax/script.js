'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
      success: function(users) {
        users.forEach(function(user) {
          var markUp = "<tr>";
          markUp += "<td>" + user.id + "</td>";
          markUp += "<td>" + user.first_name + "</td>";
          markUp += "<td>" + user.last_name + "</td>";
          markUp += "</tr>";
          $('tbody').append(markUp);
        })
      }
    })
  });
