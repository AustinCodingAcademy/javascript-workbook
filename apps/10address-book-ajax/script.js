'use strict';

$(document).ready(function() {

  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(users) {

      users.forEach(function(response){
        var id = response.id.toString();
        // console.log(id);

        var $tbody = $("tbody");
        var $str = $('<tr><td>'+response.id+'</td>'+
                     '<td>'+response.first_name+'</td>'+
                     '<td>'+response.last_name+'</td>'+
                     '<td><a href="#" data-id="'+response.id+'">'+'view'+response.id+'</a></td><tr>' );
        $tbody.append($str);
      }); // for each users

      $("td > a").on("click", function(event) {
        event.preventDefault();
        var url = 'https://reqres-api.herokuapp.com/api/users/';
        // var id =  $(this).data('id');
        url= url + $(this).data('id');

        // $(this).find("href").val(url);

        $.ajax(url, {
         success: function(user) {
           var lstr  = '<div id="'+user.id+'">'+
                        "<h3>"+user.first_name+" "+user.last_name+"</h3>"+
                        "<h4>"+user.occupation+"</h4>"+
                        "<p>"+user.phone+"</p>"+
                        "<p>"+user.address+"</p>"+
                        "<img src='"+user.avatar+"'/>"+
                        "</div>";
            $('div#details').html(lstr);
         }     // success
        } ) ;  // Ajax

      } ); // Click

    }  // success
  });  // Ajax users




});
