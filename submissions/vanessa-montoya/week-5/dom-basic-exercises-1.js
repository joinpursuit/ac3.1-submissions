/1. Create a new 'div' element

var newDiv = document.createElement('div');

//2. Add a 'main-div' id to your div element (you can use the setAttribute method)

newDiv.setAttribute('id', 'main-div');

//3. Append the new div element to the document.body

document.body.appendChild(newDiv);

//4. Create a new button element

var button1 = document.createElement('button');

//5. Add some text to your button. The text can say whatever you want.

button1.innerHTML = 'First Button';

//6. Append the button to the 'main-div'. Reload your index.html page and you should see your button, with the text in it

newDiv.appendChild(button1);

//7. Create another button element

var button2 = document.createElement('button');

//8. Add some text to your new button. The text should be different than the first button.

button2.innerHTML = 'Second Button';

//9. Append the second button to the 'main-div'. Reload your index.html page and you should see your two buttons.

newDiv.appendChild(button2);

//10. Add the class 'btn' to both of your buttons

button1.className = 'btn'
button2.className = 'btn'

//11. Create an ul (unordered-list) element

var newList = document.createElement('ul');

//12. Append the ul element to the main div

newDiv.appendChild(newList);

//13. Create three separate li (list) items
//14. Append the li items to the ul
//15. Add the class 'list-item' to each of the li elements

for (var i = 0; i < 3; i++) {
    var item = document.createElement('li');
    newList.appendChild(item);
    item.className = 'list-item';
};

//16. Add the id 'main-list' to the ul

newList.id = 'main-list';
