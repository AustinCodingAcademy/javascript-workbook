'use strict';

$(document).ready(function() {

    $.ajax('api/gists.json', {
        success: function(blogPosts) {
            blogPosts.forEach(function(post) {
                var url = post.url;
                var description = post.description;

                var str = "<div class='post'> <li class='item'><a href='#' id='gist' data-url='" + url + "'>" + description + "</a></li>" + "<div id='post'></div>"
                    //add gist.url and gist.description?

                if (str.indexOf("#post") !== -1) {
                    //post = post.replace("#post", " ");
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
        //error?
        $.ajax($self, {
            success: function(url) {
                var $post = url.files["post.md"].content;
                $marked = marked($post);

                $postId.append($marked);
                grabComments(url);
            },
            error() {
                alert("There was an error ¯\_(ツ)_/¯");
            }
        });
    });
 });

//needs work below
function grabComments(gist) {
    $.ajax(gist.comments_url, {
        success(gist) {
            $.each(gist, function(index, value) {
                var $user = value.owner.html_url
                var $login = value.user.login;
                var $body = value.body;
                var $avatar = value.user.avatar_url
                var $comments = $("#comments");

                var $details = "<ul id='comments'>" + "<img src=" + $avatar + " id='image'/>" + "<p id='user'> " + "<a href='" + '#' + "'>" + $login + "</a>" + " </p>" + "<p id='text'> " + $body + " </p></ul>";
                $("#post").append($details);
            });
        },
        error() {
            alert("There was an error ¯\_(ツ)_/¯");
        }
   });
}


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

//});
