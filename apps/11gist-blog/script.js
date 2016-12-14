'use strict';

$(document).ready(function() {

  $.ajax("http://127.0.0.1:8080/apps/11gist-blog/api/gists.json", {
    success(gists) {
      gists.forEach(function(gist) {

        var post = "<a href='#' data-url='" + gist.url + "'>" + gist.description + "</a>";

        if (post.indexOf("#post") !== -1) {
          post = post.replace("#post", " ");
          $("#posts").append(post);
        }
      });
    },
    error(request, status, error) {
      alert("Request Failed");
    }
  });

  function grabComments(url) {
    $.ajax(url.comments_url, {
      success(url) {
        $.each(url, function(index, value) {
          var $comments = value.user.login;
          var $body = value.body;
          $("#comments").append(" " + $comments + " ");
          $("#comments").append(" " + $body + " ");
        });
      }
    });
  }

  /*Click Handler For Posts*/
  $("#posts").on("click", "a", function(e){
    e.preventDefault();
    var $marked;
    var $post;

    var $self = $(this).data("url");    
    $.ajax($self, {
      success(url) {
        $post = url.files["post.md"].content;  
        $marked = marked($post);
        
        $("#post").append($marked);
        grabComments(url);
      },
      error(request, stats, error) {
        alert("Request Failed");
      }
    });
  });
});

