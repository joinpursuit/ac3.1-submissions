var newButt = document.createElement('button');

newButt.setAttribute('id', 'first-button');

newButt.innerHTML = "I'm a button!";

document.body.appendChild(newButt);

newButt.addEventListener("click", function () {
	console.log("Clicked the first button");
})

newButt.addEventListener("click", function () {
	document.body.style.backgroundColor = "magenta";
})

var nextButt = document.createElement('button');

nextButt.setAttribute('id', 'second-button');

nextButt.innerHTML = "I'm also a button!";

document.body.appendChild(nextButt);

nextButt.addEventListener("click", function () {
	var createButt = document.createElement('button');
	createButt.innerHTML = "You created me! I'm aliiiiiiiiiiiiiiiive!"
	document.body.appendChild(createButt);
})

var newImg = document.createElement('img');

newImg.setAttribute("src", "http://gifrific.com/wp-content/uploads/2012/06/michael-jordan-laugh.gif")

document.body.appendChild(newImg)

newImg.addEventListener("mouseover", function () {
	newImg.setAttribute("src", "http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg")
})
newImg.addEventListener("mouseleave", function () {
	newImg.setAttribute("src", "http://gifrific.com/wp-content/uploads/2012/06/michael-jordan-laugh.gif")
})

var newUl = document.createElement('ul')

function createLi() {
	for (var i = 0; i < 3; i++) {
		var newLi = document.createElement('li')
		newLi.innerHTML = "Hua Haaaa"
		newUl.appendChild(newLi)
	}
	
}

createLi()

document.body.appendChild(newUl)

newUl.addEventListener("click", function (event) {
	console.log(event.target.innerText)
})

document.getElementsByTagName('li')[1].innerHTML = "DOM pls no"
document.getElementsByTagName('li')[2].innerHTML = "brain, come back. where are you going-"