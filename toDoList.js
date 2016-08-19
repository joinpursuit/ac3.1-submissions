window.onload= function(){
//create a list in the body
var b = document.getElementsByTagName('body')[0];
var list =document.createElement('ul');
b.appendChild(list);
//create an input element
var inputTag= document.createElement('input');
inputTag.setAttribute('type','text');
b.appendChild(inputTag);
//create a button element
var buttonAdd = document.createElement('button');
buttonAdd.innerHTML='Add Item';
b.appendChild(buttonAdd); 
var array=[];
//add an eventlistener to add list items in the input to the list 
buttonAdd.addEventListener('click',function(){
	//create a list item
	listItem = document.createElement('li');
	//append the list item to the list
	list.appendChild(listItem);
	var text = document.getElementsByTagName('input')[0].value;
	//add the value of the input to the list item
	listItem.innerHTML=text;
	//push element into an array
	
	var arr = array.push(listItem.innerHTML);
	console.log(array)
	//add a double click eventlistener to remove the item when double clicked
	listItem.addEventListener('dblclick',function(){
	this.remove();
	})
})
	var sortBtn= document.createElement('button');
	sortBtn.setAttribute('id','sort');
	b.appendChild(sortBtn).innerHTML= 'Sort';


	document.getElementById('sort').addEventListener('click',function(){
	
	})
	}
};
