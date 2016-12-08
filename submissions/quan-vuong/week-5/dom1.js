// Setup
// 	• Create an index.html file that just has an empty tag in it
// 	• Open your index.html file up in Chrome. It should just be a blank page

// Exercises
// Do not edit your HTML file for any of these exercises. Only use DOM methods:
// 	• Create a new 'div' element
var newDiv = document.createElement("div");
console.log(newDiv);

// 	• Add a 'main-div' id to your div element (you can use the setAttribute method)
newDiv.classList.add("main-div");
console.log(newDiv);

// 	• Append the new div element to the document.body
document.body.appendChild(newDiv);
console.log(document.body);

// 	• Create a new button element
var newBtn = document.createElement("button");
console.log(newBtn);

// 	• Add some text to your button. The text can say whatever you want.
newBtn.innerHTML = "Sesame";

// 	• Append the button to the 'main-div'. Reload your index.html page and you should see your button, with the text in it
document.getElementsByClassName("main-div")[0].appendChild(newBtn);

// 	• Create another button element
var newBtn2 = document.createElement("button");

// 	• Add some text to your new button. The text should be different than the first button.
newBtn2.innerHTML = "Chicken"

// 	• Append the second button to the 'main-div'. Reload your index.html page and you should see your two buttons.
document.getElementsByClassName("main-div")[0].appendChild(newBtn2);

// 	• Add the class 'btn' to both of your buttons
console.log(document.getElementsByTagName("button").length)
for (var i = 0; i < document.getElementsByTagName("button").length; i++) {
    document.getElementsByTagName("button")[i].setAttribute("class", "btn");
}
console.log(newBtn, newBtn2);

// 	• Create an ul (unordered-list) element
var newUL = document.createElement("ul");
console.log(newUL)
// 	• Append the ul element to the main div
document.getElementsByClassName("main-div")[0].appendChild(newUL)
console.log(newUL);

// 	• Create three separate li (list) items
for (var i = 0; i < 3; i++) {
    var newLI = document.createElement("li"); // WHY DOES IT HAVE TO BE INSIDE LOOP ? WHERE DO THESE SAME-NAMED VARIBALES POINT TO ?
    console.log("newLI: ", newLI);
    // 	• Append the li items to the ul
    document.getElementsByTagName("ul")[0].appendChild(newLI);
    // 	• Add the class 'list-item' to each of the li elements
    document.getElementsByTagName("li")[i].className = "list-item";
    document.getElementsByTagName("li")[i].innerHTML = "item # " + i;
}
console.log(newLI)

// 	• Add the id 'main-list' to the ul
document.getElementsByTagName("ul")[0].setAttribute("id", "main-list");
console.log(document.getElementsByTagName("ul")[0]);
