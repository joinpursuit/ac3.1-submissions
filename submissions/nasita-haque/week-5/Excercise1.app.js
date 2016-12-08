var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'main-div-id');
document.body.appendChild(newDiv);

var para = document.createElement('p');
var text = document.createTextNode('I am a paragraph!')
para.appendChild(text)
document.body.appendChild(para)

newDiv.appendChild(para)

var button = document.createElement('button')
var text2 = document.createTextNode('I am a button!')
button.appendChild(text2)
document.body.appendChild(button)

newDiv.appendChild(button)

var para2 = document.createElement('p')
var text3 = document.createTextNode('I am another paragraph!')
para2.appendChild(text3)
document.body.appendChild(para2)

newDiv.appendChild(para2)

document.getElementsByTagName("p")[0].setAttribute("class", "paragraph-text");
document.getElementsByTagName("p")[1].setAttribute("class", "paragraph-text");


var ol = document.createElement('ol')
newDiv.appendChild(ol)

for(var i = 0; i <= 4; i++){
	var liItems = document.createElement('li') 
	var liText = document.createTextNode('I am an ordered list!')
	liItems.appendChild(liText)
	ol.appendChild(liItems)
	document.getElementsByTagName('li')[i].setAttribute('class', 'list-item')

}


document.getElementsByTagName('ol')[0].setAttribute('id','main-list')









