'use strict';

$(document).ready(function() {
            $.ajax("http://127.0.0.1:8080/apps/11gist-blog/api/gists.json", {
                success: function(gists) {
                    console.log(gists);
                    gists.forEach(function(post) {
                            if (post.description.startsWith('#post')) {
                                var strPostDiscription = post.description.slice(5);
                                var $post = $(`<a href="#" data-url="${post.url}"
                data-comments="${post.comments_url}" >${strPostDiscription}</a>`);
                                $("ul#posts").append($post);
                            }
                            $('ul#posts a').click(function(event) {
                                var $that = $(this).data('url').id;
                                console.log($that);
                                event.preventDefault();
                                $('ul#posts a').removeClass('active');
                                $(this).addClass('active');
                                $.ajax($(this).data('url'), {
                                    success: function(post) {
                                        var postContent = post.files['post.md'].content;
                                        $('div#post').html(marked(postContent));
                                        $('div#post p').attr('style', 'text-align: left');
                                    }
                                });
                                $.ajax($(this).data('comments'), {
                                    success: function(comments) {
                                        $('ul#comments').empty();
                                        comments.forEach(function(comment) {
                                            var $comment = $('<blockquote><li><span class="comment-user">' + comment.user.login + '</span> says "<span class="comment-body">' + comment.body + '"</span></li></blockquote>');
                                            $('#comments').append($comment);
                                        })
                                    }
                                })
                                
                            });
                        });
                    });
            });
}
            //     // Your code here
            // So let's run through the API real quick. First, in your terminal, navigate to to your app directory:
            // After starting up a server in the app directory, navigate in your browser to http://127.0.0.1:8080/apps/11gist-blog/api/gists.json, here you will see the top level of the api, with all of the gists. In each gist, you will see a "url" key. Navigate to that URL. In that address you will see another JSON object. Look for a "files" key with an object containing a file. In that file you'll see the "content" of the file. Next look for a "comments_url". At that address, you'll see a collection of comments, with keys such as "user" and "body".
            // Spec 1.1
            // Using jQuery to make an AJAX call, insert a list of links into #posts using JavaScript forEach with the "description" of each gist as the text.
            // Spec 1.2
            // Within each loop, write an if condition to insert only gists that start with a '#post' in the "description". After fitering, remove the '#post ' from the title.Spec 1.3
            // Set the href attribute on each link to "#", and a "data-url" attribute equal to the "url" value.
            // Spec 2
            // After the links are are inserted, add a click listener, and prevent the default event from occuring. Then make an ajax call with the "data-url" value, grabbing it with $.data('url').
            // Spec 3
            // Insert the "content" of the file named post.md into #post.
            // Spec 3.1
            // Since our "content" is written in Markdown, we can use the Marked.js library to convert the content to html. Simply call marked() on your content. e.g. marked(content).
            // Spec 4
            // After inserting your content, make another ajax call using the "comments_url", and insert the ["user"]["login"] and "body" in a list in #comments.
            // Spec 5
            // Make it look nice! This is going to be YOUR blog! Take a look at some CSS frameworks, such as:
            // Materialize - Framework based on Google's Material Design Guidelines
            // Material Design Lite - Google's Official CSS Material Framework
            // Bootstrap - Probably the most popular CSS framework on the web. Made by Twitter
            // Foundation - Industry standard of CSS Frameworks
            // Skeleton - Beautifully simple CSS Framework
            // Spec 7
            // After development and styling on your blog dies down, you can plug it into your Github account. If done correctly, you should only have to change one url: http://127.0.0.1:8080/apps/11gist-blog/api/gists.json to https://api.github.com/users/<your github username>/gists. Now whenever you create a gist with "#post" in the title and a file named post.md, it will automatically be pulled into your blog!
