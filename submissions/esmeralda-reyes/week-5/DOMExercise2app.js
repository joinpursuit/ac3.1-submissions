//Esmeralda
//create new 'div' element
var newDiv = document.createElement('div');
//add 'main-div' id to div element
newDiv.setAttribute('id', 'main-div');
//append new div to document.body
document.body.appendChild(newDiv);


//create a new p element
var newP = document.createElement('p');
//add some text to you paragraph
newP.innerHTML = "Hello World";
//append the p to the 'main-div'
document.getElementById('main-div').appendChild(newP);


//create a button element
var newButton = document.createElement('button');
//add some text to your new button
newButton.innerHTML = "I'm a buttons";
//append the button to the 'main-div'
document.getElementById('main-div').appendChild(newButton);

//create another p element
var secondP = document.createElement('p');
//add some text to your new paragraph
secondP.innerHTML = "This is my second paragraph.";
//append the new p to your 'main-div' underneath the button
document.getElementById('main-div').appendChild(secondP);
//add the class 'paragraph-text' to both of your p element
newP.setAttribute('class', 'paragraph-text');
secondP.setAttribute('class', 'paragraph-text');

//create an ol element
var list = document.createElement('ol');
//append the ol element to the main div
document.getElementById('main-div').appendChild(list);
//create five separate li items
var firstItem = document.createElement('li');
var secondItem = document.createElement('li');
var thirdItem = document.createElement('li');
var fourthItem = document.createElement('li');
var fifthItem = document.createElement('li');
//append the li items to the ol
document.getElementsByTagName("ol")[0].appendChild(firstItem);
document.getElementsByTagName("ol")[0].appendChild(secondItem);
document.getElementsByTagName("ol")[0].appendChild(thirdItem);
document.getElementsByTagName("ol")[0].appendChild(fourthItem);
document.getElementsByTagName("ol")[0].appendChild(fifthItem);
//add the class 'list-items' to each of the li elements
 firstItem.setAttribute('class', 'list-items');
 secondItem.setAttribute('class', 'list-items');
 thirdItem.setAttribute('class', 'list-items');
 fourthItem.setAttribute('class', 'list-items');
 fifthItem.setAttribute('class', 'list-items');
 //add the id 'main-list' to the ol
list.setAttribute('id', 'main-list');

