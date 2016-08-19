
var newDiv = document.createElement('div');
document.body.appendChild(newDiv);
 newDiv.setAttribute('id', 'main-div')
 var b1 = document.createElement('BUTTON');
 var t = document.createTextNode('Click me')
 b1.appendChild(t)
 document.getElementsByTagName('div')[0].appendChild(b1)
 
 var b2 = document.createElement('BUTTON');
 var t2 = document.createTextNode('Submit');
 b2.appendChild(t2)
 document.getElementsByTagName('div')[0].appendChild(b2)
 document.getElementsByTagName('BUTTON')[0].setAttribute('class', 'btn')
 document.getElementsByTagName('BUTTON')[1].setAttribute('class', 'btn')

 var oList = document.createElement('ol')
 document.getElementsByTagName('div')[0].appendChild(oList)

 for(var i =0 ; i <3 ; i++){
 	var li = document.createElement('li');
 	var text = document.createTextNode('List Item' + i)
 	li.appendChild(text);
 	//document.getElementsByTagName('div')[0].
 	oList.appendChild(li)
}

 for(var i = 0 ; i < 3 ; i++ ){
     document.getElementsByTagName('li')[i].setAttribute('class', 'List-item')
}
document.getElementsByTagName('ol')[0].setAttribute('id', 'main-list')







