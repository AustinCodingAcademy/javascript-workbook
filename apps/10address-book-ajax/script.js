'use strict';
/*  address book program in ES6 */ 
$(document).ready(() => {
  var url = 'https://reqres-api.herokuapp.com/api/users/'; // use $.ajax(url) to call user information
  $.ajax(url, {
    success: res => { // pass in users as a respons and iterate through each user below
      res.forEach(user => { //for each loop over the user information passed above
       
        var str = `<tr><td>${user.id}</td><td>${user.first_name}</td><td>${user.last_name}</td><td><a data-id="${user.id}" href="#">view</a></td></tr>`;
        $('tbody').append(str);
      });
      $('a[data-id]').click(function(c) { // add click listener for each link
        c.preventDefault(); // prevent the default call back, page refresh check
        var $detailsDiv = $('#details');
        var userUrl = url + $(this).data('id'); // grab the data id value and add it to the end of the link

        $detailsDiv.empty(); // clear the div

        $.ajax(userUrl, {
          success: user => {
           
            var details = `<h3>${user.first_name} ${user.last_name}</h3><h4>${user.occupation}</h4><p>${user.phone}</p><p>${user.address}</p><img src="${user.avatar}"/>`;
            $detailsDiv.append(details); // append the details to the end of the details div markup
          }
        });
      });
      //$('a[data-id')[0].click(); // click listner as coded above, only 
    },
    //error: () => {
      //console.error('Hickory Dickory Dock, a bug is in the clock'); // error check if the ajax calls fails
   // }
  });
});
