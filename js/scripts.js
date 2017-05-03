alert( 'hello' );
alert( 'I know you can\'t read my bio yet, but take a stab at answering some questions about me. Ready?' );

var name = prompt( 'First of all, what\'s your name?' );
console.log( name ); // console out their name to see what it is
alert( 'Nice to meet you, ' + name );

var favIceCream = prompt( 'What do you think my favorite ice cream flavor is?' );
console.log( favIceCream );
alert( 'Really, ' + name + '? You think ' + favIceCream + ' is my favorite?' );

var wrong = confirm( 'Am I doing this lab right?' );
console.log( wrong );
alert( 'Thanks for thinking I\'m ' + wrong + 'y' );