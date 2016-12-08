// Do not edit your HTML file for any of these exercises. Only use DOM methods:
// 	• Create a new 'button' element
var btn = document.createElement("button");
console.log(btn);
// 	• Add a 'first-button' id to your button element (you can use the setAttribute method)
btn.id = "first-button";
console.log(btn);
btn.innerHTML = "Button 1";
// 	• Append the new button element to the document.body
document.body.appendChild(btn);
console.log(document.body);

// 	• Add an event listener to the button. When clicked, the button should log "Clicked the first button" to the console
btn.addEventListener("click", function() {
    console.log("Clicked the first button");
    
    // 	• Add another event listener to the button. When clicked, the button should change the background color of the page body to 'magenta.' It should also still log "Clicked the first button" to the console
    document.body.style.backgroundColor = "magenta";
});

// 	• Create a new 'button' element
var btn2 = document.createElement("button");
console.log(btn2);
// 	• Add a 'second-button' id to your button element (you can use the setAttribute method)
btn2.id = "second-button";
btn2.innerHTML = "Button 2";
// 	• Append the new button element to the document.body
document.body.appendChild(btn2);

// 	• Add an event listener to the second button. When clicked, the button should create a new button element and append it to the body of the document
btn2.addEventListener("click", function(){
    console.log("Clicked the 2nd button");
    var newBtn = document.createElement("button");
    document.body.appendChild(newBtn);
    newBtn.innerHTML = "New Button";
})

// 	• Create a new img element
var img = document.createElement("img");
// 	• Add a src attribute (you can use the setAttribute method) to your img, and a add a link to an image of your choice
img.setAttribute("src", "https://i.imgur.com/0c81378.gif")
// 	• Append the img to document.body
document.body.appendChild(img);

// 	• Add an event listener to the image. When you hover over the image, the image should change the src and be replaced by another image.
img.onmouseover = function() {
    img.setAttribute("src", "http://data.whicdn.com/images/22852273/large.gif")
}
// 	• Add another event listener to the image. When you stop hovering over the image, the image should change back to the original image.
img.onmouseout = function() {
    img.setAttribute("src", "https://i.imgur.com/0c81378.gif")
}

// 	• Create a new ul element
// 	• Create three li elements and append them all to the ul
var newUL = document.createElement("ul");
for (var i = 0; i < 3; i++) {
    var newLI = document.createElement("li");
    newUL.appendChild(newLI);
    newLI.innerHTML = "List Item # " + i;
}
// 	• Append the ul element to document.body
document.body.appendChild(newUL);
// 	• Add an event listener to the ul. Whenever a li item is clicked, the event listener should log out the text of that specific li item to the console. You should only have one event listener on the ul, you should not have individual event listeners on each li item
newUL.addEventListener("click", function(event){
   console.log(event.target.innerHTML) 
});

