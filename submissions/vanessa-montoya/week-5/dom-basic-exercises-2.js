//1.Create a new 'div' element

var newDiv = document.createElement('div');

//2. Add a 'main-div' id to your div element (you can use the setAttribute method)

newDiv.setAttribute('id', 'main-div');

//3. Append the new div element to the document.body

document.body.appendChild(newDiv);

//4. Create a new p element

var newP = document.createElement('p');

//5. Add some text to your paragraph. The text can say whatever you want.

newP.innerHTML = 'This is the first paragraph';

//6. Append the p to the 'main-div'. Reload your index.html page and you should see your paragraph, with the text in it

newDiv.appendChild(newP);

//7. Create a button element

var newButton = document.createElement('button');

//8. Add some text to your new button.

newButton.innerHTML = 'New Button';

//9.Append the button to the 'main-div'. Reload your index.html page and you should see your two button and paragraph.

newDiv.appendChild(newButton);

//10. Create another p element.

var newP1 = document.createElement('p');

//11.Add some text to the new p element

newP1.innerHTML = 'This is the second paragraph';

//12. Append the new p to your 'main-div', underneath the button

newDiv.appendChild(newP1);

//13. Add the class 'paragraph-text' to both of your p elements

newP.className = 'paragraph-text'
newP1.className = 'paragraph-text'

//14. Create an ol (ordered-list) element

var newList = document.createElement('ol');

//15. Append the ol element to the main div

newDiv.appendChild(newList);

//16. Create five separate li (list) items
//17. Append the li items to the ol
//18. Add the class 'list-item' to each of the li elements

for (var i = 0; i < 5; i++) {
    var item = document.createElement('li');
    newList.appendChild(item);
    item.className = 'list-item';
};

// var item1 = document.createElement('li');
// var item2 = document.createElement('li');
// var item3 = document.createElement('li');
// var item4 = document.createElement('li');
// var item5 = document.createElement('li');

//17. Append the li items to the ol

// newList.appendChild(item1);
// newList.appendChild(item2);
// newList.appendChild(item3);
// newList.appendChild(item4);
// newList.appendChild(item5);

//18. Add the class 'list-item' to each of the li elements

// item1.className = 'list-item';
// item2.className = 'list-item';
// item3.className = 'list-item';
// item4.className = 'list-item';
// item5.className = 'list-item';

//19. Add the id 'main-list' to the ol

newList.id = 'main-list';
