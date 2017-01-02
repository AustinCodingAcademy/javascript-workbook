'use strict';

$(document).ready(function() {
// App logic goes here
// $('li').on('click', '', function(){
//   $(this).parent.remove();
// });
$('form').submit(function(event) {
    event.preventDefault();
    var toDo = $(this).find('input[type="text"]').val();
    // this tells the browser
    //  to "prevent" the "default" "event" from
    //  occuring (sending and refreshing)
    // .val only works for inputs

    console.log($(this));

    $('#todo-list').append('<li><input type="checkbox"/>' + toDo + '</li>');
    $(event.currentTarget).find('input[type="text"]').val('');
});
    $('ul').sortable();

});

// let's log out our "this" context
//  (our form element) as a jQuery object

// Then within the *$(this) context, *.find() the
// *value of #todo and assign it to a variable
// called *todoText

// var todoText = $("form#todo").on("submit", function() {
//     $(this).find("input[type='text']").val();
//
//     var todoText = $(this).find(addToList).val();


// This might work: saving the var of what I input, submitting, finding the value
// and then appending. let's see:
// this is what I worked on with Greg, so don't mess with it!


// var todoText = $("form#todo").on("submit", function() {
// $(this).find("input[type='text']").val();
//
// $("ul#todo-list").append("<li>todoText</li>");
//
// console.log("todoText", todoText);


// $("ul#todo-list").append("<li>todoText</li>");
//
// console.log("todoText", todoText);

// Construct a string containing a list item
// <li></li> with your todoText in the middle.
// .append()
// the html string to the end of your #todo-list.


// Now make your list .sortable().
