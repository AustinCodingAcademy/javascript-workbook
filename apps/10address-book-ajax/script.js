'use strict';

$(document).ready(function() {
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(response) {
      response.forEach(function(users) {
        var str = $('tbody').append('<tr><td>' + users.id + '</td><td>' + users.first_name + '</td><td>' + users.last_name + '</td><td><a href="#" data-id="' + users.id + '">view</a></td></tr>');
        console.log(users.id);
      })
    }
  });

  $('tbody').on('click', '[data-id]', function(link) {
    link.preventDefault();
    var url = 'https://reqres-api.herokuapp.com/api/users/' + $(link.target).data('id');
    $.ajax(url, {
      success: function(user) {
        var str2 = '<h3>' + user.first_name + ' ' + user.last_name + '</h3><h4>' + user.occupation + '</h4><p>' + user.phone + '</p><p>' + user.address + '</p><img src="' + user.avatar + '">';
        $('#details').html(str2);
      }
    });
  })
});
