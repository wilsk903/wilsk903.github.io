window.addEventListener("load", function(){

	var changeBlue = function(element){
		element.style.backgroundColor = "blue";
	}

	inView(".myrect").on("enter", changeBlue);
	

	inView(".myrect").on("enter", function(element){
	element.style.backgroundColor = "red"
	})

})