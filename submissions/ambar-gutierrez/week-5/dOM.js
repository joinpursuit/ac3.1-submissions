var newDiv = document.createElement('div');

//Add a 'main-div' id to your div element (you can use the setAttribute method)

newDiv.setAttribute('id', 'main-div');// creats and id named main-div
document.body.appendChild(newDiv); //it append  the new div to the body
console.log(newDiv);


var newP = document.createElement('p');//creats a p
document.body.appendChild(newP)//appends the p

newP.innerHTML = "am adding text to a paragraph"
newDiv.appendChild(newP);


var button1 = document.createElement('button');
document.body.appendChild(button1)
button1.innerHTML = 'Im a button'
newDiv.appendChild(button1)

var anotherP = document.createElement('p');
document.body.appendChild(anotherP)
anotherP.innerHTML = "another paragraph"
newDiv.appendChild(anotherP);

document.getElementsByTagName('p')[0].setAttribute('class', 'paragraph-text')//adds a class to all p

var newOl = document.createElement('ol');
newDiv.appendChild(newOl);
newOl.setAttribute('class', 'main-list')


for(var i= 0; i < 5; i++){
	var newItem = document.createElement('li')
	newItem.innerHTML = i+1
	newDiv.appendChild(newItem)
	newItem.setAttribute('class', 'list-items')
}
