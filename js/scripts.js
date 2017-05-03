'use strict';

// greet the user and ask for their name
alert( 'hello' );``
var name = prompt( 'What\'s your name?' );
alert( 'Nice to meet you, ' + name );
alert( 'I know you can\'t read my bio yet, but take a stab at answering some questions about me. Ready?' );

// have user guess my favorite ice cream flavor
var favIceCream = prompt( 'Is my favorite ice cream flavor blueberry?' );
console.log( 'fav ice cream == bluberry: ' + favIceCream );

favIceCream = favIceCream.toLowerCase();
if ( favIceCream == 'yes' || favIceCream == 'y ') {
	alert( '...incorrect.' );
} else {
	alert( 'Bingo, ' + name + '!!' + 'Blueberry is *not* my favorite.');
}

// ask user if I'm doing this correctly
var followingInstructions = prompt( 'Am I doing this lab right?' );
followingInstructions = followingInstructions.toLowerCase();

console.log( 'following instructions: ', followingInstructions );
if ( followingInstructions === 'no' || followingInstructions === 'n' ) {
	alert( 'Bonus points for being honest AND right.' );
} else {
	alert( 'Are you sure??' );
}