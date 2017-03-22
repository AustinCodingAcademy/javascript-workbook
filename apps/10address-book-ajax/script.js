'use strict';

$(document).ready(function() {
  // You code here

  //Build the initial data.
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(users) {
      for (var i = 0; i < users.length; i++) {
        var firstName = users[i].first_name;
        var lastName = users[i].last_name;
        var studentID = users[i].id;
        var theURL = 'https://reqres-api.herokuapp.com/api/users' + '/' + studentID;

        var theHTML=      
          '<tr>' +
            '<td>' + studentID + '</td>' +
            '<td>' + firstName + '</td>' +
            '<td>' + lastName + '</td>' +
            '<td> <a href="' + theURL + '" data-id="' + studentID + '">view</a></td>' +
          '</tr>'

        $('tbody').append(theHTML)
      }
    }
  });


  $('a').click(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
      event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
      //var theData = $(this).data;
      //console.log(theData)
    });

  $('body').on("click", "tr td a", function() {
    event.preventDefault();
    });

});
