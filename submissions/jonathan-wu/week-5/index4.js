// Instructions

// For an extra challenge, try making this entire app without writing anything 
// except for a <body></body> tag in your HTML file. 
// In other words, try to use DOM methods to add every single element and attribute onto the page.

// 1) Set up an empty <ul> in the <body> to insert stuff into. 
var newUl = document.createElement('ul')
document.body.appendChild(newUl)

// 2) Set up an <input> tag with type text to type what you want to add. 
var newInput = document.createElement('input')
document.body.appendChild(newInput)

// 3) Create a button tag with the test 'Add Item.' When clicked, the button should add 
// whatever text you have in the input box as a li item to your todo list.
var newBtn = document.createElement('button')
document.body.appendChild(newBtn)
newBtn.innerHTML = 'Add Item'

newBtn.addEventListener('click',function () {
var newLi = document.createElement('li')
newLi.innerHTML = newInput.value
newLi.setAttribute('class','li')
newUl.appendChild(newLi)
newInput.value=''
})

// var takeOut = function() {
// 	for (var i =0;i< arguments.length;i++) {
// 		document.getElementsByClassName('li')
// takeOut.addEventListener('dblclick"', function () {

// CHALLENGE: updated your app so that when you double click on an item it's removed from the list

var takeOut = Array.prototype.slice.call(document.getElementsByTagName("LI"))
	takeOut.forEach(function(item){
  	item.addEventListener('dblclick', function(event){
    newUl.removeChild(this)
  })
})

// CHALLENGE: add priority levels (for example, number your items 1-5 with 1 being the highest priority and 5 being lowest) and add in a button that, when clicked, will sort your list according to priority

// CHALLENGE: Create a <select> tag with <option> tags to sort items into different categories. 

// CHALLENGE: add a 'Search' input box that will filter your list depending on what you type in

// CHALLENGE: add a checkbox next to an item - when clicked, puts a line-through the item to indicate that you bought it!