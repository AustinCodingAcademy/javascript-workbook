'use strict';

$(document).ready(function () {
  // You code here
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function (description) {
      console.log(description);
      let filtered = description.filter(function (each) {
        return each.description.split(' ').includes("#post");
      })

      function filterPosts(text) {
        return text.split('#post').join(' ').trim();
      }
      console.log(filtered);
      filtered.forEach(function (each) {
        var string = `
           <div>
             <li>${filterPosts(each.description)}</li>
             <li><a href="#" data-id="http://127.0.0.1:8080/apps/11gist-blog/api/${each.id}.json">view</a></li>
           </div>`;
        console.log(string);
        $('#posts').append(string);
        $('a[href="#"]').on('click', function (event) {
          //prevent the page from refreshing
          event.preventDefault();
          //populate the data
          $.ajax(`http://127.0.0.1:8080/apps/11gist-blog/api/${each.id}.json`, {
            success: function (user) {
              console.log(user);
              console.log(user.first_name);
              console.log(user.avatar);
              $('#details').empty();
              $('#details').append(
                $('<p> user ID: ' + user.id + '</p>' + '<h3> Name: ' + user.first_name + ' ' + user.last_name + '</h3>' + '<h4> Occupation: ' + user.occupation + '</h4>' + '<p> Phone Number: ' + user.phone + '</p>' + '<p> Address: ' + user.address + '</p>' + '<img src="' + user.avatar + '" /> '));
            }
          })
        })
      })
    }
  })

});


/*

href http://127.0.0.1:8080/apps/11gist-blog/api/${each.id}.json

data-id ${each.id}

$.ajax(url, {
  success: function (user) {
    console.log(user);
    console.log(user.first_name);
    console.log(user.avatar);
    $('#details').empty();
    $('#details').append(
      $('<p> user ID: ' + user.id + '</p>' + '<h3> Name: ' + user.first_name + ' ' + user.last_name + '</h3>' + '<h4> Occupation: ' + user.occupation + '</h4>' + '<p> Phone Number: ' + user.phone + '</p>' + '<p> Address: ' + user.address + '</p>' + '<img src="' + user.avatar + '" /> '));
  }
})

*/
