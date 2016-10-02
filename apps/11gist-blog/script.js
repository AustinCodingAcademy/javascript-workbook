'use strict';

$(document).ready(function() {
  //makeing ajax call to gists list
  $.ajax('http://localhost:8080/apps/11gist-blog/api/gists.json', {
    success: function(gists) {
  //finding in each gist
      gists.forEach(function(gist) {
  //if the description of the gist contains #post
        if (gist.description.indexOf('#post') > -1) {
  //creating a variable to that contains a link that states the description minus #post so that we can manipulate it easier later
          var $a = $('<a href="' + gist.url + '">' + gist.description.slice(6) + '</a>')
  //placeing the post description in a list in #posts
          $('#posts').append($('<li></li>').append($a));
  //when a person clicks
          $a.on('click', function(event) {
  //prevent the default
            event.preventDefault();
  //creating a variable to the link clicked on
            var href = $(this).attr('href');
  //calling on the link that is clicked ons information
            $.ajax(href, {
              success: function(gist) {
  //posting the content in a gist to #post, adding the marked styling
                $('#post').html(marked(gist['files']['post.md']['content']));
  //calls the comments url
                $.ajax(gist.comments_url, {
                  success: function(comments) {
  //posts the comment in #comments, adds marked styling
                    comments.forEach (function(comment) {
                      $('#comments').html(marked(comment['body']));
                    })
                  }
                })
              }
            })
          })
        }
      });
    }
  });
});
