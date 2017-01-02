'use strict';

$(document).ready(function() {

    $.ajax('https://api.github.com/users/jerryjoebenson/gists', {
        success: function(blogPosts) {
            blogPosts.forEach(function(post) {
                var url = post.url;
                var description = post.description;
                var comments_url = post.comments_url;
                var str = "<div class='post'> <li class='item'><a href='#' id='gist' data-url='" + url + "'>" + description + "</a></li>" + "<div id='post'></div>"
                    //add gist.url and gist.description?

                if (str.indexOf("#post") !== -1) {
                    //post = post.replace("#post", " ");
                    str = '<li><a href="#" data-url="' + url + '" data-comments_url="' + comments_url + '">' + description.replace('#post', ' ') + '</a></li>';
                    $("#posts").append(str);
                }
            });
        },

        error() {
            alert("There was an error ¯\_(ツ)_/¯");
        }
    });


    $("#posts").on("click", "a", function(event) {
        event.preventDefault();
        var $marked;
        var $postId = $("#post");
        var $self = $(this).data("url");
        var comment = $(this).data('comments_url');
        //error?
        $.ajax($self, {
            success: function(url) {
                var $post = url.files["post.md"].content;
                $('#post').empty();
                var postContent = marked(url.files['post.md'].content);
                $('#post').append(postContent);

                //$marked = marked($post);
                //$postId.append($marked);
                //grabComments(url);
                $.ajax(comment, {
                    success: function(comments) {
                        $('#comments').empty();
                        comments.forEach(function(comment) {
                            var $comment = $('<blockquote><li><span class="comment-user">' + comment.user.login + '</span> Enter your comment here "<span class="comment-body">' + comment.body + '"</span></li></blockquote>');
                            $('#comments').append($comment);
                        })
                    }

                });
            }
        });
    });
});


//notes after


//$.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
//    success: function(response) {
//        response.forEach(function(gists) {
//            var IDS = gists.id;
//            var str = gists.description;
//$('#posts').append(str);
//            console.log(IDS + '  ' + str);
//$('#names').append('<tr>' + '<td>' + user.id + '</td>' + '<td>' + user.first_name + '</td>' + '<td>' + user.last_name + '</td>' + '<td>' + '<a href="#" data-id="' + user.id + '">view</a></td>' + '</tr>');
//        })
//    }
//});

//$.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json')




//needs work below... is broken... I give up
//                function grabComments(gist) {
//                    $.ajax(gist.comments_url, {
//                        success(gist) {
//                            $.each(gist, function(index, value) {
//                                var $user = value.owner.html_url
//                                var $login = value.user.login;
//                                var $body = value.body;
//                                var $avatar = value.user.avatar_url
//                                var $comments = $("#comments");
//
//                                var $details = "<ul id='comments'>" + "<img src=" + $avatar + " id='image'/>" + "<p id='user'> " + "<a href='" + '#' + "'>" + $login + "</a>" + " </p>" + "<p id='text'> " + $body + " </p></ul>";
//                                $("#post").append($details);
//                            });
//                        },
//                        error() {
//                            alert("There was an error ¯\_(ツ)_/¯");
//                        }
//                   });
//                }
//
//
//
