var img = document.createElement('img')
img.setAttribute('src', 'http://images.clipartpanda.com/sad-face-clipart-black-and-white-z7Tanj8iA.jpeg')
document.body.appendChild(img)


img.addEventListener('mouseover', function(){
	img.setAttribute('src', 'https://s-media-cache-ak0.pinimg.com/736x/65/27/13/6527130445cfe8de581251e6f33041c9.jpg')
})


img.addEventListener('mouseleave', function(){
	img.setAttribute('src', 'http://images.clipartpanda.com/sad-face-clipart-black-and-white-z7Tanj8iA.jpeg')
})


var ul = document.createElement('ul')

for(var i =0; i < 3; i++ ){
	var li = document.createElement('li')
	var text = document.createTextNode('Elements')
	li.appendChild(text)
	ul.appendChild(li)
}

document.body.appendChild(ul)

ul.addEventListener('click',function(event){
	console.log(event.target.innerText)
})


var button = document.createElement('button')
button.setAttribute('id', 'first-button')
document.body.appendChild(button)


button.addEventListener('click', function(){
	console.log('Clicked the first button')
	 document.body.style.backgroundColor = "magenta";
})


var button2 = document.createElement('button')
button.setAttribute('id', 'second-button')
document.body.appendChild(button2)


button2.addEventListener('click', function(){
	var newButton = document.createElement('button')
	document.body.appendChild(newButton)
})


