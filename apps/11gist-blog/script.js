'use strict';

$(document).ready(function() {
    // Your code here

    var thisCommentBody = null;


    $.ajax('http://localhost:8080/apps/11gist-blog/api/gists.json', {
        success: function(response) {

            var posts = response;

            posts.forEach(function(posts) {

                var isPost = posts.description.startsWith("#post");

                // if the post description contains "#post", display it but remove the #post
                if (isPost === true) {

                    var revisedDescription = posts.description.replace("#post ", "");

                    var str = '<a href=""';
                    str = str + '#" data-url="' + posts.url + '"><li><h2>' + revisedDescription + "</h2></li></a>";
                    //console.log(str);
                    $('#posts').append(str);

                }

            });


            // add click listener
            $('a').click(function() {

                event.preventDefault();
                var thisLink = $(this);
                var thisLinkURL = thisLink.data('url');
                $('#comments').html('');
                //console.log(thisLinkURL);

                $.ajax(thisLinkURL, {
                    success: function(response) {

                        var thisPost = response;

                        var thisPostContents = marked(thisPost.files['post.md'].content);
                        //thisPostContents = marked(thisPostContents);
                        $('#post').html(thisPostContents);

                        var thisPostCommentsURL = thisPost.comments_url;

                        $.ajax(thisPostCommentsURL, {
                            success: function(response) {
                                var totalComments = response;
                                //console.log(thisPostCommentsURL);
                                //console.log(totalComments);
                                var numberOfComments = totalComments.length;
                                for (var i = 0; i <= numberOfComments; i++) {
                                    var thisUser = totalComments[i]['user']['login'];
                                    var thisComment = "<div>" + totalComments[i]['body'] + " - " + thisUser + "</div><hr>";
                                    $('#comments').append(thisComment);
                                    //console.log(totalComments[i]['body']);
                                }



                            }
                        });
                    }
                });

            });



        }
    });


});
