Spec 0 - Lets test the API

Go to 'https://reqres-api.herokuapp.com/api/users' in your browser. Look at the JSON object. See that it returns a JSON collection of objects that look something like:
[ { "id":1,
    "first_name":"george",
    "last_name":"bluth" },
  { "id":2,
    "first_name":"lucille",
    "last_name":"bluth" },
  { "id":3,
    "first_name":"oscar",
    "last_name":"bluth" } ]
but with more objects. Each object has an "id". Lets take "id" 1 and put that at the end of the url like this: "https://reqres-api.herokuapp.com/api/users/1"
That will return more information about that particular person, like so:
{ "id": 1,
  "first_name": "george",
  "last_name": "bluth",
  "address": "4116 Magnolia Drive, Portland, ME 04103",
  "phone": 15551234567,
  "occupation": "father",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" }
That is our API to play with.

// *Spec 1 - Lets try an AJAX call*
// Using jQuerys $.ajax method, make a call to 'https://reqres-api.herokuapp.com/api/users.' Watch the call happen in your Network tab in your developer console.

// *Spec 2 - Iterate over the users collection.*
// In a success callback, pass in users as your reponse, and the iterate over each user using JavaScript 'forEach'. /In each loop, create a var called '$tr' that builds an html string that matches the <tr></tr> in the html markup, but with the user keys. At the end of each loop, .append() the '$tr' to the body element.

*Spec 3 - Individiual AJAX calls*
// You should have produced links for each row.
// Put a .click() listener on each link, and in the callback, prevent the default event from occuring.
//   $(link).on("click", function (event) {
//     event.preventDefault;
//   });

Create a var url that starts as a string 'https://reqres-api.herokuapp.com/api/users/'. Now grab the data-id value from the link using the .data() method, and attach it to the end of the url.


Now make an .ajax with that url, and in a success callback, pass in 'user' as the response. /Build another 'str' that builds an html string that matches the default markup in the 'div#details' element.


// <h3>first last</h3>
// <h4>student</h4>
//
// <p>5551234567</p>
//
// <p>123 Whatever Street, Austin, TX 78701</p>
//
// <img src="https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg" />
