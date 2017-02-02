'use strict';

$(document).ready(function() {

    //var PATH_TO_GISTS_JSON = 'api/gists.json';
    var PATH_TO_GISTS_JSON = 'https://api.github.com/users/arinaldi/gists';

    var $posts = $('#posts');
    var $landing = $('#landing');
    var $post = $('#post');
    var $commentsHeader = $('#comments-header');
    var $comments = $('#comments');

    var postListTemplate = $('#post-list-template').html();
    var commentsTotalTemplate = $('#comments-total-template').html();
    var commentTemplate = $('#comment-template').html();

    function populatePostList(post) {
        $posts.append(Mustache.render(postListTemplate, post));
    }

    function populateCommentsTotal(total) {
    	$commentsHeader.append(Mustache.render(commentsTotalTemplate, total));
    }

    function populateComments(comment) {
    	$comments.append(Mustache.render(commentTemplate, comment));
    }

    var postListSettings = {
		success: function(res) {
            res.forEach(function(post) {
                if (post.description.startsWith('#post')) {
                    var hashTag = '#post ';
                    var postTitle = post.description.substring(hashTag.length);

                    var postListData = {
                        url: post.url,
                        title: postTitle
                    };

                    populatePostList(postListData);
                }
            });
            var $links = $('.post-links');
            $links.click(function(e) {
                e.preventDefault();
                var dataUrl = $(this).data('url');

				$landing.hide();
                $.ajax(dataUrl, postContentSettings);
            });
        }
	};

	var postContentSettings = {
		success: function(res) {
			var content = res.files["post.md"].content;
			var commentsUrl = res.comments_url;
			var commentsTotalData = {
				total: res.comments
			}

			$post.empty();
			$post.append(marked(content));

			$commentsHeader.empty();
			populateCommentsTotal(commentsTotalData);

			$.ajax(commentsUrl, commentListSettings);
		}
	};

    var commentListSettings = {
		success: function(res) {
			$comments.empty();

	        res.forEach(function(comment) {
	        	var createdDate = new Date(comment.created_at);
	        	var date = createdDate.toDateString().substring(4);
	        	var time = createdDate.toLocaleTimeString();

                var commentData = {
                    avatar: comment.user.avatar_url,
                    user: comment.user.login,
                    date: date,
                    body: comment.body,
                    time: time
                };

	        	populateComments(commentData);
	    	});
	    }
	};

    $.ajax(PATH_TO_GISTS_JSON, postListSettings);
});
