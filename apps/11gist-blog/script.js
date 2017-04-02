'use strict';

$(document).ready(function() {
  // You code here
  // ajax call to gist blog
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    //if successful
    success: function(gists) {
      // go through each gist
      gists.forEach(function(gists) {
        // look for #post in the blog post
          if (gists.description.startsWith("#post")) {  
            // remove the #post from the blog so its just the entry
            var getRidOfPost = gists.description.substring(6, gists.description.length);     
            // attaaching the li to a string so I can add it to the blog
            var str = ('<li> <a href ="#" class = ham data-url = "' + gists.url + ' ">' + getRidOfPost + '</a></li>' )
            //adding the new post to the bblog
            $('#posts').append(str);  
             
        }
       });
      } 
    });
          // adding a click event 
          $('body').on('click', '.ham', function(event) {
            // preventing the default so I can do what I want
            event.preventDefault();
            //getting the url for this instance
            var id = $(this).data('url'); 
            // ajax call to the url specified
            $.ajax(id, {
              //on success
              success: function(oneGist){
                // making a ptag to add the content to the blog
                var addContent = ('<p>' + marked(oneGist.files['post.md']['content']) + '<p>')
                // adding the ptag to the html
                $('#post').html(addContent);
                //another ajax call to the comments
                  $.ajax(oneGist.comments_url, {
                    // on success
                    success: function(userComments){
                      //clearing out the comments incase there were some already there
                      $('#comments').empty();
                      //looping through the comments
                      userComments.forEach(function(login) {
                        // adding a ptag for the user comments and storing in a var
                       var addCommentSection = ('<p>' + login.user['login'] + '<p>' +
                        '<p>' + login.body + '<p>');
                        // adding the comments to the page
                         $('#comments').append(addCommentSection);
            });         
          }
        });
       }
      });
    });

});

