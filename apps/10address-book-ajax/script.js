'use strict';

$(document).ready(function() {
  //when document is ready
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    //gets all users
    success: function(users) {
      users.forEach(function(user){
        //for each user create the string below
        var str = ( '<tr>' 
                  + '<td>' + user.id + '</td>'
                  + '<td>' + user.first_name + '</td>'
                  + '<td>' + user.last_name + '</td>'
                  + '<td><a href="user.id" data-id="'+user.id+'"> View </a></td>');
        //add the string we just created to tbody in the html document
        $('tbody').append(str);
      })
    }
  });

  $('body').on('click', 'a', function(event) { 
    //when you click on an 'a' tag in th html body, do this.
    event.preventDefault();
    //prevent default event
    var id = $(this).data('id');
    //assigns this id to var id
    var url = 'https://reqres-api.herokuapp.com/api/users/' + id;
    //creates the url for the user
    $.ajax(url, {
      //for this url do this.
      success: function(user) {
        //for the user id that was clicked, create the string 'str' below
        var str = ( '<div id="details">'
          + '<h3>Name: ' + user.first_name + ' ' + user.last_name + '</h3>'
          + '<h4>Occupation: ' + user.occupation + '</h4>'
          + '<p>Phone: ' + user.phone + '</p>'
          + '<p>Address: ' + user.address + '</p>'
          + '<img src = "' + user.avatar + '">'
          + '</div>'
        );
         $('#details').replaceWith(str);
         //replace #details with the string 'str' that was created.
      }
    });
  });

});


// $(document).ready(function() {
//   $('[data-stack]').click(play); 
// });

