'use strict';

$(document).ready(function () {
  // You code here
  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
    success: function (description) {
      console.log(description);
      let filtered = description.filter(function (each) {
        return each.description.split(' ').includes("#post");
      })

      function filterPosts(text) {
        return text.split('#post').join(' ').trim();
      }
      console.log(filtered);
      filtered.forEach(function (each) {
        var string = `
           <div>
             <li>${filterPosts(each.description)}</li>
             <li><a href="#" data-id="http://127.0.0.1:8080/apps/11gist-blog/api/${each.id}.json">view</a></li>
           </div>`;
        console.log(string);
        $('#posts').append(string);
      })
      $('a[href="#"]').on('click', function (event) {
        //prevent the page from refreshing
        event.preventDefault();
      })
    }
  })

});


/*

href http://127.0.0.1:8080/apps/11gist-blog/api/${each.id}.json

data-id ${each.id}

*/
