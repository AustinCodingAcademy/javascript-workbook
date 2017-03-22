'use strict';


var settings = {
  success:function(response){   // defined by Jquery
    //console.log(response);
    for (var i=0; i< response.length; i++){
      console.log(response[i]['name']);
      }
  }
};



$(document).ready(function() {
  // You code here

$.ajax('https://reqres-api.herokuapp.com/api/users', settings)







});
