'use strict';
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

$(document).ready(function() {
    $.ajax('https://api.github.com/users/RocketShipp/gists', {
        success: function(response) {
            response.forEach(function(gist) {
                var $myDescription = gist.description.slice(6, gist.description.length);
                if (gist.description.indexOf('#post') > -1) {
                    $('#posts ul').prepend(`<li><a href="#" data-url="${gist.url}">${$myDescription}</a></li>`);
                };
            });
            $('a').click(function(event) {
                event.preventDefault();
                var $myUrl = $(this).data('url');
                $.ajax($myUrl, {
                    success: function(postInfo) {
                        var $content = (postInfo.files["post.md"].content);
                        $('.postContent').html(marked($content)).hide().show('slow');
                        $.ajax(postInfo["comments_url"], {
                            success: function(commentInfo) {
                              var $date = new Date(commentInfo[0].created_at);
                              var $commentTimeAndDate = (`${$date.toLocaleDateString()} @ ${$date.toLocaleTimeString()}`);
                                $('#comments').html(`<h2>Comments</h2><div class="currentComment"><ul><li><span class="userName">${commentInfo[0].user.login}:</span><br/><br/> ${commentInfo[0].body}</li><br /><span class="commentDate">${$commentTimeAndDate}</span></ul></div>`).hide().slideDown();
                                $('.postContent a').attr('target', '_blank');
                            }
                        });
                    }
                })
            });
        }
    });
});
