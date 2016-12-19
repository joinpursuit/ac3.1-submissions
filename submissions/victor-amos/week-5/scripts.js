var newDiv = document.createElement('div');
newDiv.classList.add('main-div');
document.body.appendChild(newDiv);

var newP = document.createElement('p');
newP.innerHTML = 'Hello! This is a test.';
newDiv.appendChild(newP)

var newButton = document.createElement('button');
newButton.innerHTML = 'Click Me';
newDiv.appendChild(newButton);

var secondP = document.createElement('p');
secondP.innerHTML = 'This is more text!';
newDiv.appendChild(secondP);

// newP.classList.add('paragraph-text');
secondP.className = 'paragraph-text';
newP.className = 'paragraph-text';

var newOrderedList = document.createElement('ol');
newDiv.appendChild(newOrderedList);

for (i = 0; i < 5; i++) {
	var listItem = document.createElement('li')
	listItem.className = 'list-item';
	newOrderedList.appendChild(listItem);
}



// newOrderedList.innerHTML = '<li>One</li><li>Two</li><li>Three</li><li>Four</li><li>Five</li>'

// var listItems = document.getElementsByTagName('li');

// listItems.className = 'list-item';
newOrderedList.className = 'main-list';