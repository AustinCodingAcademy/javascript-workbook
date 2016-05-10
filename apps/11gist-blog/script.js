'use strict';

$(document).ready(function() {
    // You code here
    $.ajax({
      url: "http://localhost:8080/api/gists.json",
      success: function(result){
        result.forEach(function(value, index){
          if(value['description'].slice(0, 6) === '#post '){
            $('#posts').append('<li><a href="#" data-url="'+value['url']+'">'+value['description'].slice(6)+'</a></li>');
          }
        });
      }
    });

    $('#posts').on('click', 'a', function(e){
      e.preventDefault();

      var url = $(this).data('url');

      console.log(this);
      $.get(url, function(post){
        $('#post').html(marked(post['files']['post.md']['content']));

        var commentsUrl = post['comments_url'];
        $('#comments').html('');
        $.get(commentsUrl, function(comments){
          console.log(comments);
          comments.forEach(function(value){
            $('#comments').append('<li>User '+value['user']['login']+' said: '+value['body']+' </li>');
          });
        });

      });
    });
});
