var newDiv = document.createElement('div')

newDiv.setAttribute("id", "main-div")

console.log(newDiv)

document.body.appendChild(newDiv)

var newP = document.createElement('p')

newP.innerHTML = "Oh god DOM no, pls, no"

document.getElementById('main-div').appendChild(newP)

var newButt = document.createElement('button')

newButt.innerHTML = "I'm a button woo"

newDiv.appendChild(newButt)

var anotherP = document.createElement('p')

anotherP.innerHTML = "pls, DOM, noooooo"

newDiv.appendChild(anotherP)

document.getElementsByTagName('p')[0].className = 'paragraph-text'
document.getElementsByTagName('p')[1].className = 'paragraph-text'

var newOl = document.createElement('ol')

newDiv.appendChild(newOl)


function createLists() {
	for (var i = 0; i < 5; i++) {
		var newLi = document.createElement('li')
		newLi.className = "list-item"
		newOl.appendChild(newLi)
	}
}

createLists()

newOl.setAttribute("id", "main-list")

