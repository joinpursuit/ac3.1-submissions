
// Create a new 'div' element
// Add a 'main-div' id to your div element (you can use the setAttribute method)
// Append the new div element to the document.body

var newDiv = document.createElement('div');
newDiv.setAttribute('id','main-div');
document.body.appendChild(newDiv);

// Create a new p element
// Add some text to your paragraph. The text can say whatever you want.
// Append the p to the 'main-div'. Reload your index.html page and you should see your paragraph, with the text in it

var newP = document.createElement('p');
newP.innerHTML = "Hello World";
newDiv.appendChild(newP);

// Create a button element
// Add some text to your new button.
// Append the button to the 'main-div'. Reload your index.html page and you should see your two button and paragraph.

var newButt = document.createElement('button');
newButt.innerHTML = "Push IT";
newDiv.appendChild(newButt);


// Create another p element.
// Add some text to the new p element
// Append the new p to your 'main-div', underneath the button

var newerP = document.createElement('p');
newerP.innerHTML = "Goodbye World";
newDiv.appendChild(newerP);


// Add the class 'paragraph-text' to both of your p elements


console.log(document.getElementsByTagName('p'))


var selectP1 = document.getElementsByTagName('p')[0];
var selectP2 = document.getElementsByTagName('p')[1]
selectP1.setAttribute('class', 'paragraph-text');
selectP2.setAttribute('class', 'paragraph-text');	
// Create an ol (ordered-list) element
// Append the ol element to the main div

var newOL = document.createElement('ol');
newDiv.appendChild(newOL)


// Create five separate li (list) items
// Append the li items to the ol
// Add the class 'list-item' to each of the li elements

for(var i=0; i<5; i++){
	var newLI = document.createElement('li');
	var listText = document.createTextNode('List Item' + i);
	newLI.appendChild(listText);
	newLI.setAttribute('class', 'list-item');
	newOL.appendChild(newLI);
}

// Add the id 'main-list' to the ol

newOL.setAttribute('id', 'main-list');


