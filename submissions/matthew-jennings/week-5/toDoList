var body = document.getElementsByTagName("body")[0];
var ul = document.createElement("ul");
body.appendChild(ul);

var input = document.createElement("input");
input.setAttribute("type", "text");
body.appendChild(input);

var button = document.createElement("button");
button.innerHTML = "add item";
body.appendChild(button);
button.addEventListener("click", function () {
	var listItem = document.createElement("li");
	listItem.innerHTML = input.value;
	ul.appendChild(listItem);
})

ul.addEventListener("dblclick", function () {
	this.removeChild(event.target);
})

var sort = document.createElement("button");
var sortText = document.createTextNode("Sort");
sort.appendChild(sortText);
body.appendChild(sort);
sort.addEventListener("click", function () {
	var array = Array.from(document.getElementsByTagName("li"))
	array.sort(function (a, b) {
		return parseInt(a.innerHTML.charAt(0)) - parseInt(b.innerHTML.charAt(0));
	})
	ul.innerHTML = "";
	array.forEach(function (ele) {
		console.log(ele)
		ul.appendChild(ele);
	})
})
