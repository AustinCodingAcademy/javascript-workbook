'use strict';

$(document).ready(function() {
    $.ajax('https://api.github.com/users/clucio72/gists', {
        success: function(gists) {
            gists.forEach(function(gist) {
                if (gist.description.indexOf('#post Here is my first post') > -1) {
                    var $a = $('<a href="' + gist.url + '">' + gist.description.slice(6) + '</a>');
                    $('#post Here is my first post').append($('<li></li>').append($a));
                    $a.on('click', function(event) {
                        event.preventDefault();
                        var href = $(this).attr('href');
                        console.log(href);
                        $.ajax(href, {
                            success: function(gist) {
                                console.log(gist);
                                $('#post Here is my first post').html(marked(gist['files']['post.md']['content']));
                            }
                        });
                        $.ajax(gist.comments_url, {
                            success: function(comments) {
                                console.log(gist.comments_url);
                            }
                        });
                    });
                }
            });
        }
    });
});
