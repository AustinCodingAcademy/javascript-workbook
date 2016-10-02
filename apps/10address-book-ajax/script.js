'use strict';

$(document).ready(function() {

  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(users) {
      users.forEach(function(user){
        var $tr = $('<tr></tr>');
        $tr.append('<td>' + user.id + '</td>'),
        $tr.append('<td>' + user.first_name + '</td>'),
        $tr.append('<td>' + user.last_name + '</td>');
        $tr.append('<a href="#" data-id="' + user.id + '">view</a>');

        $('tbody').append($tr);

      })

      $('a').click(function(event){
        event.preventDefault();
        var id = $(this).data('id');
        var url = 'https://reqres-api.herokuapp.com/api/users/' + id;
        $.ajax(url, {
          success: function(user) {
            var $details = $('#details');
            $details.html('');

          }
        })

      })
    }
  });
});
