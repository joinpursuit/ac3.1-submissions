// Create a new 'div' element
var btn = document.createElement('BUTTON');
var btnText = document.createTextNode("first-button");// Create
btn.appendChild(btnText);// Append txt
btn.setAttribute('id', 'first-button');
document.body.appendChild(btn);

//add event to btn
document.getElementsByTagName('BUTTON')[0].addEventListener('click', function(event){
  console.log('Clicked the first button')
})





document.getElementsByTagName('BUTTON')[0].addEventListener('click', function(event){
  document.body.style.backgroundColor = "magenta";
})

//new btn
var btn = document.createElement('BUTTON');
var btnText = document.createTextNode("second-button");// Create
btn.appendChild(btnText);// Append txt
btn.setAttribute('id', 'second-button');
document.body.appendChild(btn);


var image = document.getElementsByTagName('body');
document.getElementById('second-button').addEventListener('click', function(event){

      //second btn adds btn 
		var btn = document.createElement('BUTTON');
		var btnText = document.createTextNode("second-button-Child");// Create
		btn.appendChild(btnText);// Append txt
		btn.setAttribute('id', 'second-button');
		document.body.appendChild(btn);
		 
})


// create an <img>
var image = document.createElement("IMG");
image.setAttribute("src", "http://www.hd-wallpapersdownload.com/script/bulk-upload/cute-pictures-hd-wallpaper-desktop-3D.jpg");
image.setAttribute("width","304");
image.setAttribute("width", "228");
    document.body.appendChild(image);


//mouseenter
document.getElementsByTagName('IMG')[0].addEventListener('mouseover', function(event){
	image.setAttribute('src', "http://www.warrenphotographic.co.uk/photography/bigs/08482-Fluffy-ginger-female-kitten.jpg")

})


//mouseleave
document.getElementsByTagName('IMG')[0].addEventListener('mouseleave', function(event){
	image.setAttribute('src', "http://www.hd-wallpapersdownload.com/script/bulk-upload/cute-pictures-hd-wallpaper-desktop-3D.jpg")

})


//create ul
var newList = document.createElement('ul');

document.body.appendChild(newList);

for (var i =0; i < 3; i++) {
	var listItem = document.createElement('li');
	listItem.innerHTML=i;
    newList.appendChild(listItem)	
}

// newList.addEventListener('click', function(){
// 		console.log(this.innerHTML);
// })
document.getElementsByTagName('ul')[0].addEventListener('click', function(event){
  console.log(event.target.innerText)
})








//Adding a single event listener to the parent 'ul' element, and using the special event object to log out info from the specific li item that was clicked 
// document.getElementsByTagName('ul')[0].addEventListener('click', function(event){
//   console.log(event.target.innerText + ' was clicked')
// })



// event listener code from this afternoon

// Turning the array-like-object into a real array
// var liArr = Array.prototype.slice.call(document.getElementsByTagName('li'));

//Looping over the array to add an event listener to every individual list item
// liArr.forEach(function(item){
//   item.addEventListener('click', function(event){
//     this.style.backgroundColor = "lime";
//   })
// })

