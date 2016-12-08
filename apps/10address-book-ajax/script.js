'use strict';

$(document).ready(function() {
    var $tbody = $("tbody");
    var $details = $("#details");

    $.ajax("https://reqres-api.herokuapp.com/api/users", {
      success(users) {
        users.forEach(function(user) {
          var str = "<tr><td>" + user.id + "</td><td>" + user.first_name + "</td><td>" + user.last_name + "</td><td><a href='#' data-id='" + user.id + "'>view</a></td></tr>";
         $tbody.append(str);
      });
    },
    error(request, status, error) {
      alert(request.responseText);
      alert("Request Failed");
    }
  });

  $tbody.on("click", "[data-id]", function(e) {
    e.preventDefault();
    var url = "https://reqres-api.herokuapp.com/api/users/" + $(e.target).data("id");
    $.ajax(url, {
      success(user) {
        var str = "<h3>" + user.first_name + " " + user.last_name + "</h3>" + "<h4>" + user.occupation + "</h4>" +  "<p>" + user.phone + "</p>" + "<p>" + user.address + "</p>" + "<img src='" + user.avatar + "'/>";
        $($details).html(str);
      },
      error(request, status, error) {
        alert(request.responseText);
        alert("Request Failed");
      }
    })
  });
});
