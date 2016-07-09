'use strict';

$(document).ready(function() {
    // You code here
    $.ajax({
      url: "https://reqres-api.herokuapp.com/api/users",
      success: function(data) {

        data.forEach(function(person){
          var $str = $('<tr><td>' + person.id + '</td><td>' + person.first_name + '</td><td>' + person.last_name + '</td><td><a href="#" data-id="' + person.id + '">view</a></td></tr>');
          $('tbody').append($str);
        })
        $('a').click(function(event){
          event.preventDefault();
          var url = 'https://reqres-api.herokuapp.com/api/users/' + $(this).data('id');
          $.ajax({
            url: url,
            success: function(person) {
              console.log(data);
              var $details = $('<h3>' + person.first_name + ' ' + person.last_name + '</h3>' + '<h4>' + person.student + '</h4>' + '<p>' + person.phone + '</p>' + '<p>' + person.address + '</p>' + '<img src=\'' + person.avatar + '\'>');
              $('#details').html($details);

            }
          })

        })


        // console.log(data);
      }
    })
});
