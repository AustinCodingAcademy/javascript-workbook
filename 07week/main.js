let arrayOfUsers;


// window.onload = function() {
//   getFriends()

// }

// const getFriends = () => {
//   fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(users => arrayOfUsers = users)
// }

// const postThreeUsers = () => {
//   const findUsers = document.getElementById('container')
//   arrayOfUsers.forEach((user) => {
//     const text = `
//         <h2>FRIENDS</h2>
//         <img src = "${user.picture.thumbnail}" alt = "faces">
//         <ul>
//             <li>${user.name.first}</li>
//             <li>${user.location.city}, ${user.location.state}</li>
//     `
//     findUsers.innerHTML = text;
//   })
// }


function getAPI(){
    fetch('https://randomuser.me/api/?results=500').then((result) => result.json())
    .then((data) => {
        let output = `<h2>Friends</h2>`
        data.results.forEach((function(user){
            output += `
            <img src = "${user.picture.medium}" alt = "faces">
                <ul>
                    <li>${user.name.first} ${user.name.last}</li>
                    <li>${user.location.city}, ${user.location.state}</li>
                    <li>${user.email}</li>
                </ul>
            `
        }))
        document.getElementById('container').innerHTML = output;
    })
}


