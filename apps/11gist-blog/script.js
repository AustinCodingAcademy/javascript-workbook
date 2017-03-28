'use strict';

$(document).ready(function () {
  // You code here
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function (description) {
      console.log(description);
      // fliltering out anything that isn't a #post
      let filtered = description.filter(function (each) {
        return each.description.split(' ').includes("#post");
      })
      // getting rid of the posts text
      function filterPosts(text) {
        return text.split('#post').join(' ').trim();
      }
      //log the filtered posts
      console.log(filtered);
      filtered.forEach(function (each) {
        var string = `
           <div>
             <li>${filterPosts(each.description)}</li>
             <li><a href="#" data-id="http://127.0.0.1:8080/apps/11gist-blog/api/${each.id}.json">view</a></li>
           </div>`;
        console.log(string);
        //populate the page with content matching the filter
        $('#posts').append(string);
        //on click event to show the comments
        $('a[href="#"]').on('click', function (event) {
          //prevent the page from refreshing
          event.preventDefault();
          //populate the data
          $.ajax(`http://127.0.0.1:8080/apps/11gist-blog/api/${each.id}.json`, {
            success: function (post) {
              console.log(post);
              $('#post').empty();
              $('#post').append(
                $($.data(each.id)));
            }
          })
        })
      })
    }
  })

});


/*

href http://127.0.0.1:8080/apps/11gist-blog/api/${each.id}.json

data-id ${each.id}

'use strict';

$(document).ready(function() {
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function(posts) {
      posts.forEach(function(post) {
        if (post.description.startsWith('#post')) {
          var strPostDescription = post.description.slice(5);
          var $post = $('<li><a href="#" data-url="' + post.url + '" data-comments="' + post.comments_url + '">' + strPostDescription + '</a></li>');
          $('#posts').append($post);
        };
      })
      $('body').on('click', 'a', function(event) {
        event.preventDefault();
        $.ajax($(this).data('url'), {
          success: function(post) {
            var postContent = post.files['post.md'].content;
            $('#post').empty().append(marked(postContent))
          }
        });
        $.ajax($(this).data('comments'), {
          success: function(comments) {
            $('#comments').empty();
            comments.forEach(function(comment) {
              var $comment = $('<li>' + comment.user.login + ' ' + comment.body + '</li>');
              $('#comments').append($comment);
            })
          }
        })
      });
    }
  });
});

*/
