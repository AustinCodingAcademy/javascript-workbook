

console.log('Prompt 1: ( 12 points )')

let hide = 'hello';

let show = '';

for ( i = 0; i < hide.length; i++ ) {
    show += '_';
}

function check( letter ) {

    if ( hide.match( letter ) ) {

        for ( i = 0; i < hide.length; i++ ) {

            if ( hide[i] === letter ) {

                show = show.split('');
                show[i] = letter;
                show = show.join('');

            }
        }

    } else {
        console.log( letter + ' is not in the word');
    }
}

check( 'l' )

console.log(show)


console.log('\n\nPrompt 2: ( 7 points )')

biggoNumber = 99999;

function howManyRamp( number ) {
    let ramp = 0;
    for ( i = 0; i < number; i++ ) {
        if ( number[i] < number[i+1] ) {
            ramp++
        }
    }
    return ramp
}

console.log(howManyRamp(biggoNumber))


console.log('\n\nPrompt 3: ( 5 points )')



// Including:
// Patricia Marak
// Ricky Flores