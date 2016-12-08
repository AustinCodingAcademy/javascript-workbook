'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(response) {
      response.forEach(function(users){
        //In a success callback, pass in users as your reponse, and the iterate over each user using JavaScript forEach. In each loop, create a var called str that builds an html string that matches the <tr></tr> in the html markup, but with the user keys. At the end of each loop, append the str to the tbody element.
        var str = $('tbody').append('<tr><td>' + users.id + '</td>' + '<td>' + users.first_name + '</td>' + '<td>' + users.last_name + '</td>' + '<td><a href="' + users.avatar + '" data-id="0">view</a></td></td>');
        console.log(users.id);
        $('tbody').on('click', 'a', function(){
          $('a').submit(function (event) {
            event.preventDefault();
            var url = 'https://reqres-api.herokuapp.com/api/users/'.data('[data-id]');
          })
        });
        //You should have produced links for each row. Put a click listener on each link, and in the callback, prevent the default event from occuring. Create a var url that starts as a string 'https://reqres-api.herokuapp.com/api/users/'. Now grab the data-id value from the link using the .data method, and attach it to the end of the url. Now make an .ajax with that url, and in a success callback, pass in user as the response. Build another str that builds an html string that matches the default markup in the div#details element.
        //var url = 'https://reqres-api.herokuapp.com/api/users/'.data();
      })
    }
  });
});
