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
      
      $("#posts").on("click", "a", function(e){
        e.preventDefault();
        //console.log($(this).data('url'));
        /*var $self = this;
        $.ajax($self, {

        })*/
      });
    },
    error(request, status, error) {
      alert("Request Failed");
    }
  });
});

