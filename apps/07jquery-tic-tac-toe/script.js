'use strict';

$(document).on('ready', function() {
      var lucky = [];
      var unlucky = [];
      var whoknows = [];
      for(var i=0; i<lines.length; i++) {
          p
          if (i % 7 === 0) {
              lucky.push(i);
          } else if (i % 13 ===0) {
              unlucky.push(i);
          } else if ((i % 7 === 0) && (i % 13 ===0)) {
              unlucky.push(i);
          }
      }
      console.log(lucky);
      console.log(unlucky);
      console.log(whoknows);
  });
