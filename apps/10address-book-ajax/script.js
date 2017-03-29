'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(users) {

      // this loop iterates over the users and builds a string.
      users.forEach( function(user) {
        var str = '<tr><td>' + user.id + '</td><td>' + user.first_name + '</td><td>' + user.last_name + '</td><td><a href="#" data-id="' + user.id + '">view</a></td></tr>';
        
        // this places the string above to the table body.
        $('tbody').append(str);
      });

      // this is the function that takes place when the link is clicked.
      $('a').on('click', function(event) {

        // this prevents page refresh.
        event.preventDefault();
        var url = 'https://reqres-api.herokuapp.com/api/users/';

        // this places the user id at the end of the url in order to target the user. 
        $.ajax(url + $(this).data('id'), {
          success: function(user) {
            var $details = $('#details');
      
            // this is the string setup for the details for each user.
            var str2 = "<h3>" + user.first_name + " " + user.last_name + "</h3>" +
                       "<h4>" + user.occupation + "</h4>" +
                       "<p>" + user.phone + "</p>" +
                       "<p>" + user.address + "</p>" +
                       "<img src='" + user.avatar + "'>"; 
            
            // this will empty everything in the details div.
            $details.empty();

            // this will place the details string (str2) into the #details div.
            $details.append(str2);

            // extra credit phone number
            
          }
        });
      });
    }
  });
});