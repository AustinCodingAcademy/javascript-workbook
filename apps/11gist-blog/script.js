'use strict';

// a callback function waiting for all scripts to load
$(document).ready(function() {
  // This calls the api on githubs server to get the JSON file
  $.ajax('https://api.github.com/users/hipperger/gists', {
    //on the success or return of that file we get send the gists of that file through this function
    success: function(gists) {
      //for each of the gists we want to pull out each one individually
      gists.forEach(function(gist){
        //and deduce if the gist starts with #post
        if(gist.description.substring(0,5) === "#post"){
          //then we calculate the length of the post
          var length = gist.description.length;
          //use the length to cut the first 6 characters "#post" off and create the actual title we want for the gist
          var newGist = gist.description.substring(5, length);
          // displays the title of the post to the view port and creates a few divs we'd like to use later.
          var postDescription = ('<div class="panel-heading gistSnips">' + '<a href="#" data-url = "' + gist.url + ' "data-comments = "' + gist.comments_url + ' ">' + newGist + '</a>' + '<div class="panel-body post">' + '</div>'+ '<div class="panel-footer comments">' + '</div>' +'</div>');
          // appends the title to a new div
          $('#posts').append(postDescription);
        }; //<--- last curly in if statement 
    }); //<--- last curly in gist.forEach()
    }, //<--- last curly in success:
  }); //<--- last curly in .ajax()
});

// creates a event listener on the body then listens for the 1st parameter on the 2nd parameter and does the third parameter on them.
$("body").on('click', 'a', function(event){
  //prevent refreshing
  event.preventDefault();
  //creates a container to hold the url we need to get to 
  var url = $(this).data("url");
  //calls on the url to get the JSON
  $.ajax(url, {
    // on the return of that JSON we do a function
    success: function(gist){
      // create a container to hold the contents of the gist
      var theContent = marked(gist.files['post.md'].content);
      //then on the div .post we put the contents of the gist in
      $(".post").empty().append('<p>' + theContent + '</p>');
    }, //<--- last curly in success:
  }); //<--- last curly in ajax call
  
  // creates a container to hold the url of comments
  var commentURL = $(this).data("comments");
  // calls on the url of comments
   $.ajax(commentURL, {
    // on the return of that new JSON we do a function
    success: function(comments){ //<--- added the s in. 
      // we clear out the div .comments
      $('.comments').empty();
      //and forEach comment we post them.
      comments.forEach(function(comment){
        // creates a container to hold the body or contents of the comment.
        var commentBody = comments[0]["body"];
        // creates a container to hold the value of the user's login
        var userLogin = comments[0]["user"]["login"];
        // creates a string of the comment and their user login to post later
        var str = ('<p>' + commentBody + '</p>' + '<p>' + userLogin + '</p>');
        // post the string into the div .comments
        $(".comments").append(marked(str));
      }); //<--- last curly in forEach()
    }, //<--- last curly in success:
  }); //<--- last curly in ajax call
 }); //<--- last curly in body.onclick

// use JSON viewer not formatter

