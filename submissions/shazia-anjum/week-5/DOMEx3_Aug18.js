
var b1 = document.createElement('Button')
b1.setAttribute('id', 'first-button')
var b1Text = document.createTextNode('First Button');
b1.appendChild(b1Text)
document.body.appendChild(b1)

function clickMe(){
	console.log('Clicked the first button');
}
function bgColor(){
   document.body.style.backgroundColor ='magenta'
}
b1.addEventListener('click',function(event){
	clickMe();
	bgColor();
})

var b2 = document.createElement('Button')
b2.setAttribute('id', 'second-button')
var b2Text = document.createTextNode('Second Button')
b2.appendChild(b2Text)
document.body.appendChild(b2)
b2.addEventListener('click',function(){
	var b3 = document.createElement('Button')
	b3.setAttribute('id', 'third-button')
	var b3Text = document.createTextNode('Third Buttton')
	b3.appendChild(b3Text)
	document.body.appendChild(b3)
})

var image = document.createElement('img')
image.setAttribute('src' ,'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHW2zhu0H22EYxPQUp4Vs6sO22Uh1SoPWG9hHnVFHVjk8DQPIwI7u5Jw')
document.body.appendChild(image);

document.getElementsByTagName('img')[0].addEventListener('mouseover',function(){
image.setAttribute('src' , 'http://wondersofdisney.webs.com/mickeymouse/mickey/micktooncar.png')
})
document.getElementsByTagName('img')[0].addEventListener('mouseleave',function(){
image.setAttribute('src' , 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHW2zhu0H22EYxPQUp4Vs6sO22Uh1SoPWG9hHnVFHVjk8DQPIwI7u5Jw')
})

var unList = document.createElement('ul');
document.body.appendChild(unList); 
for(var i = 0 ; i < 3 ; i++){
	var listItem = document.createElement('li');
	var t = document.createTextNode('listItem' + i);
	listItem.appendChild(t);
	unList.appendChild(listItem)
}

//document.getElementsByTagName('ul').addEventListener('')



















