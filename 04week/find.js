const array = [5, 12, 8, 130, 44];

// array.find(function(a) {
//     if (a > 15){
//         console.log(".find(): ",a);
//         return true;
//     }
// });

function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
        break;
    }
}

find(arr, function(x){
    
})

find(array, function anon(a) {
    if (a > 15){
        console.log(".find(): ",a);
        return true;
    }
});
// find(array, function(a) {
//     if (a > 55){
//         console.log(".find(): ",a);
//         return true;
//     }
// });
// find(array, function(a) {
//     if (a = 130){
//         console.log(".find(): ",a);
//         return true;
//     }
// });

function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // if (callback(i)){
        //     break;
        // }
        callback(i);
    }
}
findIndex(array, function(x){
    if (array[x] > 15){
        console.log(".findIndex(): ",x);
        return true;
    }
});