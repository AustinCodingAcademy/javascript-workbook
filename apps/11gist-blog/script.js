'use strict';

$(document).ready(function() {
    // You code here
    $.ajax('http://localhost:8080/apps/11gist-blog/api/gists.json', {
      success: function(gists) {
        gists.forEach(function(gist){
          //gist.description = "#post";
            if(gist.description.indexOf('#post') > -1){
              var $a = $('<a href="' + gist.url + '">' + gist.description.slice(6) + '</a>')
                console.log("hey");
              $('#posts').append($('<li></li>').append($a));

              $a.on('click', function(event){
                event.preventDefault();
                var href = $(this).attr('href');
                $.ajax(href, {
                  success: function(gist){
                  $('#post').html(marked(gist['files']['post.md']['content']));
                    // wrap mark down
                  }
                })
              })

            }
            console.log(gists);
            console.log(gist.description);

            // $('#posts').append('<li><a href="' + gist.url + '">' + gist.description + '</a>');
          //if (gist.description.splice)




          // splice if post 0 - 4 = "post" > good
          // url and comments_url
        })  //forEach end
      } // success end
    });   // ajax end
}); // ready
