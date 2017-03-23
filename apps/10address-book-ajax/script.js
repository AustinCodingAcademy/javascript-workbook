'use strict';

$(document).ready(function() {

  var url = 'https://reqres-api.herokuapp.com/api/users/';

  $.ajax(url, {
    success: function(response) {
      response.forEach( function(user) {

        var str = '<tr><td>' + user.id + '</td><td>' + user.first_name + '</td><td>' + user.last_name + '</td><td><a data-id="' + user.id + '" href="#">view</a></td></tr>';

        $('tbody').append(str);
      });

      $('a[data-id]').click(function(event) {
        event.preventDefault();

        var newUrl = url + $(this).data('id');

        $('#details').empty();

        $.ajax(newUrl, {
          success: function(user) {

            var details = '<h3>' + user.first_name + ' ' + user.last_name + '</h3><h4>' + user.occupation + '</h4><p>' + user.phone + '</p><p>' + user.address + '</p><img src="' + user.avatar + '"/>';

            $('#details').append(details);
          }
        });
      });
      $('a[data-id')[0].click();
    }
  });
});
