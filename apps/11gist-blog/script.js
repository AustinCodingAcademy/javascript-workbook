'use strict';

$(document).ready(function() {
    // start with an ajax call
    $.ajax('http://localhost:8080/apps/11gist-blog/api/gists.json', {
      success: function(gists) {
        // loop through each object
        gists.forEach(function(gist) {
          // using indexOf, check to see if there are any posts in the description
          if (gist.description.indexOf('#post') > -1) {
            // slicing off the front part which contains '#post' and returning it.
            var $a = $('<a href="' + gist.url + '">' + gist.description.slice(6) + '</a>');
            // adding list items and sliced description to the posts
            $('#posts').append($('<li></li>').append($a));
            console.log(gist.description);

            // after clicking link, do another ajax call
            $a.click(function(event) {
              event.preventDefault();
              // get attribute from the posts which includes the url link
              var href = $(this).attr('href');
              $.ajax(href, {
                success: function(gist) {
                  // replaces the content with new content from the files.
                  $('#post').html(marked(gist['files']['post.md']['content']));
                }
              })
            })
          }
        })
      }
    });
});
