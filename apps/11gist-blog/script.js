'use strict';

$(document).ready(function() {
  $.ajax('http://localhost:8080/apps/11gist-blog/api/gists.json', {
    success: function(gists) {
      gists.forEach(function(gist){
        if (gist.description.indexOf('#post') > -1) {
          var $a = $('<a href="' + gist.url + '">' +  gist.description.slice(6)+ '</a>');
          $('#posts').append($('<li></li>').append($a));
          $a.on('click', function(event) {
            event.preventDefault();
            var href = $(this).attr('href');
            //console.log(href);
            $.ajax(href, {
              success: function(gist) {
                var content = gist['files']['post.md']['content'];
                $('#post').html(marked(content));
                console.log(gist);
                $.ajax(gist.comments_url, {
                  success: function(comments) {
                    $('#comments').html(''); //clear
                    comments.forEach(function(comment) {
                      $('#comments').append($('<li>' + comment['user']['login'] + ': ' + comment['body'] + '</li>'));
                    })//comments.forEach
                  }//success(comments)
                });//ajax comments_url
              }//success #2
            })//ajax href
          });
        }//if indexOf
      });//forEach
    }//success
  });//ajax
});//document.ready

// $.ajax(gist.comments_url, {
//   success: function(comments) {
//     var liString = '';
//     comments.forEach(function(comment) {
//       liString = liString + '<li>' + comment['user']['login'] + ': ' + comment['body'] + '</li>';
//     })
//
//     // <li>commentbody1</li><li>commentbody2</li>
//     $('#comments').html(liString)
//     //comments.forEach
//   }//success(comments)
// });//ajax comments_url
