var newDiv = document.createElement('div');
newDiv.classList.add('main-div');
newDiv.setAttribute('id', 'main-div');
document.body.appendChild(newDiv);

var p = document.createElement('p');
p.innerHTML = "LAST CHANCE TO WIN!";
document.getElementsByClassName("main-div")[0].appendChild(p);
//OR can be written as...newDiv.appendChild(p);

var button = document.createElement('button');
button.setAttribute('class','btn');
button.innerHTML = "PRESS TO WIN";
document.getElementsByClassName('main-div')[0].appendChild(button);
//OR can be written as ...newDiv.appendChild(newButton)

var p2 = document.createElement('p');
p2.innerHTML = "Press Here to Enter the $10,000 Sweepstake!";
document.getElementsByClassName('main-div')[0].appendChild(p2);

var newButton = document.createElement('button');
newButton.setAttribute('class','btn');
newButton.innerHTML = "SIGN UP TODAY";
document.getElementsByClassName('main-div')[0].appendChild(newButton);

var ul = document.createElement('ul');
newDiv.appendChild(ul);
ul.setAttribute('ul', 'main-list');


// var liOne = document.createElement('li');
// liOne.innerHTML = "Win a trip to Costa Rica";
// ul.appendChild(liOne);
// liOne.setAttribute('class', 'list-item');
// var liTwo = document.createElement('li');
// liTwo.innerHTML = "Win a trip to France";
// ul.appendChild(liTwo);
// liTwo.setAttribute('class', 'list-item');
// var liThree = document.createElement('li');
// liThree.innerHTML = "Win a trip to Morracco";
// ul.appendChild(liThree);
// liThree.setAttribute('class', 'list-item');

var trips = ["Win a Trip to Costa Rica", "Win a Trip to France", "Win a Trip to Morracco"]
for(var i = 0; i < trips.length; i++){
	var li = document.createElement('li');
	li.innerHTML = trips[i]
	ul.appendChild(li);
	li.setAttribute('class', 'list-item');
}
