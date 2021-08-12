console.log('Welcome to this Card Guessing Game!\n\nA card will be drawn from a deck and it is your job to guess if the next card drawn will have a higher or lower card number value on it.\nIf you guess correctly then you will recieve a point!\nAt the end of the game, the person with the most points wins.')

//Asking for the user's names
let definedName1 = prompt ('You are player 1, What is your name?')
let definedName2 = prompt ('You are player 2, What is your name?')

//preselecting a random name (in case the user does not enter a name)
let randomName = ['Zoe', 'Anna', 'Xanthe', 'Abi', 'Ella'];
let pickedRandomName1 = randomName [Math.floor(Math.random() * 4 + 0)];
let pickedRandomName2 = randomName [Math.floor(Math.random() * 4 + 0)];

//depending on if the user enters their name/s or not, a differnet welcome message will appear.
if (definedName1 == '' && definedName2 == ''){
  console.log ('You have each been assigned a random name!')
  console.log ('Hi ' + pickedRandomName1+ ' and ' + pickedRandomName2 + ', get ready to play')

} else if (definedName1 != '' && definedName2 != ''){
  console.log ('Hi ' + definedName1+ ' and ' + definedName2 + ', get ready to play')

} else if (definedName1 == '' && definedName2 != ''){
  console.log ('Hi ' + pickedRandomName1+ ' and ' + definedName2 + ', get ready to play')

  } else if (definedName1 != '' && definedName2 == ''){
  console.log ('Hi ' + definedName1+ ' and ' + pickedRandomName2 + ', get ready to play')
  }


//the value of players will either be their selected name or a random name
let player1 = (definedName1 || pickedRandomName1);
let player2 = (definedName2 || pickedRandomName2);

//setting the round and points to 0
let round = 1;
let pointPlayer1 = 0;
let pointPlayer2 = 0;

play();
function play() {

//the varible randomCard will produce a random card number between 1 and 13. "nextRandomCard" will assign another number between 1 - 13 for the next card drawn.
randomCard = Math.floor(Math.random() * 13 + 1);
nextRandomCard = Math.floor(Math.random() * 13 + 1);


//main game = each player is presented with a random card number and has to guess if the following card number drawn will be higher or lower.
do{
  console.log('The card drawn has the number ' + randomCard)


  var guessPlayer1 = prompt( player1 + ', do you think the next card will have a higher or lower number?');

      if (guessPlayer1=='' || guessPlayer1==null) {
          console.log('Error: no input');
          guessPlayer1 = prompt( player1 + ', do you think the next card will have a higher or lower number?');
  
      } else if (guessPlayer1 != 'higher' && guessPlayer1 != 'lower') {
        console.log('Error: Invalid response, please type \'higher\' or \'lower\'.');
        guessPlayer1 = prompt( player1 + ', do you think the next card will have a higher or lower number?');

}


  var guessPlayer2 = prompt( player2 + ', do you think the next card will have a higher or lower number?');

      if (guessPlayer1=='' || guessPlayer1==null) {
          console.log('Error: no input')
          guessPlayer1 = prompt( player1 + ', do you think the next card will have a higher or lower number?');
  
      } else if (guessPlayer1 != 'higher' && guessPlayer1 != 'lower') {
        console.log('Error: Invalid response, please type \'higher\' or \'lower\'.')
      guessPlayer2 = prompt( player2 + ', do you think the next card will have a higher or lower number?');
}

    if (guessPlayer1=='higher'&&randomCard<nextRandomCard 
    ||  guessPlayer1=='lower'&&randomCard>nextRandomCard) {
			console.log(player1 + ' you are correct!');
      pointPlayer1++

		} else if (guessPlayer1=='higher'&&randomCard>nextRandomCard 
    ||  guessPlayer1=='lower'&&randomCard<nextRandomCard) {
			console.log(player1 + ' you are incorrect!');
		} 

    if (guessPlayer2=='higher'&&randomCard<nextRandomCard 
    ||  guessPlayer2=='lower'&&randomCard>nextRandomCard) {
			console.log(player2 + ' you are correct!');
      pointPlayer1++

		} else if (guessPlayer2=='higher'&&randomCard>nextRandomCard 
    ||  guessPlayer2=='lower'&&randomCard<nextRandomCard) {
			console.log(player2 + ' you are incorrect!');
		} 

    console.log('The next card drawn had a number value of ' + nextRandomCard)
    break;
    
round++

  


// each player gets 3 chances to guess the correct number
} while (round <= 6){

}

// after the 3 chances, the user is asked if they want to play again or not.
let again = prompt ('Do you want to play again?');

if (again =='yes') {
  play();
} else{
	console.log('Game Over');
}
}