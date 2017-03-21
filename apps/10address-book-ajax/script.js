'use strict';

$(document).ready(function() {
  // You code here
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(response) {
      for (var i = 0; i < response.length; i++) {
        console.log(response[i]['name']);
      }
    }
  });
});
