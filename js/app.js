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

	function startGame(){
		$('.info').html(Player + " Goes First")
	};

	function whosturn(){
		changePlayer();
		$('.info').html(Player + "'s Turn");
	};

	function newGame(){
		// new game variable resets
		Player = "X";
		chosenSquares["X"] = [];
		chosenSquares["O"] = [];

		// VERY IMPORTANT -- remove single click event handler for cells from previous game
		// that have not been clicked.
		$('.square').unbind();

		startGame();
		// clear board
		$('.square').html("");

		// we use bind because jquery .one function can not have it's event handlers unregistered
		// and we need to unregister when starting a new game to avoid multiple event handler functions
		// executing and messing up logic.
		$('.square').bind("click", function(){
			// to simulate the behavious of .one() function, we unbind the event handler function
			// directly after the first click -- this makes a cell clickable only once.
			$(this).unbind();

			$(this).html(Player);
			if (gamePlay()) {
					whosturn();
			} else {
				setTimeout(newGame,1000);
			}
		});
	}

	function changePlayer(){
		if (Player === "X"){
			Player = "O";
		} else {
			Player = "X";
		};
	};


	function gamePlay(){
		var output = true;
		var $square = $(event.currentTarget);
		var indexOfSquare = $('.board .square').index($square);
		var currentPlayerSquares = chosenSquares[Player]
	  	currentPlayerSquares.push(indexOfSquare);

  		$.each(winningcombos, function(index, combo){

			var hasAllSquares = true;

			$.each(combo, function(index, square){
				if($.inArray(square,currentPlayerSquares) === -1){
					hasAllSquares = false;
					return false;
				}
			});

			if(hasAllSquares){
				$('.info').html(Player + " wins!");
				//alert("Player wins! game over !");
				output = false;
			}
		});
		return output;
	}

$(document).ready(function(){
	newGame();

	$('.new').click(function(){
		newGame();
	});
});
