// Exercises

// Do not edit your HTML file for any of these exercises. Only use DOM methods:

// Create a new 'button' element

var button1 = document.createElement('button');

// Add a 'first-button' id to your button element (you can use the setAttribute method)

button1.setAttribute('id', 'first-button');
button1.innerHTML = 'button1';
// console.log(button1);

// Append the new button element to the document.body

document.body.appendChild(button1);

// Add an event listener to the button. When clicked, the button should log "Clicked the first button" to the console

// button1.addEventListener('click', function(event) {
// 	console.log('Clicked the first button')
// })

// Add another event listener to the button. When clicked, the button should change the background color of the page 
// body to 'magenta.' It should also still log "Clicked the first button" to the console

button1.addEventListener('click', function(event) {
	console.log('Clicked the first button');
	document.body.style.backgroundColor = 'magenta';
})

// Create a new 'button' element

var button2 = document.createElement('button');
button2.innerHTML = 'button2'

// Add a 'second-button' id to your button element (you can use the setAttribute method)

button2.setAttribute('id', 'second-button');
// console.log(button2)

// Append the new button element to the document.body

document.body.appendChild(button2);

// Add an event listener to the second button. When clicked, the button should create a new button element and append 
// it to the body of the document

button2.addEventListener('click', function(event) {
	var button3 = document.createElement('button');
	button3.innerHTML = 'button3'
	document.body.appendChild(button3);
})

// Create a new img element

var newImg = document.createElement('img');
newImg.style.width = '400px';
newImg.style.height = 'auto';
// console.log(newImg)

// Add a src attribute (you can use the setAttribute method) to your img, and a add a link to an image of your choice

newImg.setAttribute('src', 'https://farm3.staticflickr.com/2025/2362739742_e7b2d97d7b_o.jpg');

// Append the img to document.body

document.body.appendChild(newImg);

// Add an event listener to the image. When you hover over the image, the image should change the src and be replaced 
// by another image.

newImg.addEventListener('mouseover', function(event) {
	newImg.setAttribute('src', 'http://sf.co.ua/12/12/wallpaper-728833.jpg');
})

// Add another event listener to the image. When you stop hovering over the image, the image should change back to the 
// original image.

newImg.addEventListener('mouseleave', function(event) {
	newImg.setAttribute('src', 'https://farm3.staticflickr.com/2025/2362739742_e7b2d97d7b_o.jpg');
})	

// Create a new ul element

var list1 = document.createElement('ul');

// Create three li elements and append them all to the ul

var item1 = document.createElement('li');
var item2 = document.createElement('li');
var item3 = document.createElement('li');

item1.innerHTML = 'Bicycle'

list1.appendChild(item1);
list1.appendChild(item2);
list1.appendChild(item3);

console.log(list1)

// Append the ul element to document.body

document.body.appendChild(list1);

// Add an event listener to the ul. Whenever a li item is clicked, the event listener should log out the text of that 
// specific li item to the console. You should only have one event listener on the ul, you should not have individual 
// event listeners on each li item

list1.addEventListener('click', function(event) {
	console.log(event.target.innerText)
})
