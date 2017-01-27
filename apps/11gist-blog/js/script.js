'use strict';

$(document).ready(function() {

    var $posts = $('#posts');
    var $landing = $('#landing');
    var $post = $('#post');
    var $commentsHeader = $('#commentsHeader');
    var $comments = $('#comments');

    var postListSettings = {
		success: function(res) {
            res.forEach(function(post) {
                if (post.description.startsWith('#post')) {
                    var hashTag = '#post ';
                    var shortDesc = post.description.substring(hashTag.length);
                    $posts.append('<li><a class=\"post-links\" href=\"#\" data-url=' + post.url + '>' + shortDesc + '</a></li>');
                }
            });
            var $links = $('.post-links');
            $links.click(function(e) {
                e.preventDefault();
                var dataUrl = $(this).data('url');

				$landing.hide();
				$commentsHeader.show();
                $.ajax(dataUrl, postContentSettings);
            });
        }
	};

	var postContentSettings = {
		success: function(res) {
			var content = res.files["post.md"].content;
			var commentsUrl = res.comments_url;

			$post.empty();
			$post.append(marked(content));

			$.ajax(commentsUrl, commentListSettings);
		}
	};

    var commentListSettings = {
		success: function(res) {
			$comments.empty();

	        res.forEach(function(comment) {
	        	var avatarUrl = comment.user.avatar_url;
	        	var createdDate = new Date(comment.created_at);
	        	var date = createdDate.toDateString().substring(4);
	        	var time = createdDate.toLocaleTimeString();

	        	$comments.append('<li><img class=\"avatar\" src=' + avatarUrl + '/ ><span class=\"user\">' + comment.user.login + '</span><span class=\"date\">' + date + '</span><br />' + '<span class=\"comment\">' + comment.body + '</span><span class=\"date\">' + time + '</li>');
	    	});
	    }
	};

    $.ajax('api/gists.json', postListSettings);
});
