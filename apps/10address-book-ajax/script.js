'use strict';

$(document).ready(function() {
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(user) {
      for (var i = 0; i < user.length; i++) {
        var $str = $('<tr><a href="#" data-id="' + user[i].id + '">' + user[i].id + '</a></tr>');
        console.log($str);
        $('tbody').append($str);

        $str.click(function(event) {
          event.preventDefault();
          $.ajax('https://reqres-api.herokuapp.com/api/users/' + $(this).find('a').data('id'), {
            success: function(response) {
              $('div#details').html(response['name']);
            }
          })
        });
      }
    }
  });
});
