'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
      success: function(users) {
        // for (var i = 0; i < users.length; i++) {
        users.forEach(function(user){
           var str = "<tr>" + "<td>" + user.id + "</td>" +
                     "<td>" + user.first_name + "</td>" +
                     "<td>" + user.last_name + "</td>" +
                     "<td>" + "<a href=" + '"#"' + " data-id=" + user.id + ">view" + "</a>" + "</td>" + "</tr>";
          $('tbody').append(str);
    // var url = "'https://reqres-api.herokuapp.com/api/users/'";

        })

        $('a').on('click', function(event){
          event.preventDefault();

          $.ajax('https://reqres-api.herokuapp.com/api/users/' + $(this).data('id') , {
            success: function(user){
              var $details = $('#details');
              $details.empty();

              var bio = "<h3>" + user.first_name + " " + user.last_name + "</h3>" +
                        "<h4>" + user.occupation + "<h4>" +
                        "<p>" + user.phone + "</p>" +
                        "<p>" + user.address + "</p>" +
                        "<p>" + '<img src="' + user.avatar + '">';
              // user.avatar

              // select details div
              $('#details').empty();
              $('#details').append(bio);
              // $('div').html(user['user']);
            }
        })
      })
        //  var str = "<li> + 'https://reqres-api.herokuapp.com/api/users/' + + </li>";
//          console.log(users[i]['name']);
      //  }

    }

  });
});
