var mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main-div");
document.body.appendChild(mainDiv);

var para = document.createElement("p");
var textNode = document.createTextNode("Whatever you want");
para.appendChild(textNode);
mainDiv.appendChild(para);

var button = document.createElement("button");
textNode = document.createTextNode("Some text");
button.appendChild(textNode);
mainDiv.appendChild(button);

para = document.createElement("p");
textNode = document.createTextNode("Some text");
para.appendChild(textNode);
mainDiv.appendChild(para);

para = document.getElementsByTagName('p');
para = Array.from(para);
para.forEach(function (ele) {
	ele.setAttribute("class", "paragraph-text");
})

var ol = document.createElement("ol");
ol.setAttribute("class", "main-list");
mainDiv.appendChild(ol);

var liArray = [];
for (var i = 0; i < 5; i ++) {
	liArray.push(document.createElement("li"));
	liArray[i].setAttribute("class", "list-item");
	ol.appendChild(liArray[i]);
}
