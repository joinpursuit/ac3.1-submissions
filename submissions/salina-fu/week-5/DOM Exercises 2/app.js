var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'main-div');
document.body.appendChild(newDiv);

var newP = document.createElement('p');
document.body.appendChild(newP);
var text = document.createTextNode("Hello World");
newP.appendChild(text);

newDiv.appendChild(newP);

var newButton = document.createElement('button');
document.body.appendChild(newButton);
var buttonText = document.createTextNode("Button Fun")
newButton.appendChild(buttonText)

newDiv.appendChild(newButton);

var anotherP = document.createElement ('p');
document.body.appendChild(anotherP);
var someText = document.createTextNode("It's me, Adele.")
anotherP.appendChild(someText);

newDiv.appendChild(anotherP);

document.getElementsByTagName('p')[0].className = "paragraph-text";
document.getElementsByTagName('p')[1].className = "paragraph-text";

var orderedList = document.createElement('ol');
document.body.appendChild(orderedList);
newDiv.appendChild(orderedList);

var item1 = document.createElement('li');
item1.innerHTML = "Chasing Pavements";
orderedList.appendChild(item1);

var item2 = document.createElement('li');
item2.innerHTML = "Hometown Glory";
orderedList.appendChild(item2);

var item3 = document.createElement('li');
item3.innerHTML = "Someone Like You";
orderedList.appendChild(item3);

var item4 = document.createElement('li');
item4.innerHTML = "Set Fire to the Rain";
orderedList.appendChild(item4);

var item5 = document.createElement('li');
item5.innerHTML = "Rolling in the Deep";
orderedList.appendChild(item5);

document.getElementsByTagName('li')[0].className = "list-item";
document.getElementsByTagName('li')[1].className = "list-item";
document.getElementsByTagName('li')[2].className = "list-item";
document.getElementsByTagName('li')[3].className = "list-item";
document.getElementsByTagName('li')[4].className = "list-item";

orderedList.setAttribute('id', 'main-list');



