'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
      success: function(users) {
        // for (var i = 0; i < users.length; i++) {
        users.forEach(function(user){
           var str = "<li> + 'https://reqres-api.herokuapp.com/api/users/' + 'id' + </li>";



        })

        //  var str = "<li> + 'https://reqres-api.herokuapp.com/api/users/' + + </li>";
          console.log(users[i]['name']);
      //  }
      }
    });

});
