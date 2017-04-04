'use strict';

// listens for the loading of all scripts
$(document).ready(function() {
  // an ajax call takes two parameters the url and what it does with the data
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    // return function happens when the data from the API is returned.
    success: function(users){
      // shorter version of for i loop
      users.forEach( function(user) {
        // use the data to create a sting turn into human friendly data
        var str = ( '<tr>' + '<td>' + user.id + '</td>' + '<td>' + user.first_name + '</td>' + '<td>' + user.last_name + '</td>' 
        // used the # in the a href as a placeholder
        + '<td>' + '<a href="#" data-id=' + user.id + '>view</a></td>' + '</tr>' );
        // then append that string to an element on the html doc
        $('tbody').append(str);
      }); // <-- last curly in .forEach function
    }, //<--- last curly in success: 
  }); //<-- last curly in ajax call

  // listens for a click on an address. could use a # or class name if I had multiple buttons or a to click on
  // had to use .on to listen to the whole body because the a tags are new elements created after the .click function can listen to them. 
  $("body").on('click', 'a' , function(event){
    // used to prevent the page from reloading or going to another web page.
    event.preventDefault();
    // makes a place to hold the url we need to call and adds the id of the user we clicked on
    var url = 'https://reqres-api.herokuapp.com/api/users/' + $(this).data('id');
    // again an ajax call takes two parameters a url and a function to do with the data from the url
    $.ajax(url, {
      // the callback
      success: function(user){
        // creates a user friendly html element out of the the data in the API
        var str = ('<div id="details">' + '<h3>' + user.first_name + user.last_name + '</h3>' + '<h4>' + user.occupation + '</h4>' + '<p>' + user.phone + '</p>' + '<p>' + user.address + '</p>' + '<img src="' + user.avatar + '">' + '</div>'
        );
        // This must be inside the ajax request because the this is part of the function we are doing with the data. 
        $('#details').replaceWith(str);
      }, // <---last curly in success:
    }); // <--- last curly ajax
  }) // <--- last curly in event listening function
}); // <---- This is the last closing signs in doc ready



