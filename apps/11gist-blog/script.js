'use strict';

$(document).ready(function() {
  // You code here
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function(gists) {
      console.log(gists);
      gists.forEach(function(gist) {
        console.log(gist.description);
        if (gist.description.startsWith('#post')) {
          var postDesc = gist.description.slice(5);
          console.log(postDesc);
          var $post = $(`<a class="collection-item" href="#" data-url="${post.url}" data-comments="${post.comments_url}" data-id="${post.id}">${postDesc}</a>`);
          $('ul#posts').append($post);
        }
      })
      $('ul#posts a').click(function(event){
        var $thatId = $(this).data('url').id;
        console.log($thatId);
        event.preventDefault();
        $('ul#post a').removeClass('active');
        $(this).addClass('active');
        $ajax($(this).data('url'), {
          success: function(post) {
            var postContent = post.files['post.md'].content;
            $('div#post').html(marked(postContent));
            $('div#post p').attr('style', 'text-align: left');
          }
        });
        $.ajax($(this).data('comments'), {
          success: function(comments) {
            $('ul#comments').empty();
            comments.forEach(function(comment) {
              var $comment = $('<blockquote><li><span class="comment-user">' + comment.user.login + '</span> says "<span class="comment-body">' + comment.body + '"</span></li></blockquote>');
              $('#comments').append($comment);
            })
          }
        })
      })
    }

  });
});


// $('#post').(function(gists) {
//   console.log(gists.description);
// })
