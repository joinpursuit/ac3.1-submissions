var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'main-div');
document.body.appendChild(newDiv);

var p1 = document.createElement('p');
p1.innerHTML = 'DOM DOM DOM DOM! UGH'
document.getElementById('main-div').appendChild(p1)

var newButton = document.createElement('button');
newButton.innerHTML = 'DOM DOM DOM DOM MORE DOM'
document.getElementById('main-div').appendChild(newButton)

var p2 = document.createElement('p');
p2.innerHTML = 'DOM DOM DOM MORE MORE DOM'
newDiv.appendChild(p2)

var tagP = document.getElementsByTagName('p')
tagP.className = 'paragraph-text'

var oList = document.createElement('ol');
newDiv.appendChild(oList)
oList.id = 'main-list'

for(var i = 0; i < 5; i++){
	var listItem = document.createElement('li')
oList.appendChild(listItem)
listItem.className = 'list-item'
}




