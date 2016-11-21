var newButton = document.createElement("button");
newButton.setAttribute("id", 'first-button')
document.body.appendChild(newButton)
document.getElementById('first-button').addEventListener('click', function(event){
  console.log(event.target.innerText + "Clicked the First Button")
})
document.getElementById('first-button').addEventListener('click', function(event){
  document.body.style.backgroundColor = "magenta";
}