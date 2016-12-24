'use strict';

$(document).ready(function() {
  // You code here

  $.ajax('https://api.github.com/users/soapej/gists', {
    success: function(gists) {
      gists.forEach(function(gist){
        if (gist.description.indexOf('#post') === 0){
          gist.description = gist.description.slice(5);
          $('#posts').append(`<li><a href='#' data-url='${gist.url}' data-comments='${gist.comments_url}'>${gist.description}</a></li>`);
        }
      });


      $('[data-url]').click(function(){
        event.preventDefault();
        $.ajax($(this).data("url"), {
          success: function(post) {
            $('#post').append(marked(post.files['post.md'].content));

          }
        });
        $.ajax($(this).data('comments'), {
          success: function(comments) {
            comments.forEach(function(comment){
              $('#comments').append(`<li>${comment.user.login}<br>${comment.body}</li>`);
            })
          }
        })
      });
    }
  });
});
