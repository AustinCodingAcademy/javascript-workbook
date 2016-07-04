'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('https://reqres-api.herokuapp.com/api/users', {
      success: function(response) {
        response.forEach(function(user){
          $('div.output').text(user.first_name);
  });
}
});
});
