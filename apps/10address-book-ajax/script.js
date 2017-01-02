'use strict';

$(document).ready(function() {
  // You code here

  var settings = {
    success: successCallback
  }

  function successCallback(users){
    users.forEach(handleUser)
  }

  function handleUser(users){
    var str = "<tr>" +
    "<td>" + users.id + "</td>" +
    "<td>" + users.first_name + "</td>"+
    "<td>" + users.last_name + "</td>"+
    "<td> <a href='#' data-id=" + users.id+ ">view</a>" + "<td>" +
    "</tr>"

    $('tbody').append(str);
  }

  $.ajax('https://reqres-api.herokuapp.com/api/users', settings);

  // In a success callback, pass in users as your reponse, and the iterate --aka loop-- over each user using JavaScript forEach.

  // In each loop, create a var called str that builds an html string that matches the <tr></tr> in the html markup, but with the user keys. At the end of each loop, append the str to the tbody element.

  $('body').on('click','a',function(users) {
        event.preventDefault();

        var url = "https://reqres-api.herokuapp.com/api/users/";

        var dataID = $(this).data('id');

        var urlTarget = url + dataID;

        $.ajax(urlTarget, {
          success: function(users){
            var str =
            "<h3>" + users.first_name + ' ' + users.last_name + "</h3>"+
            "<h4>" + users.occupation + "</h4>"+
            "<p>" + users.phone + "</p>" +
            "<p>" + users.address + "</p>" + "<img src=" + users.avatar +">"
            $('#details').html(str); //replaces what is there

          }

        });
  });

});
