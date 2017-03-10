'use strict';

$(document).ready(function() {

  //var PATH_TO_GISTS_JSON = 'api/gists.json';
  var PATH_TO_GISTS_JSON = 'https://api.github.com/users/arinaldi/gists';

  //put elements into variables
  var $posts = $('#posts');
  var $post = $('#post');
  var $commentsHeader = $('#comments-header');
  var $comments = $('#comments');

  //get HTML for Mustache templates
  var postListTemplate = $('#post-list-template').html();
  var commentsTotalTemplate = $('#comments-total-template').html();
  var commentTemplate = $('#comment-template').html();

  //define functions to dynamically populate posts and comments
  function populatePostList(post) {
    $posts.append(Mustache.render(postListTemplate, post));
  }
  function populateCommentsData(data) {
    $commentsHeader.append(Mustache.render(commentsTotalTemplate, data));
  }
  function populateComments(comment) {
    $comments.append(Mustache.render(commentTemplate, comment));
  }

  var postListSettings = {
    success: (res) => {
      //iterate through each post in the response
      res.forEach((post) => {
        //check for the '#post' filter
        if (post.description.startsWith('#post')) {
          var hashTag = '#post ';
          //remove the hashTag from the post title
          var postTitle = post.description.substring(hashTag.length);
          //create an object with post data
          var postListData = {
            url: post.url,
            title: postTitle
          };
          //populate the unordered list in the sidebar with post data
          populatePostList(postListData);
        }
      });
      //after the post links are created, attach a click event listener to them
      var $links = $('.post-links');
      $links.click(function(e) {
        e.preventDefault();
        //when a post link is clicked, make an AJAX call to populate the post content
        var dataUrl = $(this).data('url');
        $.ajax(dataUrl, postContentSettings);
      });
      //on page load, show the latest post
      $links[0].click();
    },
    error: () => {
      console.error('Error loading post list');
    }
  };

  var postContentSettings = {
    success: (res) => {
      //get the post content in Markdown format
      var content = res.files["post.md"].content;
      //get the URL to the post comments
      var commentsUrl = res.comments_url;
      //create an object with comments header data
      var commentsData = {
        total: res.comments,
        url: res.html_url
      }
      //hide the last post
      $post.empty();
      //show this post
      $post.append(marked(content));

      //hide the last comments header
      $commentsHeader.empty();
      //show this comments header
      populateCommentsData(commentsData);
      //when a post is loaded, make an AJAX call to populate its comments
      $.ajax(commentsUrl, commentListSettings);
    },
    error: () => {
      console.error('Error loading post content');
    }
  };

  var commentListSettings = {
    success: (res) => {
      //hide the last comments
      $comments.empty();
      //iterate through each comment in the response
      res.forEach((comment) => {
        //get and format the created date
        var createdDate = new Date(comment.created_at);
        var date = createdDate.toDateString().substring(4);
        var time = createdDate.toLocaleTimeString();
        //create an object with comments data
        var commentData = {
          avatar: comment.user.avatar_url,
          user: comment.user.login,
          date: date,
          body: marked(comment.body),
          time: time
        };
        //show the comments of this post
        populateComments(commentData);
      });
    },
    error: () => {
      console.error('Error loading comments');
    }
  };

  //initial AJAX call that initiates the chain
  $.ajax(PATH_TO_GISTS_JSON, postListSettings);
});