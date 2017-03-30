'use strict';

var userList = {
  success: function(users) {
    users.forEach(function(user) {
      var str =
        ('<tr>' +
          '<td>' + user.id + '</td>' +
          '<td>' + user.first_name + '</td>' +
          '<td>' + user.last_name + '</td>' +
          '<td>' + '<a href="#" data-id="' + user.id + '">view</a></td>' +
          '</tr>');
      $('tbody').append(str);
    });
  }
}

var specificUser = {
  success: function(user) {
    var str =
      ('<div id="details">' +
        '<h3>' + user.first_name + user.last_name + '</h3>' +
        '<h4>' + user.occupation + '</h4>' +
        '<p>' + user.phone + '</p>' +
        '<p>' + user.address + '</p>' +
        '<img src="' + user.avatar + '">' +
        '</div>');
    $('#details').replaceWith(str);
  }
}

$(document).ready(function() {
  $.ajax("https://reqres-api.herokuapp.com/api/users", userList);
  $('body').on('click', 'a', function(event) {
    event.preventDefault();
    var userID = $(this).data('id');
    var theUrl = 'https://reqres-api.herokuapp.com/api/users' + '/' + userID;
    $.ajax(theUrl, specificUser);
  });
});

//
// 'use strict';
//
// $(document).ready(function() {
//   var url = 'https://reqres-api.herokuapp.com/api/users/';
//   $.ajax(url, {
//     success: function(response) {
//       response.forEach(function(user) {
//         var str = '<tr><td>' + user.id + '</td><td>' + user.first_name + '</td><td>' + user.last_name + '</td><td><a data-id="' + user.id + '" href="#">view</a></td></tr>';
//         $('tbody').append(str);
//       });
//       $('a[data-id]').click(function(e) {
//         e.preventDefault();
//         var $detailsDiv = $('#details');
//         var userUrl = url + $(this).data('id');
//
//         $detailsDiv.empty();
//
//         $.ajax(userUrl, {
//           success: function(user) {
//             var details = '<h3>' + user.first_name + ' ' + user.last_name + '</h3><h4>' + user.occupation + '</h4><p>' + user.phone + '</p><p>' + user.address + '</p><img src="' + user.avatar + '"/>';
//             $detailsDiv.append(details);
//           }
//         });
//       });
//       $('a[data-id')[0].click();
//     }
//   });
// });
