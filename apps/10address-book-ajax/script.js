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
            $('#details').empty();
            $('#details').append(
              $('<p> user ID: ' + user.id + '</p>' + '<h3> Name: ' + user.first_name + ' ' + user.last_name + '</h3>' + '<h4> Occupation: ' + user.occupation + '</h4>' + '<p> Phone Number: ' + user.phone + '</p>' + '<p> Address: ' + user.address + '</p>' + '<img src="' + user.avatar + '" /> '));
          }
        })
      })
    }
  });


});
