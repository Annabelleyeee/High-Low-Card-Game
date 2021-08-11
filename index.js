console.log('Welcome to this Card Guessing Game')
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