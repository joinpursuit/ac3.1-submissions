document.body.style.backgroundColor = "black"
document.body.style.color = "white"

var newButton = document.createElement("button")
newButton.setAttribute("id", "first-button")
newButton.innerHTML = "Magenta Me"
document.body.appendChild(newButton)

newButton.addEventListener('click', function(event){
  console.log("clicked the first button");
})
newButton.addEventListener('click', function(event){
  document.body.style.backgroundColor = "magenta";
})



var newerButton = document.createElement("button")
newerButton.setAttribute("id", "second-button")
newerButton.innerHTML = "Moar Buttons"

document.body.appendChild(newerButton)

newerButton.addEventListener("click", function(event){
	var buttonCreate = document.createElement("button")
	buttonCreate.innerHTML = "button clone"
	document.body.appendChild(buttonCreate)
	document.body.style.backgroundColor = "black"

	buttonCreate.addEventListener("click", function(event) {
	document.body.removeChild(this)
})
})

var newImg = document.createElement("img")
newImg.setAttribute("src", "http://cdn.bulbagarden.net/upload/b/b4/PCP039.png")
document.body.appendChild(newImg)

newImg.addEventListener("mouseover", function(event) {
	newImg.setAttribute("src", "http://pm1.narvii.com/5773/44bf3aeee24bdd53444f025e2d5f8bbb550e6030_hq.jpg")
})
newImg.addEventListener("mouseout", function(event) {
	newImg.setAttribute("src", "http://cdn.bulbagarden.net/upload/b/b4/PCP039.png")
})

var newUl = document.createElement("ul")
document.body.appendChild(newUl)
var arr = ["jiggy", "wiggy", "tuffpuff"]
for (var i = 0; i < 3; i++) {
	var uLi = document.createElement("li")
	uLi.innerHTML = arr[i]
	newUl.appendChild(uLi)
	uLi.setAttribute("class", "list-item")
}

newUl.addEventListener("click", function(event) {
	console.log(event.target.innerHTML)
})












