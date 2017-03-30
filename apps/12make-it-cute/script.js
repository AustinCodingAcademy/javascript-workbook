'use strict';

$(document).ready(function() {

  $('a').on('click', (event) => {
    event.preventDefault();
    console.log('every damn time', event);
  });

  $('#make-it-cute').on('click', () => {
    $.ajax('https://www.reddit.com/r/aww.json?jsonp=', {
      success: (giantGodDamnMess) => {


        giantGodDamnMess['data']['children']
        .splice(1)
        .forEach(
          (currentChild) => {
            $('#cute-landing-pad').append(
              $("<p></p>").text(
                currentChild['data']['title']
              )
            );

            const thumbnailURL = currentChild['data']['thumbnail'];
            // const $imgTag = $(`<img src="${thumbnailURL}"`)

            $('#cute-landing-pad').append(
              $(`<img src="${thumbnailURL}">`)
            );

          }
        );

        $('img').on('click', () => {
          console.log('I was clicked.');
        });

      }
    });
  });

  $.ajax('https://www.reddit.com/r/aww.json', {
    success: function(response) {
      for (var i = 0; i < response.length; i++) {
        console.log(response[i]['data']['children']['data']['thumbnail']);

      }
    }
  });

});


// $('<img src="' + giantGodDamnMess['data']['children'][1]['data']['url'] + '" /> ')
