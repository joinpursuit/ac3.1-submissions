document.title ="To Do List"

var para = document.createElement('p')
var title = document.createTextNode('To Do List!')
document.body.appendChild(para)
para.appendChild(title)

var input = document.createElement('input')
input.setAttribute("type", "text");
document.body.appendChild(input)

var button = document.createElement('button')
var text = document.createTextNode('Add Item')
button.appendChild(text)
document.body.appendChild(button)

var sortButton = document.createElement('button')
var text2 = document.createTextNode('Sort')
sortButton.appendChild(text2)
document.body.appendChild(sortButton)

var ul = document.createElement('ul')
document.body.appendChild(ul)


button.addEventListener('click', function(){

	var li = document.createElement('li')
	var textHolder = document.getElementsByTagName('input')[0].value

	var select = document.createElement('select')
	var option = document.createElement('option')
	option.text = '1'
	select.appendChild(option)

	var option2 = document.createElement('option')
	option2.text = '2'
	select.appendChild(option2)

	var option3 = document.createElement('option')
	option3.text = '3'
	select.appendChild(option3)

	var option4 = document.createElement('option')
	option4.text = '4'
	select.appendChild(option4)

	var option5 = document.createElement('option')
	option5.text = '5'
	select.appendChild(option5)

	ul.appendChild(li)
	li.appendChild(document.createTextNode(textHolder))
	li.appendChild(select)
})


ul.addEventListener('dblclick', function(event){
	var myList = event.target
	myList.remove(myList)
})


sortButton.addEventListener('click', function(){
	var selectArr = document.getElementsByTagName('select')
	console.log(selectArr)
	var array = []
	for(var j = 0; j < selectArr.length; j++){
		array.push(selectArr.options[i])
		console.log(array)
	}


	for(var i = 0; i < selectArr.length; i++){
		if(selectArr.options[i] < 2 ){
			selectArr.push(selectArr.options[i])
		} 
	}
})

//put everyting in array and delete from page, sort aray put back on page 

