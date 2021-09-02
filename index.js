//Introduction to rules of game
console.log('Welcome to this Card Guessing Game!');

//adding space for usability
console.log('--');

console.log('A card will be drawn from a deck and it is your job to guess if the next card drawn will have a higher or lower card number value on it.');

//adding space for usability
console.log(' ');

console.log('If you guess correctly then you will recieve a point! At the end of the game, the person with the most points wins.');

//adding space for usability
console.log(' ');

//list of preselected names (in case the user does not enter a name)
let randomName = ['Zoe', 'Anna', 'Xanthe', 'Abi', 'Ella', 'Buttons', 'Superman', 'FruitPunch', 'Macbeth', 'Johannes', 'R2D2', 'Kath', 'Kim', 'Pamela'];

//setting the value of player 1's preselected name 
let randomName1 = Math.floor(Math.random() * randomName.length + 0);
let pickedRandomName1 = randomName[randomName1];

//Asking for the user's name (player 1)
let definedName1 = prompt('You are player 1, What is your name?');

//adding space for usability
console.log(' ');

//depending on if the user enters their name/s or not, a differnet welcome message will appear.
if (definedName1 == '') {
	console.log('Error: Empty input, you will be assigned a random name!');
	console.log('Welcome to the game, ' + pickedRandomName1);
	randomName.splice(randomName1, 1);
} else {
	console.log('Welcome to the game, ' + definedName1);
}

//adding space for usability
console.log(' ');

//same conventions for the second player
let randomName2 = Math.floor(Math.random() * randomName.length + 0);
let pickedRandomName2 = randomName[randomName2];

let definedName2 = prompt('You are player 2, What is your name?');

//adding space for usability
console.log(' ');

if (definedName2 == '') {
	console.log('Error: Empty input, you will be assigned a random name!');
	console.log('Welcome to the game, ' + pickedRandomName2);
	randomName.splice(randomName2, 1);
} else {
	console.log('Welcome to the game ' + definedName2);
}

 //adding space for usability
 console.log(' ')

//the value of players will either be their inputed name or a random name
let player1 = (definedName1 || pickedRandomName1);
let player2 = (definedName2 || pickedRandomName2);

console.log('Okay ' + player1 + ' and ' + player2 + ', get ready to play!');


//setting a list of possible cards from a deck to be selected
let cards = ['an Ace (1)', 'a 2', 'a 3', 'a 4', 'a 5', 'a 6', 'a 7', 'an 8', 'a 9', 'a 10', 'a Jack (11)', 'a Queen (12)', 'a King (13)'];


//setting the round and points to 0
let round = 1;
let pointPlayer1 = 0;
let pointPlayer2 = 0;



play();

function play() {

//the player can choose the number of rounds they would like to play for
let definedRound = prompt('How many rounds would you like to play for?');

//adding space for usability
console.log(' ');


// setting boundries and rules for valid and invalid inputs.
while ((isNaN(definedRound)) || (definedRound < 1) || (definedRound == null) || (definedRound == ' ') || (definedRound % 1 != 0)) {
  console.log(' ')
	console.log('Error: Not a valid number - Please enter a valid, whole numeral between 1 and 52 (there are only 52 cards in a Standard Deck');
  console.log(' ')
	definedRound = prompt('How many rounds would you like to play for?');
}

//adding space for usability
console.log(' ')

	//math.floor gives each item in the "cards" list, a numerical value. The "Math.random" will select a random number from that list of numbers and  "randomCard1" will hold that selected number as its value.
	let randomCard1 = Math.floor(Math.random() * cards.length + 0);

	// "firstRandomCard" will have the value of whatever card from the "cards" list that corresponds to the random number set by "randomCard1" - for example, if the random number generated is 1 then the first random card will be ace.
	let firstRandomCard = cards[randomCard1];

	//same conventions apply to the second card
	let randomCard2 = Math.floor(Math.random() * cards.length + 0);
	let nextRandomCard = cards[randomCard2];


	//main game = each player is presented with a random card number and has to guess if the following card number drawn will be higher or lower.
	console.log('The card drawn has ' + firstRandomCard + ' on it');
  //adding space for usability
  console.log(' ')

	do {

		randomCard1 = Math.floor(Math.random() * cards.length + 0);

		firstRandomCard = cards[randomCard1];


		randomCard2 = Math.floor(Math.random() * cards.length + 0);

		nextRandomCard = cards[randomCard2];


		//asking player 1 if they think the next card will be higher or lower
		var guessPlayer1 = prompt(player1 + ', do you think the next card will have a higher or lower number value?');

    //adding space for usability
    console.log(' ');

		//setting boundaries and rules to test if valid or invalid response - an error message will appear if the answer isnt valid and the prompt will repeat.

		while (guessPlayer1 != 'higher' && guessPlayer1 != 'lower' && guessPlayer1 != 'Higher' && guessPlayer1 != 'Lower' && guessPlayer1 != 'HIGHER' && guessPlayer1 != 'LOWER') {
      //adding space for usability
		  console.log(' ');
			console.log('Error: Invalid response, please type \'higher\' or \'lower\'.');
     
			guessPlayer1 = prompt(player1 + ', do you think the next card will have a higher or lower number value?');
      //adding space for usability
		  console.log(' ');
		}
    //adding space for usability
		console.log(' ');


		//same for player 2
		let guessPlayer2 = prompt(player2 + ', do you think the next card will have a higher or lower number value?');

		while (guessPlayer2 != 'higher' && guessPlayer2 != 'lower' && guessPlayer2 != 'Higher' && guessPlayer2 != 'Lower' && guessPlayer2 != 'HIGHER' && guessPlayer2 != 'LOWER') {
			console.log(' ');
			console.log('Error: Invalid response, please type \'higher\' or \'lower\'.');

			guessPlayer2 = prompt(player2 + ', do you think the next card will have a higher or lower number value?');
		}
    //adding space for usability
		console.log(' ');


		//The program will say the value of the next card drawn
		console.log('The next card drawn has ' + nextRandomCard + ' on it, that means:');

		if (firstRandomCard < nextRandomCard) {
			console.log('it has a HIGHER number value');
		} else if (firstRandomCard > nextRandomCard) {
			console.log('it has a LOWER number value');
		}


		// determining who gets the points based on their response from earlier - if they were correct then they get a point, if they don't then they won't
		if (guessPlayer1 == 'higher' && firstRandomCard < nextRandomCard || guessPlayer1 == 'lower' && firstRandomCard > nextRandomCard) {
			console.log(player1 + ' you are correct!');
			pointPlayer1++;

		} else if (guessPlayer1 == 'higher' && firstRandomCard > nextRandomCard || guessPlayer1 == 'lower' && firstRandomCard < nextRandomCard) {
			console.log(player1 + ' you are incorrect!');
		}

		if (guessPlayer2 == 'higher' && firstRandomCard < nextRandomCard || guessPlayer2 == 'lower' && firstRandomCard > nextRandomCard) {
			console.log(player2 + ' you are correct!');
			console.log(' ');
			console.log(' ');
			pointPlayer2++;

		} else if (guessPlayer2 == 'higher' && firstRandomCard > nextRandomCard || guessPlayer2 == 'lower' && firstRandomCard < nextRandomCard) {
			console.log(player2 + ' you are incorrect!');
			console.log(' ');
			console.log(' ');

		}

		//One round is complete
		round++;


		// the players play for the amount of rounds they set to the variable "definedRound"
	} while (round <= definedRound); {

	}
	//the points of each player are displayed
	console.log(player1 + ', you have ' + pointPlayer1 + ' points.');
	console.log(player2 + ', you have ' + pointPlayer2 + ' points.');

	//Whoever has the most points wins
	if (pointPlayer1 > pointPlayer2) {
		console.log('Congradulations ' + player1 + ', you win the game!');
	} else if (pointPlayer1 < pointPlayer1) {
		console.log('Congradulations ' + player2 + ', you win the game!');
	} else if (pointPlayer1 == pointPlayer2) {
		console.log('its a tie!');
	}

    console.log(' ')

	// The user is asked if they want to play again or not.
	let again = prompt('Do you want to play again?');

  while (again != 'yes' && again != 'Yes' && again != 'no' && again != 'No' ) {
    console.log(' ');
    console.log('Error: Invalid response, please type \'yes\' or \'no\'.');
    console.log(' ');
    again = prompt('Do you want to play again?');
 }
	if (again == 'yes' || again == 'Yes') {
		console.log(' ');
		console.log('Ok, let\'s reset!');
		console.log(' ');

		play();
	} else if (again == 'no' || again == 'No'){
    console.log(' ')
		console.log('Game Over, Thanks for playing!');
	}
}