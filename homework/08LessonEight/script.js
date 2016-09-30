'use strict';

$(document).on('ready', function() {

<<<<<<< HEAD
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
	console.log('code is working');
	console.log('$firstList.children');

	// Problem 2:
	// Get the children of #second-list using the .children() method
	window.secondListChildren = $secondList.children();
	console.log('code is working');
	console.log('secondList.children');



	// Problem 3:
	// Now use the .detach() method on window.firstListChildren to
	// remove those elements from the document
	console.log('code is working');
	window.firstListChildren.detach();



	// Problem 4:
	// Now use the .detach() method on window.secondListChildren to
	// remove those elements from the document
	window.secondListChildren.detach();
	console.log('code is working');


	// Problem 5:
	// use $finalList.prepend() to put window.firstListChildren
	// at the beggining of #final-list
	$finalList.prepend(window.firstListChildren);
	console.log('code is working');


	// Problem 6:
	// use $finalList.append() to put window.secondListChildren
	// at the end of #final-list
	$finalList.append(window.secondListChildren);
	console.log('code is working');

=======
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
  window.firstListChildren = null;

  // Problem 2:
  // Get the children of #second-list using the .children() method
  window.secondListChildren = null;

  // Problem 3:
  // Now use the .detach() method on window.firstListChildren to
  // remove those elements from the document
  window.firstListChildren;

  // Problem 4:
  // Now use the .detach() method on window.secondListChildren to
  // remove those elements from the document
  window.secondListChildren;

  // Problem 5:
  // use $finalList.prepend() to put window.firstListChildren
  // at the beggining of #final-list
  $finalList;

  // Problem 6:
  // use $finalList.append() to put window.secondListChildren
  // at the end of #final-list
  $finalList;
>>>>>>> c3114e680667d8df8b4119c32507e500da668c09

});
