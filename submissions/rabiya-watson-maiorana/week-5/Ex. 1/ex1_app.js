		// CREATE A NEW 'DIV' ELEMENT:
		var newDiv = document.createElement('div');
		newDiv.setAttribute('class', 'main-div')
		// newDiv.classList.add('main-div');
		// newDiv.classList.add('main-body');
		
		// ADD 'MAIN-DIV' ID TO DIV ELEMENT
		newDiv.id = 'main-div-id'
		console.log(newDiv);

		// APPEND TO DOCUMENT BODY
		document.body.appendChild(newDiv);

		// CREATE A NEW BUTTON
		var firstButton = document.createElement('button');
		firstButton.innerHTML = 'First Button';
		
		// APPEND BUTTON TO 'MAIN-DIV'
		newDiv.appendChild(firstButton)

		// CREATE A SECOND BUTTON
		var secondButton = document.createElement('button');
		
		// ADD TEXT TO THE SECOND BUTTON/DIFFERENT FROM FIRST BUTTON
		secondButton.innerHTML = 'Second Button';
		
		// APPEND SECOND BUTTON TO 'MAIN-DIV'
		newDiv.appendChild(secondButton)

		// ADD THE CLASS 'BTN' TO BOTH BUTTONS
		var selButton = document.getElementsByTagName('button')
		selButton.className = 'btn'

		// CREATE AN UL (UNORDERED) LIST
		var newList = document.createElement('Ul');
		// var newListItem = document.createElement('li');
		// newListItem.innerHTML = 'Go to the store';
		// newList.appendChild(newListItem);
		
		// ADD THE ID 'MAIN-LIST TO THE UL'
		newList.id = 'main-list'

		// APPEND THE UL TO THE 'MAIN-DIV'
		document.body.appendChild(newList)

		// CREATE THREE SEPARATE LI (LIST) ITEMS
		// APPEND TO THE UL
		// ADD THE CLASS 'LIST-ITEM' TO EACH LI ELEMENT
		for(var i = 0; i < 3; i++){
		var newListItem = document.createElement('li');
		newListItem.innerHTML = 'List item ' + (i + 1) + ":";
		newListItem.className = 'list-item'
		newList.appendChild(newListItem)
		}
		


		// var scriptTest = document.createElement('script');
		// scriptTest.innerHTML = "alert('script tag is working')";
		// document.body.appendChild(scriptTest);