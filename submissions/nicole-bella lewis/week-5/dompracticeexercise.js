// Do not edit your HTML file for any of these exercises. Only use DOM methods:

// Create a new 'div' element
// Add a 'main-div' id to your div element (you can use the setAttribute method)
// Append the new div element to the document.body

var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'main-div');
console.log(newDiv)
document.body.appendChild(newDiv);


// Create a new p element
// Add some text to your paragraph. The text can say whatever you want.
// Append the p to the 'main-div'. Reload your index.html page and you should see your paragraph, with the text in it

var newPara = document.createElement('p');
newDiv.appendChild(newPara);

var text = " Don't really know what to write. Have you ever really  even gone fast? Maybe I'm actually the best"
newPara.innerHTML = text

// Create a button element
// Add some text to your new button.
// Append the button to the 'main-div'. Reload your index.html page and you should see your two button and paragraph.

var newButton = document.createElement('button');
newButton.innerHTML = "THAT button"
document.getElementById('main-div').appendChild(newButton)


// Create another p element.
// Add some text to the new p element
// Append the new p to your 'main-div', underneath the button
// Add the class 'paragraph-text' to both of your p elements

var morePara = document.createElement('p')
morePara.innerHTML = " Here is more paragraph."
newDiv.appendChild(morePara)
morePara.className = 'paragraph-text'
newPara.className = 'paragraph-text'
    // Create an ol (ordered-list) element
    // Append the ol element to the main div
    // Create five separate li (list) items
    // Append the li items to the ol
    // Add the class 'list-item' to each of the li elements
    // Add the id 'main-list' to the ol

var orderedList = document.createElement('ol')
newDiv.appendChild(orderedList)
orderedList.className = 'main-list'


function makeList() {
    for (i = 0; i < 5; i++) {
        var listItem = document.createElement('li')
        orderedList.appendChild(listItem)
        listItem.className = 'list-item'

    }
}
makeList()
