//create main div
var div = document.createElement('div');

//set an id to div
div.setAttribute('id','main-div')

//append div to body
document.body.appendChild(div)

//create p tag and add text to paragraph. Also append p tag to main div
var paraOne = document.createElement('p');
paraOne.innerHTML = 'Hello World!'
var main = document.getElementById('main-div')
main.appendChild(paraOne)

//create button tag
var button = document.createElement('button')
button.innerHTML = 'Click me!'
document.getElementById('main-div').appendChild(button)

//create p tag
var paraTwo = document.createElement('p')
paraTwo.innerHTML = 'My name is Daniel'
main.appendChild(paraTwo)
var tag = document.getElementsByTagName('p');

//add class attribute to p tags
for(var i = 0; i < tag.length; i++) {
	tag[i].setAttribute('class','paragraph-text');
}

//create ol tag
var ol = document.createElement('ol')
main.appendChild(ol)


// Add list items to OL tag. Also add classes and an id
for(var i = 0; i < 5; i++) {
	var li = document.createElement('li')
	ol.appendChild(li)
	li.classList.add('list-item')
	ol.setAttribute('id','main-list')
}
