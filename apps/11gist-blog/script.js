'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('api/gists.json', {
    success: function(posts) {
      posts.forEach( function(post) {
        if(post.description.startsWith('#post')) {
          var postStr = '<li><a href="#" data-url="' + post.url + '">' + post.description.substring(6) + '</a></li>';
          $('#posts').append(postStr);
        }
      });
    }
  });

  $('#posts').on('click', 'li', function(event) {
    event.preventDefault();
    $.ajax($(event.target).data('url'), {
      success: function(post) {
        $('#post').html(marked(post.files['post.md'].content));
        $.ajax(post['comments_url'], {
          success: function(comment) {
            $('#comments').html('<li>' + comment[0]['user']['login'] + '</li><li>' + comment[0].body + '</li>' );
          }
        });
      }
    });
  });

});
