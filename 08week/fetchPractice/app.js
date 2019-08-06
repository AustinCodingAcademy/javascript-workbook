function getUsers() {
    console.log('working');
    fetch('https://randomuser.me/api/')
        .then((resolution) => resolution.json())
        .then((data) => {
            const randomUser = document.getElementById('random-user');
            const li = document.createElement('li');
            // const text = document.createTextNode(`${data.name}`)
            data.results.forEach(function(user) {
                const text = document.createTextNode(`${user.name}`)
                li.append(text);
                randomUser.append(li);
            })
            
            // li.append(text);
            // randomUser.append(li);
        });

}



// const fetchUsers = () => {
//     const randomUser = document.getElementById('random-user');
//         arrayOfUsers.map((post) => {
//         const li = document.createElement('li');
//         const text = document.createTextNode(`#${post.results}`);
//         li.appendChild(text);
//         randomUser.append(li);
//     })
// }



































// // // let arrayOfPosts;
// let arrayOfUsers;

// // // this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
// window.onload = function() {
// //   getPosts()
//    getUsers()
// }



// const getUsers = () => {
//     fetch('https://randomuser.me/api/')
//         .then(res => res.json())
//         .then(posts => arrayOfUsers = posts)
// }



// const fetchUsers = () => {
//     const randomUser = document.getElementById('random-user');
//         arrayOfUsers.map((post) => {
//         const li = document.createElement('li');
//         const text = document.createTextNode(`#${post.results}`);
//         li.appendChild(text);
//         randomUser.append(li);
//     })
// }

// let getUsers = () => {

    

//     let insertUsers = (post) => {
//         const randomUser = document.getElementById('random-user');
//         const li = document.createElement('li');
//         const text = document.createTextNode(`${post.results.}`)
//         fetch('https://randomuser.me/api/')
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(myJson) {
//                 // console.log(JSON.stringify(myJson))
//                 // li.innerText = JSON.stringify(myJson);
//                 li.appendChild(text);
//                 randomUser.append(li)
//             })
//     }
// }























// // this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
// const getPosts = () => {
//     fetch('http://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(posts => arrayOfPosts = posts)
//   }



// this function logs the results in your browsers console
// const consolePosts = () => {
//   console.log(arrayOfPosts)
// }

// // this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
// const displayPost = () => {
//   const allPosts = document.getElementById('all-posts')
//   arrayOfPosts.map((post, index) => {
//     const li = document.createElement('li')
//     const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
//     li.appendChild(text)
//     allPosts.append(li)
//   })
// }