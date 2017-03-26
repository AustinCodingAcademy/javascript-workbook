'use strict';

$(document).ready(function() {
  // start the ajax request
   $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function(response) {
      // loop through each object in the AJAX response
      response.forEach(function(link){
        // create a variable d to store the description text of the AJAX response object
        var d = link.description;
        // check if the description text starts with "#post"
        if (d.indexOf("#post") === 0) {
          // if so, remove the #post" from the title
          var d2 = d.slice(6);
          // store the comment_url into a variable for later usage 
          var curl = link["comments_url"];
          // set the href and data-url attributes, and then put all those together into a link object 
          var dtext = "<a href="+ '#' + " data-url=" + link.url + " data-curl=" + curl + ">" + d2 + "</a><br/>";
          // append the object to DOM 
          $('#posts').append(dtext);
        }
      });
    }
  });
  // set an event listener on each link of DOM 
 $('body').on('click','a', function(event){
   // prevent the event from defaulting
   event.preventDefault();
   // make an AJAX call with the "data-url" attribute
   $.ajax($(this).data("url"), {
     success: function(dataurl) {
       // empty the #post DOM 
       $('#post').empty();
       // store the content from the post.md file to a variable for conversion later 
       var content = dataurl.files['post.md'].content;
       // convert the content to HTML format
       content = marked(content);
       // insert the content to DOM
       $('#post').append(content);
     }
   });
  // make another AJAX call to insert the comments
  $.ajax($(this).data('curl'), {
    success: function(c){
      // clean the comments area
      $('#comments').empty();
      c.forEach(function(comment){
        // fetch the user and body data and store them in two separate variables
        var commentUser = comment.user.login;
        var commentBody = comment.body;
        // put everything together into a HTML string
        var commentHTML = "<h3><b>" + commentUser + "</b></h3><p><i>" + commentBody + "</i></p>";
        // append the comment HTML to DOM 
        $('#comments').append(commentHTML);
      });     
    }
  });
 });
});
