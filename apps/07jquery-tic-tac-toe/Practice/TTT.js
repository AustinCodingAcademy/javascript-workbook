var player1 = {
	mark: 'X',
	name: 'Player 1',
	style: 'player1_cell',
	score_el: 'player1_wins',
	wins: 0};

var player2 = {
	mark: 'O',
	name: 'Player 2',
	style: 'player2_cell',
	score_el: 'player2_wins',
	wins: 0
};
var players = [player1, player2];
var current_player = 0;
var num_of_cols = num_of_rows = 3;
$(document).ready(function(){
	$("#restart_game").bind("click", restartGame);
	// Expand jQuery with some selectors to help our goal
	$.expr[":"].mod = function(el, i, m) {
		return i % m[3] === 0
	};
	$.expr[":"].sub_mod = function(el, i, m) {
		var params = m[3].split(",");
		return (i-params[0]) % params[1] === 0
	};
	initGame();
});
function initGame(){
	$("#game_map").empty();
	for(var i=0; i<num_of_cols*num_of_rows;++i)
	{
		var cell = $("<div></div>")
					.addClass("cell")
					.appendTo("#game_map");
		// Add the line breaks
		if ( i % num_of_cols === 0 ){
			cell.before('<div class="clear"></div>');
		}

	}

	$("#game_map .cell")
		.bind("click", playMove)
		.bind('mouseover', hoverCell)
		.bind('mouseout', leaveCell);

	initTurn(current_player);
};
function disableGame(ev){
	$("#game_map .cell")
		.unbind("click")
		.unbind("mouseover")
		.unbind("mouseout");
};
function restartGame(ev){
	ev.preventDefault();
	$(".end_game").hide();
	current_player = 0;
	initGame();
	return false;
}
function playMove(ev){
	var cell = $(this);
	cell
		.addClass(players[current_player].style)
		.addClass("marked")
		.text(players[current_player].mark)
		.trigger("mouseout")
		.unbind("click mouseover mouseout");

	// Check if someone won
	if ( !checkAndProcessWin() ) {
		// Change the current player
		current_player = (++current_player) % players.length;
		initTurn(current_player);
	}
	return false;
};

function initTurn(){
	$("#player_name").text(players[current_player].name);
	$("#player_mark").text(players[current_player].mark);
};
function hoverCell(ev){
	$(this).addClass("hover");
	return false;
};
function leaveCell(ev){
	$(this).removeClass("hover");
	return false;
};

function checkAndProcessWin(){
	// Make it quick, don't check if we can't win
	var current_class = players[current_player].style;
	var marked_cells = $("#game_map ."+current_class);
	var win = false;
	if ( marked_cells.length >= num_of_cols )
	{
		/* Check the rows */
		var cells = $("#game_map .cell");
		var cells_inspected = {};
		for (var row=1; row <= num_of_rows && !win; ++row )
		{
			cells_inspected = cells
								.filter(":lt("+num_of_cols*row+")")
								.filter(":eq("+(num_of_cols*(row-1))+"),:gt("+(num_of_cols*(row-1))+")")
								.filter("."+current_class);
			if ( cells_inspected.length == num_of_cols ) win = true;
		}
		/* Check the cols */
		for (var col=0; col <= num_of_cols && !win; ++col )
		{
			cells_inspected = cells
								.filter(":sub_mod("+col+","+num_of_rows+")")
								.filter("."+current_class);

			if ( cells_inspected.length == num_of_rows ) win = true;
		}
		/* Check the diagonals */
		// We always have 2 diagonals
		// From left up to right down
		if ( !win )
		{
			cells_inspected = cells
								.filter(":mod("+(num_of_rows+1)+")")
								.filter("."+current_class);
			if ( cells_inspected.length == num_of_rows ) win = true;
			else{
				// From right down to left up
				cells_inspected = cells
									.filter(":mod("+(num_of_rows-1)+"):not(:last,:first)")
									.filter("."+current_class);
				if ( cells_inspected.length == num_of_rows ) win = true;
			}
		}
	}

	if ( win ){
		disableGame();
		cells_inspected.addClass("win");
		++players[current_player].wins;
		$("#winner #winner_name").text(players[current_player].name);
		$("#"+players[current_player].score_el).text(players[current_player].wins);
		$(".end_game").show();
	} else {

		// Save the trouble and just restart the game since it's a dead end
		if ( $("#game_map .marked").length == num_of_rows * num_of_cols ) $("#ask_restart").show();
	}
	return win;
};
