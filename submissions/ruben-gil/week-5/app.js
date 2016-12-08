var ul = makeElem('ul');
var input = makeElem('input');
var priorSelect = makeElem('select');
var sortSelect = makeElem('select')
var button = makeElem('button');
var searchInput = makeElem('input');
var searchButton = makeElem('button');
var sortOptions = ["-Sort-", "Priority"]


function makeElem(tag) {
	return document.createElement(tag);
}

document.body.appendChild(ul);
document.body.appendChild(input);
document.body.appendChild(priorSelect);
document.body.appendChild(sortSelect);
document.body.appendChild(button);
document.body.appendChild(makeElem('div'))
document.getElementsByTagName('div')[0].appendChild(searchInput);
document.getElementsByTagName('div')[0].appendChild(searchButton);

button.setAttribute('type', 'text');
button.innerHTML = 'Add Item';
searchButton.innerHTML = 'Search';


for(var i = 0; i < 5; i++){
	var option = makeElem('option');
	option.innerHTML = i + 1;
	option.setAttribute('value', i+1);
	priorSelect.appendChild(option)
}

sortOptions.forEach(function(x){
	option = makeElem('option');
	option.innerHTML = x;
	option.setAttribute('value', x);
	sortSelect.appendChild(option)
})




button.addEventListener('click', function(){ 
	if(input.value.split('').join('') !== ''){
		var li = makeElem('li');
		li.innerHTML = input.value;
		li.setAttribute('class', priorSelect.value);
		li.addEventListener('dblclick', function(){
			console.log(this);
			this.remove();
		})

		ul.appendChild(li);

		input.value = "";
	}
})


sortSelect.addEventListener('change', function(){
	var listItems = document.getElementsByTagName('li');
	listItems = [].slice.call(listItems);
	

	if(sortSelect.value === 'Priority'){
		listItems = listItems.sort(function(a, b){

			return a.className > b.className;
		})
	}
	
	ul.innerHTML = "";

	listItems.forEach(function(x){
		ul.appendChild(x);
	})
	
})




