var btn = document.createElement("Button");
btn.setAttribute("id", "first-button");
document.body.appendChild(btn);
var btnText = document.createTextNode("First Button");
btn.appendChild(btnText);
btn.addEventListener('click', function(event) {
	console.log("Clicked the first button");
});
var secondBtn = document.createElement("Button");
secondBtn.setAttribute("id", "second-button");
document.body.appendChild(secondBtn);
var secondBtnText = document.createTextNode("Second Button");
secondBtn.appendChild(secondBtnText);
secondBtn.addEventListener('click', function(event){
	var autoBtn = document.createElement("Button");
	document.body.appendChild(autoBtn);
	autoBtnText = document.createTextNode("New Button!");
	autoBtn.appendChild(autoBtnText);
});
var img = document.createElement("img");
img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/e/ea/Official_portrait_of_Vice_President_Joe_Biden.jpg");
img.setAttribute("id", "img");
document.body.appendChild(img);
document.getElementById("img").width = "300";
img.addEventListener("mouseenter", function(event){
	img.setAttribute("src", "http://i2.cdn.turner.com/cnnnext/dam/assets/151020160200-biden-thumbs-up-super-169.jpg")
	document.getElementById("img").width="300"
})
img.addEventListener("mouseleave", function(event){
	img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/e/ea/Official_portrait_of_Vice_President_Joe_Biden.jpg")
	document.getElementById("img").width="300"
})
var unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList)
var ulText = document.createTextNode("Unordered List");
unorderedList.appendChild(ulText)
var liOne = document.createElement("li");
var liOneText = document.createTextNode("First Item")
liOne.appendChild(liOneText)
var liTwo = document.createElement("li");
var liTwoText = document.createTextNode("Second Item")
liTwo.appendChild(liTwoText)
var liThree = document.createElement("li");
var liThreeText = document.createTextNode("Third Item")
liThree.appendChild(liThreeText)
unorderedList.appendChild(liOne);
unorderedList.appendChild(liTwo);
unorderedList.appendChild(liThree);
unorderedList.addEventListener('click', function(event){
  console.log(event.target.innerText + ' was clicked')
})