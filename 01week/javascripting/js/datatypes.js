'use strict';

// Main wrapper function
$(document).ready(function() {

  init();

  // Take note, number on function or style represents the test number

// Button click event for test 1
  $('.btn1').click(function() {
    callTest1();
  });

  // Button click event for test 2
  $('.btn2').click(function() {
    callTest2();
  });

  // Button click event for test 3
  $('.btn3').click(function() {
    callTest3();
  });

  // Button click events for test 4.  Test 4 has 2 buttons.
  $('.btn4').click(function() {
    callTest4a();
  });

  // 2nd button click event for test 4.  Test 4 has 2 buttons.
  $('.btn4b').click(function() {
    let notDefined;
    $('.sentence4b').text('Unassigned variable "notDefined" returns:  ' + callTest4b(notDefined) );
    $('.sentence4c').text('Passing 0/0 into a function returns number:  ' + callTest4b(0/0));
    $('.sentence4d').text('0/0 directly returns:  ' + typeof 0/0 );

  });

  // Button click event for test 5.
  $('.btn5').click(function() {
    callTest5();
  });

  // Button click event for test 678.
  $('.btn678').click(function() {
    callTest678();
  });

});

function init() {
  $('.sentence6').text('Boring sentence');
  $('.sentence7').text('Boring sentence');
  $('.sentence8').text('Boring sentence');

};

// Function call for test 1 - Display date and time
function callTest1() {
  $('#currentDate').html(`Date and time:<span class='underline'> ${Date()}</span>`);
  return;
}

// Function call for test 2 - convert number to a string
function callTest2() {
  $('.sentence2').html(`I have ${$('.num-a2').val()} ${$('.str-a2').val()}`);
  return;
}

// Function call for test 3 - convert string to a number
function callTest3() {
  $('.sentence3').html(`${$('.num-a3').val()} * ${$('.num-b3').val()} = `+ (+$('.num-a3').val() * +$('.num-b3').val()) );
  return;
}

// Function call for test 4a - Display different datatypes.  This function reads user input
// and determines if input is a number, boolean, NULL, or a string.
function callTest4a() {

  if ( parseInt( $('.num-a4').val() ) ) {
    $('.sentence4').html(`"${$('.num-a4').val()}" is a number!`);
  }
  else if ( $('.num-a4').val() === 'true' || $('.num-a4').val() === 'false') {
    $('.sentence4').html(`"${$('.num-a4').val()}" is a boolean!`);
  }
  else if ( $('.num-a4').val() === '' ) {
    $('.sentence4').html(`"${$('.num-a4').val()}" is NULL!`);
  }
  else {
    $('.sentence4').html(`"${$('.num-a4').val()}" is a string!`);
  }
  return;
}

// Function call for test 4b - Display different datatypes.  This function is used to
// force undefined and NaN
function callTest4b(myArg) {
  return (typeof myArg);
}

// Function call for test 5 - Add 2 numbers
function callTest5() {
  $('.sentence5').html(`${$('.num-a5').val()} + ${$('.num-b5').val()} = `+ (+$('.num-a5').val() + +$('.num-b5').val()) );
  return;
}

// Function call for tests 678
// Test 6 - Both conditions are true
// Test 7 - Only one condition is true
// Test 8 - Neither condition is true
function callTest678() {
  let numberA = $('.num-a678').val();
  let numberB = $('.num-b678').val();
  let stringA = $('.str-a678').val();
  let stringB = $('.str-b678').val();

  if ( numberA === numberB && stringA === stringB ) {
    $('.sentence6').html('<span class="secret">Drink more Ovaltine</span>');
    $('.sentence7').html('<span class="secret">Programmers are sexy</span>');
    $('.sentence8').text('Boring sentence');
  }
  else if ( numberA === numberB || stringA === stringB ) {
    $('.sentence6').text('Boring sentence');
    $('.sentence7').html('<span class="secret">Programmers are sexy</span>');
    $('.sentence8').text('Boring sentence');
  }
  else {
    $('.sentence6').text('Boring sentence');
    $('.sentence7').text('Boring sentence');
    $('.sentence8').html('<span class="secret">Praise the Lord and pass the ammunition</span>');
  }
  return;
}
