'use strict';

var linkList = {
  success: function(gists) {
    gists.forEach(function(gist) { 
      if (gist.description.startsWith("#post")) { 
        var str = gist.description;
        var postLength = gist.description.length;
        var url = $(this).data('url');
        var post = '<li><a href="#" data-url="' + gist.url + '" class="post">' + str.substring(6, postLength) + '</a></li>';
        $('#posts').append(post);
      }
    });
  }
}

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
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', linkList);
  $('body').on('click', '.post', function(event) {
    $.ajax($(this).data('url'), gistContent)
  });
});