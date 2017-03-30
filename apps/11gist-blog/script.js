'use strict';

$(document).ready(function() {

  var url = 'https://api.github.com/users/roberl54/gists';
  // var url = 'http://127.0.0.1:8080/apps/11gist-blog/api/gists.json';
  var $posts = $('#posts');
  var $post = $('#post');
  var $commentsList = $('#comments')


  // First AJAX call, generating the list of gists/posts
  $.ajax(url, {
    success: function(response) {
      response.forEach(function(post) {
        if (post.description.startsWith('#post')) {
          // remove #post_ (ie first 6 characters) from each title
          var postTitle = post.description.substring(6);

          // working with dates in JS is a balllllll
          var msec = Date.parse(post.created_at);
          var postMonth = new Date(msec).getUTCMonth() + 1;
          var postDay = new Date(msec).getUTCDate();
          var postYear = new Date(msec).getUTCFullYear();

          var $postDeets = $('<li><a href="#" data-url="' + post.url + '" data-comments="' + post.comments_url + '">' + postTitle + '</a><br><span class="post_dates">' + postMonth + ' | ' + postDay + ' | ' + postYear + '</span></li>');
          $posts.append($postDeets);
        };

      })

      // DOM-manipulation assignments and related activities
      var $title = $('title').text();
      var newTitle = $('<h1>' + $title + '</h1>');

      $posts.before(newTitle);
      $posts.wrap('<aside class="small-12 medium-offset-1 medium-3"></aside>');
      $posts.before('<h6>ARCHIVE</h6>');

      $post.addClass('medium-8');


      // when a link is clicked, prevent default link behavior
      // click listener placed outside of the forEach loop so it only runs once per click
      $('a').click(function(event) {
        event.preventDefault();
        $commentsList.empty();

        // Second AJAX call, expanding the gist/post that is clicked
        $.ajax($(this).data('url'), {
          success: function(response) {
            var content = response.files['post.md'].content;
            // insert post content into DOM after *emptying* any content that may be visible
            $post.empty().append(marked(content));
          }
        }); // close 2nd AJAX

        // 3rd AJAX call to add in any comments
        $.ajax($(this).data('comments'), {
          success: function(comments) {
            comments.forEach(function(comment) {
              var $commentDeets = $('<li><h4>' + comment.user.login + '</h4><span class="comment-body">' + comment.body + '</span></li>');
              // insert post comments into DOM after *emptying*
              $commentsList.append($commentDeets);
            })
          }
        }); // close 3rd AJAX

      }); // close click event listener
    }
  }); // close 1st AJAX
});
