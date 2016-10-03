'use strict';

$(document).ready(function() {
    $.ajax('http://localhost:8080/apps/11gist-blog/api/gists.json', {
      success: function(gists) {
        gists.forEach(function(gist) {
          if (gist.description.indexOf('#post') > -1) {
            var $a = $('<a href=" ' + gist.url + ' ">' + gist.description.slice(6) + '</a>');
            $('#posts').append($('<li></li>').append($a));
            $a.on('click', function(event) {
              event.preventDefault();
              var href = $(this).attr('href');
              console.log(href);
              $.ajax(href,{
                success:function(gist) {
                  $('#post').html(marked(gist['files']['post.md']['content']));
                }
              })
            });
          }
        });
      }
    });
});
