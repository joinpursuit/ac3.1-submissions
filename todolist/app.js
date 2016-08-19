// // Do not edit your HTML file for any of these exercises. Only use DOM methods:

// Create a new 'div' element
var div = document.createElement('div')
// Add a 'main-div' id to your div element (you can use the setAttribute method)
div.setAttribute('id','main-div')
// console.log(div)
// Append the new div element to the document.body
document.body.appendChild(div)
// Create a new p element
var p = document.createElement('p')
// console.log(p)
// Add some text to your paragraph. The text can say whatever you want.
p.innerHTML='money cash respect power drugs'
// console.log(p)

// Append the p to the 'main-div'. Reload your index.html page and you should see your paragraph, with the text in it
document.getElementById('main-div').appendChild(p)
// Create a button element
var but = document.createElement('button')
// console.log(but)
// Add some text to your new button.
but.innerHTML='new button'
// Append the button to the 'main-div'. Reload your index.html page and you should see your two button and paragraph.
document.getElementById('main-div').appendChild(but)
// Create another p element.
var anotherp = document.createElement('p')
// Add some text to the new p element
anotherp.innerHTML='just another day living in the hood'
// Append the new p to your 'main-div', underneath the button
document.getElementById('main-div').appendChild(anotherp)
// Add the class 'paragraph-text' to both of your p elements
p.setAttribute('class','para')
anotherp.setAttribute('class','para')
// Create an ol (ordered-list) element
var ol = document.createElement('ol')
// console.log(ol)
// Append the ol element to the main div
document.getElementById('main-div').appendChild(ol)
// console.log(div)
// Create five separate li (list) items
for(var i = 0;i < 5; i++){
	ol.appendChild(document.createElement('li'))
}
// console.log(div)
// console.log(ol)
var li1 = document.createElement('li')
var li2 = document.createElement('li')
// Append the li items to the ol
ol.appendChild(li1)
ol.appendChild(li2)
// console.log(ol)

// Add the class 'list-item' to each of the li elements
// for(var i = 7; i < 7; i++){
	var counter = 0
	while(counter < 7 ){
	document.getElementsByTagName('li')[counter].setAttribute('class','list-item')
	counter++

}


// }
console.log(ol)
// Add the id 'main-list' to the ol
ol.setAttribute('id','main-list')
for(var i = 0; i < 6; i++){
	('ol').setAttribute('class','list-item')
	
}

// console.log(div)
// console.log(ol)


// Do not edit your HTML file for any of these exercises. Only use DOM methods:
// 
// Create a new 'button' element
var but2 = document.createElement('button')
but2.innerHTML='buttton'
// Add a 'first-button' id to your button element (you can use the setAttribute method)
but2.setAttribute('id','first-button')
// Append the new button element to the document.body
document.body.appendChild(but2)
// console.log(but2)
// Add an event listener to the button. When clicked, the button should log "Clicked the first button" to the console
document.getElementById('first-button').addEventListener('click', function(){
	console.log('clicked the first button')
})
// Add another event listener to the button. When clicked, the button should change the background color of the page body to 'magenta.' It should also still log "Clicked the first button" to the console
document.getElementById('first-button').addEventListener('click',function(){
// 	document.body.style.backgroundColor='red';
document.body.setAttribute('style','background-color:yellow')
})
// Create a new 'button' element
var but3 = document.createElement('button')
but3.innerHTML='new button 3'
// Add a 'second-button' id to your button element (you can use the setAttribute method)
but3.setAttribute('id','second-button')
console.log(but3)
// Append the new button element to the document.body
document.body.appendChild(but3)
// Add an event listener to the second button. When clicked, the button should create a new button element and append it to the body of the document
but3.addEventListener('click',function(){
	document.body.appendChild(document.createElement('button')).innerHTML='new buttons'
})
// Create a new img element
var image = document.createElement('img')
// Add a src attribute (you can use the setAttribute method) to your img, and a add a link to an image of your choice
image.setAttribute('src','http://cdn.shopify.com/s/files/1/0847/8186/files/july20151-739x1024_1024x1024.jpg?17429247875630218630')
// Append the img to document.body
document.body.appendChild(image)
// Add an event listener to the image. When you hover over the image, the image should change the src and be replaced by another image.
image.setAttribute('mouseenter',function(){
	this.setAttribute('src','http://imb.ulximg.com/image/src/artist/1392853723_dd7bf404602d4647b315404d9a76a123.jpg/5d4c5b81f923adce94da5a6b9f938bed/1392853723_frank_ocean_86.jpg')
})
// Add another event listener to the image. When you stop hovering over the image, the image should change back to the original image.
// Create a new ul element
var listy = document.createElement('ul')
// Create three li elements and append them all to the ul
var count = 0
while(count < 0){
	var lis = listy.appendChild(document.createElement('li'))
	var ulis = ul.appendChild(lis)
	document.createElement('li')
listy.appendChild(document.createElement('li'))

	count ++
}
console.log(listy)
// Append the ul element to document.body
// document.body.appendChild(ulis)
// Add an event listener to the ul. Whenever a li item is clicked, the event listener should log out the text of that specific li item to the console. You should only have one event listener on the ul, you should not have individual event listeners on each li item

ulis.addEventListener('click',function(){
	console.log(this)
})
