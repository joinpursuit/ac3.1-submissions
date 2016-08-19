var button1 = document.createElement('button');
button1.setAttribute('id', 'first-button');
button1.innerHTML = "Button One";

document.body.appendChild(button1);

button1.addEventListener('click', function() {
	console.log('Clicked the first button');
})

button1.addEventListener('click', function() {
	document.body.style.backgroundColor = 'magenta'
})


var button2 = document.createElement('button');
button1.setAttribute('id', 'second-button');
button2.innerHTML = 'Button Two';

document.body.appendChild(button2);

button2.addEventListener('click', function() {
	var newButton = document.createElement('button')
	newButton.innerHTML = "I'm A New Button"
	document.body.appendChild(newButton)
})

var image1 = document.createElement('img');
image1.src = "https://upload.wikimedia.org/wikipedia/id/thumb/2/2f/1bulbasaur.png/400px-1bulbasaur.png";

document.body.appendChild(image1);

image1.addEventListener('mouseover', function() {
	image1.src = "https://media.pocketmonsters.net/imageboard/49/13460786920047.gif";
})

image1.addEventListener('mouseleave', function() {
	image1.src = "https://upload.wikimedia.org/wikipedia/id/thumb/2/2f/1bulbasaur.png/400px-1bulbasaur.png";
})

var newUnorderedList = document.createElement('ul');
document.body.appendChild(newUnorderedList);

console.log(document.getElementsByTagName('ul')[0])

document.getElementsByTagName('ul')[0].addEventListener('click', function(event) {
	console.log(event.target.innerText + ' was clicked')
})

for (i = 0; i < 3; i++) {
	var newListItem = document.createElement('li');
	newUnorderedList.appendChild(newListItem);
	newListItem.innerHTML = "List Item";
}