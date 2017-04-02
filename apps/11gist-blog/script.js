'use strict';

$(document).ready(function() {
  //1.1 Using jQuery to make an AJAX call, insert a list of links into #posts 
  //using JavaScript forEach with the "description" of each gist as the text.
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function (response) {
      response.forEach(function(post) {
        var $description = post.description;
        var $url = post.url;
        var $comments = post.comments_url;
        //1.2 Within each loop, write an if condition to insert only gists that start with a '#post' 
        //in the "description". After fitering, remove the '#post ' from the title.
        if ($description.includes('#post')) {
          //1.3 Set the href attribute on each link to "#", and a "data-url" attribute equal to the "url" value.
          var $str = ('<li> <a href="#" data-url ="' + $url 
                  + '" data-comments ="' + $comments + '">' 
                  + $description.slice(6) + '</a> </li>');
          $('#posts').append($str);  
        }
      });
      //2 After the links are inserted, add a click listener 
      $('body').on('click', 'a', function(event) {
        //and prevent the default event from occuring.
        event.preventDefault();
        //Then make an ajax call with the "data-url" value, grabbing it with $.data('url').
        $.ajax($(this).data('url'), {
          //3 Insert the "content" of the file named post.md into #post.
          success: function(post_content) {
            $('#post').empty();
            //3.1 Since our "content" is written in Markdown, we can use the Marked.js library to convert the content to html. 
            //Simply call marked() on your content. e.g. marked(content).
            var $content = marked(post_content.files['post.md'].content);
            $('#post').append($content);            
          }
        })
        //4 After inserting your content, make another ajax call using the "comments_url", 
        //and insert the ["user"]["login"] and "body" in a list in #comments.
        $.ajax($(this).data('comments'), {
          success: function(comments) {
            $('#comments').empty();
            $('#avatar_img').empty();
            comments.forEach(function(comment) {
              var $comment = $('<li>' + comment.user.login + ' says: <br>' + comment.body + '</li><p></p>');
              var $avatar_img = $('<img src="' + comment.user.avatar_url + '">'); 
              $('#avatar_img').append($avatar_img);
              $('#comments').append($comment);
            })
          }
        })
        
      });
    }
  })
});
