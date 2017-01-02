'use strict';

$(document).ready(function() {


    $.ajax('https://api.github.com/users/dbenav27/gists', {
      

        success: function(post) {
            post.forEach(function(post) {
                if (post.description.includes('#post')) {
                    var removingPost = post.description.slice(6);
                    var contentOfPost = '<ul><li><a href="#" data-url="' +
                        post.url + '">' + removingPost +
                        '</a></li></ul>';
                    $('#posts').append(contentOfPost);
                }
            })
            $('#posts a').click(function(postClick) {
                postClick.preventDefault();
                $.ajax($(this).data('url'), {

                    success: function(postContent) {

                        var content = postContent.files['post.md'].content;
                        $('#post').html(marked(content));
                        $.ajax(postContent.comments_url, {

                            success: function(commentResponse) {
                                commentResponse.forEach(function(comment) {
                                    var postComment = '<ul><li>' + comment.body +
                                        '</li><li>' + comment.user.login +
                                        '</li></ul>';
                                    $('#comments').empty().append(postComment);
                                })
                            }
                        })
                    }
                })
            })
        }
    })
});
