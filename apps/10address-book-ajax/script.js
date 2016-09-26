'use strict';

$(document).ready(function() {

  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function(users) {
      users.forEach(function(user){

        var $tbody = $("tbody");
        var $str = $('<tr><td>'+user.id+'</td>'+
                     '<td>'+user.first_name+'</td>'+
                     '<td>'+user.last_name+'</td>'+
                     '<td><a href="#" data-id="'+user.id+'">'+'view'+user.id+'</a></td><tr>' );

        $tbody.append($str);

        var $children = $tbody.children();
        var $lastBlock = $children.last();

        $lastBlock.find("a").on("click", function() {
          var url = 'https://reqres-api.herokuapp.com/api/users/';

          var id = $(this).data('id');
          $(this).find("href").val(url+"/"+id);

          $.ajax(url, {
           success: function(response) {
             var $str2  = $('<div id="'+id+'"'+
                          "<h3>first last</h3>"+
                          "<h4>student</h4>"+
                          "<p>5551234567</p>"+
                          "<p> 123 Whatever Street, Austin, TX 78701 </p>"+
                          "<img src='https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'>"+
                          "</div>");

           }     // success
          } ) ;  // Ajax

        } ); // Click

      }); // for each users

    }  // success
  });  // Ajax users

});
