'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('https://api.github.com/users/matthew-s-howard/gists', {
    success: function(posts) {
      posts.forEach(function(post) {
        var checkifPost = post.description;
        if (checkifPost.startsWith('#post')) {
          var post_title = checkifPost.substring(checkifPost.indexOf('#') + 5);
          var blogPostUrl = post.url;
          var li = '<li><a href="#" data-url="' + blogPostUrl + '">' + post_title + '</a></li>';
          $('#latest-posts').append(li);
        }
      })
      $('a').click(function(event) {
        event.preventDefault();
        $('#post').empty();
        $('#comments').empty();
        var $clickedURL = $(this).data('url');
        $.ajax($clickedURL, {
          success: function(postContent) {
            var addContent = postContent.files["post.md"].content;
            $('#post').append(marked(addContent));
            var CommentsURL = postContent.comments_url;
            $.ajax(CommentsURL, {
              success: function(details) {
                details.forEach(function(comment) {
                  var userName = comment["user"].login;
                  var body = comment.body;

                  $('#comments').append('<h4>Comments</h4><p>' + body + '</p><span>comment made by ' + userName + '</span>');
                })


              }

            });
          }
        })
      });
    }

  });
});
