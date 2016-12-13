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

  /*Click Handler For Posts*/
  $("#posts").on("click", "a", function(e){
    e.preventDefault();
    var $self = $(this).data('url');    
    $.ajax($self, {
      success(url) {
        var $post = url.files["post.md"].content;  
        var $marked = marked($post);
        
        $("#post").append($marked);
        console.log("1st call");
        grabComments(url);
      },
      error(request, stats, error) {
        alert("Request Failed");
      }
    });
  });

  function grabComments(url) {
    console.log(url.comments_url);
    $.ajax(url.comments_url, {
      success(url) {
        console.log(url);
        $.each(url, function(index, value) {
          var $comments = value.user.login;
          var $body = value.body;
          console.log("2nd call");
          $("#comments").append(" " + $comments + " ");
          $('#comments').append(" " + $body + " ");
        })
      }
    }) 
  }

});

