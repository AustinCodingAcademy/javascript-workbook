'use strict'

console.log("loading script.js file")

window.onload = function() {
    console.log("window loaded")
    getPosts()
}

let getPosts = function() {
    console.log("Inside the post method, about to make a fetch request")
    let fetchPromise = 
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(function(response) {

            if(!response.ok) {
              throw Error("Server said no");
            }
            console.log("The packaging of the amazon item has arrived", response)
            return response.json()
        
        })
        .then(function(data) {
            console.log("We have opened the packaging and the item/data is here! data =", data)
            data.forEach(updateHtml)
        }).catch(function(error){
            alert("Something went wrong!")
        })
    console.log("Request sent off...")
}

let updateHtml = function(post) {
    console.log("Updating the HTML for posts = ", post)
    let postsUl = document.getElementById("posts")

    let postLi = document.createElement("li")
    postLi.innerText = post.title
    postsUl.appendChild(postLi)

    let userNameSpan = document.createElement("span")
    userNameSpan.innerText = "   - by " +post.userid
    postLi.append(userNameSpan)

}

const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {
    makePlayer(person)
    removeFromList(button)
      })
    li.appendChild(button)