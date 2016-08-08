$(document).ready(function(){
	
	var Player1 = "X"
	var Player2 = "O"

	var board = []; board[0] = [1,2,3]; board[1] = [4,5,6]; board[2] = [7,8,9];
	for (var i = 0 ; i < board.length ; i++) { 
		for(var j = 0 ; j < board[i].length ; j++) {   
		}
	}
	console.log(board);

	function changePlayer(){
		if (Player1 === "X"){
			Player1 = Player2;
		} else {
			Player1 = "X";
		};
	};

	$('.square').one("click", function(){
		$(this).html(Player1);
		changePlayer();
	});

	function checkWinner(){
		
	}

});