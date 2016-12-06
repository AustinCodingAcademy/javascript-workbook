'use strict';

$(document).ready(function() {
    var $tbody = $("tbody");

    $.ajax("https://reqres-api.herokuapp.com/api/users", {
      success: function(users) {
        users.forEach(function(user) {
          var str = "<tr><td>" + user.id + "</td><td>" + user.first_name + "</td><td>" + user.last_name + "</td><td><a href='#' data-id='" + user.id + "'>view</a></td></tr>";
         $tbody.append(str);
        console.log($(str).get(0));
      })
    }
  });
});
