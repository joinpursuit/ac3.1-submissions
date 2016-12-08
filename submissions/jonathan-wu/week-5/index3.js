var newBtn = document.createElement('button')
newBtn.setAttribute('id', 'first-button')
document.body.appendChild(newBtn)
newBtn.addEventListener('click', function() {
    console.log('Clicked the first button')
})


var newBtn2 = document.createElement('button')
newBtn2.setAttribute('id', 'second-button')
document.body.appendChild(newBtn2)
newBtn2.addEventListener('click', function() {
    document.body.appendChild(document.createElement('button'))
})

var newImg = document.createElement('img')
newImg.setAttribute('src', 'http://www.jaymersun.com/mm/web/js/tn500w_javascript-logo.png')
newImg.setAttribute('class','img')
document.body.appendChild(newImg)
newImg.addEventListener('mouseover', function() {
    newImg.setAttribute('src', 'https://themade.org/wp-content/uploads/2015/02/swiftlogo.png')
    newImg.setAttribute('class','img')
})
newImg.addEventListener('mouseout', function() {
	newImg.setAttribute('src', 'http://www.jaymersun.com/mm/web/js/tn500w_javascript-logo.png')
	newImg.setAttribute('class','img')
})

var newUl = document.createElement('ul')
document.body.appendChild(newUl)

function createLi(num) {
	for (var i = 0; i < num;i++) {
	var newLi = document.createElement('li')
	newLi.setAttribute('id','li'+i)
	newLi.innerHTML = i
	newUl.appendChild(newLi)
	}
}
createLi(3)

newUl.addEventListener('click',function(event) {
console.log(event.target.innerText + ' was clicked')
})