let words = ['Honda', 'Subaru', 'Benz', 'Audi', 'BMW'];

function forEach(array, callback) {
    for (let i=1; i<array.length; i++){
        callback("My " + i + " car was: " + array[i])    
    }
}

forEach (words, function(cars){
    console.log(cars);
})