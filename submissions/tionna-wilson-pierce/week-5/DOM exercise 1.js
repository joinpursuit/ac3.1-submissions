var newDiv = document.createElement('div');
	newDiv.className ='div1';

	newDiv.setAttribute('id','main-div');
		console.log(newDiv);
		document.body.appendChild(newDiv);

var newButton = document.createElement('button');
	newButton = className='main-button';
	newButton.innerHTML ='Hey There! ';
	document.getElementsByTagName('div').appendChild(newButton);
	newButton.classList.add('btn');

var newButton2 = document.createElement('button2');
	newButton2 = className='second-button';
	newButton2.innerHTML='How are you today!?';
	document.getElementsByTagName('div').appendChild(newButton2);
	newButton2.classList.add('btn');

var list = document.createElement('ul');
	list.className='main-list';
	document.getElementsByTagName('div').appendChild(ul);
	list.classList.add('ul');

var item1 = document.createElement('li');
	item1.className='thing1';
	document.getElementByTagName('ul').appendChild(item1);
	item1.classList.add('list-item');

var item2 = document.createElement('li');
	item2.className='thing2';
	document.getElementByTagName('ul').appendChild(item2);
	item2.classList.add('list-item');

var item3 = document.createElement('li');
	item3.className='thing3';
	document.getElementByTagName('ul').appendChild(item3);
	item3.classList.add('list-item');
