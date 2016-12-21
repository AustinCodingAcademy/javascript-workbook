'use strict';

//Using jQuery to make an AJAX call, insert a list of links into #posts using JavaScript forEach with the "description" of each gist as the text.

  $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
        success:function(post){
          post.forEach.description('#post')
        }

  });

  
//Spec 2
//After the links are inserted, add a click listener.
//When a click occurs then:
//1)prevent the default event from occuring
//2) Then mak an ajax call with the data-url value,
// grabbing it with $.data('url').

$(document).ready(function() {
  // You code here
  var getPost = {

  }



});



//here is what the console has acceesss to
