'use strict';

$(document).ready(function() {
  // make a call to via ajax for soft load.
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    // creates a function if the call worked
    success: function(users) {
      // used a forEach loop instead of traditional for loop
      users.forEach(function(user) {
        // started making variable for the index but instructor provided easier to read variables
        // var $id = $('<td><a href="#" data-id="' + user.id + '">' + user.id + '</a></td>');
        // var $firstName = $('<td><a href="#" data-first_name="' + user.first_name + '">' + user.first_name + '</a></td>');
        // var $lastName = $('<td><a href="#" data-last_name="' + user.last_name + '">' + user.last_name + '</a></td>');
        // var $view = $('<td><a href="#" data-id="' + user.id + '">' + user.id + '</a></td>');
        // var $str = $($id + $firstName + $lastName);
        var $tr = $('<tr></tr>');
        // appending all of the data into the table row.
        $tr.append('<td>' + user.id + '</td>');
        $tr.append('<td>' + user.first_name + '</td>');
        $tr.append('<td>' + user.last_name + '</td>');
        // collecting the data id and making it a link for all users
        var $a = $('<td><a href="#" data-id="' + user.id + '">view</a></td>');
        $tr.append($a);
        // appending all of the this to the table body
        $('tbody').append($tr);
        });

        // created a click function to prevent the page from navigating away
        $('a').click(function(event) {
          event.preventDefault();
          // collected the data inside each user
          var id = $(this).data('id');
          // used another ajax call to add a slash and ID from user and get more info on that user.
          $.ajax('https://reqres-api.herokuapp.com/api/users/' + id, {
            success: function(user) {
              var $details = $('#details');
              // emptied the bottom section
              $details.empty();
              // added all the info from the user to the bottom to replace emptied section.
              $details.append('<h3>' + user.first_name + ' ' + user.last_name + '</h3>');
              $details.append('<h4>' + user.occupation + '</h4>');
              $details.append('<p>' + user.phone + '</p>');
              $details.append('<p>' + user.address + '</p>');
              $details.append('<img src="' + user.avatar + '"/>');
            }
          });
        });
    }
  });
});
