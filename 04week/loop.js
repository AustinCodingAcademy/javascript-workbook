// http://awanderingreader.com/javascript-under-the-hood-building-our-own-foreach-and-map-functions/

function forEach(array, callback){
    for(let i=0; i<array.length; i++){
        callback(array[i], i, array);
    }
}