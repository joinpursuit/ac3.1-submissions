var button = document.createElement('button');
document.body.appendChild(button);
var buttonText = document.createTextNode("First Button");
button.appendChild(buttonText);

button.setAttribute('id', 'first-button');

document.getElementById('first-button').addEventListener('click', function(){
	console.log("Clicked the first button.");
	document.body.style.backgroundColor = "magenta";
})

var newButton = document.createElement('button');
document.body.appendChild(newButton);
var buttonText2 = document.createTextNode("Second Button");
newButton.appendChild(buttonText2);

newButton.setAttribute('id', 'second-button');

document.getElementById('second-button').addEventListener('click', function(){
	var anything = document.createElement('button');
	document.body.appendChild(anything);
})

var image = document.createElement('img');
document.body.appendChild(image);
image.setAttribute('src', 'http://s.cdpn.io/4579/memeConsole.JPG');

image.addEventListener('mouseenter', function(){
	image.setAttribute('src', 'http://learnhtmlwithsong.com/blog/wp-content/uploads/2014/12/errors-everywhere-meme.png');
})

image.addEventListener('mouseleave', function(){
	image.setAttribute('src', 'http://s.cdpn.io/4579/memeConsole.JPG');
})

var unOrdered = document.createElement('ul');
document.body.appendChild(unOrdered);

var item1 = document.createElement('li');
item1.innerHTML = "ERROR 1";
unOrdered.appendChild(item1);

var item2 = document.createElement('li');
item2.innerHTML = "ERROR 2";
unOrdered.appendChild(item2);

var item3 = document.createElement('li');
item3.innerHTML = "ERROR 3";
unOrdered.appendChild(item3);

unOrdered.addEventListener('click', function(event){
	console.log(event.target.innerHTML)
})

