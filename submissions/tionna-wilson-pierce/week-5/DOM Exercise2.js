
	var newDiv = document.createElement('div');
	newDiv.idName = 'main-div';
	
	newDiv.setAttribute('id','main-div');
	console.log(newDiv);
	document.body.appendChild(newDiv);

	var newElement = document.createElement('p');
	newElement.innerHTML = "E N T E R N I T Y ";
	newDiv.appendChild(newElement);
	newElement.classList.add('paragraph-text');


	var newButton = document.createElement('button');
	newButton.className = "button1";
	newButton.innerHTML = "Click Here";
	newDiv.appendChild(newButton);


	var newElement2 = document.create('p');
	newElement2.innerHTML = " H E L L O ";
	newDiv.appendChild(newElement2);
	newElement2.classList.add('paragraph-text');

	var newList = document.createElement('ol');
	newDiv.appendChild(newList);

	var newListItem = document.createElement('li');
	newListItem.innerHTML = " Today "
	newList.appendChild(newListItem);

	for(var i = 0; i < 100 ; i++){
		var listText = document.createTextNode(' List Item ' + i);
		newListItem 
	}
	newListItem.appendChild('listitem');
	newList.appendChild(newListItem);
