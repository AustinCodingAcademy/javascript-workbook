'use strict';

$(document).ready(() => {
  var url = 'https://reqres-api.herokuapp.com/api/users/';
  $.ajax(url, {
    success: res => {
      res.forEach(user => {
        //var userRow = '<tr><td>' + user.id + '</td><td>' + user.first_name + '</td><td>' + user.last_name + '</td><td><a data-id="' + user.id + '" href="#">view</a></td></tr>';
        var userRow = `<tr><td>${user.id}</td><td>${user.first_name}</td><td>${user.last_name}</td><td><a data-id="${user.id}" href="#">view</a></td></tr>`;
        $('tbody').append(userRow);
      });
      $('a[data-id]').click(function(e) {
        e.preventDefault();
        var $detailsDiv = $('#details');
        var userUrl = url + $(this).data('id');

        $detailsDiv.empty();

        $.ajax(userUrl, {
          success: user => {
            //var details = '<h3>' + user.first_name + ' ' + user.last_name + '</h3><h4>' + user.occupation + '</h4><p>' + user.phone + '</p><p>' + user.address + '</p><img src="' + user.avatar + '"/>';
            var details = `<h3>${user.first_name} ${user.last_name}</h3><h4>${user.occupation}</h4><p>${user.phone}</p><p>${user.address}</p><img src="${user.avatar}"/>`;
            $detailsDiv.append(details);
          }
        });
      });
      $('a[data-id')[0].click();
    },
    error: () => {
      console.error('Error loading users');
    }
  });
});
