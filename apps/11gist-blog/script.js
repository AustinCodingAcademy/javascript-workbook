'use strict';

var gistDescription = {
  success: function(gists) {
    gists.forEach(function(gist) {
      var gistDesc = gist.description;
      // .substring property to find "#post" in the gistDesc
      var postStr = gistDesc.substring(0, 5);
      if (postStr === "#post") {
        // .replace property to remove "#post"
        gistDesc = gistDesc.replace("#post", "");
        var links = 
        ('<li>' + '<a href="#" data-url="' + gist.url + '">' + gistDesc + '</a>' + '</li>');
        $('#posts').append(links);
      };
    });
  }
};

// callback to get the content of the gist that was clicked
var gistContent = {
  success: function(gist) {
    var content = gist.files['post.md']['content'];
    var commentURL = gist["comments_url"];
    var str = 
    ('<div id="post">' +
    '<p>' + marked(content) + '</p>' + '</div>')
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
  // first ajax call
  $.ajax("http://127.0.0.1:8080/apps/11gist-blog/api/gists.json", gistDescription)
  $('body').on('click', 'a', function(event) {
    event.preventDefault();
    // variable to store the url in the data attribute
    var gistURL = $(this).data('url');
    $.ajax(gistURL, gistContent);
  });
});
