var counter = 0;
document.getElementsByTagName('button')[0].addEventListener("click" , function(){
	switch (counter){
		case 0 :
			alert("i said don't click MY BUTTON please don't do it again!!!");
			break;
		case 1 :
			alert("I'm warning you!");
			break;
		case 2 :
			alert(" don't click MY BUTTON");
			setInterval(function(){
				var colors = ["red", "green" , "blue" , "yellow" , "pink"];
				document.body.setAttribute("style" , "background-color:"+colors[Math.floor(Math.random() * colors.length-1)]);
			},10)
			break;
		case 3 :
			alert("ooooo your introuble now!!!! self destruction activated!!!");
			setInterval(function(){alert("DON'T CLICK MY DAMN BUTTON EVER AGAIN OR ELSE!!!!! IT WILL BE death!!!!"), 3000});
			break;
	}
	counter ++;
});