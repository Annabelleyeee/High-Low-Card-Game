console.log('Welcome to this Card Guessing Game!\n\nA card will be drawn from a deck and it is your job to guess if the next card drawn will have a higher or lower card number value on it.\nIf you guess correctly then you will recieve a point!\nAt the end of the game, the person with the most points wins.\n\n');

//Asking for the user's names
let definedName1 = prompt ('You are player 1, What is your name?\n');
let definedName2 = prompt ('You are player 2, What is your name?\n');

//preselecting a random name (in case the user does not enter a name)
let randomName = ['Zoe', 'Anna', 'Xanthe', 'Abi', 'Ella'];

let randomName1 = Math.floor(Math.random() * randomName.length + 0);
let pickedRandomName1 = randomName[randomName1];

let randomName2 = Math.floor(Math.random() * randomName.length + 0);
let pickedRandomName2 = randomName[randomName2];


//depending on if the user enters their name/s or not, a differnet welcome message will appear.
if (definedName1 == '' && definedName2 == ''){
  console.log ('\n\nYou have each been assigned a random name!');
  console.log ('Hi, ' + pickedRandomName1+ ' and ' + pickedRandomName2 + ', get ready to play\n\n');

} else if (definedName1 != '' && definedName2 != ''){
  console.log ('Hi, ' + definedName1+ ' and ' + definedName2 + ', get ready to play\n\n');

} else if (definedName1 == '' && definedName2 != ''){
  console.log('Player 1, you have been assigned the random name ' + pickedRandomName1);
  console.log ('Hi, ' + pickedRandomName1+ ' and ' + definedName2 + ', get ready to play\n\n');

  } else if (definedName1 != '' && definedName2 == ''){
  console.log('Player 2, you have been assigned the random name ' + pickedRandomName2);
  console.log ('Hi, ' + definedName1+ ' and ' + pickedRandomName2 + ', get ready to play\n\n');
  }


//the value of players will either be their selected name or a random name
let player1 = (definedName1 || pickedRandomName1);
let player2 = (definedName2 || pickedRandomName2);


//setting a list of possible cards to be selected
let cards = ['an Ace (1)', 'a two', 'a three', 'a four','a five', 'a six', 'a seven', 'an eight', 'a nine', 'a ten', 'a Jack (11)', 'a Queen (12)', 'a King (13)']


//setting the round and points to 0
let round = 1;
let pointPlayer1 = 0;
let pointPlayer2 = 0;

let definedRound = prompt('How many rounds would you like to play for?\n');

while ((isNaN(definedRound)) || (definedRound < 1) || (definedRound == null) || (definedRound == ' ') || (definedRound % 1 != 0)) {
  console.log('Error: Not a valid number - Please enter a valid, whole number over 0');
  definedRound = prompt('How many rounds would you like to play for?\n');
}



play();
function play() {

//the varible randomCard will produce a random card number between 1 and 13. "nextRandomCard" will assign another number between 1 - 13 for the next card drawn.
// let randomCard = Math.floor(Math.random() * 13 + 1);
// let nextRandomCard = Math.floor(Math.random() * 13 + 1);

//main game = each player is presented with a random card number and has to guess if the following card number drawn will be higher or lower.
console.log('\nThe card drawn has a number value of ' + firstRandomCard + '\n');

do{
// randomCard = Math.floor(Math.random() * 13 + 1);
// nextRandomCard = Math.floor(Math.random() * 13 + 1);
let randomCard1 = Math.floor(Math.random() * cards.length + 0);
let firstRandomCard = cards[randomCard1];


let randomCard2 = Math.floor(Math.random() * cards.length + 0);
let nextRandomCard = cards[randomCard2];



  var guessPlayer1 = prompt( player1 + ', do you think the next card will have a higher or lower number value?\n');

      if (guessPlayer1=='' || guessPlayer1==null) {
          console.log('Error: no input');
          guessPlayer1 = prompt( player1 + ', do you think the next card will have a higher or lower number?\n');
  
      } else if (guessPlayer1 != 'higher' && guessPlayer1 != 'lower') {
        console.log('Error: Invalid response, please type \'higher\' or \'lower\'.');
        guessPlayer1 = prompt( player1 + ', do you think the next card will have a higher or lower number value?\n');

}


  let guessPlayer2 = prompt( player2 + ', do you think the next card will have a higher or lower number value?\n');

      if (guessPlayer1=='' || guessPlayer1==null) {
          console.log('Error: no input')
          guessPlayer1 = prompt( player1 + ', do you think the next card will have a higher or lower number value?\n');
  
      } else if (guessPlayer1 != 'higher' && guessPlayer1 != 'lower') {
        console.log('Error: Invalid response, please type \'higher\' or \'lower\'.')
      guessPlayer2 = prompt( player2 + ', do you think the next card will have a higher or lower number value?\n');

}

console.log('\nThe next card drawn has ' + nextRandomCard + ' on it, that means:')

    if (guessPlayer1=='higher'&&firstRandomCard<nextRandomCard 
    ||  guessPlayer1=='lower'&&firstRandomCard>nextRandomCard) {
			console.log(player1 + ' you are correct!');
      pointPlayer1++

		} else if (guessPlayer1=='higher'&&firstRandomCard>nextRandomCard 
    ||  guessPlayer1=='lower'&&firstRandomCard<nextRandomCard) {
			console.log(player1 + ' you are incorrect!');
		} 

    if (guessPlayer2=='higher'&&firstRandomCard<nextRandomCard 
    ||  guessPlayer2=='lower'&&firstRandomCard>nextRandomCard) {
			console.log(player2 + ' you are correct!\n\n');
      pointPlayer2++

		} else if (guessPlayer2=='higher'&&firstRandomCard>nextRandomCard 
    ||  guessPlayer2=='lower'&&firstRandomCard<nextRandomCard) {
			console.log(player2 + ' you are incorrect!\n\n');
		} 


    // break;

round++

  


// the players play for the amount o rounds they set to the variable "definedRound"
} while (round <= definedRound){

}

console.log(player1 + ', you have ' + pointPlayer1 + ' points.');
console.log(player2 + ', you have ' + pointPlayer2 + ' points.')

if (pointPlayer1 > pointPlayer2){
  console.log('Congradulations ' + player1 + ', you win the game!')
} else if (pointPlayer1 < pointPlayer1){
  console.log('Congradulations ' + player2 + ', you win the game!')
} else if (pointPlayer1 == pointPlayer2){
  console.log('its a tie!')
}
// after the 3 chances, the user is asked if they want to play again or not.
let again = prompt ('Do you want to play again?');

if (again =='yes') {
  play();
} else{
	console.log('Game Over, Thanks for playing!');
}
}