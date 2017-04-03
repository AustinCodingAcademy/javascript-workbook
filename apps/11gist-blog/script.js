'use strict';

//getting description
var settings = {
  success:function(gists) {
    //loop starts here
    gists.forEach(function(gist) {
      //assigning values
      var desc = gist.description;
      //find the first five letters in the post
      var getPost = desc.substring(0, 6);

      //if post starts with "#post " remove it from the string
      //and add gist description to the id #posts.
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
    //assigns the value of the content property to a variable.
    var content = gist.files['post.md'].content;
    //assigns the comments-url property to a variable.
    var comments = gist['comments_url'];
    //adds content to #post
    //converts it to html using marked().
    var str = (
      '<p>' + marked(content) + '</p>'
    );
    //add the string to the id #post.
    $('#post').replaceWith(str);

    var s = {
      success:function(comments) {
        comments.forEach(function(comment) {
          //finds users name and assigns it to a variable.
          var name = comment.user.login;
          //assign users comment to a variable.
          var userComment = comment.body;
          //makes the users name and there comment a string.
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