'use strict';

$(document).ready(function() {
    $.ajax('https://api.github.com/users/DMcCal79/gists', {
      success: function(gists) {
        gists.forEach(function(gist) {
          var gistLink = $('<li><a href ="#" data-url="'+ gist.url +'" data-feedback="'+ gist.comments_url +'">' + gist.description.slice(6) + '</a></li>'); //*Adding the data-feeback data tag allows me to capture the gist.comments.url later.*//
          if (gist.description.indexOf('#post') > -1) {
          $('#posts').append(gistLink);
         }
        })
        $('a').on('click', function(event) {
          event.preventDefault;
          var url = $(this).data('url');
          $.ajax(url, {
            success: function(gist) {
              $('#post').html(marked(gist['files']['post.md']['content']));
            }
          })
          $('#comments').empty(); //*The .empty() will clear the comments ul so that the new comments can be appended when the next post is clicked on.*// 
          var feedback = $(this).data('feedback');
          $.ajax(feedback, {
            success: function(gists) {
              gists.forEach(function(gist) {
                $('#comments').append('<li class = "commentPost">' + '<img class = "avatar img-rounded" src=' + gist['user']['avatar_url'] + '>' + ' ' +  gist['user']['login']  + ' ' + gist['body'] + '</li>');
            })
          }
        })
      })
    }
  })
});
