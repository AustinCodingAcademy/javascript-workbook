'use strict';

$(document).ready(function() {


$('[data-block]').click(function() {
      var block = $(this).detach().last();
      $('[data-stack]').click(function() {

          if (block !== null) {
            $(this).append(block);
        }
        block = null;

      });
    });






    });
