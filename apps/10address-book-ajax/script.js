'use strict';

$(document).ready(function () {
  // You code here
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function (users) {
      // logs the users
      console.log(users);
      users.forEach(function (user) {
        var string = `
         <tr>
           <td>${user.id}</td>
           <td>${user.first_name}</td>
           <td>${user.last_name}</td>
           <td><a href="#" data-id="${user.id}">view</a></td>
         </tr>`;
        console.log(string);
        $('tbody').append(string);
      })
      $('a[data-id]').on('click', function () {

        //prevent the page from refreshing
        event.preventDefault();
        var dataID = $(this).data('id');
        // console.log(data('id'));
        var firstName = $(this).data('first_name');
        var lastName = $(this).data('last_name');
        var occupation = $(this).data('occupation');
        var phoneNumber = $(this).data('phone');
        var address = $(this).data('address');
        var userAvatar = $(this).data('avatar');
        var url = 'https://reqres-api.herokuapp.com/api/users/' + dataID;
        var fName = 'https://reqres-api.herokuapp.com/api/users/' + dataID + firstName;
        var lName = 'https://reqres-api.herokuapp.com/api/users/' + dataID + lastName;
        var occup = 'https://reqres-api.herokuapp.com/api/users/' + dataID + occupation;
        var phone = 'https://reqres-api.herokuapp.com/api/users/' + dataID + phoneNumber;
        var addy = 'https://reqres-api.herokuapp.com/api/users/' + dataID + address;
        var avatar = 'https://reqres-api.herokuapp.com/api/users/' + dataID + userAvatar;

        $.ajax(url, {
          success: function (user) {
            console.log(user);
            console.log(user.first_name);
            console.log(user.avatar);
            $('#details').append(
              // find the needle
              $('<p>' + user.id + '</p>' + '<h3>' + user.first_name + ' ' + user.last_name + '</h3>' + '<h4>' + user.occupation + '</h4>' + '<p>' + user.phone + '</p>' + '<p>' + user.address + '</p>' + '<img src="' + user.avatar + '" /> '));
          }
        })
      })
    }
  });


});


/*
('#details').append(
  $("<p></p>").text(
    user['data']['children'][1]['data']['id']
  )
)

('#details').append(
  $('<img src="' +
  user['data']['children'][1]['data']['avatar']
  + '"/>')

)

Spec 3 - Individiual AJAX calls

You should have produced links for each row. Put a click listener on each link, and in the callback, prevent the default event from occuring. Create a var url that starts as a string 'https://reqres-api.herokuapp.com/api/users/'. Now grab the data-id value from the link using the .data method, and attach it to the end of the url. Now make an .ajax with that url, and in a success callback, pass in user as the response. Build another str that builds an html string that matches the default markup in the div#details element.
*/
