console.log( '\n\nPrompt 1:\n' )

let array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

array.sort( function( a, b ) { return b-a } )

console.log( array )


console.log( '\n\nPrompt 2:\n' )

let fiveCount = [ 1, 2, 3, 4, 5 ]

function doubleArr( a ) {
    a.forEach( function( e ) {
        a.push( e );
    });

    return a
}

console.log( doubleArr( fiveCount ) )


console.log( '\n\nProject 1:\n' )
console.log( '\tPart 1:\n' )

function countTo( start, end ) {
    let countr = [];
    let count = start;
    do {
        countr += count + ", "
        count++
    }
    while ( count <= end )

    return countr
}

console.log( countTo( 0, 1000 ) )

console.log( '\n\n\tPart 2:\n' )

let Person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

console.log( Person )

console.log( '\n\n\tPart 3:\n' )

function ifOdd( obb, key ) {
    let x;
    for ( x in obb ) {
        if ( ( x.find(/\d/) % 2 != 0 ) ) {
            return key + ' has odd numbers'
        }
        return 'No odd numbers in ( ' + key + ' )'
    }
}

console.log( ifOdd( Person, Person.birthDate ) )




console.log( '\n\nProject 2:\n' )

function newFind( arr, find ) {
    // loop through array
    for ( i=0; i < arr.length; i++ ) {
        // check if find === index
        if ( find === i ) return find
    }
}

console.log( newFind( array, 0 ) )


console.log( '\n\nProject 3:\n' )


console.log( '\n\n\n\n\n\n\n\n\n\n\n\n\n\n' )