
let flag=false;

window.onload = function() {
// attach the button to the click even
	$('#b1').on('click', writevalue);
	$('#b2').on('click', writevalue);
	$('#b3').on('click', writevalue);
	$('#b4').on('click', writevalue);
	$('#b5').on('click', writevalue);
	$('#b6').on('click', writevalue);
	$('#b7').on('click', writevalue);
	$('#b8').on('click', writevalue);
	$('#b9').on('click', writevalue);

// click event with anonymous function to start X first
	$('#Xstart').on('click', function(){
		flag=false;
	});
// click event with anonymous function to start O first
	$('#Ostart').on('click', function(){
		flag=true;
	});

// click event with anonymous function to reset the game
	$('#reset').on('click', function(){
	$(".column button").attr("disabled", "enable");
	$('.column button').text('');
	$('.column button').val('');
	location.reload(true);
	});
}

// the main game function

function  writevalue(){

		if(flag==false)
		{
			$(this).text('X');
			$(this).val('X');
			flag=true;
			// disable the button so the user can't change his mind
			$(this).attr("disabled","disabled");
			$(this).css('color', 'red');
		}
		else
		{
			$(this).text('O');
			$(this).val('O');
			flag=false;
			// disable the button so the user can't change his mind
			$(this).attr("disabled","disabled");
			$(this).css('color', 'blue');
		}
		// checkup to see if we have a winner
		if(finishgame('X'))
			$('.result').text("X Wins");
		if(finishgame('O'))
			$('.result').text("O Wins");

	
}


// the function that checks for winner
function finishgame(val){

if($('#b1').val()==val && $('#b2').val()==val && $('#b3').val()==val){	
	$('#b1').css('background', 'yellow');
	$('#b2').css('background', 'yellow');
	$('#b3').css('background', 'yellow');
	$(".column button").attr("disabled", "disabled");
	return true;
}

else if ($('#b4').val()==val && $('#b5').val()==val && $('#b6').val()==val){
	$('#b4').css('background', 'yellow');
	$('#b5').css('background', 'yellow');
	$('#b6').css('background', 'yellow');
	$(".column button").attr("disabled", "disabled");
	return true;
}
else if($('#b7').val()==val && $('#b8').val()==val && $('#b9').val()==val){
	$('#b7').css('background', 'yellow');
	$('#b8').css('background', 'yellow');
	$('#b9').css('background', 'yellow');
	$(".column button").attr("disabled", "disabled");
	return true;
}
else if($('#b1').val()==val && $('#b4').val()==val && $('#b7').val()==val){
	$('#b1').css('background', 'yellow');
	$('#b4').css('background', 'yellow');
	$('#b7').css('background', 'yellow');
	$(".column button").attr("disabled", "disabled");
	return true;
}
else if($('#b2').val()==val && $('#b5').val()==val && $('#b8').val()==val){
	$('#b2').css('background', 'yellow');
	$('#b5').css('background', 'yellow');
	$('#b8').css('background', 'yellow');
	$(".column button").attr("disabled", "disabled");
	return true;
}
else if($('#b3').val()==val && $('#b6').val()==val && $('#b9').val()==val){
	$('#b3').css('background', 'yellow');
	$('#b6').css('background', 'yellow');
	$('#b9').css('background', 'yellow');
	$(".column button").attr("disabled", "disabled");
	return true;
}
else if($('#b1').val()==val && $('#b5').val()==val && $('#b9').val()==val){
	$('#b1').css('background', 'yellow');
	$('#b5').css('background', 'yellow');
	$('#b9').css('background', 'yellow');
	$(".column button").attr("disabled", "disabled");
	return true;
}
else if($('#b3').val()==val && $('#b5').val()==val && $('#b7').val()==val){
	$('#b3').css('background', 'yellow');
	$('#b5').css('background', 'yellow');
	$('#b7').css('background', 'yellow');
	$(".column button").attr("disabled", "disabled");
	return true;
}
// if no winner return false
else 
	return false;
}
