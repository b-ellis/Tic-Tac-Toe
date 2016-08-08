$(document).ready(function(){
	
	var Player = "X";
	var chosenSquares = {
		"X" : [],
		"O" : []
	};
	var gameOver = false;

	/*var board = []; board[0] = [1,2,3]; board[1] = [4,5,6]; board[2] = [7,8,9];
	for (var i = 0 ; i < board.length ; i++) { 
		for(var j = 0 ; j < board[i].length ; j++) { 
		}
	}*/

	function changePlayer(){
		if (Player === "X"){
			Player = "O";
		} else {
			Player = "X";
		};
	};

	$('.square').one("click", function(){
		$(this).html(Player);
		changePlayer();

		var $square = $(event.currentTarget);
		//console.log($square);

		var indexOfSquare = $('.board .square').index($square);
		//console.log(indexOfSquare);
	  		
		var currentPlayerSquares = chosenSquares[Player]
	  	//console.log(currentPlayerSquares);
	  	currentPlayerSquares.push(indexOfSquare);
  		console.log(chosenSquares);
	});


	var winningcombos = [
		//Horizontal
		[0,1,2],
		[3,4,5],
		[6,7,8],

		//Vertical
		[0,3,6],
		[1,4,7],
		[2,5,8],

		//Diagonal
		[0,4,8],
		[2,4,6]
	];

});