'use strict';

  //getting description
  var settings = {
    success:function(gists) {
      // looping through gists
      gists.forEach(function(gist) {
        //assigning value of description property to a variable
        var desc = gist.description;
        //finding the first 5 letters in the post
        var getPost = desc.substring(0, 6);

        //if the post starts with "#post ", remove "#post " from the string
        //and add the gist description to the id #posts.
        if(getPost = '#post ') {
          desc = desc.replace("#post ", "");
          var list = (
            '<li><a href="#" class="link" data-url="' + gist.url + '">' + desc + '</a></li>'
          );
          $('#posts').append(list);
        }
      })
    }
  }
  //getting content
  var set = {
    success:function(gist) {
      //assigning the value of the content property to a variable.
      var content = gist.files['post.md'].content;
      //assigning the comments-url property to a variable.
      var comments = gist['comments_url'];
      //adds content to the id #post and converts it to html using marked().
      var str = (
        '<p>' + marked(content) + '</p>'
      );
      //add the string to the id #post.
      $('#post').replaceWith(str);



      /************************************************************************************ */
      //getting comments
      var s = {
        success:function(comments) {
          comments.forEach(function(comment) {
            //finding the user's name and assigning it to a variable.
            var name = comment.user.login;
            //assigning the user's comment to a variable.
            var userComment = comment.body;
            //putting the user's name and their comment into a string.
            var str = (
              '<li id="user">' + name + '</li>' +
              '<li id="comment">' + userComment + '</li>'
            )
            //adding user's comments to the id #comments.
            $('#comments').append(str);
          })
        }
      }
      $.ajax(comments, s);
    }
  }


$(document).ready(function() {
  $('body').on('click', 'a', function(event) {
    //prevent refreshing of page
    event.preventDefault();
    var url = $(this).data('url');
    $.ajax(url, set);
  })
  
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', settings);
});
