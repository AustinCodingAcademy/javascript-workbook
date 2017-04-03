'use strict';

$(document).ready(function() {
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(users) {
      users.forEach(function(users) {
        var str = ('<tr>' + 
        '<th>' + users.id + '</th>' +
        '<th>' + users.first_name + '</th>' +
        '<th>' + users.last_name + '</th>' +
        '<th><a href="https://reqres-api.herokuapp.com/api/users/" class="poop" data-id="'+ users.id +'">view</a></th>' +
        '</tr>');
        $('tbody').append(str);
      });
    }
  });

  $('body').on('click', '.poop', function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    var url = 'https://reqres-api.herokuapp.com/api/users/' + id;
    $.ajax(url, {
      success: function(user){
        var str1 = '<div id="details">' + 
          '<h3>' + user.first_name + ' ' + user.last_name + '</h3>' + 
          '<h4>' + user.occupation + '</h4>' +
          '<p>' + user.phone + '</p>' +
          '<p>' + user.address + '</p>' +
          '<img src=' + user.avatar + '></img>' + 
          '</div>';
        $('#details').html(str1);
      }
    });
  });
});


