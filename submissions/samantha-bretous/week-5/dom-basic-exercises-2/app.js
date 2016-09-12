var body = document.body;
// Create a new 'div' element
var divEl = document.createElement('div');
// Add a 'main-div' id to your div element (you can use the setAttribute method)
divEl.setAttribute("id", "main-div");
// Append the new div element to the document.body
body.appendChild(divEl);
// Create a new p element
var pEl = document.createElement('p');
// Add some text to your paragraph. The text can say whatever you want.
pEl.innerText = "this is a paragraph";
// Append the p to the 'main-div'. Reload your index.html page and you should see your paragraph, with the text in it
var mainDivEl = document.querySelector('#main-div')
mainDivEl.appendChild(pEl)
// Create a button element
var buttonEl = document.createElement('button')
// Add some text to your new button.
buttonEl.innerText = "Hi I am a button"
// Append the button to the 'main-div'. Reload your index.html page and you should see your two button and paragraph.
mainDivEl.appendChild(buttonEl)
// Create another p element.
var pEl2 = document.createElement('p')
// Add some text to the new p element
pEl2.innerText = "I'm the second paragraph"
// Append the new p to your 'main-div', underneath the button
mainDivEl.appendChild(pEl2)
// Add the class 'paragraph-text' to both of your p elements
document.querySelector('p').className = "paragraph-text"
// Create an ol (ordered-list) element
var olEl = document.createElement('ol')
// Append the ol element to the main div
mainDivEl.appendChild(olEl)
// Create five separate li (list) items
// Add the class 'list-item' to each of the li elements
//Append the li items to the ol
// Add the class 'list-item' to each of the li elements
for (var i = 0; i < 5; i++) {
  var listItem = document.createElement('li')
  listItem.setAttribute('class', "list-item")
  olEl.appendChild(listItem)
}

// Add the id 'main-list' to the ol
olEl.id = 'main-list'

// ******************* EVENT LISTENERS **************/
// ******************* EVENT LISTENERS **************/
// Create a new 'button' element
var butEl = document.createElement('button');
// Add a 'first-button' id to your button element (you can use the setAttribute method)
butEl.setAttribute('id', 'first-button');
butEl.innerText = "button1"
// Append the new button element to the document.body
body.appendChild(butEl);
// Add an event listener to the button. When clicked, the button should log "Clicked the first button" to the console
document.querySelector('#first-button').addEventListener('click', function (){
  console.log('Clicked the first-button');
})
// Add another event listener to the button. When clicked, the button should change the background color of the page body to 'magenta.' It should also still log "Clicked the first button" to the console
document.querySelector('#first-button').addEventListener('click', function (){
  body.style.backgroundColor = 'magenta';
})

// Create a new 'button' element
var but2El = document.createElement('button');
// Add a 'second-button' id to your button element (you can use the setAttribute method)
but2El.innerText = "button2"
but2El.setAttribute('id', 'second-button');
// Append the new button element to the document.body
body.appendChild(but2El)
// Add an event listener to the second button. When clicked, the button should create a new button element and append it to the body of the document
document.querySelector('#second-button').addEventListener('click', function (){
  var newButtonEl = document.createElement('button')
  newButtonEl.innerText = "New Button"
  body.appendChild(newButtonEl)
})
// Create a new img element
var imgEl = document.createElement('img')
// Add a src attribute (you can use the setAttribute method) to your img, and a add a link to an image of your choice
imgEl.setAttribute('src', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxbf6_3ciAMfL_AHcqWWjZxBiYKhsfFQ2-inYSUeE5Q8Ez2BnL');
// Append the img to document.body
body.appendChild(imgEl);
// Add an event listener to the image. When you hover over the image, the image should change the src and be replaced by another image.
document.querySelector('img').addEventListener('mouseover', function(){
  this.setAttribute('src', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSBodOz9APDnM20iXHofYZyZSJRez_HZj_LRvojDN-OCC36Elf4');
})
// Add another event listener to the image. When you stop hovering over the image, the image should change back to the original image.
document.querySelector('img').addEventListener('mouseleave', function (){
  this.setAttribute('src', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxbf6_3ciAMfL_AHcqWWjZxBiYKhsfFQ2-inYSUeE5Q8Ez2BnL');
})

// Create a new ul element
var ulEl = document.createElement('ul');
// Create three li elements and append them all to the ul
for (var i = 0; i < 3; i++) {
  var liEl = document.createElement('li')
  liEl.innerText = "list item " + i
  ulEl.appendChild(liEl)
}

// Append the ul element to document.body
body.appendChild(ulEl)
// Add an event listener to the ul. Whenever a li item is clicked, the event listener should log out the text of that specific li item to the console. You should only have one event listener on the ul, you should not have individual event listeners on each li item

document.querySelector('ul').addEventListener('click', function () {
  console.log("You clicked on " + event.target.innerText)
})


