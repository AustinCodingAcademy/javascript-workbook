'use strict';

$(document).ready(function() {
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
      success: function(users) {
        users.forEach(function(user){
        var $row = $('<tr> </tr>');
        $row.append('<td>'+ user.id +'</td>');
        $row.append('<td>'+ user.first_name +'</td>');
        $row.append('<td>'+ user.last_name +'</td>');
        var $link = $('<td><a href="#" data-id="' + user.id + '">view</a></td>');
        $row.append($link);
        $('tbody').append($row);

      });

        $('a').click(function(event) {
          event.preventDefault();
          $.ajax('https://reqres-api.herokuapp.com/api/users' + '/' + $(this).data('id'), {
            success: function(user) {
              $('div#details').empty();
              var newDetails = '<div>' +
              '<h3>' + user.first_name + ' ' + user.last_name + '</h3>' +
              '<h4>' + user.occupation + '</h4>' +
              '<p>' + user.phone + '</p>' +
              '<p>' + user.address + '</p>' +
              '<img src="' + user.avatar + '">' +
              '</div>';
              $('div#details').append(newDetails);
            }

          });

        });
  }
})




});
