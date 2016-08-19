var todolist = document.createElement('ul');
var submit = document.createElement('button');
var itemInput = document.createElement('input');
submit.innerHTML = 'Add item';

// is there a proper order to do this? i know variables should be listed at the top, but should i create the event handler before i add the element to the page or vice versa?

document.body.appendChild(todolist);
document.body.appendChild(itemInput);
document.body.appendChild(submit);

submit.addEventListener('click', function(event) {
	var itemAdded = itemInput.value;
	var newItem = document.createElement('li');
	newItem.innerHTML = itemAdded;
	todolist.appendChild(newItem);
	console.log(newItem)
})

