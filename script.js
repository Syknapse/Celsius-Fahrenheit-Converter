$(document).ready();

$("#celsius-to-f[type='number']").keypress(function(event){
	// listen to ENTER key
	if(event.which === 13){
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
		$("#message-f").append(celsius + String.fromCharCode(8451) + " is");
		//show fahrenheit value in output
		$("#output-f").append(fahrenheit + String.fromCharCode(8457));
		//change background depending on temp
		if (celsius < 10)
			$('#output-f').attr('class', 'cold');
		else if (celsius > 10 && celsius < 30)
			$('#output-f').attr('class', 'mild');
		else $('#output-f').attr('class', 'hot');
	}
});

$("#fahrenheit-to-c[type='number']").keypress(function(event){
	// listen to ENTER key
	if(event.which === 13){
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
		$("#message-c").append(fahrenheit + String.fromCharCode(8457) + " is");
		//show fahrenheit value in output
		$("#output-c").append(celsius + String.fromCharCode(8451));
		//change background depending on temp
		if (celsius < 10)
			$('#output-c').attr('class', 'cold');
		else if (celsius > 10 && celsius < 30)
			$('#output-c').attr('class', 'mild');
		else $('#output-c').attr('class', 'hot');
	}
});