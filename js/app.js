

//Create the "is ready function"


$(function(){
	console.log("Everything is ready, let's do this");



//Define the players turn with a true/false value

//If the current state of the game is "false"- then it is Player One's Turn
//If current state is "true" then it is Player Two's Turn


//Variables for spots

var cell1 = $('#cell1');
var cell2 = $('#cell2');
var cell3 = $('#cell3');
var cell4 = $('#cell4');
var cell5 = $('#cell5');
var cell6 = $('#cell6');
var cell7 = $('#cell7');
var cell8 = $('#cell8');
var cell9 = $('#cell9');




var turns = 0;


$('#gameBoard tbody').on('click', 'td', function(){
	if(turns % 2===0){
		$(this).text("X").addClass('x');
	console.log(this);
	} else {
		$(this).text("O");
	console.log(this);
	}

	turns++;
	console.log(turns);
	if (turns > 8){
		alert("Game Over!");
		location.reload();
	}

});
		





});