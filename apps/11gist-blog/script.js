'use strict';

$(document).ready(function() {
  'use strict';

  $(document).ready(function() {
    var url = 'http://127.0.0.1:8080/apps/11gist-blog/api/gists.json'
    var $posts = $('#posts');
    var $post = $('#post');
    var $commentsList = $('#comments')




    $.ajax(url, {
      success: function(response) {
        response.forEach(function(post) {
          if (post.description.startsWith('#post')) {
            var postTitle = post.description.substring(6);
            var $postDeets = $('<li><a href="#" data-url="' + post.url + '" data-comments="' + post.comments_url + '">' + postTitle + '</a></li>');

            $posts.append($postDeets);
          };

        })

        var $title = $('title').text();
        var newTitleDiv = $('<div id="site_title" class="sm-col-4">' + $title + '</div>')
        $posts.before(newTitleDiv);
        $posts.wrap('<aside class="small-12 medium-3"></aside>');
        $post.addClass('medium-9');


        $('a').click(function(event) {
          event.preventDefault();


          $.ajax($(this).data('url'), {
            success: function(response) {
              var content = response.files['post.md'].content;
              $post.append(marked(content))

              $.ajax($(this).data('comments'), {
                success: function(comments) {
                  comments.forEach(function(comment) {
                    var $commentDeets = $('<li>' + comment.user.login + '</li><li>' + comment.body + '</li>');
                    $commentsList.append($commentDeets);
                  })
                }
              });

            }
          });

        });
      }
    });
  });
});
