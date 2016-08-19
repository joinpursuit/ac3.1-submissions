var newButton = document.createElement('button');
newButton.setAttribute('id', 'first-button');
newButton.innerHTML = 'button 1'
document.body.appendChild(newButton);
newButton.addEventListener('click',function(){
	console.log("Clicked the first button")
})
newButton.addEventListener('click', function(){
	document.body.style.backgroundColor = 'magenta'
})
var newButton1 = document.createElement('button');
newButton1.innerHTML = 'button 2'
newButton1.setAttribute('id', 'second-button');
document.body.appendChild(newButton1);
newButton1.addEventListener('click', function(){
	var funcButton = document.createElement('button')
	document.body.appendChild(funcButton)
})
var newImg = document.createElement('img');
newImg.src = "http://images2.fanpop.com/image/photos/11300000/Robin-teen-titans-11301993-431-500.gif"
document.body.appendChild(newImg);
newImg.addEventListener('mouseover', function(){
	newImg.src = 'http://vignette2.wikia.nocookie.net/teentitans/images/e/e0/Deathstroke-Slade-teen-titans-villans-11120800-457-792.jpg/revision/latest?cb=20141017042714' 
})
newImg.addEventListener('mouseleave', function(){
	newImg.src = "http://images2.fanpop.com/image/photos/11300000/Robin-teen-titans-11301993-431-500.gif"
})
var newUl = document.createElement('ul');
document.body.appendChild(newUl);

for(var i = 0; i < 3; i++){
	var listItem = document.createElement('li')
newUl.appendChild(listItem)
listItem.innerHTML = "when clicked it will console log in the console."
}

newUl.addEventListener('click', function(event){
	console.log(event.target.innerText + ' was clicked')
})

