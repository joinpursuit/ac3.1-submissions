
// Create a new 'div' element
var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'main-div');
document.body.appendChild(newDiv);


var para = document.createElement("P");                       // Create a <p> node
var text = document.createTextNode("This is my first  paragraph.");      // Create a text node
para.appendChild(text);// Append the text to <p>
document.getElementById("main-div").appendChild(para);//get  div& append para



var btn = document.createElement("BUTTON");// Create a <button> element
var btnText = document.createTextNode("CLICK ME");// Create a btnText
btn.appendChild(btnText);// Append the text to <button>
document.getElementById("main-div").appendChild(btn)//append btn to'main-div'


var para2 = document.createElement("P");
var para2Txt = document.createTextNode("This is my second paragraph.");
para2.appendChild(para2Txt);
document.getElementById("main-div").appendChild(para2);



//add class 'paragraph-text' paragraphs
para.classList. add('paragraph-text');
para2.classList.add('paragraph-text');

//add class using setAtribute 'paragraph-text' paragraphs
// para.setAttribute('class', 'paragraph-text')
// para2.setAttribute('class', 'paragraph-text')


//Create an ol 
var newList = document.createElement('ol');
//Create and append a single list item
document.getElementById("main-div").appendChild(newList);

var newListItem = document.createElement('li');
newListItem.innerHTML = 'Go to the store';
newList.appendChild(newListItem);



//Loop to create 5 list items&append to the list
for(var i = 0; i < 5; i++){
  var newListItem = document.createElement('li');
  var listText = document.createTextNode('List item ' + i);
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  newListItem.appendChild(listText);
  newListItem.insertBefore(checkbox, listText);
  newList.appendChild(newListItem);

}








//ignore the content under 
// document.getElementsByTag('ul')[0].addEventListener('click', function(event){
// 	console.log(event.target.innerHTML + ' was clicked')
// })


// para2.setAttribute('class','paragraph-text');
// document.body.appendChild(para2);




// newDiv.classList.add('main-div'); // Adding a 'main-div' id to div
// newDiv.classList.add('main-div-2');

// // Add a 'main-div' id to your div element (you can use the setAttribute method
// newDiv.setAttribute('id', 'main-div-class');
// console.log(newDiv);
// document.body.appendChild(newDiv);

// var newDiv2 = document.createElement('div');
// //Add multiple classes
// newDiv2.classList.add('main-div');
// newDiv2.classList.add('main-div-2');
// //Can also add classes using className
// newDiv2.className = 'main-div';
// document.body.appendChild(newDiv2);

// var newButton  = document.createElement('button');
// newButton.innerHTML = 'New Button';
// //One way to append child (this is the best practice way):
// newDiv.appendChild(newButton);
// //Another way to append child:
// // document.body.childNodes[2].appendChild(newButton);

// //getElementsByTagName and getElementsByClass will return an array
// console.log('DIVS:', document.getElementsByTagName('div'));

// var newList = document.createElement('ul');
// //Create and append a single list item
// var newListItem = document.createElement('li');
// newListItem.innerHTML = 'Go to the store';
// newList.appendChild(newListItem);

// //Loop to create 100 list items and append them all to the list
// for(var i = 0; i < 100; i++){
//   var newListItem = document.createElement('li');
//   var listText = document.createTextNode('List item ' + i);
//   var checkbox = document.createElement('input');
//   checkbox.type = "checkbox";
//   newListItem.appendChild(listText);
//   newList.appendChild(newListItem);
//   newListItem.insertBefore(checkbox, listText);
// }

// //Append the new list to the body
// document.body.appendChild(newList);