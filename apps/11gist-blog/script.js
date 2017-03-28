'use strict';

// callback to get the description of each gist
var getDescription = {
  success: function(gists) {
    // loop through each gist
    gists.forEach(function(gist) {
      // variable containing value of description property
      var gistDesc = gist.description;
      // variable containing the string "#post" in the gistDesc
      var postStr = gistDesc.substring(0, 5);
      // if the description begins with the string "#post"...
      if (postStr === "#post") {
        // ...remove the "#post" from the string...
        gistDesc = gistDesc.replace("#post", "");
        // (variable containing the description of each gist)
        var links = 
        ('<li>' + '<a href="#" data-url="' + gist.url + '">' + gistDesc + '</a>' + '</li>');
        // ...and add item in "links" variable to the ul with the id "posts"
        $('#posts').append(links);
      };
    });
  }
};

// callback to get the content of the gist that was clicked
var getContent = {
  success: function(gist) {
    // variable to store the value of the content property
    var content = gist.files['post.md']['content'];
    // variable to store the property "comments_url"
    var commentURL = gist["comments_url"];
    // variable to store paragraph containing content (converted to html using marked function)
    var str = 
    ('<div id="post">' +
    '<p>' + marked(content) + '</p>' +
    '</div>')
    // add the content to div with id "post"
    $('#post').replaceWith(str);
    var getComments = {
      success: function(comments) {
        comments.forEach(function(comment) {
          var userName = comment["user"]["login"];
          var userComment = comment["body"];
          var str = 
          ('<ul id="comments">' + 
          '<li>' + userName + '</li>' +
          '<li>' + userComment + '</li>' +
          '</ul>')
          $('#comments').html(str);
        });
      }
    }
    $.ajax(commentURL, getComments);
  }
};


$(document).ready(function() {
  // ajax call to generate a list of the descriptions in each gist
  $.ajax("http://127.0.0.1:8080/apps/11gist-blog/api/gists.json", getDescription)
  $('body').on('click', 'a', function(event) {
    // prevent default behavior
    event.preventDefault();
    // store the url in the data attribute of the link (see forEach loop in getDescription variable above)
    var gistURL = $(this).data('url');
    // ajax call on that specific url
    $.ajax(gistURL, getContent);
  });
});
