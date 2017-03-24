'use strict';

// object containing list of users for ajax call on the entire userlist
var userList = {
  // use forEach to loop through the user list
  success: function(users) {
    // for each specific user...
    users.forEach(function(user) {
      // ...create a string containing the following data and store it in variable "str"
      var str = 
      ('<tr>' + 
      '<td>' + user.id + '</td>' + 
      '<td>' + user.first_name + '</td>' + 
      '<td>' + user.last_name + '</td>' +
      // this data ensures a user's unique id is attached to their specific link in the DOM
      '<td>' + '<a href="#" data-id="' + user.id + '">view</a></td>' +
      '</tr>');
      // append data to the tbody element
      $('tbody').append(str);
    });
  }
}

// object containing specific user for a specific ajax call
var specificUser = {
  success: function(user) {
    // when a specific user is called, store their data in variable "str"...
    var str = 
    ('<div id="details">' + 
      '<h3>' + user.first_name + user.last_name + '</h3>' + 
      '<h4>' + user.occupation + '</h4>' + 
      '<p>' + user.phone + '</p>' +
      '<p>' + user.address + '</p>' +
      '<img src="' + user.avatar + '">' +
      '</div>');
    // ...and replace existing markup in #details div with the data stored in variable "str"
    $('#details').replaceWith(str);
  }
}

$(document).ready(function() {
  // ajax call on entire userlist
  $.ajax("https://reqres-api.herokuapp.com/api/users", userList);
  // click listener on all anchor tags in the body
  $('body').on('click', 'a', function(event) {
    // prevent default behavior
    event.preventDefault();
    // store the data id from the user's unique link (see forEach loop in userList variable above)
    var userID = $(this).data('id');
    // add the user's unique id to the link that is clicked
    var theUrl = 'https://reqres-api.herokuapp.com/api/users' + '/' + userID;
    // ajax call to grab the data of that specific user and display it in the DOM
    $.ajax(theUrl, specificUser);
  });
});
