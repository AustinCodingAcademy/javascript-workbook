'use strict';

$(document).ready(function() {

    var jsonUrl = 'http://localhost:8080/apps/11gist-blog/api/gists.json';

    $.ajax(jsonUrl, {
      success: function(gists) {
        gists.forEach(function(post){
          // Using jQuery to make an AJAX call, insert a list of links into
          // #posts using JavaScript forEach or jQuery .each, with the
          // "description" of each gist as the text.

          // Within each loop, write an if condition to insert only gists
          // that start with a '#post' in the "description". After fitering,
          // remove the '#post ' from the title.

          // Set the href attribute on each link to "#", and a "data-url"
          // attribute equal to the "url" value
          if (post.description.indexOf('#post') === 0){

            var postStr = post.description.replace('#post', '');

            var str =
              '<p>' +
                '<a href="#" data-url="' + post.url + '" >' + postStr + '</a>'
               + '</p>';

            $('#posts').append(str);
          }
        });//!gists.forEach

        // After the links are are inserted, add a click listener, and prevent
        // the default event from occuring. Then make an ajax call with the
        // "data-url" value, grabbing it with $.data('url').
        $('a').on('click', function(event){
          event.preventDefault();

          $.ajax($(this).data('url'), {
            success: function(gist) {
              // Insert the "content" of the file named post.md into #post
              // Since our "content" is written in Markdown, we can use the
              // Marked.js library to convert the content to html.
              var content = marked(gist['files']['post.md']['content']);
              $('#post').html(content);
              var postDate = new Date(gist.updated_at);
              $('<h6 class="postDate">Updated: ' + postDate.toLocaleDateString() + '</h6>' + '<p></p>').insertAfter('h3')
              //$('#post h3').append('<p>test</p>');

              // After inserting your content, make another ajax call using the
              // "comments_url", and insert the ["user"]["login"] and "body" in a
              // list in #comments.
              $.ajax(gist.comments_url, {
                success: function(comments) {
                  //If there are comments, we'll append them within a bootstrap well
                  var commentWell =
                    '<div class="panel panel-default">' +
                      '<div class="panel-heading">' +
                        '<h3 class="panel-title">Comments</h3>' +
                      '</div>' +
                      '<div id="commentWell" class="panel-body">' +
                      '</div>' +
                    '</div>';
                  $('#comments').html(commentWell);
                  comments.forEach(function(comment){
                    var commentString =
                      '<p>' + comment.user.login  + ' said: "'  + comment.body + '" </p>';

                  $('#commentWell').append(commentString);
                  });//!comments.forEach
                }//!success
              });//!$.ajax

            }//!success
          });//!$.ajax

        });//!$('a').on

      }
    });//!$.ajax(jsonUrl)


});//!document.ready()
