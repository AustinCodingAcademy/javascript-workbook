'use strict';

$(document).ready(function() {
// App logic goes here
function countTasks() {
var count = $('#todo-list li').length;
$('#item-count').text(count);
console.log("task count is " + count)
if (count > 0) {
$('#item-count').css("visibility","visible");
} else {
$('#item-count').css("visibility","hidden");
}
};

$('form').submit(function(event) { 
var todoText = $(this).find('input[type="text"]').val();
if (todoText == '') {
$("#alert-prompt").text("Please enter a task.");
event.preventDefault();
return;
} else {
$("#alert-prompt").text("");
event.preventDefault();
console.log($(this));
console.log("todo text is " + todoText);
$('#todo-list').append('<li>' + todoText + '<div><span class="fa fa-minus-square"></span></div><div><input type="checkbox" value="done"></div></li>');
$(this).find('input[type="text"]').val('');
countTasks();
}
});

$("#clear-all").click(function() {
if (confirm("This will completely empty your list. Are you sure?")) {
$('#todo-list').empty();
countTasks();
}
});

$('#todo-list').on('click', '.fa-minus-square', function() {
$(this).parent().parent().remove();
console.log("clicked remove");
countTasks();
});

$("#clear-done").click(function() {
$("#todo-list input[type='checkbox']:checked").parent().parent().remove();
countTasks();
});

$("#todo-list").sortable();

});
