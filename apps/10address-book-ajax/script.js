'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(users) {
      users.forEach(function(user){
        var idCell = '<td>' + user.id + '</td>';
        var first_nameCell = '<td>' + user.first_name + '</td>';
        var last_nameCell = '<td>' + user.last_name + '</td>';
        var hrefCell = '<td><a href="#" data-id="' + user.id + '">view</a></td>';
        var str = '<tr>' + idCell + first_nameCell + last_nameCell + hrefCell + '</tr>';
        $('tbody').append(str);

      })
      $('a').click(function(event) {
        event.preventDefault();
        var $clickedID = $(this).data('id');
        var url = "https://reqres-api.herokuapp.com/api/users/" + $clickedID;
        $.ajax(url, {
          success: function(detail) {
            var userName = '<h3>' + detail.first_name + ' ' + detail.last_name + '</h3>';
            var occupation = '<h4>' + detail.occupation + '</h4>';
            var phone = '<p>' + detail.phone + '</p>';
            var address = '<p>' + detail.address + '</p>';
            var img = '<img src="' + detail.avatar + '">'
            $('#details').empty();
            var userDetails = userName + occupation + phone + address + img;
            $('#details').append(userDetails);
          }
        })
      });
    }
  });
});
