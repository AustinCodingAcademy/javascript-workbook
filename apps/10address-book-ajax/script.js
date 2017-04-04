'use strict';

$(document).ready(function () {//when page is ready
  $.ajax('https://reqres-api.herokuapp.com/api/users', {//ajax connection to user data
    success: function(users) {
      users.forEach(function(user) {//for each user create the following html and populate it from the users we got from ajax
        var str =
          `<tr>
          <td>${user.id}</td>
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
          <td><a href='#' data-id=${user.id}>view</a></td>
        </tr>`;
        $('tbody').append(str);

      })
      $('tbody a').on('click', function (link) {//when you click on the link
        link.preventDefault();//prevent the default link action
        var URL = 'https://reqres-api.herokuapp.com/api/users/' + $(this).data('id');//have the link do this instead
        console.log(URL);
        $.ajax(URL, {
          success: function (user) {//when clicked create the following html and fill it based on the id of the user.
            var str2 =
              `<h3>${user.first_name}</h3>
                <h4>${user.last_name}</h4>
                <p>${user.occupation}</p>
                <p>${user.phone}</p>
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