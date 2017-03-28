'use strict';

$(document).ready(function() {
  // You code here
  $.ajax({url:    , success:function(result){
    $("#posts").html(result);
  }})
});
