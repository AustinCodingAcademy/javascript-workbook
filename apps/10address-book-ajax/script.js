'use strict';

$(document).ready(function() {
  // start the ajax request
  $.ajax('https://reqres-api.herokuapp.com/api/users',{
    // if success, pass in a function to grab the response object
    success: function(response) {
      // loop through the array of response objects
      response.forEach(function(user){
        // use single quotes to escape the attribute (user.id) since we already have a set of double quote; and then concatenate within the HTML
        var str = "<tr><td>" + user.id + "</td><td>" + user['first_name'] + "</td><td>" + user['last_name'] + '</td><td><a href="#" data-id="' + user.id + '">view</a></td></tr>"';
        // append the HTML to DOM 
        $('tbody').append(str);
      });
    }
  });
   // individual ajax calls
  $('body').on("click", "a", function(event){
    // prevent the event from defaulting
    event.preventDefault();
    // grab the url and id
    var url = "https://reqres-api.herokuapp.com/api/users/";
    var id = $(this).data("id");
    // combine those two variables and get the updated URL
    url += id;
    // pass the URL to the ajax call 
    $.ajax(url,{
      success: function(user) {
        // grab the information from API
        var phoneNumber = user.phone.toString();
        phoneNumber = phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/g,'+$1 ($2) $3-$4');
        var str = "<div><h3>" + user['first_name'] + " " + user['last_name'] + "</h3><h4>" + user.occupation + "</h4><p>" + phoneNumber + "</p><p>" + user.address +'</p><img src="' + user.avatar + '"></div>';
        // remove all the elements in the #details section
        $('#details').empty();
        // append the HTML to #details DOM
        $('#details').append(str);
      }
    });
  });
  // make the table sortable 
  $('tbody').sortable();
});
