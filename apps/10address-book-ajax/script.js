'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('https://reqres-api.herokuapp.com/api/users',{
    success: (users) => {
      console.log(users)
    }
  }

);
});
