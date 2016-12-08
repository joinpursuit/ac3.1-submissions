document.addEventListener('DOMContentLoaded', function() {
	var button1 = document.createElement('button');
	document.body.appendChild(button1)

	button1.setAttribute("id", "first-button");
	button1.innerHTML = "magenta backgorung"
	button1.addEventListener('click', function(){
		console.log("Clicked the first button");
		document.body.style.backgroundColor = 'magenta';
	}) //changes backgorung color onclick

	var button2 = document.createElement('button');
	button2.setAttribute('id', "second-button");
	document.body.appendChild(button2);
	button2.innerHTML = 'Creat a button'
	button2.addEventListener('click', function(){
		var button3 = document.createElement('button');
		document.body.appendChild(button3)
		button3.innerHTML= "New button"
	})//end of button2 

	var newImage = document.createElement('img');
	newImage.setAttribute('src', 'http://cdn.images.express.co.uk/img/dynamic/128/590x/Gallery-of-Dogs-Balancing-Cupcakes-539445.jpg')
	newImage.addEventListener('mouseover', function(){
		this.src = 'https://www.aussiedog.com.au/wp-content/uploads/2015/03/cute-puppy-cupcake-dog-love-jack-russel-teriier-happy-super-excited-epic-lolcat-832x450.jpg'
	})
	newImage.addEventListener('mouseout', function(){
		newImage.src = 'http://cdn.images.express.co.uk/img/dynamic/128/590x/Gallery-of-Dogs-Balancing-Cupcakes-539445.jpg'
	})
	document.body.appendChild(newImage);

	//ul 
	var list = document.createElement('ul');
	document.body.appendChild(list)//append ul to body
	
	//loop to creat n li on a ul 
	// function listCreator(quantity){
	for(var i = 0; i < 3; i++){
	  var listItem = document.createElement('li');
	  listItem.innerHTML = i+1;
	  listItem.setAttribute('id','li'+ i); //set an id for each list
	  list.appendChild(listItem);
		}

	list.addEventListener('click', function(){
		console.log(event.target.innerHTML + ' clicked')
		})

})//end of the function to load the html