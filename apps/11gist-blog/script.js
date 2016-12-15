'use strict';

$(document).ready(function() {

  $.ajax("https://api.github.com/users/GPFAFF/gists", {
    success(gists) {
      gists.forEach(function(gist) {

        var post = "<div class='post'> <li class='item'><a href='#' id='gist' data-url='" + gist.url + "'>" + gist.description + "</a></li>" + "<div id='post'></div>"
        if (post.indexOf("#post") !== -1) {
          post = post.replace("#post", " ");
          $("#posts").append(post);
        }
      });
    },
    error() {
      alert("Request Failed");
    }
  });

  function grabComments(gist) {
    $.ajax(gist.comments_url, {
      success(gist) {
        $.each(gist, function(index, value) {
          //var $user = value.owner.html_url
          var $login = value.user.login;
          var $body = value.body;
          var $avatar = value.user.avatar_url
          var $comments = $("#comments");

          var $details = "<ul id='comments'>" + "<img src="+ $avatar + " id='image'/>" + "<p id='user'> " + "<a href='" + '#' + "'>" + $login + "</a>" + " </p>" + "<p id='text'> " + $body + " </p></ul>";
          $("#post").append($details);
      
        });
      },
      error() {
        alert("Request Failed");
      }
    });
  }

  /*Click Handler For Posts*/
  $("#posts").on("click", "a", function(e){
    e.preventDefault();
    var $marked;
    var $postId = $("#post");

    var $self = $(this).data("url");    
    $.ajax($self, {
      success(url) {
        var $post = url.files["post.md"].content;  
        $marked = marked($post);
        
        $postId.append($marked);
        grabComments(url);
      },
      error() {
        alert("Request Failed");
      }
    });
  });
});
