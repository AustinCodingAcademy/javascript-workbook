const getPosts = () => {
return fetch(`https://randomuser.me/api/`)
.then(res => res.json())
.then(res => console.log(res))

}

console.log(getPosts());
