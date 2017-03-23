'use strict';

$(document).ready(function() {

  $('a').on('click', (event) => {
    event.preventDefault();
    console.log('every damn time', event);
  });

  $('#make-it-cute').on('click', () => {
    $.ajax('https://www.reddit.com/r/aww.json?jsonp=', {
      success: (giantGodDamnMess) => {
        $('#cute-landing-pad').append(
          $('<img src="' + giantGodDamnMess['data']['children'][1]['data']['url'] + '" /> ')
        );

      }
    });
  });

  // $.ajax('https://www.reddit.com/r/aww.json', {
  //   success: function(response) {
  //     for (var i = 0; i < response.length; i++) {
  //       console.log(response[i]['data']['children']['data']['preview']['images']);
  //
  //     }
  //   }
  // });

});
