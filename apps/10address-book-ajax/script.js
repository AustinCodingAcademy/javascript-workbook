'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
        success: function(users) {
            users.forEach(function(user) {
                var str = '<tr><td>' + user.id + '</td><td>' + user.first_name + '</td><td>' + user.last_name + '</td><td>' + '<a href = "#"data-id="' + user.id + '">view</a>' + '</td></tr>';
                $('tbody').append(str);
            })
            $('a').click(function() {
                var url = 'https://reqres-api.herokuapp.com/api/users/';
                var id = $(this).data('id');
                $.ajax(url + id, {
                    success: function(user) {
                        $('#details').html(
                            `
                  <h3>${user.first_name} ${user.last_name}</h3>
                  <h4>${user.occupation}</h4>
                  <p>${user.phone}</p>
                  <p>
                    ${user.address}
                  </p>
                  <img src="${user.avatar}">
                  `
                        )
                    }
                });
            })
        }
    });

});
