'use strict';

$(document).ready(function() {
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function (users) {
      // console.log(users);
  users.forEach(function(user) {
  var $tr = $('<tr></tr>');
    $tr.append('<td>'+ user.id +'</td>');
    $tr.append('<td>' + user.first_name + '</td>');
    $tr.append('<td>' + user.last_name + '</td>');
  var link = $tr.append('<td>' + '<a href="#" data-id="' + user.id + '">view</a>'+ '</td>');
  $('tbody').append($tr);
  $(link).on("click", function (event) {
    event.preventDefault;
  }); //Closes click(function (event))

var url = "https://reqres-api.herokuapp.com/api/users/" 

}); //Closes users.forEach()





  } //Closes success function
}); //Closes .ajax()
}); //Closes .ready()
