//created a button 

var newButton = document.createElement('button');
	newButton.className = 'main-button';

//Added the 'first button' id to my button element
	newButton.setAttribute('id','first-button');
		console.log(newButton);
		document.body.appendChild(newButton);

//First event listener
	document.getElementById('first-button').addEventListener('click',function(){
		console.log('Clicked the first-button');
	});
		
// Background color  + Event Listener  
	document.getElementsByTagName('body')[0].addEventListener('click',function(){
		this.style.backgroundColor="magenta";
	});


//Adding button2 
	var newButton2 = document.createElement('button2');
		newButton2.className="second button";

		newButton2.setAttribute('id','second-button');
			console.log(newButton2);
			document.body.appendChild(newButton2);

// Second Event Listener 
		document.getElementById('second-button').addEventListener('click',function(){
			console.log('Clicked the second-button ');
		});
//Created an image 
	var img = document.createElement('img');
		img.className="main-picture";
//Adding a 'src' attribute 
	img.setAttribute('id','src');
		console.log(img);
		document.body.appendChild(img);
		img.src='https://s-media-cache-ak0.pinimg.com/564x/93/18/6d/93186d95353ac7ad2893ffabf1316aa9.jpg';

// event listener + hover 
	document.getElementById('src').addEventListener('mouseover',function(){
		document.getElementsByTagName('img');
		img.src='https://s-media-cache-ak0.pinimg.com/564x/46/31/7d/46317da5ecdf82160d2d766605dd5018.jpg';
	});

// event listener + stopping hover 
	document.getElementById('src').addEventListener('mouseout',function(){
		document.getElementsByTagName('img');
		img.src='https://s-media-cache-ak0.pinimg.com/564x/93/18/6d/93186d95353ac7ad2893ffabf1316aa9.jpg'

	});

//creating a 'ul' element 
	var list = document.createElement('ul');
		list.className="unordered list";
		
		list.setAttribute('id','listofthings');
		console.log(list);
		document.body.appendChild(list);


// Three list items  + appending them all to the ul 

	var item1 = document.createElement('li');
		item1.className="thing1";
		item1.innerHTML = " Caffeine & Confidence ;) ";
		console.log(item1);

		item1.setAttribute('id','items');
		document.getElementById('listofthings').appendChild(item1);


	var item2 = document.createElement('li');
		item2.innerHTML ="Pray.Slay.Conquer The Day!";
		console.log(item2);
		item2.className="thing2";

		item2.setAttribute('id','items');
		document.getElementById('listofthings').appendChild(item2);

	var item3 = document.createElement('li');
		item3.innerHTML="All you need is wifi & a dream :) ";
		console.log(item3);
		item3.className="thing3";

		item3.setAttribute('id','items');
		document.getElementById('listofthings').appendChild(item3);

//Adding a single event listener to the parent 'ul' element and using the special event object to log out info from the specific li item that was clicked 
		document.getElementsByTagName('ul')[0].addEventListener('click',function(event){
			console.log(event.target.innerHTML + 'was clicked');
		});

	
