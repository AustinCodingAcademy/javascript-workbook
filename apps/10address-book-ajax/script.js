'use strict';

$(document).ready(function () {
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function (users) {
      users.forEach(function (user) {
        var str =
          `<tr>
          <td>${user.id}</td>
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
          <td><a href='#' data-id=${user.id}>view</a></td>
        </tr>`;
        $('tbody').append(str);

      })
      $('tbody a').on('click', function (link) {
        link.preventDefault();
        var URL = 'https://reqres-api.herokuapp.com/api/users/' + $(this).data('id');
        console.log(URL);
        $.ajax(URL, {
          success: function (user) {
            var str2 =
              `<h3>${user.first_name}</h3>
                <h4>${user.last_name}</h4>
                <p>${user.occupation}</p>
                <p>${user.address}</p>
                <img src='${user.avatar}'>`;
            console.log(str2);
            $('#details').html(str2);
          }
        })
      })
    }
  })
});
