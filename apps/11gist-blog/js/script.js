'use strict';

$(document).ready(function() {
  // You code here
  // my gist https://api.github.com/users/wlittler/gists
  // local test http://localhost:8080/api/gists.json
  $.ajax('https://api.github.com/users/wlittler/gists', {
    success: function(response) {
      response.forEach(function(posts){
        var description = posts.description;
        if (description.indexOf('#post') > -1) {
          var str = description.slice(5);
          $('#posts').append('<li><a href="#" data-url="' + posts.url + '">' + str + '</a></li>');
        };
      $('a').click(function(event){
        event.preventDefault();
        console.log("clicky");
        $.ajax($(this).data('url'), {
          success: function(postData) {
            $('#post').html(marked(postData.files['post.md'].content));
            $('#blogtitle').html(postData.description.slice(5));
            $('#postTime').html(postData.created_at);
            $.ajax(postData['comments_url'], {
              success: function(response) {
                  response.forEach(function(getComments){
                    $('#comments').html(getComments['user']['login'] + ': ' + getComments.body);
                  });
              }
            });
          }
        });
      });
    });
  }
});
});
