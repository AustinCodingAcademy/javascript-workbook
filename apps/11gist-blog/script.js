'use strict';

// So let's run through the API real quick. First, in your terminal, navigate to to your app directory:
//
// After starting up a server in the app directory, navigate in your browser to http://127.0.0.1:8080/apps/11gist-blog/api/gists.json, here you will see the top level of the api, with all of the gists. In each gist, you will see a "url" key. Navigate to that URL. In that address you will see another JSON object. Look for a "files" key with an object containing a file. In that file you'll see the "content" of the file. Next look for a "comments_url". At that address, you'll see a collection of comments, with keys such as "user" and "body".


$(document).ready(function() {

  // Spec 1.1: Using jQuery to make an AJAX call, insert a list of links into #posts using JavaScript forEach with the "description" of each gist as the text.
// $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
  $.ajax('https://api.github.com/users/morgakd/gists', {
    success: function(response) {
      console.log(response);
      response.forEach(function(posts) {
        var $des = posts.description;
        // Spec 1.2: Within each loop, write an if condition to insert only gists that start with a '#post' in the "description". After fitering, remove the '#post ' from the title.
        if ($des.includes('#post')) {
          // Spec 1.3: Set the href attribute on each link to "#", and a "data-url" attribute equal to the "url" value.
          $('#posts').append(($('<li>' + '<a href="#" data-url ="' + posts.url + '" data-comm-url ="' + posts.comments_url + '">' + $des.slice(6) + '</a>' + '</li>')));
        }

      });
      $("a").on('click', function(event) {
        // Spec 2: After the links are are inserted, add a click listener, and prevent the default event from occuring. Then make an ajax call with the "data-url" value, grabbing it with $.data('url').
        event.preventDefault();

        $.ajax($(this).data('url'), {
          success: function(content) {
            // Clear previous content
            $('#post').empty();
            // Spec 3: Insert the "content" of the file named post.md into #post.
            // Spec 3.1: Since our "content" is written in Markdown, we can use the Marked.js library to convert the content to html. Simply call marked() on your content. e.g. marked(content).
            var date = new Date(content.created_at);
            var subdate = date.toLocaleDateString();

            var cont = content['files']['post.md'].content;

            $('#post').append(($('<div class="date">' + subdate + '</div>' + '<div class="marked">' + marked(cont) + '</div>')));


          }
        });
        $.ajax($(this).data('comm-url'), {
          success: function(comments) {
            // Clear previous comments
            $('#comments').empty();
            //sort the comments; newest first
            var sorted = comments.sort(function(commenta, commentb) {
              var younger = new Date(commenta.created_at);
              var older = new Date(commentb.created_at);
              if (younger < older) {
                return 1;
              } else if (younger > older) {
                return -1;
              } else {
                return 0;
              }
            });
            // Loop through the various comments
            for (var i = 0; i < sorted.length; i++) {
              // Inserted Date for comment reference
              var date = new Date(sorted[i].created_at);
              var subdate = (date.toLocaleDateString() + ' ' + date.toLocaleTimeString());

              // Spec 4: After inserting your content, make another ajax call using the "comments_url", and insert the ["user"]["login"] and "body" in a list in #comments.
              $('#comments').append(($('<div class="entry">' + '<div class="comment">' + marked(sorted[i]['body']) + '</div>' + '<div class="user">' + sorted[i]['user']['login'] + '</div>' + '<div class="date">' + subdate + '</div>' + '</div>')));
            }
          }
        });


      });
    }
  });


});
