'use strict';

$(document).ready(function() {
  // You code here
  $.ajax({
    url: "http://localhost:8080/api/gists.json",
    success: function(data) {

      data.forEach(function(post){
        console.log(post.url);
        if(post.description.indexOf('#post') > -1) {
          var str = post.description.slice(5);
          $('#posts').append('<li><a href="#" data-url="' + post.url + '">' + str + '</a></li>');
        }


      });
      $('a').click(function(event){
        event.preventDefault();
        $.ajax($(this).data('url'), {
          success: function(dataPost) {
            $('#post').html(marked(dataPost.files["post.md"].content))
            $.ajax(dataPost['comments_url'], {
              success: function(commentPosts) {
                commentPosts.forEach(function(commentPost) {
                  $('#comments').html('<li>' + commentPost.user.login + '</li><li>' + commentPost.body + '</li>');
                })
              }
            })
          }



        })

      })
    }
  });

});
