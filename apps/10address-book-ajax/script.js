'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
      success: function(users) {
        users.forEach(function(user) {

          // var $tr = $('<tr></tr>');
          // $tr.append('<td>' + user.id + '</td>');
          // $tr.append('<td>' + user.first_name + '</td>');
          // $tr.append('<td>' + user.last_name + '</td>');
          // var $a = $(''<td><a href="#" data-id="' + user.id + '">view</a></td></tr>')
          // $tr

          var str = ('<tr><td>' + user.id + '</td>' +
          '<td>' + user.first_name + '</td>' +
          '<td>' + user.last_name + '</td>' +
          '<td><a href="#" data-id="' + user.id + '">view</a></td></tr>');
          $('tbody').append(str);
        });

        $('a').click(function (event) {
          event.preventDefault();
          var url = 'https://reqres-api.herokuapp.com/api/users/' + $(this).data('id')
          $.ajax(url, {
            success: function(user) {
              var $details = $('#details');
              $details.empty();
              $details.append('<h3>' + user.first_name + ' ' + user.last_name + '</h3>');
              $details.append('<h4>' + user.occupation + '</h4>');
              $details.append('<p>' + user.phone + '</p>');
              $details.append('<img src="' + user.avatar +'"/>');
            }
          });
        });
    }
  });
});
