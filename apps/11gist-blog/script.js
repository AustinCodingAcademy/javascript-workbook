'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('http://localhost:8080/api/gists.json', {
    success: function(response) {
      response.forEach(function(posts){
        var description = posts.description;
        if (description.indexOf('#post') > -1) {
          var str = description.slice(5);
          $('#posts').append('<li><a href="#" data-url="' + posts.url + '">' + str + '</a></li>');

        };
      });
      $('a').click(function(event){
        event.preventDefault();
        console.log("clicky");
        $.ajax($(this).data('url'), {
          success: function(postData) {
            $('#post').html(marked(postData.files['post.md'].content));
            console.log(postData.files['post.md'].content);
            $.ajax(postData['comments_url'], {
              success: function(getComments) {
                console.log(getComments);
                $('#comments').append(getComments['user']['login'] + ' :' + getComments.body);
              }
            });
          }
        });
      });
    }
  });
});
