//exercise 2

var newDiv = document.createElement("div");

newDiv.setAttribute("id", "main-div")

document.body.appendChild(newDiv)

var newP = document.createElement("p")

newP.innerHTML = "Hey";

document.getElementsByTagName("div")[0].appendChild(newP);

var newB = document.createElement("button")

newB.innerHTML = "Click Me"

document.getElementsByTagName("div")[0].appendChild(newB)

var newP2 = document.createElement("p")

newP2.innerHTML = "Hey Again";

document.getElementsByTagName("div")[0].appendChild(newP2)

document.getElementsByTagName("p").setAttribute("class", "paragraph-text")


var newOl = document.createElement("ol")

document.getElementsByTagName("div")[0].appendChild(newOl)

document.getElementsByTagName("div").appendChild(newOl)

var newLi1 = document.createElement("li")
var newLi2 = document.createElement("li")
var newLi3 = document.createElement("li")
var newLi4 = document.createElement("li")
var newLi5 = document.createElement("li")
