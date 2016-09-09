'use strict';

$(document).ready(function() {
    
//  $('[data-stack]').click(function() {
//      $detach = $('[data-block]').detach();
//      $child =  $($detach).children();
//      $block = $($child).last();
//      
//      if ($block) {
//          $($block).append(this);
//          $block = null;
//        }  else {
//            $($block).detach();
//        }
//  });
    
    $("button").click(function() {
        $("p").detach();
    });
}
