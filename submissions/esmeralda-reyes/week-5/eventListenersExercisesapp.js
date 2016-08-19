//create a new button element
var button = document.createElement('button');
//add a 'first-nutton' id to your button element
button.setAttribute('id', 'first-button');
//append the button to th document.body
document.body.appendChild(button);
//add an event listener to the button. When clicked the button should change the background color of the page 'body' to 'magenta'. It should also still log "clicked the first button" to the console
document.getElementById('first-button').addEventListener('click', function(){
	this.style.backgroundColor = "magenta"
})
document.getElementById('first-button').addEventListener('click', function(){
	console.log("Clicked the first button")
})

//create a new button
var secondButton = document.createElement('button');
//add a 'second-button' id to your button element
secondButton.setAttribute('id', 'second-button');
//append the new button element to the document body
document.body.appendChild(secondButton);
//add an event listener to the second button. when clicked, the button should create a new button element and append it to the body of the document
document.getElementById('second-button').addEventListener('click', function(){
	var extraButtons = document.createElement('button');
	document.body.appendChild(extraButtons);
})


//create a new img element
var image = document.createElement('img');
//add a src attribute to your img, and add a link to an image of your choice
image.setAttribute('src', 'https://pixabay.com/static/uploads/photo/2013/03/04/20/59/aoraki-90388_960_720.jpg');
//append the img to document.body
document.body.appendChild(image);
//add an event listener to the image. when you hover over the image, the image should change the src and be replaced by another image
document.getElementsByTagName('img')[0].addEventListener('mouseover', function(){
	image.setAttribute('src', 'https://pixabay.com/static/uploads/photo/2016/02/04/23/04/alpine-1180065_960_720.jpg');
})

//add another event listener to the image. when you stop hovering over the image, the image should change back to the original image
document.getElementsByTagName('img')[0].addEventListener('mouseout', function(){
	image.setAttribute('src', 'https://pixabay.com/static/uploads/photo/2013/03/04/20/59/aoraki-90388_960_720.jpg');
})

//create a new ul element
var list = document.createElement('ul');

//create three li elements and append them all to the ul
for (var i = 0; i < 3; i++){
	var newListItem = document.createElement('li');
	var textInsideList = document.createTextNode("I am item " + i)
	list.appendChild(newListItem);
	newListItem.appendChild(textInsideList);
}

//append the ul element to document.body
document.body.appendChild(list);

//add an event listener to the ul. whenever a li item is clicked, the event listerner should log out the text of that specific li item to the console. you should only have one event listener on the ul, you should not have individual listeners on each li item
document.getElementsByTagName('ul')[0].addEventListener('click', function(event){
	console.log(event.target.innerText)
})


