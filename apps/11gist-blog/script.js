'use strict';

$(document).ready(function() {
    // You code here
    //long way to run through ajax
    var getPosts = {
        success: successCallback
    };

    function successCallback(posts) {
        posts.forEach(handlePosts)
    }
    //posts is the data in the json file
    function handlePosts(posts) {
        if (posts.description.startsWith('#post')) {
            var postStr = '<li><a href="#" data-url="' + posts.url + '">' + posts.description.substring(6) + '</a></li>';
            $('#posts').append(postStr);
        }
    }

    $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', getPosts);



    //quick way to run through ajax
    $('body').on('click', 'a', function(posts) {
        event.preventDefault();

        var url = $(this).data('url');

        $.ajax(url, {
            success: function(post) {

                var postContent = post.files["post.md"].content;

                $('#post').html(marked(postContent));

                var commentUrl = post['comments_url'];

                $.ajax(commentUrl, {
                    success: function(comments) {

                        $('#comments').empty();

                        comments.forEach(function(comment){
                          var login = comment['user']['login'];

                          var bodyDetail = comment['body'];

                          var htmlComment = '<li>' + login + '</li>' + '<li> <ol>' + bodyDetail + '</ol> </li>';

                          $('#comments').append(htmlComment);
                        });
                    }
                });

            }


        });



    });



});
