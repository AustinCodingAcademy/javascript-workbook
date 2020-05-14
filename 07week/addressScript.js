'use strict'

window.onload = function() {
    console.log('window loaded')
    fetchAddressBook();
}

function fetchAddressBook(){

    fetch('https://randomuser.me/api?results=10')
    .then(function(response){
        console.log('processing the response')
        return response.json();
    })
    .then(function(json){
        console.log('processing the json load')
        processContact(json.results)
    })
}


function processContact(contacts) {
    console.log('contact size = ',contacts.length)
    contacts.forEach(function(contact) {
        
    })
}