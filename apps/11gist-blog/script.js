'use strict';

$(document).ready(function() {
  // You code here
  //AJAX call
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
      success: function(posts) {
    //targeting #post
        posts.forEach(function(post) {
          if (post.description.startsWith('#post')) {
            var strPostDescription = post.description.slice(5);
      //post/comment data url's
            var $post = $('<li><a href="#" data-url="' + post.url + '" data-comments="' + post.comments_url + '">' + strPostDescription + '</a></li>');
            $('#posts').append($post);
          };
        })
    //click without reloading
        $('body').on('click', 'a', function(event) {
          event.preventDefault();
          $.ajax($(this).data('url'), {
            success: function(post) {
              var postContent = post.files['post.md'].content;
              $('#post').empty().append(marked(postContent))
            }
          });
          $.ajax($(this).data('comments'), {
            success: function(comments) {
              $('#comments').empty();
              comments.forEach(function(comment) {
                var $comment = $('<li>' + comment.user.login + ' ' + comment.body + '</li>');
                $('#comments').append($comment);
              })
            }
          })
        });
      }
    });
});
