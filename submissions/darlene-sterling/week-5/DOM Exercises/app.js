var newDiv = document.createElement('div');
newDiv.classList.add('main-div')
newDiv.setAttribute('id', 'main-div');
document.body.appendChild(newDiv);

var p = document.createElement('p');
p.innerHTML = "LAST CHANCE TO WIN!";
document.getElementsByClassName("main-div")[0].appendChild(p);
//OR can be writtne as...newDiv.appendChild(p);

var newButton = document.createElement('button');
newButton.innerHTML = "PRESS";
document.getElementsByClassName('main-div')[0].appendChild(newButton);
//OR can be writtne as ...newDiv.appendChild(newButton)

var p2 = document.createElement('p');
p2.innerHTML = "Press Here to Enter the $10,000 Sweepstake!";
document.getElementsByClassName('main-div')[0].appendChild(p2)
