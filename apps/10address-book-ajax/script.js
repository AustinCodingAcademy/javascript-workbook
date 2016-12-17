'use strict';

$(document).ready(function () {
  // You code here
  //1. Copy past requirements into code which has api data structure.
  //2. Separate things into named functions as much as possible
  //3. Remember to use the settings object with the success method
  //4. what does this mean: Lets take “id” 1 and put that at the end of the url
  //5. copy and paste an example of what the data looks like into your code and comment out to have a reference
  //6. what does this mean: create a var called str that builds an html string that matches the <tr></tr> in the html //markup, 
  //but with the user keys. at the end of each loop, append the str to the tbody element.
  //7. Remember what we had to do to register clicks on things that are dynamically added.
  //8. remember how to prevent default

  $.ajax('https://reqres-api.herokuapp.com/api/users', {

    success: function (response) {
      response.forEach(function (users) {
        var str = $('tbody').append('<tr><td>' + users.id +
          '</td><td>' + users.first_name + '</td><td>' + users.last_name +
          '</td><td><a href="#" data-id="' + users.id + '">view</a></td></tr>');
      });
    }
  });

  $('tbody').on('click', '[data-id]', function (link) {
    link.preventDefault();
    var url = 'https://reqres-api.herokuapp.com/api/users/' + $(link.target).data('id');
    $.ajax(url, {
      success: function (user) {
        var str2 = '<h3>' + user.first_name + ' ' + user.last_name +
          '</h3><h4>' + user.occupation + '</h4><p>' + user.phone + '</p><p>' +
          user.address + '</p><img src="' + user.avatar + '">';
        $('#details').html(str2);
      }
    });
  });
});