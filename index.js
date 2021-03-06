//Introduction to rules of game
console.log('Welcome to this Card Guessing Game!');

//adding white space for usability
console.log('--');

console.log('A card will be drawn from a deck and it is your job to guess if the next card drawn will have a higher or lower card number value on it.');

//adding white space for usability
console.log(' ');

console.log('If you guess correctly then you will receive a point! At the end of the game, the person with the most points wins.');

//adding white space for usability
console.log(' ');
console.log(' ');
console.log(' ');

//list of preselected names (in case the user does not enter a name)
let randomName = ['Zoe', 'Anna', 'Xanthe', 'Abi', 'Ella', 'Buttons', 'Superman', 'FruitPunch', 'Macbeth', 'Johannes', 'R2D2', 'Kath', 'Kim', 'Pamela'];

//setting the value of player 1's preselected name 
let randomName1 = Math.floor(Math.random() * randomName.length + 0);
let pickedRandomName1 = randomName[randomName1];

//Asking for the user's name (player 1)
let definedName1 = prompt('You are player 1, What is your name?');


//depending on if the user enters their name/s or not, a different welcome message will appear.
if (definedName1 == '') {
    console.log('Error: Empty input, you will be assigned a random name!');
    console.log('Welcome to the game, ' + pickedRandomName1);
    randomName.splice(randomName1, 1);
} else {
    console.log('Welcome to the game, ' + definedName1);
}

//adding white space for usability
console.log(' ');

//same conventions for the second player
let randomName2 = Math.floor(Math.random() * randomName.length + 0);
let pickedRandomName2 = randomName[randomName2];

let definedName2 = prompt('You are player 2, What is your name?');


if (definedName2 == '') {
    console.log('Error: Empty input, you will be assigned a random name!');
    console.log('Welcome to the game, ' + pickedRandomName2);
    randomName.splice(randomName2, 1);
} else {
    console.log('Welcome to the game ' + definedName2);
}
//adding white space for usability
console.log(' ');

//the value of players will either be their chosen name or a random name
let player1 = (definedName1 || pickedRandomName1);
let player2 = (definedName2 || pickedRandomName2);


play();

function play() {

  //setting the round and points to 0
let round = 0;
let pointPlayer1 = 0;
let pointPlayer2 = 0;


    //the player can choose the number of rounds they would like to play for
    let definedRound = prompt('How many rounds would you like to play for?');

    // setting boundaries and rules for valid and invalid inputs.
    while ((isNaN(definedRound)) || (definedRound < 1) || (definedRound == null) || (definedRound == ' ') || (definedRound % 1 != 0) || (definedRound > 52)) {
        console.log('Error: Not a valid number - Please enter a valid, whole numeral between 1 and 52 (there are only 52 cards in a Standard Deck');
        console.log(' ');
        definedRound = prompt('How many rounds would you like to play for?');
    }

    //adding space for usability
    console.log(' ');
    console.log(' ');
    console.log(' ');

    console.log('Okay ' + player1 + ' and ' + player2 + ', get ready to play!');

    //setting a list of possible cards from a deck to be selected
    let cards = ['an Ace (1)', 'a 2', 'a 3', 'a 4', 'a 5', 'a 6', 'a 7', 'an 8', 'a 9', 'a 10', 'a Jack (11)', 'a Queen (12)', 'a King (13)'];

        //math.floor gives each item in the "cards" list, a numerical value. The "Math.random" will select a random number from that list of numbers and  "randomNumber1" will hold that selected number as its value.
        let randomNumber1 = Math.floor(Math.random() * cards.length + 0);

        // "firstRandomCard" will have the value of whatever card from the "cards" list that corresponds to the random number set by "randomNumber1" - for example, if the random number generated is 0 then the first random card will be ace.
        let firstRandomCard = cards[randomNumber1];
      

          //main game = each player is presented with a random card number and has to guess if the following card number drawn will be higher or lower.
        console.log('The card drawn has ' + firstRandomCard + ' on it');

        //adding space for usability
        console.log(' ');

    do {
    
        //same conventions apply to the second card
        let randomNumber2 = Math.floor(Math.random() * cards.length + 0);
        let nextRandomCard = cards[randomNumber2];

        //checks to see if the second card is the same as the first
        while (randomNumber2 == randomNumber1) {
          // if it's the same it will pick a new card
           randomNumber2 = Math.floor(Math.random() * cards.length + 0);
           nextRandomCard = cards[randomNumber2];
        }



        //asking player 1 if they think the next card will be higher or lower
        let guessPlayer1 = prompt(player1 + ', do you think the next card will have a higher or lower number value?');

        //makes text the user inputted lowercase
        guessPlayer1 = guessPlayer1.toLowerCase();

        //setting boundaries and rules to test if valid or invalid response - an error message will appear if the answer isn't valid and the prompt will repeat.

        while (guessPlayer1 != 'higher' && guessPlayer1 != 'lower') {
            console.log('Error: Invalid response, please type \'higher\' or \'lower\'.');
            console.log(' ');
            guessPlayer1 = prompt(player1 + ', do you think the next card will have a higher or lower number value?');
             guessPlayer1 = guessPlayer1.toLowerCase();
        }
        //adding space for usability
        console.log(' ');


        //same for player 2
        let guessPlayer2 = prompt(player2 + ', do you think the next card will have a higher or lower number value?');
        guessPlayer2 = guessPlayer2.toLowerCase();

        while (guessPlayer2 != 'higher' && guessPlayer2 != 'lower') {
            
            console.log('Error: Invalid response, please type \'higher\' or \'lower\'.');
            console.log(' ');
            guessPlayer2 = prompt(player2 + ', do you think the next card will have a higher or lower number value?');
        }
        //adding space for usability
        console.log(' ');
        console.log(' ');
    


        //The program will say the value of the next card drawn
        console.log('The next card drawn has ' + nextRandomCard + ' on it, that means:');

        if (randomNumber1 < randomNumber2) {
            console.log('it has a HIGHER number value');
            // console.log('Number1 ' + randomNumber1 + ' Number2 ' + randomNumber2);
        } else if (randomNumber1 > randomNumber2) {
            console.log('it has a LOWER number value');
            // console.log('Number1 ' + randomNumber1 + ' Number2 ' + randomNumber2);
        }

        // determining who gets the points based on their response from earlier - if they were correct then they get a point, if they don't then they won't
        if (guessPlayer1 == 'higher' && randomNumber1 < randomNumber2 || guessPlayer1 == 'lower' && randomNumber1 > randomNumber2) {
            console.log(player1 + ' you are correct!');
            pointPlayer1++;

        } else if (guessPlayer1 == 'higher' && randomNumber1 > randomNumber2 || guessPlayer1 == 'lower' && randomNumber1 < randomNumber2) {
            console.log(player1 + ' you are incorrect!');
        }

        if (guessPlayer2 == 'higher' && randomNumber1 < randomNumber2 || guessPlayer2 == 'lower' && randomNumber1 > randomNumber2) {
            console.log(player2 + ' you are correct!');
            pointPlayer2++;

        } else if (guessPlayer2 == 'higher' && randomNumber1 > randomNumber2 || guessPlayer2 == 'lower' && randomNumber1 < randomNumber2) {
            console.log(player2 + ' you are incorrect!');
        }

        //at the end of the round, the value of the  becomes the second number so that when the next round plays, the "nextCardDrawn" is treated as the "firstCardDrawn" and a new card will become the "nextCardDrawn"
        randomNumber1 = randomNumber2;

        //One round is complete - will loop back to "do"
        round++;
        console.log(' ');

        // the players play for the amount of rounds they set to the variable "definedRound"
    } while (round < definedRound); {
       
    }
    //the points of each player are displayed
    console.log(player1 + ', you have ' + pointPlayer1 + ' points.');
    console.log(player2 + ', you have ' + pointPlayer2 + ' points.');

    //Whoever has the most points wins
    if (pointPlayer1 > pointPlayer2) {
        console.log('Congratulations ' + player1 + ', you win the game!');
    } else if (pointPlayer1 < pointPlayer2) {
        console.log('Congratulations ' + player2 + ', you win the game!');
    } else if (pointPlayer1 == pointPlayer2) {
        console.log('its a tie!');
    }

    console.log(' ');

    // The user is asked if they want to play again or not.
    let again = prompt('Do you want to play again?');
    
    //makes text the user inputted lowercase
        again = again.toLowerCase();

    while (again != 'yes' && again != 'no') {
        console.log('Error: Invalid response, please type \'yes\' or \'no\'.');
        console.log(' ');
        again = prompt('Do you want to play again?');
    }
    if (again == 'yes') {
        console.log(' ');
        console.log('Ok, let\'s reset!');
        console.log(' ');
        console.log(' ');

        play();
    } else if (again == 'no') {
        console.log(' ');
        console.log(' ');
        console.log('Game Over, Thanks for playing!');
    }
}