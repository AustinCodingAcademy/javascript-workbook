'use strict';


$(document).ready(function() {
  // You code here
   

   var getPost = {
      success: successCallback
  };


      function successCallback(posts) {
        posts.forEach(allPosts);
    }

   function allPosts(post){
        if (post.description.startsWith('#post')){
             var viewPost = '<li><a href="#" data-url=" ' + post.url + ' "> '
                            + post.description.substring(6) 
                            + '</a></li>';

                $('#posts').append(viewPost);
          }
        }
  
    $.ajax('http://api.github.com/users/<your github username>/gists', getPost);


//clicking on all the things

  $('#posts').on('click', 'a', function(posts) {
    event.preventDefault();

        var url = $(this).data('url');

      $.ajax($(url, {
      
      success: function(post) {
        $('#post').html(marked(post.files['post.md'].content));
       
        //comments:
        $.ajax(post['comments_url'], {
          success: function(comments) {

                  $('#comments').empty();

                  comments.forEach(function(comment){
                  var login = comment['user']['login'];
                  var bodyDetail = comment['body'];
                  var htmlComment = '<li>' + login + '</li>' + '<li> <ol>' + bodyDetail + '</ol> </li>';

                  $('#comments').append(htmlComment); 
  
                  });
        }});

      }

      }));

  });

});