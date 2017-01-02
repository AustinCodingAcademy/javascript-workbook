'use strict';
$(document).ready(function() {
    // You code here
    //url is first argumeny, seccond is a settings argument
    $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
        success: function(gists) {
            gists.forEach(function(gists) {
                var str = gists.description;
                if (str.substring(0, 5) === '#post') {
                    var url = gists.url;
                    $('#posts').append(
                        "<li>" +
                        '<a href="#" data-url="' + url + '">' + str.slice(5) + '</a>' +
                        "</li>");
                        //str.slice(5)
                }
            });
        }
    });
    //ajax-docready closing tag
    $('body').on('click', 'a', function(event) {
        event.preventDefault();
        var url = $(this).data('url');
        $.ajax(url, {
            success: function(post) {
                $('#post').append("<div class='col-sm-12 post'>" +
                    "<h4>" + "Post" + "</h4>" +
                    marked(post.files['post.md'].content) + "</div>")
            }
        });
        url = url.substring(0, url.length - 5);
        var newurl = url + "/comments.json";
        $.ajax(newurl, {
            success: function(comments) {
                comments.forEach(function(comments) {
                    $('#comments').append(
                        "<h4>" + "Comments" + "</h4>" +
                        "<li>" + "user name - " +
                        comments.user.login +
                        "</li>" +
                        "<li>" + "comment - " + comments.body +
                        "</li>");
                })
            }
        });
    });
});
//docready closing tag
