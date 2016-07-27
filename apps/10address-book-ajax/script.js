'use strict';

$(document).ready(function() {
$.ajax('https://reqres-api.herokuapp.com/api/users', {
  success: function(response) {
    response.forEach(function(user) {
      var str = '<tr> <td> '+ user.id +' </td> <td> '+ user.first_name +' </td> <td> '+ user.last_name +' </td> <td><a href="#" data-id=" '+ user.id +' ">view</a></td> </tr>';
      $('tbody').append(str);

      $('a').click (function(event) {
        event.preventDefault();
        var url = 'https://reqres-api.herokuapp.com/api/users/' + $(this).data('id');//"this" is the "event" that you .click on. ".data('id')" gets the value of id. i.e. 1
        $.ajax(url, {
          success: function(user) {
            var str2 = '<h3> '+ user.first_name + ' ' + user.last_name +' </h3> <h4> '+ user.occupation +' </h4> <p> '+ user.phone +' </p> <p> '+ user.address +' </p> <img src=" '+ user.avatar +' "></img>';
            $('#details').html(str2);
          }
        //end of $.ajax call
        });
      // end of .click function
      });
    //end of .forEach
    });
  //end of success: function
  }
//end of $.ajax call
});

//end of document.ready.
});
