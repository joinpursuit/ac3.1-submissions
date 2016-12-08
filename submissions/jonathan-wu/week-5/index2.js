var newDiv = document.createElement('div')
newDiv.setAttribute('id','main-div')
document.body.appendChild(newDiv)

var newP = document.createElement('p')
newDiv.appendChild(newP)
newP.innerHTML = 'WAZZZZAPPPP'

var newBtn = document.createElement('button')
newBtn.innerHTML = 'new butt'
newDiv.appendChild(newBtn)

var newP2 = document.createElement('p')
newP2.innerHTML = 'WAZZZZAPPPP2'
newDiv.appendChild(newP2)

newP.setAttribute('class','paragraph-text')
newP2.setAttribute('class','paragraph-text')

var newOL = document.createElement('ol')
newDiv.appendChild(newOL)

function createLI(num){
	for (var i = 0;i<num;i++){
		newli = document.createElement('li')
		newOL.appendChild(newli)
		newli.setAttribute('class','list-item')
	}
}
createLI(5)

newOL.setAttribute('id','main-list')