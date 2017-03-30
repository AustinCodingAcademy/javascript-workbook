'use strict';

$(document).ready(function() {

//Test: condensed code


    // You code here
    $.ajax('https://api.github.com/users/Jmgucciardi/gists', {
         success: function(posts) {
             posts.forEach(function(post) {
                 if (post.description.startsWith('#post')) {
                     var strPostDescription = post.description.slice(5);
                     var $post = $('<li><a href="#" data-url="' + post.url + '" data-comments="' + post.comments_url + '">' + strPostDescription + '</a></li>');
                     $('#posts').append($post);
                };
             })
             $('body').on('click', 'a', function(event) {
                 event.preventDefault();
                 $.ajax($(this).data('url'), {
                     success: function(post) {
                         var postContent = post.files['post.md'].content;
                         $('#post').empty().append(marked(postContent))
                     }
                 });
                 $.ajax($(this).data('comments'), {
                     success: function(comments) {
                         $('#comments').empty();
                         comments.forEach(function(comment) {
                             var $comment = $('<li>' + comment.user.login + ' ' + comment.body + '</li>');
                             $('#comments').append($comment);
                         })
                     }
                 })
             });
         }
     });
  });

  