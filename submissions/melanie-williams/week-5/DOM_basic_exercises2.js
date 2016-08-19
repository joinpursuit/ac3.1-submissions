// Exercises

// Do not edit your HTML file for any of these exercises. Only use DOM methods:

// Create a new 'div' element

var newDiv = document.createElement('div');

// Add a 'main-div' id to your div element (you can use the setAttribute method)

newDiv.setAttribute('id', 'main-div');

// Append the new div element to the document.body

document.body.appendChild(newDiv);

// Create a new p element

var para1 = document.createElement('p');

// Add some text to your paragraph. The text can say whatever you want.

para1.innerHTML = 'This is a paragraph with some text in it.';

// Append the p to the 'main-div'. Reload your index.html page and you should see your paragraph, with the text in it

newDiv.appendChild(para1);
// here newDiv represents a new div object created inside the document object so we don't need to see document.newDiv because
// the document object is specified in the newDiv initialization

// Create a button element

var newButton = document.createElement('button');

// Add some text to your new button.

newButton.innerHTML = 'A Button';

// Append the button to the 'main-div'. Reload your index.html page and you should see your two button and paragraph.

newDiv.appendChild(newButton);

// Create another p element.

var para2 = document.createElement('p');

// Add some text to the new p element

para2.innerHTML = 'This is a new paragraph with text as well.';

// Append the new p to your 'main-div', underneath the button

newDiv.appendChild(para2);

// Add the class 'paragraph-text' to both of your p elements

var paras = document.getElementsByTagName('p')
for (var i = 0; i<paras.length; i++) {
	paras[i].setAttribute('class', 'paragraph-text');
}
// // here .setAttribute() can only be used to set the attribute of a specific element and not the entire array; if we
// // want to set the attribute of each paragraph element we have to loop over the paragraph array 

// var paras = document.getElementsByTagName('p')
// for (para in paras){
// 	para.setAttribute('class', 'paragraph-text');
// }
// // for...in can only be used to loop over an object; if it is used to loop over an array it will only return the index 
// // and not the element at that index


// Create an ol (ordered-list) element

var list1 = document.createElement('ol');

// Append the ol element to the main div

newDiv.appendChild(list1);

// Create five separate li (list) items

var item1 = document.createElement('li')
var item2 = document.createElement('li')
var item3 = document.createElement('li')
var item4 = document.createElement('li')
var item5 = document.createElement('li')

// Append the li items to the ol

// how do i append multiple child elements at once?
list1.appendChild(item1)
list1.appendChild(item2)
list1.appendChild(item3)
list1.appendChild(item4)
list1.appendChild(item5)


// Add the class 'list-item' to each of the li elements

var liElem = document.getElementsByTagName('li')
for (var i = 0; i < liElem.length; i++){
	liElem[i].setAttribute('class', 'list-item');
}


// Add the id 'main-list' to the ol

document.getElementsByTagName('ol')[0].setAttribute('id', 'main-list')

