//exercise 3

var newB = document.createElement("button");

newB.setAttribute("id", "first-button");

document.body.appendChild(newB)

newB.innerHTML = "Click Me!";

document.getElementById("first-button").addEventListener("click", function(){
  console.log("Clicked the first button")
})

document.getElementById("first-button").addEventListener("click", function(){
  document.body.style.backgroundColor = "magenta";
})

var newB2 = document.createElement("button");

newB2.setAttribute("id","second-button")

document.body.appendChild(newB2)

newB2.innerHTML = "Click me too"

document.getElementById("second-button").addEventListener("click", function(){
  var newB3 = document.createElement("button");
  newB3.innerHTML = "Are you a wizard?"
  document.body.appendChild(newB3);
})

var newImg = document.createElement("img");

newImg.setAttribute("src", "http://nerdreactor.com/wp-content/uploads/2015/03/interstellar.jpg")

document.body.appendChild(newImg);

newImg.addEventListener("mouseenter", function(){
  this.removeAttribute("src")
  this.setAttribute("src", "http:taylorholmes.com/wp-content/uploads/2010/07/inception-explained.jpg");
})

newImg.addEventListener("mouseleave", function(){
  this.removeAttribute("src")
  newImg.setAttribute("src", "http://nerdreactor.com/wp-content/uploads/2015/03/interstellar.jpg")
})


var newUl = document.createElement("ul")
for(var i = 0; i < 3; i++){
  var newLi = document.createElement("li")
  newLi.innerHTML  = i;
  newUl.appendChild(newLi)
}

document.body.appendChild(newUl)

newUl.addEventListener("click", function(event){
  console.log(event.target.innerHTML);
})
