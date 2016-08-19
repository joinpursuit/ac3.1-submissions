
var newDiv = document.createElement('div')
newDiv.setAttribute('id', 'main-div')
document.body.appendChild(newDiv)
var para = document.createElement('p')
var text = document.createTextNode('This is paragraph')
para.appendChild(text)
document.getElementsByTagName('div')[0].appendChild(para)

var btn = document.createElement('Button')
var t = document.createTextNode('Click me')
btn.appendChild(t)
document.getElementById('main-div').appendChild(btn)

var p2 = document.createElement('p')
var text2 = document.createTextNode('This is new pargraph that will be getting lengtht')
p2.appendChild(text2)
document.getElementById('main-div').appendChild(p2)
p2.setAttribute('class', 'paragraph-text')

var orderList = document.createElement('ol')
document.getElementById('main-div').appendChild(orderList);
for(var i = 1 ; i < 6 ; i++){
	var listItem = document.createElement('li')
	listItem.setAttribute('class', 'list-item')
	var listText = document.createTextNode('listItem' + i)
    listItem.appendChild(listText)
    orderList.appendChild(listItem)
   
   
}
orderList.setAttribute('class','main-list')    














