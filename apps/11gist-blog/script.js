'use strict';

$(document).ready(function() {
  $.ajax('https://api.github.com/users/cruzmndz/gists', {
    success: function(userPosts) {
      userPosts.forEach(function(userGist) {
        var userSubstr = userGist.description; 
        //VARIABLE TO POPULATE DOM WITH MODIFIED POST TITLE
        var postTitle = "<li>" + 
                        "<a href='#' data-url='" + userGist.url + "'>" + userGist.description.substring(6,userSubstr.length) + "</a>" + 
                        "</li>";
        $('#posts').append(postTitle);
      })
      //CALL viewGIST FUNCTION ONLY AFTER AJAX REQUEST HAS COMPLETED
      viewGist();
    }
  })
});

//FUNCTION TO INITIATE EVENT LISTENER ON ALL LINKS
function viewGist() {
  $('a').click(function() {
    event.preventDefault();
    var gistURL = $(this).data('url'); 
    $.ajax(gistURL, {
      success: function(gistContent){
        //CLEAR THE DIV TO PREVENT POSTS STACKING
        $('#post').empty();
        var postText = marked(('<p>' + (gistContent.files['post.md']['content']) + '<p>'))
        //APPEND POST
        $('#post').append(postText);
        //START UP THE AJAX MOTOR FOR COMMENTS
        $.ajax(gistContent.comments_url, {
          success: function(userComments){
            $('#comments').empty();
            userComments.forEach(function(login) {
              var buildComments = marked(('<li>' + '<strong>' + login.user['login'] + '</strong>' + '</li>' +
              '<li>' + login.body + '</li>'));
              //APPEND COMMENT
              $('#comments').append(buildComments);
            });         
          }
        });
      }
    });
  });
}


