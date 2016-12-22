'use strict';

$(document).ready(function() {
  //You code here
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function(gists) {
      gists.forEach(function(gists){
        //below is what the list of links are
      var str = gists.description;
      //below means taking the lists of links and checking to see if any posts start w/ #post[space]
      if (str.substring(0,6) === '#post ') {
        var url = gists.url;
        $('#posts').append(
          "<li>" +
         '<a href="#" data-url="' +
         url +
        '">' +
        str.slice(6) +
        '</a>' +
        "</li>");
      }
});
    }
    });

$('body').on('click','a',function(event) {
  event.preventDefault();
  //this next line is replacing my existing URL with the data populating at the end of it
  var url = $(this).data('url');
  //the next ajax call is to target the exact blog post
  $.ajax(url, {
    success: function(post) {
      $('#post').append(marked(post.files['post.md'].content));
      //now that post is called, i want it to look into posts and see comments, so calling a 3rd ajax 
      $.ajax(post.comments_url, {
        success: function(comments) {
          $('#comments').empty();
          comments.forEach(function(comment){
            var commentDisplay = comment.user['login'] + ' ' + comment.body + '<li>' + '</li>'
            $('#comments').append(commentDisplay);
          })
        }
      } );
    }
  });



});



    });
