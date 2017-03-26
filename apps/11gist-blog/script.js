'use strict';

// callback to get the description of each gist
var getDescription = {
  success: function(gists) {
    // loop through each gist
    gists.forEach(function(gist) {
      // variable containing the description of each gist
      var links = 
      ('<li>' + '<a href="#">' + gist.description + '</a>' + '</li>');
      // add item in "links" variable to the "ul" with the id "posts"
      $('#posts').append(links);
    });
  }
}


$(document).ready(function() {
  // ajax call to generate a list of the descriptions in each gist
  $.ajax("http://127.0.0.1:8080/apps/11gist-blog/api/gists.json", getDescription)
});
