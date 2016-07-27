'use strict';

$(document).ready(function() {
    
	$('form').submit(function (event) {
		event.preventDefault();
		var todoText = $(this).find('#todo').val();
		console.log(todoText);
		$('#todo-list').append('<li>' + todoText + '</li>');


	});
$('#todo-list').sortable();

    
});
