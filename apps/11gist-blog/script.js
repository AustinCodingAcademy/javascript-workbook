'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
        success: function(posts) {
            posts.forEach(function(post) {
                if (post.description.startsWith('#post')) {
                    var strPostDescription = post.description.slice(5);
                    var $post = $('<a class="collection-item" href="#" data-url="' + post.url + '" data-comments="' + post.comments_url + '">' + strPostDescription + '</a>');
                    $('#posts').append($post);
                };
            })
            $('ul#posts').on('click', 'a', function(event) {
                $('ul#posts a').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
                $.ajax($(this).data('url'), {
                    success: function(post) {
                        var postContent = post.files['post.md'].content;
                        $('#post').empty().append(marked(postContent));
                    }
                });
                $.ajax($(this).data('comments'), {
                    success: function(comments) {
                        $('#comments').empty();
                        comments.forEach(function(comment) {
                            var $comment = $('<blockquote><li><span class="comment-user">' + comment.user.login + '</span> says "<span class="comment-body">' + comment.body + '"</span></li></blockquote>');
                            $('#comments').append($comment);
                        })
                    }
                })
            });
        }
    });
});
