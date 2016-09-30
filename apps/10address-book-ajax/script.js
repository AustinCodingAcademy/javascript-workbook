'use strict';

$(document).ready(function() {

  $.ajax('https://reqres-api.herokuapp.com/api/users',{

    success: function(users) {

      users.forEach(function(user){
        var str = '<tr>' + '<td>' + user.id + '</td>' +
                  '<td>' + user.first_name + '</td>' +
                  '<td>' + user.last_name + '</td>' +
                  '<td><a href="#" data-id="'+ user.id +
                  '">view</a></td>'
        $('tbody').append(str);
      })

      $('a').on('click',function(event) {
        event.preventDefault();
        var url = 'https://reqres-api.herokuapp.com/api/users/';
        url += $(this).data('id');
        console.log(this);
        console.log(url);
        $.ajax(url, {
          success: function(user) {
            var view = '<div id="'+user.id+'">' +
                    "<h3>" + user.first_name + " " + user.last_name + "</h3>" +
                    "<h4>" + user.occupation + "</h4>" +
                    "<p>" + user.phone + "</p>" +
                    "<p>" + user.address + "</p>" +
                    "<img src='" + user.avatar + "'/>" + "</div>";
            $('#details').html(view);
          }});
        })
      }})
  });
