var myNotes = null;

.submit():
  **.on( "submit", handler )**
  The submit() method submits the form (same as clicking the Submit button).
    Syntax:
      $("myNotes").on("submit", function () {
      });

.preventDefault():
  It is used on an event or by returning 'false' from a handler to stop the event from doing what it is supposed to do and wait for instructions (usually from a "function").
    Syntax:
      $("myNotes").on("submit", function (event) {
        event.preventDefault();
      });

.reset():
  The reset() method resets the values of all elements in a form (same as clicking the Reset button).

.find():
  The find() method returns descendant elements of the selected element.
    *A descendant is a child, grandchild, great-grandchild, etc.*

.val():
  The val() method returns or sets the value attribute of the selected elements.
    To RETURN the value attribute:
      $(selector).val();
    To SET the value attribute:
      $(selector).val(value);
    To SET the value attribute using a FUNCTION:
      $(selector).val(function()){};

.draggable():
  Enable draggable functionality on any DOM element. Move the draggable object by clicking on it with the mouse and dragging it anywhere within the given area.

.sortable():
  Enable a group of DOM elements to be sortable. Click on and drag an element to a new spot within the list, and the other items will adjust to fit.
    *By default, sortable items share draggable properties.*

.append():
  The append() method inserts specified content at the end of the selected elements.
    Syntax:
      $(selector).append(content, function(){};
    IE: Insert content at the end of all <p> elements:
      $("button").on("click", function() {
        $("p").append("<b>Appended text</b>");
      });

.prepend():
  The prepend() method inserts specified content at the beginning of the selected elements.
    Syntax:
      $(selector).prepend(content, function(){};
    IE: Insert content at the beginning of all <p> elements:
      $("button").on("click", function() {
        $("p").prepend("<b>Prepended text</b>");
      });

.remove():
  The jQuery remove() method removes the selected element(s) and its child elements.
  The method also accepts one parameter, which allows you to filter the elements to be removed.
  The parameter can be any of the jQuery selector syntaxes.
    IE: This example removes all <p> elements with class="test" and class="demo":
      $("p").remove(".test, .demo");

.empty():
  The jQuery empty() method removes the child elements of the selected element(s).
    IE: This example will result in a DOM structure with the Hello text deleted:
      *HTML File*
        <div class="container">
          <div class="hello">Hello</div>
          <div class="goodbye">Goodbye</div>
        </div>
      *Script File*
        $( ".hello" ).empty();
      *Results*
        <div class="container">
          <div class="hello"></div>
          <div class="goodbye">Goodbye</div>
        </div>

.parent():
  The parent() method returns the direct parent element of the selected element. This method only traverse a single level up the DOM tree. To go all the way up to the documents root element (to return grandparents or other ancestors), use the .parents().


.prop():
  Gets the value of a property for the first element in the set of matched elements.
  It returns undefined for the value of a property that has not been set, or if the matched set has no elements.
  Will change with checkbox state (Returns true (Boolean))
    Syntax:
      $( elem ).prop();

.change():
  **.on("change", handler)**
  The event is sent to an element when its value changes.
  It is limited to <input> elements, <textarea> boxes and <select> elements.
  For select boxes, checkboxes, and radio buttons, it is fired immediately when the user makes a selection with the mouse, but for the other element types it is deferred until the element loses focus.
  IE:
    Syntax 1:
      $( ".target" ).change(function() {
        alert( "Handler for .change() called." );
      });
    Syntax 2:
      $( "#other" ).click(function() {
        $( ".target" ).change();
      });
