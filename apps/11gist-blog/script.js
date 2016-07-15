'use strict';

$(document).ready(function() {
  $.ajax({
    url: 'https://api.github.com/users/dorianpenaloza/gists',
    success: function(posts) {

      posts.forEach(function(post) { //inserts a list of links into #posts.
        if (post.description.indexOf('#post') > -1) { //filters "description"s that begin with '#post'.
          $('#posts').append('<li> <a href="#" data-url=" '+ post.url +' "> '+ post.description.slice(6) +' </a> </li>');
        } // end of if statement
      }); //end of .forEach

      $('a').click (function(event) {
        event.preventDefault();
        $.ajax($(this).data('url'), { //makes an ajax call with the "data-url" value, finds it with $(this).data('url').
          success: function(post) {
            $('#post').append('<div> '+ marked(post.files['post.md'].content) +' </div>');

            $.ajax(post.comments_url, { //makes another ajax call using the "comments_url"
              success: function(comments) {
                comments.forEach(function (comment) { //appends the ["user"]["login"] and "body" in a list in #comments
                  $('#comments').append('<li> '+ comment['user']['login'] +' </li> <li> '+ comment.body +' </li> <img style="width:100px" src=" '+ comment['user']['avatar_url'] +' "></img>');
                });
              } //end of success: function comments
            }); //end of $.ajax call

          } //end of success: function post
        }); //end of $.ajax call
      }); //end of .click function

    } //end of success: function posts
  }); //end of $.ajax call
}); //end of document.ready.
