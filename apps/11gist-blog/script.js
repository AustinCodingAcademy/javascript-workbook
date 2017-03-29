'use strict';

$(document).ready(function() {
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function(gists) {
      gists.forEach(function(gist){
        if(gist.description.substring(0,5) === "#post"){
          //var removedSubstring = gist.description.splice(0,5);
          var length = gist.description.length;
          var newGist = gist.description.substring(5, length);
          var postDescription = ('<li>' + '<a href="#" data-url ="' + gist.url + ' "data-comments="' + gist.comments_url + ' ">' + newGist + '</a>' + '</li>');
          $('#posts').append(postDescription);
        }; //<--- last curly in if statement 
    }); //<--- last curly in gist.forEach()
    }, //<--- last curly in success:
  }); //<--- last curly in .ajax()
});

$("body").on('click', 'a', function(event){
  event.preventDefault();
  var url = $(this).data("url");
  $.ajax(url, {
    success: function(gist){
      var theContent = gist.files['post.md'].content;
      $("#post").empty().append(marked(theContent));
    }, //<--- last curly in success:
  }); //<--- last curly in ajax call
  
  var commentURL = $(this).data("comments");
   $.ajax(commentURL, {
    success: function(comment){
      var commentBody = comment[0]["body"];
      var userLogin = comment[0]["user"]["login"];
      var str = ('<li>' + commentBody + '</li>' + '<li>' + userLogin + '</li>');
      $("#comments").empty().append(str);
    }, //<--- last curly in success:
  }); //<--- last curly in ajax call
 }); //<--- last curly in body.onclick

// use JSON viewer not formatter
