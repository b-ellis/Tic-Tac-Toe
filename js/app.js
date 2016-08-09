	var Player = "X";
	var chosenSquares = {
		"X" : [],
		"O" : []
	};
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

	/*var board = []; board[0] = [1,2,3]; board[1] = [4,5,6]; board[2] = [7,8,9];
	for (var i = 0 ; i < board.length ; i++) { 
		for(var j = 0 ; j < board[i].length ; j++) { 
		}
	}*/

	function startGame(){
		$('.info').html(Player + " Goes First")
	};

	function whosturn(){
		$('.info').html(Player + "'s Turn");
		changePlayer();
	};

	function newGame(){
		$('.new').click(function(){
		})
	};

	function changePlayer(){
		if (Player === "X"){
			Player = "O";
		} else {
			Player = "X";
		};
	};

	function gamePlay(){
		var $square = $(event.currentTarget);
		var indexOfSquare = $('.board .square').index($square);  		
		var currentPlayerSquares = chosenSquares[Player]
	  	currentPlayerSquares.push(indexOfSquare);
	  	whosturn();

  		$.each(winningcombos, function(index, combos){
			var hasAllSquares = true;

			$.each(combos, function(index, square){
				if($.inArray(square,currentPlayerSquares) === -1){
					hasAllSquares = false;
				}
			})

			if(hasAllSquares){
				$('.info').html(Player + " wins");
			}
		});
		changePlayer();
	};

$(document).ready(function(){

	startGame();
	$('.square').one("click", function(){
		$(this).html(Player);
		whosturn();
		gamePlay();
	});

});