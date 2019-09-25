let arrayOfPosts;
let arrayOfComments;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts();
  getComments();
};

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => (arrayOfPosts = posts));
};

// Fetch Comments
const getComments = () => {
  fetch("http://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(comments => (arrayOfComments = comments));
};

// Update a post with PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: `john throws a baseball`,
    body: `it is a fastball.`,
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts);
};

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById("all-posts");
  arrayOfPosts.map((post, index) => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`
    );
    li.appendChild(text);
    allPosts.append(li);
  });
};

// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!

// Five Posts Button
const displayFivePosts = () => {
  const arrOfFive = arrayOfPosts.slice(0, 5);
  console.log(arrayOfPosts);

  const fivePosts = document.getElementById("all-posts");
  arrOfFive.map((post, index) => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`
    );
    li.appendChild(text);
    fivePosts.append(li);
  });
};

// Display Comments
const displayComments = () => {
  const allComments = document.getElementById("all-posts");
  arrayOfComments.map(comment => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `Post Number: ${comment.postId} || Comment: ${comment.body}`
    );
    li.appendChild(text);
    allComments.append(li);
  });
};

// Display Users
const displayUsers = () => {
  const allUsers = document.getElementById("all-posts");
  arrayOfComments.map(comment => {
    const li = document.createElement("li");
    const text = document.createTextNode(
      `User ID: ${comment.id} || Comment: ${comment.body}`
    );
    li.appendChild(text);
    allUsers.append(li);
  });
};
