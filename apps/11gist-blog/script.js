'use strict';

$(document).ready(function() {

  $.ajax("https://api.github.com/users/GPFAFF/gists", {
    success(gists) {
      gists.forEach(function(gist) {

        var post = "<a href='#' id='gist' data-url='" + gist.url + "'>" + gist.description + "</a>";

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
        console.log(gist);
        $.each(gist, function(index, value) {
          var $login = value.user.login;
          var $body = value.body;
          var $avatar = value.user.avatar_url
          var $comments = $("#comments");

          $comments.append("<img src="+ $avatar + " id='image'/>" + "<p id='user'> " + $login + " </p>" + "<p id='text'> " + $body + " </p>");
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

