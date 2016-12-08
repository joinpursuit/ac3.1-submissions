var body = document.getElementsByTagName("body")[0];
var button = document.createElement("button");
button.setAttribute("id", "first-button");
body.appendChild(button);
button.addEventListener("click", function () {
	console.log("Clicked the first button");
})
button.addEventListener("click", function () {
	body.style.backgroundColor = "magenta";
})

button = document.createElement("button");
button.setAttribute("id", "second-button");
body.appendChild(button);
button.addEventListener("click", function () {
	button = document.createElement("button");
	body.appendChild(button);
})

var img = document.createElement("img");
img.setAttribute("src", "http://img.pandawhale.com/post-55779-oh-hell-no-damn-cats-gif-Imgur-WnLS.gif");
body.appendChild(img);
img.addEventListener("mouseover", function () {
	this.setAttribute("src", "http://media.moddb.com/cache/images/members/1/366/365912/thumb_620x2000/hell-yeah-andy-samberg-cat-high-five-demotivational-poster-.jpg");
})
img.addEventListener("mouseout", function () {
	this.setAttribute("src", "http://img.pandawhale.com/post-55779-oh-hell-no-damn-cats-gif-Imgur-WnLS.gif");
})

var ul = document.createElement("ul");
for (var i = 0; i < 3; i ++) {
	ul.appendChild(document.createElement("li"));
}
body.appendChild(ul);
ul.addEventListener("click", function () {
	event.stopPropagation()
	console.log(this);
})

ul.getElementsByTagName("li")[0].innerHTML = "test";
