(function () {
  var loaded = false;

  ////////////////////////////////////////////////////////
  //BONUSES:
  //the below 'DOMContentLoaded' and registerCallback functions are not required;
  //attempt these only if you've completed everything else
  //Scroll down to see where you should start your code.
  //
  //
  ///When you pass a function to jQuery, it is registered as a callback that is invoked when the document is loaded.
  //To accomplish this, you're going to need to store all the callbacks in an array.
  //When the document has loaded(`.addEventListener()`), you'll need to iterate through this array of callbacks and actually call the callbacks.
  ////////////////////////////////////////////////////////

  document.addEventListener("DOMContentLoaded", function() {
    //set the loaded variable to true now that it's done loading
    //iterate through the callbacks array and call each function
  });

  function registerCallback(callback) {
    //if loaded === true just use the callback right away
    //otherwise push it into the callbacks array
  };

  //You don't need to edit this function
  //This function is used to select elements, based on class, tag, or ID
  //it then converts selected elements into a DOMTree object
  window.$d = window.$d || function (selector) {
    if (typeof selector === "function") {
      registerCallback(selector);
    } else if (typeof selector === "object" && selector instanceof HTMLElement) {
      return new DOMTree([selector]);
    } else if (typeof selector === "string") {
      var elements = document.querySelectorAll(selector);
      //elements is not an array so we need to force it to become an array
      elementsArray = [].slice.call(elements);
      //[].slice.call() turns the array-like object argument into an array
      // cant we use .from instead of .slice.call()
      return new DOMTree(elementsArray);
    }
  };

  //You don't need to edit this function
  //This function is used to get all of the elements from the DOM.
  //It's used together with the above function to select certain elements from the DOM
  //(and will select them by class, tag, or ID, as specified)
  //The important thing to note is that all selected elements will be stored in an array, which is stored as `this.htmlElements`
  function DOMTree(elements){
    //elements should be an array
    this.htmlElements = elements;
  };

  ////////////////////////////////////////////////////////
  //
  //
  //
  //START YOUR CODE BELOW:
  //////////////////////////////////////////////////////////

  DOMTree.prototype = {
    //jQuery .each: http://api.jquery.com/jquery.each/
    //This function should loop over each element in the `this.htmlElements` array
    //and apply a callback function to each individual element.
    //It will be helpful to do this first because you can use it in a bunch of other functions
    each: function (callback) {
     // console.log(this.htmlElements)
     this.htmlElements.forEach(function(elem){
      callback(elem);
     })
    },
    //jQuery .html: http://api.jquery.com/html/
    //If there is NO string passed in as the argument, this function should just return the innerHTML of the first item in the `this.htmlElements` array
    //If there IS a string passed in as an argument, this function should replace the innerHTML of each element in the `this.htmlElements` array with
    //the string that was passed in as an argument
    html: function (string) {
      if(!string){
        return this.htmlElements[0].innerHTML;
      }else{
        this.each(function(elem){
        elem.innerHTML = string;
       })
     }


  },

    //jQuery .empty: https://api.jquery.com/empty/
    //This function should remove all elements in the `this.htmlElements` array from the DOM
    //In other words, it should set the innerHTML of all of the elements in the `this.htmlElements` to empty
    empty: function() {
    
     this.each(function(elem){
      elem.innerHTML('');
    
      })
    },
    

    //jQuery .addClass: https://api.jquery.com/addclass/
    //This function should add a class to each of the elements in the `this.htmlElements` array
    //The class should be set to whatever string is passed in as the 'className' argument
    addClass: function(className) {
      this.each(function(elem){
        elem.className = className
      })


    },
    //jQuery .removeClass: https://api.jquery.com/removeclass/
    //This function should remove the class that's passed in as the 'className' argument from each of the elements in the `this.htmlElements` array
    removeClass: function(className) {
      this.each(function(elem){
        elem.classList.remove(className)
      })
    },
    //jQuery .remove: https://api.jquery.com/remove/
    //This function should remove each element from the 'this.htmlElements' array from the DOM entirely
    remove: function() {
     this.each(function(elem){
      elem.remove()
     })
    },
    //jQuery .append: http://api.jquery.com/append/
    //This function will receive a string of an  HTML element as an argumenent (for example, `<p>Test</p>`)
    //The function should append the element passed in as an argument to each element in the 'this.htmlElements' array
    append: function(string) {
      this.each(function(elem){
        var string1 = document.createElement('li')
        string1.innerHTML = string
        console.log(string1)
        elem.appendChild(string1);
      })
    },
    // another way to write this out without creating a new tag element
    // this.each(function(elem){
    //   elem.innerHTML = ('');
    // })
    //jQuery .attr: http://api.jquery.com/attr/
    //If no 'value' argument is passed into this function, it should just return the attribute (that matches the 'key' that's passed in as the first argument of the function) of the first element in the 'this.htmlElements' array
    //If there IS a 'value' argument passed in, this function should set the attribute (as specified by the 'key' and 'value' arguments) on each element in the 'this.htmlElements' array
    //For example, `attr('class', 'main-element')` should add the 'main-element' class to each element in the array
    attr: function (key, value) {
      if(!value){
        return this.htmlElements[0].getAttribute(key) 
      }else{
        this.each(function(elem){
          var attrElem = elem.getAttribute(key)
          elem.setAttribute(key,attrElem + ' ' + value)
        })
      }
    },
    //jQuery .on: http://api.jquery.com/on/
    //This function should attach an event listener to each of the elements in the 'this.htmlElements' array
    //The type of event each element should listen for is determined by the 'event' argument, and the callback function is determined by the 'fn' argument
    //For example, `on('click', function(){console.log('hello')})` would add a 'click' event listener to all of the elements, that would console.log hello when clicked
    on: function (event, fn) {
      this.each(function(elem){
        elem.addEventListener(event, fn);
      });
     
    },

    ////////////////////////////////////////////////////////
    //BONUSES:
    //these are not required;
    //attempt these only if you've completed everything else
    ////////////////////////////////////////////////////////

    //jQuery .children function: https://api.jquery.com/children/
    children: function(selector) {
      // var kid = document.selector[0].children
      //   return kid
    },
    //jQuery .parent function: https://api.jquery.com/parent/
    parents: function() {
      //add your code here
      //use .parentNode
    },
    //jQuery .find function: https://api.jquery.com/find/
    find: function (target) {
      //add your code here
    }

    //Additional Bonus:
    //What other jQuery methods would be helpful to have? Create some more functions based off of real jQuery methods
  }


}(this));
