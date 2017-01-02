'use strict';

$(document).ready(function() {
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(response) {
    response.forEach(function(users){
      var str = "<tr>" + "<td>" + users.id + "</td>" +
      "<td>" + users.first_name + "</td>" +
      "<td>" + users.last_name + "</td>" +
      "<td>" + '<a href="#" data-id="' + users.id + '">view</a>' + "</td>" +
      "</tr>";
      $('tbody').append(str);
    });
    userClick();
  }
    });

function userClick(){
      $('a').on('click',function(event) {
        event.preventDefault()
          var url = 'https://reqres-api.herokuapp.com/api/users/'
          var userid = $(this).data("id");
          var urltarget = url + userid;
          $.ajax(urltarget, {
            success: function(users) {
                var str =
                "<h3>" + users.first_name + ' ' + users.last_name + "</h3>" +
                "<h4>" + users.occupation + "</h4>" +
                "<p>" + users.phone + "</p>" +
                "<p>" + users.address + "</p>" + "<img src=" + users.avatar + ">";
         $('#details').html(str);
            }
          });
        });
      };
    });
