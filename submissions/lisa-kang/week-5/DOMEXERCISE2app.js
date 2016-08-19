var newDiv = document.createElement("div");
newDiv.setAttribute("id", "main-div"); //newDiv.setAttribute('id', 'main-div-class');

document.body.appendChild(newDiv)

var newP = document.createElement("p")
newP.innerHTML = "whatever you want"
newDiv.appendChild(newP)

var button = document.createElement("button")
button.innerHTML = "some text"
newDiv.appendChild(button)

var anotherP = document.createElement("p")
anotherP.innerHTML = "some text"
newDiv.appendChild(anotherP)

newP.setAttribute("class", "paragraph-text")
anotherP.setAttribute("class", "paragraph-text")

var ordL = document.createElement("ol")
newDiv.appendChild(ordL)
ordL.setAttribute("id", "main-list")

// var arr = ["one", "two", "three", "four", "five"]
// for (var i = 0; i < 5; i++) {
// 	var ordItem = document.createElement("li")
// 	ordItem.innerHTML = arr[i]
// 	ordL.appendChild(ordItem)
// 	ordItem.setAttribute("class", "list-item")
// }

//make 3 li's and add a class to all 3 of them at once.
//ordItem.setAttribute("class", "list-item")

	var ordItem = document.createElement("li")
	ordL.appendChild(ordItem)
	
	var ordItem2 = document.createElement("li")
	ordL.appendChild(ordItem2)

	var ordItem3 = document.createElement("li")
	ordL.appendChild(ordItem3)

	var listArr = document.getElementsByTagName("li")
	for (var i = 0; i < listArr.length; i++) {
		listArr[i].setAttribute("class", "list-item")
	}




