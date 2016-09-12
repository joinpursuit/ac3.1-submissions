(function () {
  var callbacks = [];
  var loaded = false;

  //calls all registered functions once DOM is loaded
  document.addEventListener("DOMContentLoaded", function() {
    //set the loaded variable to true now that it's done loading
    //iterate through the callbacks array and call each function
  });

  function registerCallback(callback) {
    //if loaded === true just use the callback right away
    //otherwise push it into the callbacks array
  };

  //converts selector into a DOMTree object
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
      return new DOMTree(elementsArray);
    }
  };

  function DOMTree(elements){
    //elements should be an array
    this.htmlElements = elements;
  };

  DOMTree.prototype = {
    each: function (callback) {
      //add code
    },

    html: function (string) {
      //add code
      //use .innerHTML
    },

    empty: function() {
      //add code
      // use the html function above
    },

    addClass: function(className) {
      //add code

    },
    removeClass: function(className) {
      //add code
    },

    children: function(selector) {
      //add code
    },

    parents: function() {
      //add code
      //use .parentNode
    },

    remove: function() {
      //add code
    },

    append: function(string) {
      //add code
    },

    attr: function (key, value) {
      //add code
      //use .getAttribute() & .setAttribute()
    },

    find: function (target) {
      //add code
    },

    on: function (event, fn) {
      //add code
      //use .addEventListener()
    }

  }


}(this));
