'use strict';

$(document).ready(function() {
    // Your code here

    // make request to GET array of gist json objects
    $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {

        // if request is successful run this generate #posts list function with returned posts array as param
        success: function(posts) {

            // for every post object in the returned array run this generate #posts list-links function
            posts.forEach(function(post) {

                // check if a post object in the returned array's description prop starts with '#post' then continue if true
                if (post.description.startsWith('#post')) {

                    // get the #post description string, remove '#post ' from it, and store it in var
                    var strPostDescription = post.description.slice(5);

                    // make an html-encapsulated string that will be inserted into index.html
                    var $post = $('<a class="collection-item" href="#" data-url="' + post.url + '" data-comments="' + post.comments_url + '">' + strPostDescription + '</a>');

                    // attach string creating list-link element to end of #posts list; lastest post will be at top of list
                    $('ul#posts').append($post);
                };
            })
            // click listener on #posts list-links
            $('ul#posts a').click(function(event) {

                // remove active class from all #posts list-links
                $('ul#posts a').removeClass('active');

                // add active class to clicked #posts list-link
                $(this).addClass('active');

                // prevent page from reloading
                event.preventDefault();

                // make ajax request for the post object with this link's data-url key
                $.ajax($(this).data('url'), {

                    // if request is successful run this new post function with returned post as param
                    success: function(post) {

                        // pull the content property from the selected post's 'post.md' file and store it in a var
                        var postContent = post.files['post.md'].content;

                        // clear the #post div then style the postContent with marked() and insert postContent into #post div
                        $('div#post').empty().append(marked(postContent));
                    }
                });
                // make ajax request for the comments object this this link's data-comments_url key
                $.ajax($(this).data('comments'), {

                    // if request is successful run this new comments function with returned comments array as param
                    success: function(comments) {

                        // reset the comments list before we loop through and generate each comment
                        $('ul#comments').empty();

                        // loop through comment object in array and enter each as the param for this generate comment function
                        comments.forEach(function(comment) {

                            // make an html-encapsulated string that displays and styles new comment
                            var $comment = $('<blockquote><li><span class="comment-user">' + comment.user.login + '</span> says "<span class="comment-body">' + comment.body + '"</span></li></blockquote>');

                            // attach new comment to the #comments list; latest comment will be at bottom of list
                            $('#comments').append($comment);
                        })
                    }
                })
            });
        }
    });
});
