// CREATE A NEW 'DIV'
var newDiv = document.createElement('div');

// ADD A 'MAIN-DIV' ID TO YOUR DIV ELEMENT W. SET ATTRIBUTE
newDiv.setAttribute('id', 'main-div');

// APPEND THE NEW DIV ELEMENT TO THE DOCUMENT.BODY
document.body.appendChild(newDiv);

// CREATE A NEW P ELEMENT
var newPar = document.createElement('p');

// ADD SOME TEXT TO YOUR PARAGRAPH. THE TEXT CAN SAY WHATEVER YOU WANT.
newPar.innerHTML = 'Whatever text I want in the first paragraph.';

// APPEND THE P TO THE 'MAIN-DIV'. RELOAD YOUR INDEX.HTML PAGE AND YOU SHOULD SEE YOUR PARAGRAPH, WITH THE TEXT IN IT
newDiv.appendChild(newPar);

// CREATE A BUTTON ELEMENT
var newButton = document.createElement('button');

// ADD SOME TEXT TO YOUR NEW BUTTON.
newButton.innerHTML = 'SOME TEXT ON THE NEW BUTTON';

// APPEND THE BUTTON TO THE 'MAIN-DIV'. RELOAD YOUR INDEX.HTML PAGE AND YOU SHOULD SEE YOUR TWO BUTTON AND PARAGRAPH.
newDiv.appendChild(newButton);

// CREATE ANOTHER P ELEMENT.
var newPar2 = document.createElement('p');

// ADD SOME TEXT TO THE NEW P ELEMENT
newPar2.innerHTML = 'Some text in the new Paragraph.';

// APPEND THE NEW P TO YOUR 'MAIN-DIV', UNDERNEATH THE BUTTON
newDiv.appendChild(newPar2);

// ADD THE CLASS 'PARAGRAPH-TEXT' TO BOTH OF YOUR P ELEMENTS
newPar.setAttribute('class','paragraph-text');
newPar2.setAttribute('class', 'paragraph-text')

// CREATE AN OL (ORDERED-LIST) ELEMENT
var newList = document.createElement('ol');

// ADD THE ID 'MAIN-LIST' TO THE OL
newList.id = 'main-list'

// APPEND THE OL ELEMENT TO THE MAIN DIV
newDiv.appendChild(newList)

// CREATE FIVE SEPARATE LI (LIST) ITEMS &
// ADD THE CLASS 'LIST-ITEM' TO EACH OF THE LI ELEMENTS
// APPEND THE LI ITEMS TO THE OL
for(var i = 0; i < 5; i++) {
var newListItem = document.createElement('li');
newListItem.innerHTML = "List Item:";
newListItem.className = 'list-tem'
newList.appendChild(newListItem)
}

var liArr = [].slice.call(document.getElementsByTagName('li'));

// NOTE: YOU CAN USE PASS EVENT THROUGH YOUR FUNCTION AND LOG ALL EVENTS ETC.
liArr.forEach(function(item){
	item.addEventListener('click', function(event){
		console.log('CLICK EVENT:',event)
		this.style.backgroundColor = "#96C0B7"
	})
})





