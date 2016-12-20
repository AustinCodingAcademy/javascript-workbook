'use strict';

$(document).ready(function() {
  $.ajax('api/gists.json', {
      success: function(blogPosts) {
        blogPosts.forEach(function(post) {
          var url = post.url;
          var description = post.description;
          var comments_url = post.comments_url;
          var str = '<li><a href="#" data-url="' + url + '"> data-comments_url="' + comments_url + '">' + description + '</a></li>';
          if (str.indexOf('#post') >= 0) {
            str = '<li><a href="#" data-url="' + url + '" data-comments_url="' + comments_url + '">' + description.replace('#post', ' ') + '</a></li>';
            $('#posts').append(str);
            //console.log(str);
          };
        })
      }
    })
    // After the links are are inserted, add a click listener, and prevent the default event from occuring. Then make an ajax call with the "data-url" value, grabbing it with $.data('url').
  $('#posts').on('click', 'a', function(link) {
    link.preventDefault();
    var clicked = $(this).data('url');
    var comment = $(this).data('comments_url');
    //console.log(comment);
    //console.log(clicked);
    $.ajax(clicked, {
      success: function(url) {
        $('#post').empty();
        var postContent = marked(url.files['post.md'].content);
        $('#post').append(postContent);
      },
    });
    $.ajax(comment, {
      success: function(comments) {
        $('#comments').empty();
        comments.forEach(function(comment) {
          var $comment = $('<blockquote><li><span class="comment-user">' + comment.user.login + '</span> says "<span class="comment-body">' + comment.body + '"</span></li></blockquote>');
          $('#comments').append($comment);
        })
      }
    });
  });
});

// Spec 0 - Playing with the API
//
// So let's run through the API real quick. First, in your terminal, navigate to to your app directory:
//
// After starting up a server in the app directory, navigate in your browser to http://127.0.0.1:8080/apps/11gist-blog/api/gists.json, here you will see the top level of the api, with all of the gists. In each gist, you will see a "url" key. Navigate to that URL. In that address you will see another JSON object. Look for a "files" key with an object containing a file. In that file you'll see the "content" of the file. Next look for a "comments_url". At that address, you'll see a collection of comments, with keys such as "user" and "body".
//
// Spec 1.1
//
// Using jQuery to make an AJAX call, insert a list of links into #posts using JavaScript forEach with the "description" of each gist as the text.
//
// Spec 1.2
//
// Within each loop, write an if condition to insert only gists that start with a '#post' in the "description". After fitering, remove the '#post ' from the title.
//
// Spec 1.3
//
// Set the href attribute on each link to "#", and a "data-url" attribute equal to the "url" value.
//
// Spec 2
//
// After the links are are inserted, add a click listener, and prevent the default event from occuring. Then make an ajax call with the "data-url" value, grabbing it with $.data('url').
//
// Spec 3
//
// Insert the "content" of the file named post.md into #post.
//
// Spec 3.1
//
// Since our "content" is written in Markdown, we can use the Marked.js library to convert the content to html. Simply call marked() on your content. e.g. marked(content).
//
// Spec 4
//
// After inserting your content, make another ajax call using the "comments_url", and insert the ["user"]["login"] and "body" in a list in #comments.
//
