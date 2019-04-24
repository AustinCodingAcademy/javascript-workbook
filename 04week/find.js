const array = [5, 12, 8, 130, 44];

function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
find(array, function(a){
    if (a == 130){
        console.log(a);
    }
});

function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(i)){
            break;
        }
    }
}
findIndex(array, function(x){
    if (array[x] > 15){
        console.log(x);
        return true;
    }
});