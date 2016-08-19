//Create button tag and set to an id
var button = document.createElement('button')
button.setAttribute('id','first-button')
button.innerHTML = 'First button'

//Append button to the body tag
document.body.appendChild(button)

//Add an event listener to the first button
document.getElementById('first-button').addEventListener('click', function(){
	console.log('Clicked the first button')
})

//Add an event listener to change the color of the page
document.getElementById('first-button').addEventListener('click', function() {
	document.body.style.backgroundColor = 'magenta'
})


// _________________________________________________________//

//Create a new button element 
var buttonTwo = document.createElement('button')
buttonTwo.setAttribute('id','second-button')
buttonTwo.innerHTML = 'Second button'

//Append button to the body tag
document.body.appendChild(buttonTwo)

//Add an event listener to the second button to create new button
//and append button to the body tag
document.getElementById('second-button').addEventListener('click', function(){
	var buttonThree = document.createElement('button')
	document.body.appendChild(buttonThree)
})

//create new ing element
var img = document.createElement('img')
img.setAttribute('src','https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/870px-Arsenal_FC.svg.png')
document.body.appendChild(img)

//Add an eventlistener to img
document.getElementsByTagName('img')[0].addEventListener('mouseover', function(){
	img.setAttribute('src','http://www.fm-base.co.uk/forum/attachments/football-manager-2014-manager-stories/528519d1394883704-manchester-united-manchester-city-chelsea-arsenal-tottenham-liverpool-battle-barclays-premier-league-trophy11.jpg')
})


//Add an eventlistener to img
document.getElementsByTagName('img')[0].addEventListener('mouseleave', function(){
	img.setAttribute('src','https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/870px-Arsenal_FC.svg.png')
})


//Create a new ul element
var ul = document.createElement('ul')

//Create three li tags and append to ul
for(var i = 0; i < 3; i++) {
	var li = document.createElement('li')
	ul.appendChild(li)
	li.innerHTML = 'I am number ' + (i + 1)
}


//Append ul to the body
document.body.appendChild(ul)

//Add an event listener to the ul
document.getElementsByTagName('ul')[0].addEventListener('click', function(event){
  console.log(event.target.innerText + ' was clicked')
})
