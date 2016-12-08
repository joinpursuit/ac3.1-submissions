// CREATE A BUTTON ELEMENT
var newButton = document.createElement('button');

// ADD SOME TEXT TO YOUR NEW BUTTON.
newButton.innerHTML = 'FIRST BUTTON';

// ADD THE 'FIRST-BUTTON' ID
newButton.setAttribute('id', 'first-button');

// APPEND THE BUTTON TO THE 'MAIN-DIV'. RELOAD YOUR INDEX.HTML PAGE AND YOU SHOULD SEE YOUR TWO BUTTON AND PARAGRAPH.
document.body.appendChild(newButton);

// ADD EVENT LISTENER #1
newButton.addEventListener('click', function(event){
	console.log('Clicked the ' + event.target.innerText);
})

// ADD EVENT LISTENER #2
newButton.addEventListener('click', function(event){
	document.body.style.backgroundColor = 'magenta';
})

// // CREATE A NEW BUTTON
var newButton2 = document.createElement('button');

// ADD SOME TEXT TO YOUR NEW BUTTON
newButton2.innerHTML = 'NEW BUTTON';

// ADD THE 'SECOND-BUTTON' ID
newButton2.setAttribute('id', 'second-button')

// ADD THE NEW BUTTON TO THE DOCUMENT BODY
document.body.appendChild(newButton2);

// ADD EVENT LISTENER #3
newButton2.addEventListener('click', function(event){
	var newButton2a = document.createElement('button')
	newButton2a.setAttribute('class','extra-button-2a')
	newButton2a.innerHTML = "BUTTON 2A"
	document.body.appendChild(newButton2a)
})

// CREATE A NEW BUTTON
var newButton3 = document.createElement('button')

// ADD SOME TEXT TO YOUR NEW BUTTON
newButton3.innerHTML = "DELETE: BUTTON 2A"

// ADD THE 'THIRD-BUTTON' ID
newButton3.setAttribute('id','third-button')

// ADD THE NEW BUTTON TO THE DOCUMENT BODY
document.body.insertBefore(newButton3,newButton2)

// REMOVE THOSE PESKY BUTTONS
var getButton2a = document.getElementsByClassName('extra-button-2a')
newButton3.addEventListener('click', function () {
	for(var i = 0; i < getButton2a.length; i++)
	getButton2a[i].remove(getButton2a[i])
})

// CREATE A NEW 'IMG ELEMENT'
var newImg = document.createElement('img');

// APPEND IMAGE TO DOCUMENT BODY
document.body.appendChild(newImg)

// ADD AN SRC ATTRIBUTE
newImg.setAttribute('src', 'http://placekitten.com/480/640')

// ADD AN EVENT LISTENER
newImg.addEventListener('mouseenter', function(){
	this.setAttribute('src','http://bit.ly/2b7wpQC')
	this.addEventListener('mouseleave', function(){
		this.setAttribute('src', 'http://placekitten.com/480/640')
	})
})

// CREATE A TITLE FOR THE UL LIST
var newTitle = document.createElement('h2')

// ADD TEXT TO NEW TAGS
newTitle.innerHTML = 'UNORDERED LIST'

// INSERT TITLE BEFORE LIST
document.body.insertBefore(newTitle, newUL)

// CREATE A NEW UL
var newUL = document.createElement('ul');

// APPEND UL TO DOCUMENT BODY
document.body.appendChild(newUL);

// CREATE THREE NEW LI ITEMS
for(var i = 0; i < 3; i++) {
	var newListItem = document.createElement('li');
	newListItem.innerHTML = 'List Item ' + (i + 1);
	newUL.appendChild(newListItem)
}

// ADD AN EVENT LISTENER TO THE UL
document.getElementsByTagName('ul')[0].addEventListener('click', function(event){
	console.log(event.target.innerText + ' was clicked')
})

