'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('https://api.github.com/users/mcplunket/gists',{
    success: function(gists){
      gists.forEach(function(gist) {
        // console.log(gist.description);
        if (gist.description.match('^#post')) {
          var link = `<li><a href="${gist.url}">${gist.description.replace('#post', '' )}</a></li>`;
          $('#posts').append(link.toUpperCase());
        }
      });
      $('a').click(function(event) {
        event.preventDefault();
        // console.log($(this).attr('href'));
        $.ajax($(this).attr('href'), {
          success: function(gist){
            var content = marked(gist['files']['post.md']['content']);
            $('#post').html(content);
            // console.log(gist['comments_url']);
            $.ajax(gist['comments_url'],{
              success: function(comments){
                $('#comments').empty();
                comments.forEach(function(comment){
                  $('#comments').append(
                    `
                    <li>${comment.user.login}</li>
                    <li>${comment.body}</li>
                    `
                  )
                })
              }
            });
          }
        });
      })
    }
  })
});
