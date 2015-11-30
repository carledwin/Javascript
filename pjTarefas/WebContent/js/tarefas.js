function load(){
	$("#tarefa").css("background-color","lightblue");
	}

$(load);


//verifica se a tecla Enter foi pressionada 
$("#tarefa").keydown(function(event){
	//13 - unicode Enter
	if(event.which === 13){
		console.log(event.which, String.fromCharCode(event.which));
	}
});


