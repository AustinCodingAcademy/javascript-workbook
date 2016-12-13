'use strict';


$(document).ready(function() {

  // Spec 1 - AJAX call
  $.ajax('https://reqres-api.herokuapp.com/api/users', {

    // Spec 2 - Iterate over the users collection
    // In a success callback, pass in 'users' as your reponse,
    success: function(users) {

      // iterate over each 'user' using Javascript forEach
      users.forEach(function(user) {

        // In each loop, create a var called 'str' that builds an html string that...
        // matches the <tr></tr> in the html markup, but with the 'user' keys.
        // This variable has the same structure as the table data in the html
        var str = '<tr><td>' + user.id + '</td><td>' + user.first_name + '</td><td>' + user.last_name + '</td><td><a href="#" data-id="' + user.id + '">view</a></td></tr>';

        // At the end of each loop, append the str to the tbody element.
        var $tbody = $('tbody');
        $tbody.append(str);
      });
    }
  });


  // Spec 3 - Individiual AJAX calls
  var $viewLink = $('tbody, tr, td, a');

  // Put a click listener on each link,
  ($viewLink).click (function(event) {

    // and in the callback, prevent the default event from occuring.
    event.preventDefault();

    // Create a var url that starts as a string 'https://reqres-api.herokuapp.com/api/users/'.
    var userUrl = 'https://reqres-api.herokuapp.com/api/users/';
    // Now grab the data-id value from the link using the .data method,
    var userUrlDetail = $(event.target).data('id');

    // and attach it to the end of the url.
    var userUrlData = userUrl + userUrlDetail;

    // Now make an .ajax with that url,
    $.ajax(userUrlData, {

      // and in a success callback, pass in user as the response.
      success: function(user) {

        // Build another str that builds an html string that matches the default markup in the div#details element.
        var strDetails = '<h3>' + user.last_name + "" + user.first_name + '</h3><h4>' + user.occupation + '</h4><p>' + user.phone + '</p><p>' + user.address + '</p><img src="' + user.avatar + '">';

        $('div#details').empty().append(strDetails);

      }
    });


  })


});
