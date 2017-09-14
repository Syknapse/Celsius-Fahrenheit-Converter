$(document).ready();

$("#celsius-to-f[type='number']").keypress(function(event){
	// listen to ENTER key
	if(event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 9){
		//grab celsius value from input
		var celsius = $(this).val();
		//clear input and outputs
		$(this).val("");
		$("#output-f").empty();
		$("#message-f").empty();
		//convert to fahrenheit
		var fahrenheit = celsius * 9/5 + 32;
		//get integer or only 1 decimal place
		if (fahrenheit != parseInt(fahrenheit))
			fahrenheit = fahrenheit.toFixed(1);
		//display entered temp
		$("#message-f").append(celsius + "<sup>&#8451</sup>" + " is");
		//show fahrenheit value in output
		$("#output-f").append(fahrenheit + "<sup>&#8457</sup>");
		//change background depending on temp
		if (celsius < 10)
			$('#celsius').attr('class', 'cold');
		else if (celsius > 10 && celsius < 30)
			$('#celsius').attr('class', 'mild');
		else $('#celsius').attr('class', 'hot');
	}
});

$("#fahrenheit-to-c[type='number']").keypress(function(event){
	// listen to ENTER key
	if(event.which === 13 || event.keyCode === 32 || event.keyCode === 9){
		//grab fahrenheit value from input
		var fahrenheit = $(this).val();
		//clear input and outputs
		$(this).val("");
		$("#output-c").empty();
		$("#message-c").empty();
		//convert to celsius
		var celsius = 5/9 * (fahrenheit - 32);
		//get integer or only 1 decimal place
		if (celsius != parseInt(celsius))
			celsius = celsius.toFixed(1);
		//display entered temp
		$("#message-c").append(fahrenheit + "<sup>&#8457</sup>" + " is");
		//show fahrenheit value in output
		$("#output-c").append(celsius + "<sup>&#8451</sup>");
		//change background depending on temp
		if (celsius < 10)
			$('#fahrenheit').attr('class', 'cold');
		else if (celsius > 10 && celsius < 30)
			$('#fahrenheit').attr('class', 'mild');
		else $('#fahrenheit').attr('class', 'hot');
	}
});

// if (celsius < 1)
// 			$('#fahrenheit').attr('class', 'freezing');
// 		else if (celsius > 0 && celsius < 13)
// 			$('#fahrenheit').attr('class', 'cold');
// 		else if (celsius > 12 && celsius < 32)
// 			$('#fahrenheit').attr('class', 'mild');
// 		else $('#fahrenheit').attr('class', 'hot');

//reset button
$('.reset').click(function(){
	$("#celsius-to-f[type='number'], #fahrenheit-to-c[type='number']").val("");
	$("#output-f, #message-f, #output-c, #message-c").empty();
	$('#celsius, #fahrenheit').attr('class', 'background-transition');	
});
