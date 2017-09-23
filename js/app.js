

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
	} else {
		$(this).text("O").addClass('o');
	}
	turns++;
	if (turns > 8){
		alert("Its a tie!");
		location.reload();
	}
	if(cell1.hasClass('x') && cell2.hasClass('x') && cell3.hasClass('x') ||
		cell4.hasClass('x') && cell5.hasClass('x') && cell6.hasClass('x') ||
		cell7.hasClass('x') && cell8.hasClass('x') && cell9.hasClass('x') ||
		cell1.hasClass('x') && cell5.hasClass('x') && cell9.hasClass('x') ||
		cell7.hasClass('x') && cell5.hasClass('x') && cell3.hasClass('x') ||
		cell1.hasClass('x') && cell4.hasClass('x') && cell7.hasClass('x') ||
		cell2.hasClass('x') && cell5.hasClass('x') && cell8.hasClass('x') ||
		cell3.hasClass('x') && cell6.hasClass('x') && cell9.hasClass('x')) {
		alert("Player X Has Won!");
		location.reload();
	}
	if(cell1.hasClass('o') && cell2.hasClass('o') && cell3.hasClass('o') ||
		cell4.hasClass('o') && cell5.hasClass('o') && cell6.hasClass('o') ||
		cell7.hasClass('o') && cell8.hasClass('o') && cell9.hasClass('o') ||
		cell1.hasClass('o') && cell5.hasClass('o') && cell9.hasClass('o') ||
		cell7.hasClass('o') && cell5.hasClass('o') && cell3.hasClass('o') ||
		cell1.hasClass('o') && cell4.hasClass('o') && cell7.hasClass('o') ||
		cell2.hasClass('o') && cell5.hasClass('o') && cell8.hasClass('o') ||
		cell3.hasClass('o') && cell6.hasClass('o') && cell9.hasClass('o')) {
		alert("Player O Has Won!");
		location.reload();
	}
});
	

});