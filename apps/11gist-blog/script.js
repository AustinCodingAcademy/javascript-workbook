
'use strict';

$(document).ready(function() {

  function setUplisteners(){
    searchClick();
  }

function searchClick(){
  $('input[name="get"]').click(function(event){
    event.preventDefault();
    search();
  });
}

function search(bigData) {
      var url = 'http://127.0.0.1:8080/apps/11gist-blog/api/gists.json';

      $.ajax({
          url: url,
          method: 'GET',
          dataType: 'json'
      }).done(function(bigData) {//bigData is the large block of data.
          // console.log("success", bigData);
          loopThroughData(bigData);
      }).fail(function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR, textStatus, errorThrown)
      })
  }

  function loopThroughData(bigData){
    for (var i = 0; i < bigData.length; i++) {
      var littleData = bigData[i];//This is the big data broken down into managable chunks.
      console.log(littleData);
      var description = littleData.description;
      var trimmed = description.substr(5);
        if(trimmed){
      $("#posts").append('<li><a href="#" data-url="url">'+trimmed+'</a></li>');
        }
        // else{
        //   $("#posts").append('<li><a href="#" data-url="url">'+trimmed+'</a></li>');
        // }
    }
  }

  function loopThroughContent(littleData, files){
    var content = littleData.files;
    content.forEach(function(files){
      console.log("working")
      $("#post").append('<p>sdjhgfkashdgfkshdf</p>');
    });
  }







setUplisteners();
});
