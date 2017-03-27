'use strict';

$(document).ready(function() {
  var settings = { 
    success: function(users) { 
      users.forEach(function(person) {
        var str = ('<tr>' +
        '<td>' + person.id + '</td>' +
        '<td>' + person.first_name + '</td>' +
        '<td>' + person.last_name + '</td>' +
        '<td><a href="https://reqres-api.herokuapp.com/api/users/" data-id="' + person.id + '">view</a> </td>' +
        '</tr>')

        $('tbody').append(str);
      })
    }
  }

  var s = {
    success: function(user) {
      var str2 = ('<h3>' + user.first_name + ' ' + user.last_name + '</h3>' +
      '<h4>' + user.occupation + '</h4>' +
      '<p>' + user.phone + '</p>' + 
      '<p>' + user.address + '</p>' +
      '<img src="' + user.avatar + '">')

      $('#details').empty();
      $('#details').append(str2);
    }
  }

  $('body').on('click', 'a', function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    var url = 'https://reqres-api.herokuapp.com/api/users/' + id;
    $.ajax(url, s);
  })


  $.ajax('https://reqres-api.herokuapp.com/api/users', settings);
});
