'use strict';

$(document).ready(function() {
    $.ajax('https://api.github.com/users/clucio72/gists', {
        success: function(gists) {
            gists.forEach(function(gist) {
                if (gist.description.indexOf('#post Here is my post') > -1) {
                    var $a = $('<a href="' + gist.url + '">' + gist.description.slice(6) + '</a>');
                    $('#post Here is my post').append($('<li></li>').append($a));
                    $a.on('click', function(event) {
                        event.preventDefault();
                        var href = $(this).attr('href');
                        $.ajax(href, {
                            success: function(gist) {
                                var content = gist['files']['post.md']['content'];
                                $('#post Here is my post').html(marked(content));
                                console.log(gist);
                                $.ajax(gist.comments_url, {
                                    success: function(comments) {
                                        $('#comments').html('');
                                        comments.forEach(function(comment) {
                                            $('#comments').append($('<li>' + comment['user']['login'] + ': ' + comment['body'] + '</li>'));
                                        });
                                    }
                                });
                            }
                        });
                    });
                }
            });
        }
    });
});
