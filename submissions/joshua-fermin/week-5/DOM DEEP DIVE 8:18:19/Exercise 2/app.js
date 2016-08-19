var newDiv =  document.createElement("div");
newDiv.setAttribute("class", "main-div");
document.body.appendChild(newDiv);

var newP = document.createElement("p");
newP.innerHTML = "whatever you want";
document.getElementsByClassName('main-div')[0].appendChild(newP);

var newButton = document.createElement("button");
newButton.innerHTML = "Don't click MY BUTTON!!";
document.getElementsByClassName('main-div')[0].appendChild(newButton);

var newP2 = document.createElement("p");
newP2.innerHTML = "Don't click MY BUTTON!! or else!!!";
document.getElementsByClassName('main-div')[0].appendChild(newP2);

for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
	document.getElementsByTagName('p')[i].setAttribute("class" , "paragraph-text");
}
// document.getElementsByTagName('p')[0].setAttribute("class", "main-div");
// document.getElementsByTagName('p')[0].setAttribute("class", "main-div");
// console.log(document.getElementsByTagName('p').length);
var newOL = document.createElement("ol");
document.getElementsByClassName('main-div')[0].appendChild(newOL);
for (var i = 0; i < 5; i++) {
	var newLI = document.createElement("li")
	newLI.innerHTML = "LI number " + i;
	document.getElementsByTagName("ol")[0].appendChild(newLI);
}

for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
	document.getElementsByTagName('li')[i].setAttribute("class" , "list-item");
}

document.getElementsByTagName('ol')[0].setAttribute("class" , "main-list");


