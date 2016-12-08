// Do not edit your HTML file for any of these exercises. Only use DOM methods:
// 	• Create a new 'div' element
var newDIV = document.createElement("div");

// 	• Add a 'main-div' id to your div element (you can use the setAttribute method)
newDIV.id = "main-div";
console.log(newDIV);

// 	• Append the new div element to the document.body
document.body.appendChild(newDIV);

// 	• Create a new p element
var p = document.createElement("p");

// 	• Add some text to your paragraph. The text can say whatever you want.
p.innerHTML = "This is p paragraph";

// 	• Append the p to the 'main-div'. Reload your index.html page and you should see your paragraph, with the text in it
document.body.appendChild(p);

// 	• Create a button element
var btn = document.createElement("button");

// 	• Add some text to your new button.
btn.innerHTML = "Click Here!"

// 	• Append the button to the 'main-div'. Reload your index.html page and you should see your two button and paragraph.
document.getElementById("main-div").appendChild(btn);

// 	• Create another p element.
var p2 = document.createElement("p");
// 	• Add some text to the new p element
p2.innerHTML = "This is p2 paragraph"
// 	• Append the new p to your 'main-div', underneath the button
document.getElementById("main-div").appendChild(p2);

// 	• Add the class 'paragraph-text' to both of your p elements
for (var i = 0; i < document.getElementsByTagName("p").length; i++) {
    document.getElementsByTagName("p")[i].classList.add("paragraph-text");
}

// 	• Create an ol (ordered-list) element
var newOL = document.createElement("ol");
// 	• Append the ol element to the main div
document.getElementById("main-div").appendChild(newOL);

// 	• Create five separate li (list) items
for (var i = 0; i < 5; i++) {
    var newLI = document.createElement("li");
    // 	• Append the li items to the ol
    document.getElementsByTagName("ol")[0].appendChild(newLI);
    // 	• Add the class 'list-item' to each of the li elements
    document.getElementsByTagName("li")[i].classList.add("list-item");
    document.getElementsByTagName("li")[i].innerHTML = "List item # " + i;
}
// 	• Add the id 'main-list' to the ol
document.getElementsByTagName("ol")[0].id = "main-list";
