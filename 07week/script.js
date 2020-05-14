'use strict'

console.log('hello world');


window.onload = function() {
console.log('window loaded')
console.log(getPosts())
}

document.onload = function() {

}

let getPosts = function(){
    console.log()
    let fetchPromise = fetch("http://jsonplaceholder.typicode.com/posts");

        let dataPromise = fetchPromise.then(function(response){
            console.log(response);
            return response.json()
        })

        dataPromise.then(function(data){
            console.log('got my data! data.length: ', data.length);
            data.forEach(updateHtml);
        });
        console.log('request sent off....')
}

let fetchedUsers = {};

let updateHtml = function(post){
    console.log('updating the html for post=', post);
    let postsUl = document.getElementById('posts');
    let postLi = document.createElement('li');
    

    
    postLi.innerText  = post.title;
    postsUl.appendChild(postLi);

    let userId = post.Id;
    let userSpan = document.createElement('span');
    userSpan.innerText = "    - by"+userId;
    postLi.append(userSpan);

    fetch('http://jsonplaceholder.typicode.com/users/'+userId)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        fetchedUsers[userId] = data;
        userSpan.innerText = '    -  by'+data.name;
    })
}