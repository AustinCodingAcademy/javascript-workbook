'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('https://reqres-api.herokuapp.com/api/users/', {
    success: function(response) {
      response.forEach(function(user) {
        var str = $("tbody").append(($('<tr>' + '<td>' + user.id + '</td>' +
          '<td>' + user.first_name + '</td>' +
          '<td>' + user.last_name + '</td>' +
          '<td>' + '<a href="#" data-id ="' + user.id + '">' + "view" + '</a>' + '</td>' + '</tr>')));
        console.log(user);
        return str;
        //$(`<img src="${'thing'}">`);
      });
      $("a").on('click', function(event) {
        event.preventDefault();
        console.log($(event.target).children());
        var url = ('https://reqres-api.herokuapp.com/api/users/' + $(this).data("id"));
        console.log(url);
        $.ajax(url, {
          success: function(user) {
            var str2 = $("div#details").html($('<h3>' + user.first_name + " " + user.last_name + '</h3>' + '<h4>' + user.occupation + '</h4>' + '<p>' + user.phone + '</p>' + '<p>' +
              user.address + '</p>' + '<img src="' + user.avatar + '">'));
            console.log(str2);
            // return str2;
          }
        });


      });
    }
  });

});
//Now make an .ajax with that url, and in a success callback, pass in user as the response. Build another str that builds an html string that matches the default markup in the div#details element.
