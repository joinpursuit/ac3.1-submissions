//Create a new 'button' element

var newButt = document.createElement('button');
newButt.innerHTML = "button #1"

//Add a 'first-button' id to your button element (you can use the setAttribute method)

newButt.setAttribute('id', 'first-button');

//Append the new button element to the document.body

document.body.appendChild(newButt);

//Add an event listener to the button. When clicked, the button should log "Clicked the first button" to the console

var firstButt = document.getElementById('first-button');

document.getElementById('first-button').addEventListener('click', function(event){
	console.log("Clicked the first button")
});

//Add another event listener to the button. When clicked, the button should change the background color of the page body to 'magenta.' It should also still log "Clicked the first button" to the console

firstButt.addEventListener('click', function(event){
	document.body.style.backgroundColor = "magenta"
});

//Create a new 'button' element

var newButt2 = document.createElement('button');
newButt2.innerHTML = "button #2"

//Add a 'second-button' id to your button element (you can use the setAttribute method)

newButt2.setAttribute('id', 'second-button');

//Append the new button element to the document.body

document.body.appendChild(newButt2);

//Add an event listener to the second button. When clicked, the button should create a new button element and append it to the body of the document

var secondButt = document.getElementById('second-button');

secondButt.addEventListener('click', function(event){
	var Adds = document.createElement('button');
	document.body.appendChild(Adds);
});

//Create a new img element

var pic = document.createElement('img')

//Add a src attribute (you can use the setAttribute method) to your img, and a add a link to an image of your choice

pic.setAttribute('src', 'http://cdn.bulbagarden.net/upload/thumb/f/f4/035Clefairy.png/250px-035Clefairy.png')

//Append the img to document.body

document.body.appendChild(pic);

//Add an event listener to the image. When you hover over the image, the image should change the src and be replaced by another image.

var image = document.getElementsByTagName('img')[0];
image.addEventListener('mouseover', function(event){
	image.setAttribute('src', 'http://cdn.bulbagarden.net/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png')
});

//Add another event listener to the image. When you stop hovering over the image, the image should change back to the original image.

image.addEventListener('mouseout', function(event){
	image.setAttribute('src', 'http://cdn.bulbagarden.net/upload/thumb/f/f4/035Clefairy.png/250px-035Clefairy.png')
});

//Create a new ul element

var newUL = document.createElement('ul');

//Create three li elements and append them all to the ul

for(var i = 0; i<3; i++){
	var newLI = document.createElement('li');
	var listText = document.createTextNode('List Item '+i);
	newLI.appendChild(listText);
	newUL.appendChild(newLI)
}

//Append the ul element to document.body


document.body.appendChild(newUL);

//Add an event listener to the ul. Whenever a li item is clicked, the event listener should log out the text of that specific li item to the console. You should only have one event listener on the ul, you should not have individual event listeners on each li item

document.getElementsByTagName('ul')[0].addEventListener('click', function(event){
  console.log(event.target.innerText);
})
