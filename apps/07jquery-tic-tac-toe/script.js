'use strict';

$(document).on('ready', function() {

	var playerTurn = "X";

	 
	function changePlayer() {
	  playerTurn = (playerTurn === "X") ? "O" : "X";
	}


	function horizontalWin() {
	    return ( $('[data-cell="0"]').text() === $('[data-cell="1"]').text() && $('[data-cell="1"]').text() === $('[data-cell="2"]').text() ) || 
	    ( $('[data-cell="3"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text() === $('[data-cell="5"]').text() ) ||
	    ( $('[data-cell="6"]').text() === $('[data-cell="7"]').text() && $('[data-cell="7"]').text() === $('[data-cell="8"]').text() );
	}


	function verticalWin() {
	    return ( $('[data-cell="0"]').text() === $('[data-cell="3"]').text() && $('[data-cell="3"]').text() === $('[data-cell="6"]').text() ) || 
		( $('[data-cell="1"]').text() === $('[data-cell="4"]').text() && $('[data-cell="4"]').text() === $('[data-cell="7"]').text() ) || 
		( $('[data-cell="2"]').text() === $('[data-cell="5"]').text() && $('[data-cell="5"]').text() === $('[data-cell="8"]').text() );
	}


	function diagonalWin() {
	    return ( $('[data-cell="0"]').text() === $('[data-cell="4"]').text() && $('[data-cell="0"]').text() === $('[data-cell="8"]').text() ) || 
	    ( $('[data-cell="2"]').text() === $('[data-cell="4"]').text() && $('[data-cell="2"]').text() === $('[data-cell="6"]').text() );
	}


	function checkForWin() {
	    return diagonalWin() || verticalWin()  || horizontalWin();
	}

	window.checkForWin = checkForWin;
	window.diagonalWin = diagonalWin;
	window.horizontalWin = horizontalWin;
	window.verticalWin = verticalWin;


	//set all the click functions
	$('[data-cell]').click(function () {
		$(this).text(playerTurn);
		
		changePlayer();

		//checkForWin announce
		if (checkForWin()){
			$('#announce-winner').text('Player ' + playerTurn + 'Wins!!! OMG OMG OMG!!');
		}


		
	});

		
		



});
