'use strict';

$(document).ready(function() {
    var $request = 'https://reqres-api.herokuapp.com/api/users/';
    $.ajax($request, {
        success: function(people) {
            people.forEach(function(person) {
                var $str = $('<tr><td>' + person.id + '</td><td>' + person.first_name + '</td><td>' + person.last_name + '</td><td><a href="#" data-id="'+ person.id + '">View Profile</a></td></tr>');
                $('tbody').append($str);
            });
            $('td a').click(function(event){
              event.preventDefault();
              var $id = $(this).data('id');
              var $url = $request + $id;
              $.ajax($url, {
                success: function(user){
                  var $str = $('<h3>' + user.first_name + ' ' + user.last_name + '</h3><h4>' + user.occupation + '</h3><p>' + user.phone + '</p><p>' + user.address + '</p><img src="' + user.avatar + '">');
                  $('div#details').html($str).addClass('animated fadeIn');
                  $('#details').css("display", "block");

                }
              });

            });
        }
    });
});
