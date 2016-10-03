'use strict';

$(document).ready(function() {
  $.ajax('http://localhost:8080/apps/11gist-blog/api/gists.json' , {
    success: function(gists) {
      gists.forEach(function(gist){
        $('body').append(gist.url);
      })
    }
  });
});
