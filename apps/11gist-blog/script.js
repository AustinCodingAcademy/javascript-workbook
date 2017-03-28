'use strict';

$(document).ready(function() {
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function(userPosts) {
      userPosts.forEach(function(userGist) {
        var userSubstr = userGist.description; 
        var postString = "<li>" + 
                         "<a href='#' data-url='" + userGist.url + "'>" + userGist.description.substring(6,userSubstr.length) + "</a>" + 
                         "</li>";
        $('#posts').append(postString);
      })
      viewGist();
    }
  })
});

function viewGist() {
  $('a').click(function() {
    event.preventDefault();
    var gistURL = $(this).data('url');
    console.log('url was clicked');   
    $.ajax(gistURL, {
      success: function(gistContent) {
        var postText = "<p>" + gistContent.content + "</p>";
        $('#post').append(postText);
      }
    });
  });
}