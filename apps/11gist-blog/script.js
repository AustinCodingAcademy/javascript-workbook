'use strict';

$(document).ready(function() {
  // var url = 'https://api.github.com/users/roberl54/gists';
  var url = 'http://127.0.0.1:8080/apps/11gist-blog/api/gists.json'
  var $posts = $('#posts');
  var $post = $('#post');
  // var postUrl = post.url;
  var $commentsList = $('#comments')


  // three total AJAX calls: list of gists, the particular gist you click on, and then the comments


  // First AJAX call, generating the list of gists/posts
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


      // or do I want this: $('a').data('url').click(function(event)) ???
      // placed outside of the forEach loop so it only runs once per click
      $('a').click(function(event) {
        event.preventDefault();

        // var postUrl = $(this).data('url')  ??

        // Second AJAX call, expanding the gist that is clicked
        // need to get postUrl to actually mean something...
        $.ajax($(this).data('url'), {
          success: function(response) {
            var content = response.files['post.md'].content;
            $post.append(marked(content))

            //Now put the 3rd AJAX call here to add in any comments
            $.ajax($(this).data('comments'), {
              success: function(comments) {
                comments.forEach(function(comment) {
                  var $commentDeets = $('<li>' + comment.user.login + '</li><li>' + comment.body + '</li>');
                  $commentsList.append($commentDeets);
                })
              }
            }); // close 3rd AJAX

          }
        }); // close 2nd AJAX

      }); // close click event listener
    }
  }); // close 1st AJAX
});
