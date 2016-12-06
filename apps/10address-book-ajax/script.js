'use strict';

$(document).ready(function() {
    var $tbody = $("tbody");
    var $details = $("#details");

    $.ajax("https://reqres-api.herokuapp.com/api/users", {
      success: function(users) {
        users.forEach(function(user) {
          var str = "<tr><td>" + user.id + "</td><td>" + user.first_name + "</td><td>" + user.last_name + "</td><td><a href='#' data-id='" + user.id + "'>view</a></td></tr>";
         $tbody.append(str);
        console.log($(str).get(0));
      })
    }
  });

  $tbody.on("click", "[data-id]", function(e) {
    e.preventDefault();
    var url = "https://reqres-api.herokuapp.com/api/users/" + $(event.target).data("id");
    console.log(url);
    $.ajax(url, {
      success: function(user) {
        console.log(user);
        var str = "<h3>" + user.first_name + " " + user.last_name + "</h3>" + "<h4>" + user.occupation + "</h4>" +  "<p>" + user.phone + "</p>" + "<p>" + user.address + "</p>" + "<img src='" + user.avatar + "'/>";
        $($details).html(str);
      },
      error: function(err) {
        console.log(err);
      }
    })
  })
});
