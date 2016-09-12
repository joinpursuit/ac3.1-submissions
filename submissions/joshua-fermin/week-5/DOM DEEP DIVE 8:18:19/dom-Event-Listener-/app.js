var newButton = document.createElement('button');
newButton.setAttribute("id" , "first-button");
document.body.appendChild(newButton);
newButton.addEventListener("click", function(){
	console.log("Clicked the first button");
});
newButton.addEventListener("click", function(){
	document.body.setAttribute("style" , "background-color: magenta");
});

var newButton2 = document.createElement('button');
newButton2.setAttribute("id" , "second-button");
document.body.appendChild(newButton2);
newButton2.addEventListener("click", function(){
	var newButtonz = document.createElement('button');
	document.body.appendChild(newButtonz);
});

var newImg = document.createElement('img');
newImg.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobEwbWUWussyaX-Kphv5-Yxw2OQCewvUhsZt6wtjTAgB4DKgXD8kHepU");
document.body.appendChild(newImg);

newImg.addEventListener("mouseover", function(){
	this.setAttribute("src" , "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTT-NQiP_vnxzeCMUi_hy3ArNsjyLxE98CWLl7FEogWJdmyoR63Tg");
});
newImg.addEventListener("mouseout", function(){
	this.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobEwbWUWussyaX-Kphv5-Yxw2OQCewvUhsZt6wtjTAgB4DKgXD8kHepU");
});

var newUl = document.createElement('ul');

for (var i = 0; i < 3; i++) {
	var newLi = document.createElement('li');
	newLi.innerHTML = "this is li " + i;
	newUl.appendChild(newLi);
};
document.body.appendChild(newUl);
newUl.addEventListener("click", function(event){
	console.log(event.target.innerHTML);
});

