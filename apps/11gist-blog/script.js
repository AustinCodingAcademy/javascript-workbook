'use strict';

$(document).ready(function () {
  $.ajax('https://api.github.com/users/JamesPuckett/gists', { //http://127.0.0.1:8080/apps/11gist-blog/api/gists.json
    success: function (response) {
      response.forEach(function (post) {
        var $description = post.description;
        var $url = post.url;
        var $comments = post.comments_url;
        //only uses posts that start with '#post ' and removes the string '#post '
        //creates a link that has to data attritubutes so i can reference them later with ajax calls
        if ($description.substring(0, 6) === '#post ') {
          var $str = `
          <li>
            <a href='#' data-comments=${$comments} data-url=${$url}>${$description.replace('#post ', '')}
            </a>
          </li>
          `;
          $('#posts').append($str);
        }
        //this section below here does not appear to be working.
      })
      $('#posts a').on('click', function (link) {
        link.preventDefault();
        console.log('default prevented.');
        //prevent default appears to work
        $.ajax($(this).data('url'), {
          success: function (clicked) {
            $('#post').empty();
            $('#comments').empty();
            var $content = marked(clicked['files']['post.md']['content']);
            $('#post').append($content);
          }
        })
        $.ajax($(this).data('comments'), {
          success: function (commentFetch) {
            commentFetch.forEach(function (comment) {
              var $userLogin = comment.user.login;
              var $commentBody = comment.body;
              var $userComment = `
              <ul>
                <li>${$userLogin}:</li>
                <ul>
                  <li>${$commentBody}</li>
                </ul>
              </ul>
              `;
              $('#comments').append($userComment);
            })
          }
        })
      })
    }
  })
});

//need to add section for comments for second section

