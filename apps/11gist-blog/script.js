'use strict';

$(document).ready(function () {
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function (response) {
      response.forEach(function (post) {
        var $description = post.description;
        var $url = post.url;
        if ($description.substring(0, 6) === '#post ') {
          var $str = `<li><a href='#' data-url=${$url}>${$description.replace('#post', '')}</a></li>`
          $('#posts').append($str);
        }
        //this section below here does not appear to be working.
        $('#posts a').on('click', function (link) {
          link.preventDefault();
          console.log('default prevented.');
          //prevent default appears to work
          //this vvv appears broken
          $.ajax($.data('url'), {
            success: function (clicked) {
              var $content = marked(clicked['files']['post.md']['content']);
              console.log($content);
              console.log('hello');
              $('#post').append($content);
            }
          })
        })
      })
    }
  })
});