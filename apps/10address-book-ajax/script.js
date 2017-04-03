'use strict';

$(document).ready(function() {
  // You code here
//Link to the data
$.ajax('https://reqres-api.herokuapp.com/api/users', {
  //after the call is made
  success: function(users) {
    //for the users seperating them 
    users.forEach(function(user)  {
      //creating the html and plugging in the data from the ajax call
      var str =  ('<tr>' +
        '<th>' + user.id + '</th>' +
        '<th>' + user.first_name + '</th>' +
        '<th>' + user.last_name + '</th>' +
        '<td>  <a href="https://reqres-api.herokuapp.com/api/users" class=ham data-id="'+ user.id +'">view</a>  </td>' +
        '</tr>');
        //putting the information into the page
       $('tbody').append(str); 
    });  
    }
  });
//creating a click function that connects to the view button
$('body').on('click', '.ham', function(event)  {
  // preventing the default
  event.preventDefault();
  //creating a var that gets the data from the databse
  var id = $(this).data('id'); 
  // creating a var that connects the link to an id
  var url = 'https://reqres-api.herokuapp.com/api/users/' + id; 
  //making the ajax call
  $.ajax(url, {
    //when the call is completed
    success: function(user){
      //var that makes the html
      var str1 = ('<div id="details">' +
       '<h3>' + user.first_name +' '+ user.last_name + '</h3>' +
       '<h4>' + user.occupation +'</h4>' +
       '<p>' + user.phone +'</p>' +
       '<p>'+ user.address +'</p>'  +
       '<img src=' + user.avatar + '></img>' +
       '</div>')
       //putting the var str1 into the page
       $('#details').html(str1);
    }
  });
});
  
});
