// Do not edit your HTML file for any of these exercises. Only use DOM methods:

// Create a new 'button' element
// Add a 'first-button' id to your button element (you can use the setAttribute method)
// Append the new button element to the document.body
// Add an event listener to the button. When clicked, the button should log "Clicked the first button" to the console
// Add another event listener to the button. When clicked, the button should change the background color of the page body to 'magenta.' It should also still log "Clicked the first button" to the console



var button1 = document.createElement('button');
button1.setAttribute('id', 'first-button');
button1.innerHTML = "A Button"
document.body.appendChild(button1);
button1.addEventListener('click', function() {
    console.log("Clicked the first button")
    document.body.style.backgroundColor = 'magenta';

})

// Create a new 'button' element
// Add a 'second-button' id to your button element (you can use the setAttribute method)
// Append the new button element to the document.body
// Add an event listener to the second button. When clicked, the button should create a new button element and append it to the body of the document

var button2 = document.createElement('button');

button2.innerHTML = 'Another Button'
button2.setAttribute('id','second-button')
document.body.appendChild(button2)

button2.addEventListener('click',function(){
	var newButton = document.createElement('button');
	newButton.innerHTML = "Event-created Button"
	document.body.appendChild(newButton)

})

// Create a new img element
// Add a src attribute (you can use the setAttribute method) to your img, and a add a link to an image of your choice
// Append the img to document.body
// Add an event listener to the image. When you hover over the image, the image should change the src and be replaced by another image.
// Add another event listener to the image. When you stop hovering over the image, the image should change back to the original image.
var newImage = document.createElement('img')
newImage.setAttribute('src', 'https://67.media.tumblr.com/0db776203b692559b9f61bf4ea0c5058/tumblr_ncos3vJslM1qfzgyio1_500.gif')
document.body.appendChild(newImage)

newImage.addEventListener('mouseover',function(){
newImage.setAttribute('src','https://media.giphy.com/media/jtAOuoFiP5NxS/giphy.gif')
})

newImage.addEventListener('mouseleave',function(){
	newImage.setAttribute('src', 'https://67.media.tumblr.com/0db776203b692559b9f61bf4ea0c5058/tumblr_ncos3vJslM1qfzgyio1_500.gif')
})

// Create a new ul element
// Create three li elements and append them all to the ul
// Append the ul element to document.body
// Add an event listener to the ul. Whenever a li item is clicked, the event listener should log out the text of that specific li item to the console. You should only have one event listener on the ul, you should not have individual event listeners on each li itemå


var newList =document.createElement('ul')
document.body.appendChild(newList)

function makeList() {
    for (i = 0; i < 3; i++) {
        var listItem = document.createElement('li')
        newList.appendChild(listItem)
    }
}
makeList()

newList.addEventListener('click', function(){
	console.log()
})

