let words = ['Honda', 'Subaru', 'Benz', 'Audi', 'BMW'];

function forEach(array, callback) {
    for (let i=0; i<array.length; i++){
        callback("My Favorite car type: " + array[i])    
    }
}

forEach (words, function(cars){
    console.log(cars);
})