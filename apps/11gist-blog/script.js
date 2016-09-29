'use strict';

$(document).ready(function() {

    var jsonUrl = 'http://localhost:8080/apps/11gist-blog/api/gists.json';

    $.ajax(jsonUrl, {
      success: function(response) {
        response.forEach(function(post){
          // Using jQuery to make an AJAX call, insert a list of links into
          // #posts using JavaScript forEach or jQuery .each, with the
          // "description" of each gist as the text.

          // Within each loop, write an if condition to insert only gists
          // that start with a '#post' in the "description". After fitering,
          // remove the '#post ' from the title.

          // Set the href attribute on each link to "#", and a "data-url"
          // attribute equal to the "url" value
          if (post.description.indexOf('#post') === 0){

            var postStr = post.description.replace('#post', '');

            var str =
              '<li>' +
                '<a href="#" data-url="' + post.url + '" >' + postStr + '</a>'
               + '</li>';

            var $postLi = $(str);

            $('#posts').append($postLi);

            // After the links are are inserted, add a click listener, and prevent
            // the default event from occuring. Then make an ajax call with the
            // "data-url" value, grabbing it with $.data('url').
            $('a', $postLi).on('click', function(){
              event.preventDefault();
              console.log('You clicked a link.');
              $.ajax()
            });//!$('a').on

          }
        });//!response.forEach
      }
    });//!$.ajax(jsonUrl)





});//!document.ready()
