'use strict';

$(document).ready(function() {

    var thisCommentBody = null;

    // old api URL
    // $.ajax('http://localhost:8080/apps/11gist-blog/api/gists.json', {

    $.ajax('https://api.github.com/users/nina2cool/gists', {
        success: function(response) {


            var posts = response;
            // begin the data-slide number with 1
            var dataSlideNumber = 1;

            posts.forEach(function(posts) {

                // Only display posts that begin with #post
                var isPost = posts.description.startsWith("#post");

                // if it begins with #post, then display it and remove #post from the title
                if (isPost === true) {

                    var revisedDescription = posts.description.replace("#post ", "");

                    // For each post, create a carousel indicator dot for it
                    var strIndicator = '<li data-target="#myCarousel" data-slide-to="' + dataSlideNumber + '"></li>';

                    // For each post, create a carousel item for it
                    var strCarousel = '<div class="item"><div class="carousel-text text-center"><h2>' + revisedDescription + '</h3><a href="#" data-url="' + posts.url + '" class="carousel-link">Read Post</a></div></div>';

                    // Add the dots
                    $('ol').append(strIndicator);

                    // Add the carousel item
                    $('div .carousel-inner').append(strCarousel);
                }
                // advance the data-slide number
                dataSlideNumber++;
            });

            // When you click the carousel control buttons, then remove the comments and the posts, and the section formatting
            $('.carousel-control').click(function() {
                $('#comments').children().html('');
                $('#post').children().html('');
                $('section').removeClass('section-format');
                $("a.carousel-link").show();
            });

            // add click listener when someone clicks on the carousel link (to display the post)
            $('.carousel-link').click(function(event) {

                // add the section formatting
                $("section").addClass("section-format");
                // Hide the words "Read Post"
                $("a.carousel-link").hide();

                // Prevent the normal default behavior
                event.preventDefault();

                var thisLink = $(this);
                var thisLinkURL = thisLink.data('url');

                // use ajax to get the link url for the post and it's information
                $.ajax(thisLinkURL, {
                    success: function(response) {

                        var thisPost = response;

                        // if there is a post to display, then show it.  if not do nothing.

                        if (thisPost != null) {

                            // Show the post using the markdown language
                            var thisPostContents = marked(thisPost.files['post.md'].content);

                            $('#post').html(thisPostContents);

                            var thisPostCommentsURL = thisPost.comments_url;

                            // Get the comments for this post and their info, then display it below the post
                            $.ajax(thisPostCommentsURL, {
                                success: function(response) {
                                    var totalComments = response;

                                    var numberOfComments = totalComments.length;
                                    for (var i = 0; i <= numberOfComments; i++) {
                                        var thisUser = totalComments[i]['user']['login'];
                                        var thisComment = '<div>"' + totalComments[i]['body'] + '" - ' + thisUser + '</div>';
                                        $('#comments').append(thisComment);

                                    }
                                }
                            });
                        }
                    }
                });
            });
        }
    });
});
