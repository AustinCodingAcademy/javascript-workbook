Todo App

// Spec 1
// Using jQuery, put a submit() event listener on the form.
     $("form").on("submit", function (event) {
          //Code goes here!
     });


// Spec 2
// Inside your callback prevent the default event from occuring when you submit.
// Then within the $(this) context, .find() the value of #todo and assign it to a var = todoText.
     $("form").on("submit", function (event) {
          event.preventDefault();
     var todoText = $(this).find('#todo').value();
     });

// Spec 3
// Construct a string containing a list item <li></li> with your todoText in the middle. .append() the html string to the end of your #todo-list.
     $('#todo-list').append($('<li>' + todoText + '</li>'));

// Spec 4
// Now make your list .sortable().
     $('#todo-list').append($('<li>' + todoText + '</li>')).sortable();

(Bonus) Spec 5
Add a checkbox to each list item, so that you can "complete" a task.
  var checkBox =
    $('#todo-list').on("click", function(){
    $('#todo-list').prop('<input type="checkbox"/>');
});

(Bonus Bonus) Spec 6
Remove the default task form from the html.
Add a button or link to each list item.
When you click it, it should remove() its parent() list item.
