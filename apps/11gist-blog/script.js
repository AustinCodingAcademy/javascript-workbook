'use strict';

$(document).ready(function() {
    $.ajax('http://localhost:8080/apps/11gist-blog/api/gists.json', {
        success: function(gists) {
                gists.forEach(function(gist) {
                    if(gist.description.indexOf('#post') > -1) {
                        var $a = $('<a href="' + gist.url + '">' + gist.description.slice(6) + '</a>');
    $a.attr('data-comments', gist.comments_url)
                        $('#posts').append($('<li></li>').append($a));
                        $a.on('click', function(event) {
                            event.preventDefault();
                            var gistURL = $(this).attr('href');
    console.log(gistURL)
                            $.ajax(gistURL, {
    success: function(gist) {
                                $('#post').html(marked(gist['files']['post.md']['content']));
                                }// end of second success function
                            }) // end of second ajax call
    $.ajax($(this).data('comments'), {
    success: function(comments)  {
    $('#comments').empty()
    comments.forEach(function(comment) {
    var userComments = comment.body;
    var userName = comment['user']['login'];
    $('#comments').append('<li>' + userName + ' : ' + userComments  + '</li>')
    }) // end of forEach loop
    } // end of third success function
    }) // end of third ajax function
                        }); // end of click event
                    } // end of if statement
            }); // end of for eachfunction
          } // end of first success function
       }); // end of first ajax call
    }); // end of document ready
