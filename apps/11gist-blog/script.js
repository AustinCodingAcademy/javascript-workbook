'use strict';

$(document).ready(function () {
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function (response) {
      response.forEach(function (post) {
        var $description = post.description;
        var $url = post.url;
        var $comments = post.comments_url;
        if ($description.substring(0, 6) === '#post ') {
          var $str = `<li><a href='#' data-comments=${$comments} data-url=${$url}>${$description.replace('#post', '')}</a></li>`
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
            var $content = marked(clicked['files']['post.md']['content']);
            $('#post').append($content);
          }
        })
        $.ajax($(this).data('comments'), {
          success: function(commentFetch){
            //var $userName = marked(commentFetch.user.login);
            var $postContent = marked(commentFetch.body);
            var $str3 = `
            <li>${$userNAme}</li>
            <li>${$postContent}</li>
            `;
            $('#comments').append($str3);
          }
        })
      })
    }
  })
});

//need to add section for comments for second section