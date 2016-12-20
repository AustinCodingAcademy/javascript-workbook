'use strict';

$(document).ready(function() {
//Using jQuery's $.ajax method, make a call
// to https://reqres-api.herokuapp.com/api/users.
//  Watch the call happen in your Network tab in
//  your developer console.
 $.ajax('https://reqres-api.herokuapp.com/api/users', {
   success: function(users) {
     users.forEach(function(user){
     var str = '<tr><td>'
     + user.id + '</td><td>'
     + user.first_name + '</td><td>'
     + user.last_name + '</td><td><a href="#" data-id="'
     + user.id + '">view</a></td></tr>';
      $('tbody').append(str);

     })
   }
 })

 $('body').on('click', 'a', function(event) {
        event.preventDefault();
        var url = 'https://reqres-api.herokuapp.com/api/users/' + $(this).data("id");
        $.ajax(url, {
            success: function(users) {
                var str =
                    "<h3>" + users.first_name + " " + users.last_name + "</h3>" +
                    "<h4>" + users.occupation + "</h4>" +
                    "<p>" + users.phone + "</p>" +
                    "<p>" + users.address + "</p>" +
                    "<img src='" + users.avatar + "'>";
                $('#details').html(str);
            }
        });
    });
});
