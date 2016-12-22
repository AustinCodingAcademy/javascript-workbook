'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
        success: function(gist) {
            gist.forEach(function(gists) {
                var str = gists.description;
                var url = gists.url;
                var link = "<li>" +
                    "<a href='#' data-url='" + url + "'>" + str.slice(5) + "</a>" +
                    "</li>";

                if (str.substring(0, 5) === '#post') {
                    $("#posts").append(link);

                }
            });
        }
    });

    $("body").on("click", "a", function(event) {
        event.preventDefault();

        var url = $(this).data('url')

        $.ajax(url, {
            success: function(posts) {
                var post = "<div class='post'>" +
                    "<h3>" + posts.description.slice(5) + "</h3>" +
                    posts.files['post.md'].content +
                    "</div>";
                marked($("#post").html(post));
            }
        });

        url = url.substring(0, url.length - 5);
        var commentUrl = url + "/comments.json";

        $.ajax(commentUrl, {
            success: function(comments) {
                comments.forEach(function(comment) {
                    var commentStr = "<div class='comments'>" +
                        "<h3>Comments</h3>" +
                        "<li>" +
                        "<div class='row'>" +
                        "<div class='col-sm-1'>" +
                        "<div class='com-img'>" +
                        '<img src="' + comment.user.avatar_url + '"/>' +
                        "</div>" +
                        "</div>" +
                        "<div class='col-sm-11'>" +
                        comment.user.login + " - " + comment.body +
                        "</div>" +
                        "</li>" +
                        "</div>";

                    $("#comments").html(commentStr);
                });
            }
        });
    });


});
