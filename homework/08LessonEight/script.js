'use strict';

$(document).on('ready', function() {

// ****
// jQuery
// ****

// ****
// more dom manipulation
// ****

// First, I'm going to select these for you
var $firstList = $('#first-list');
var $secondList = $('#second-list');
var $finalList = $('#final-list');

// Problem 1:
// Get the children of #first-list using the .children() method
window.firstListChildren = $firstList.children();

// Problem 2:
// Get the children of #second-list using the .children() method
window.secondListChildren = $secondList.children();

// Problem 3:
// Now use the .detach() method on window.firstListChildren to
// remove those elements from the document
window.firstListChildren = firstListChildren.detach();


// Problem 4:
// Now use the .detach() method on window.secondListChildren to
// remove those elements from the document
window.secondListChildren = secondListChildren.detach();

// Problem 5:
// use $finalList.prepend() to put window.firstListChildren
// at the beggining of #final-list
$finalList.prepend(window.firstListChildren);

// Problem 6:
// use $finalList.append() to put window.secondListChildren
// at the end of #final-list
$finalList.append(window.secondListChildren);

});
