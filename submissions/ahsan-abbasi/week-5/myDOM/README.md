# Build your own DOM manipulation library
This is the first project that you can add to your personal portfolio! You'll be reconstructing the basic functionality of jQuery.
```javascript
var german = document.getElementsByClassName('german')
german.remove()
// doesn't work because german is an array-like object
// .remove() isn't defined for this array-like object
german[0].remove()
// german[0] is an HTMLElement
// would work because .remove() is a HTMLElement function

//jQuery
$(".german").remove()
// removes everything with the german class from the page
```
So what jQuery does is create a middle man that stores the elements that are selected for.
```javascript
$(".german")
//returns an object that stores an actual array of elements with the german class
//let's refer to this object as domElements(made-up name)
domElements.prototype.remove()
// defined on this "domElements" object
// iterates through the domElements array and calls the HTMLElement function .remove() on each element in the array
```

## Step 1
Set up an HTML page you can manipulate. You can use my cute dogs one for now, but it'd be better to make your own if you're putting it in your portfolio. Include a variety of different HTML tags: `<div>`, `<ul>`, `<li>`, `<img>`

## Step 2
Construct a function `$d()` on the window.
```javascript
window.$d()
```

Construct a new object `domElements` that has a property that contains an array.
```javascript
function newObject() {
  this.property = []
}
```

Define new functions on this new object that apply to all elements.
```javascript
newObject.prototype.newFunction = function () {
  for (var i = 0; i < this.property.length; i++) {
    //do stuff to each element
  }
}
```

## Step 3 [Basic Selectors](http://api.jquery.com/category/selectors/basic-css-selectors/)
Your `$d()` function should return a new object `domElements` that takes into account - class, id, and tagName
- [ ] $d(".class")
- [ ] $d("#id")
- [ ] $d("tagName")
Hint:
```javascript
document.querySelectorAll("CSS_Selector")
```

## Step 4 [Class Attribute](http://api.jquery.com/category/manipulation/class-attribute/)
Elements can have multiple classes. Classes are just separated by a space.

Write the following functions for your `domElements` object to match the corresponding jQuery functionality
- [ ] .addClass()
- [ ] .hasClass()
- [ ] .removeClass()
- [ ] .toggleClass()
Hint: Might need to go back to your old string and array methods - .split() and .join()


## Step 5 Miscellaneous
Play with jQuery and see how each of these jQuery functions behave. Make the same functions in your library to mimic jQuery.
- [] $d.().attr()
- [] $d.().remove()
- [] $d.().empty()
- [] $d.().remove()

## Step 6 [Event Handling](https://api.jquery.com/category/events/event-handler-attachment/)
- [ ] $().on()
- [ ] $().off()
- [ ] $().click()


## Step 7 [Document Ready](https://api.jquery.com/ready/)
When you pass a function to jQuery, it is registered as a callback that is invoked when the document is loaded. To accomplish this, you're going to need to store all the callbacks in an array. When the document has loaded(`.addEventListener()`), you'll need to iterate through this array of callbacks and actually call the callbacks.
- [ ] $(callback)
