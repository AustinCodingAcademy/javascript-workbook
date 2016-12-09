'use strict';

// Spec 3 - Individiual AJAX calls

// You should have produced links for each row. Put a click listener on each link, and in the callback, prevent the default event from occuring. Create a var url that starts as a string 'https://reqres-api.herokuapp.com/api/users/'. Now grab the data-id value from the link using the .data method, and attach it to the end of the url. Now make an .ajax with that url, and in a success callback, pass in user as the response. Build another str that builds an html string that matches the default markup in the div#details element.


$(document).ready(function() {

  // Spec 1 - AJAX call
  $.ajax('https://reqres-api.herokuapp.com/api/users', {

    // Spec 2 - Iterate over the users collection
    // In a success callback, pass in users as your reponse,
    success: function(users) {

      // iterate over each user using Javascript forEach
      users.forEach(function() {

        // In each loop, create a var called str that builds an html string that...
        // matches the <tr></tr> in the html markup, but with the user keys.
        var str = $('+ <tr>"https://reqres-api.herokuapp.com/api/users"</tr>')

        // At the end of each loop, append the str to the tbody element.
        str.append(tbody);

      });

    };

  });

});
