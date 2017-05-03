alert( 'hello' );

var name = prompt( 'What\'s your name?' );
console.log( name ); // console out their name to see what it is
alert( 'Nice to meet you, ' + name );

alert( 'I know you can\'t read my bio yet, but take a stab at answering some questions about me. Ready?' );

// TODO change to YES or NO questions
var favIceCream = prompt( 'Is my favorite ice cream flavor blueberry?' );
console.log( favIceCream );

favIceCream = favIceCream.toLowerCase();
if ( favIceCream == 'yes' || favIceCream == 'y ') {
    alert( 'Bingo, ' + name + '!!' );
} else {
    alert( '...incorrect.' );
}

var wrong = prompt( 'Am I doing this lab right?' );
wrong = wrong.toLowerCase();

console.log( wrong, wrong == 'no' );
if ( wrong === 'yes' || wrong === 'y' ) {
    alert( 'are you sure??' );
} else {
    alert( 'Bonus points for being honest AND right.' );
}