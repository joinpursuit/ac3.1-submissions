//1. Create a new 'button' element

var button = document.createElement('button');

//2. Add a 'first-button' id to your button element (you can use the setAttribute method)

button.setAttribute('id', 'first-button');

//3. Append the new button element to the document.body

document.body.appendChild(button);

//4. Add an event listener to the button. When clicked, the button should log "Clicked the first button" to the console

document.getElementById('first-button').addEventListener('click', function() {
    console.log("Clicked the first button")
})

//5. Create a new 'button' element

var button2 = document.createElement('button');

//6. Add a 'second-button' id to your button element (you can use the setAttribute method)

button2.setAttribute('id', 'second-button');

//7. Append the new button element to the document.body

document.body.appendChild(button2);

//8. Add an event listener to the second button. When clicked, the button should create a new button element and append it to the body of the document

document.getElementById('second-button').addEventListener('click', function() {
    var button3 = document.createElement('button');
    document.body.appendChild(button3);
});

//9. Create a new img element

var image1 = document.createElement('img');
image1.id = 'First-image'

//10. Add a src attribute (you can use the setAttribute method) to your img, and a add a link to an image of your choice

image1.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/236x/44/fe/6c/44fe6c6b555b7c1652481976a594e6be.jpg");

//11. Append the img to document.body

document.body.appendChild(image1);

//12. Add an event listener to the image. When you hover over the image, the image should change the src and be replaced by another image.

document.getElementById('First-image').addEventListener('mouseover', function() {
   document.getElementById("First-image").src = "https://aos.iacpublishinglabs.com/question/aq/700px-394px/difference-between-sea-ocean_2f7d08e038e488e3.jpg?domain=cx.aos.ask.com";
});

//13. Add another event listener to the image. When you stop hovering over the image, the image should change back to the original image.

document.getElementById('First-image').addEventListener('mouseout', function() {
   document.getElementById("First-image").src = "https://s-media-cache-ak0.pinimg.com/236x/44/fe/6c/44fe6c6b555b7c1652481976a594e6be.jpg";
});

//14. Create a new ul element

var newUl = document.createElement('ul');

//15. Create three li elements and append them all to the ul



for(var i = 0; i < 3; i++){
  var newLi= document.createElement('li');
  newUl.appendChild(newLi);
  newLi.innerHTML = i;
}
 
 //16. Append the ul element to document.body

 document.body.appendChild(newUl);

 //17. Add an event listener to the ul. Whenever a li item is clicked, the event listener should log out the text of that specific li item to the console. You should only have one event listener on the ul, you should not have individual event listeners on each li item

document.getElementsByTagName('ul')[0].addEventListener('click', function(event){
  console.log(event.target.innerText + ' was clicked')
})
