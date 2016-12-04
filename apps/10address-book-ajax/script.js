'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function successHandler(response) {
      $('tbody').empty();
      response.forEach(function(user) {
        var str = "<tr><td>" + user.id + "</td><td>"+ user.first_name + "</td><td>"+ user.last_name + "</td><td><a href='#' data-id='" + user.id + "'>View</a></td></tr>";
        $("tbody").append(str);
      });
      $('tbody tr td a').click(function() {
        var id = $(this).data('id');
        console.log("Clicked " + id);
        var url = "https://reqres-api.herokuapp.com/api/users/" + id;
        console.log(url);
        getDetails(url);
      });
    }
  });

  function getDetails(url){
    $.ajax(url, {
      success: function successDetails(responseDetail) {
        //event.preventDefault();
        console.log(responseDetail);
        //debugger;
          var name = "<h3>" + responseDetail.first_name + "</h3><h3>" + responseDetail.last_name + "</h3>";
          var occ = "<h4>" + responseDetail.occupation + "</h4>";
          var phone = "<p>" + responseDetail.phone + "</p>";
          var addr = "<p>" + responseDetail.address + "</p>";
          var avi = "<img src=\'" + responseDetail.avatar + "\'/>";
          $("#details").empty();
          $("#details").append(name);
          $("#details").append(occ);
          $("#details").append(phone);
          $("#details").append(addr);
          $("#details").append(avi);
      }
    });
  }
});
