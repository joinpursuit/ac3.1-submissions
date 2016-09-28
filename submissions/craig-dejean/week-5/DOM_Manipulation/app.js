var div1 = document.createElement('div');
div1.classList.add('main-div');
div1.classList.add('main-div-2');

div1.setAttribute('id', 'main-div-class');
document.body.appendChild(div1);



var newP = document.createElement('p');
newP.innerHTML = "Hello my name is craig";
document.getElementsByClassName('main-div')[0].appendChild(newP);

var butt1 = document.createElement('button');
butt1.innerHTML = "click me";
div1.appendChild(butt1);

var newP = document.createElement('p');
newP.innerHTML = "My last name is Dejean";
document.getElementsByClassName('main-div-2')[0].appendChild(newP)

newP.classList.add('paragraph-text');

var oeruList = document.createElement('ol');
//var oeru = document.createElement('li');
//oeru.innerHTML = "Sakura"
//oeru.appendChild(oeruList);

for(var i = 0; i <= 5; i++){
	var oeru = document.createElement('li')
	oeru = document.innerHTML ='List iem ' + i;
	//oeru.appendChild(listText);
	oeruList.appendChild(oeru);
	
}


document.getElementsByClassName('main-div-2')[1].appendChild(oeruList);


