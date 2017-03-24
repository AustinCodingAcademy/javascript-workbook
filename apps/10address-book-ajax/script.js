'use strict';

$(document).ready(function() {
  // call the tablesorter API 
  $('#sheet').tablesorter();
  var search = "";
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
        // update the tablesorter 
        $('#sheet').trigger("update");
      });
    }
  });
   // individual ajax calls
  $('body').on("click", "a", function(event){
    if ($(this).data("id") !== "map") {
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
        // grab the information from API and call the capitalize function
        var phoneNumber = user.phone.toString();
        var fn = cap(user['first_name']);
        var ln = cap(user['last_name']);
        var occupation = cap(user.occupation);
        // format the phone number with regular expression 
        phoneNumber = phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/g,'+$1 ($2) $3-$4');
        // var str = "<div><h1>" + user['first_name'] + " " + user['last_name'] + "</h1><h3>" + user.occupation + "</h3><p>" + phoneNumber + '</p><img src="Google-Maps-Icon.png"><a href="http://maps.google.com/?q=' + user.address + '"data-id="map" target="_blank" style="margin-bottom=30px">' + user.address + '</a><br/><img src="' + user.avatar + '"></div>';
        var str = "<div><h1>" + fn + " " + ln + "</h1><h3>" + occupation + "</h3><p>" + phoneNumber + '</p><a href="http://maps.google.com/?q=' + user.address + '"data-id="map" target="_blank" style="margin-bottom=30px">' + user.address + '</a><br/><img src="' + user.avatar + '"></div>';
        // remove all the elements in the #details section
        $('#details').empty();
        // append the HTML to #details DOM
        $('#details').append(str);
      }
    });
   }
  });
  // make the table sortable 
  $('tbody').sortable();
  // filter results 
  $('form').submit(function(event){
    // prevent the event from defaulting
    event.preventDefault();
    // show every table row for editting later
    $('tr').show();
    // create a variable to store the user input 
    search = $('#search').val();
    // loop through each table row
    $('tbody').children().each(function(){
      // create a variable to store the HTML of the row
      var thValue = $(this).html();
      // check if the HTML contains the user input 
      var valid = thValue.indexOf(search);
      // jump out of the loop if yes 
      if (valid > 0) {
        return valid;
      }
      // hide the row if not 
      $(this).hide();
    });
  });
  // A function to capitalize the first letter of a string
  function cap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});
