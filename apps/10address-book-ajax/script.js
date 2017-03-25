'use strict';
var sortType = "id";

$(document).ready(function() {
  // You code here

  queryPage(sortType)


  $('a').click(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
      event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
      //var theData = $(this).data;
      //console.log(theData)
    });

  /////
  $('body').on("click", "tr td a", function() {
    event.preventDefault();
    var theID=$(this).data('id');
    var theURL='https://reqres-api.herokuapp.com/api/users' + '/' + theID;

    /////
    $.ajax(theURL, {
        success: function(currentUser) {
            var firstName = currentUser.first_name;
            var lastName = currentUser.last_name;
            var studentID = currentUser.id;
            var address = currentUser.address;
            var phone = currentUser.phone;
            var occupation = currentUser.occupation;
            var avatarAddress = currentUser.avatar;

            var theURL = 'https://reqres-api.herokuapp.com/api/users' + '/' + studentID;

            var theHTML=
            '<div id="details">' +
              '<h3>' + firstName + ' ' + lastName + '</h3>' +
              '<h4>' + occupation + '</h4>' +
              '<p>' + phone + '</p>' +
              '<p>' + address + '</p>' +
              '<img src="' + avatarAddress + '">' +
            '</div>';

            $('#details').replaceWith(theHTML)
        }
      });
    /////

    });
  /////

  $('body').on("click", "a.sort", function() {
    if ($(this).hasClass("id")) {
      sortType="id"
    }

    if ($(this).hasClass("fname")) {
      sortType="fname"
    }

    if ($(this).hasClass("lname")) {
      sortType="lname"
    }

    queryPage(sortType)
  });

});

function queryPage(theSort) {
  //Build the initial data.
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(users) {
      $('tbody').empty();
      var theHTML = "";

      switch (sortType) {
        case "id":
          users.sort(function(a,b) {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
          })
          break;

        case "fname":
          users.sort(function(a,b) {
            if (a.first_name < b.first_name) return -1;
            if (a.first_name > b.first_name) return 1;
            return 0;
          })
          break;

        case "lname":
          users.sort(function(a,b) {
            if (a.last_name < b.last_name) return -1;
            if (a.last_name > b.last_name) return 1;
            return 0;
          })
          break;
      }

      for (var i = 0; i < users.length; i++) {
        var firstName = users[i].first_name;
        var lastName = users[i].last_name;
        var studentID = users[i].id;
        var theURL = 'https://reqres-api.herokuapp.com/api/users' + '/' + studentID;

        theHTML = theHTML +
            '<tr>' +
              '<td>' + studentID + '</td>' +
              '<td>' + firstName + '</td>' +
              '<td>' + lastName + '</td>' +
              '<td> <a href="' + theURL + '" data-id="' + studentID + '">view</a></td>' +
            '</tr>'
      }

    $('tbody').append(theHTML)
    }
  });
}
