'use strict';

$(document).ready(function() {
  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    //Spec 2:
    success: function(response) {
      response.forEach(function(user){
        var str =
          '<tr>' +
            '<td>' + user.id + '</td>' +
            '<td>' + user.first_name + '</td>' +
            '<td>' + user.last_name + '</td>' +
            '<td>' + '<a href="#"' + 'data-id=' + user.id + '>' + 'view' + '</a>' + '</td>' +
          '</tr>';
        //Append the string to the body below here:

        var $tableRow = $(str);

        $('tbody').append($tableRow);

        //Spec 3:
        $('a', $tableRow).on('click', function(){
          event.preventDefault();
          var url = 'https://reqres-api.herokuapp.com/api/users/' + $(this).data('id');

          $.ajax(url, {
            success: function(response) {
              var user = response;
              var divStr =
              '<h3>' + user.first_name + ' ' + user.last_name + '</h3>'+
              '<h4>' + user.occupation + '</h4>' +
              '<p>' + user.phone + '</p>' +
              '<p>' + user.address + '</p>' +
              '<img src=' + user.avatar + '>';

              $('#details').html(divStr);
            }
          });//!(ajax)
        });//!('a').click()
      })
    }
  });//!(ajax)



});//!(document).ready()
