//this one function work for pages: home, random, scroll
function loadGifs(response, imgInfo, newClass, i) {
  var gifs = document.querySelector('.gifs');

  //create element to place random gif
  var imageDiv = document.createElement('div');
  var image = document.createElement('img');

  //set the image src to the ajax response
  if (imgInfo && i) {
    //scroll page gif
    console.log(response)
    var imageUrl = response.data.images.original.url
  } else if (imgInfo) {
    //home page gif
    var imageUrl = response.data.images.fixed_width_downsampled.url
  } else {
    //random page gif
    var imageUrl = response.data.fixed_width_downsampled_url;
  }
  image.setAttribute('src', imageUrl);
  image.classList.add('gif');
  if (newClass) imageDiv.classList.add(newClass);
  if (i == 0) imageDiv.classList.add('current')

  //append image to page
  imageDiv.appendChild(image)
  gifs.appendChild(imageDiv)

}

//AJAX REQUEST 
function ajaxCall(ajaxUrl, imgInfo, type, newClass, i) {
  var request = new XMLHttpRequest();
  request.open('GET', ajaxUrl, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var resp = JSON.parse(request.responseText);
      console.log(resp)
      if (type == "search") loadSearchGifs(resp)
      else loadGifs(resp, imgInfo, newClass, i)

    } else {
      // We reached our target server, but it returned an error
      console.log(err)
    }
  };
  request.send();
}

// see what page we are on
var href = window.location.href.split("").splice(window.location.href.lastIndexOf("/") + 1).join("").toLowerCase();

//--------------------HOME PAGE------------------------
//--------------------HOME PAGE------------------------
if (href === "") {
  function homePageImages() {
    var ajaxUrlTrendy = 'http://api.giphy.com/v1/gifs/translate?s=puppies&api_key=dc6zaTOxFJmzC';
    for (var i = 0; i < 30; i++) ajaxCall(ajaxUrlTrendy, true);
  }
  homePageImages()
}

//--------------------RANDOM PAGE------------------------
//--------------------RANDOM PAGE------------------------
if (href === "random") {
  function randomPageImages() {
    var ajaxUrlRandom = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
    for (var i = 0; i < 30; i++) ajaxCall(ajaxUrlRandom);
  }
  randomPageImages()
}

//--------------------SCROLL PAGE------------------------
//--------------------SCROLL PAGE------------------------
if (href === "scroll") {
  function scrollPageImages() {
    var ajaxUrlTrendy = 'http://api.giphy.com/v1/gifs/translate?s=funny&api_key=dc6zaTOxFJmzC';
    for (var i = 0; i < 20; i++) {
      ajaxCall(ajaxUrlTrendy, true, "scroll", "hide", i);
    }
    scroll()
  }

  scrollPageImages()
}

function scroll() {

  var nextEl = document.querySelector(".next");
  var prevEl = document.querySelector(".prev");

  function showNextGif() {
    var currentElement = document.querySelector(".current");
    //remove the current class from the main image 
    currentElement.classList.remove("current");

    if (currentElement.nextElementSibling) {
      // That means there is another image 
      currentElement.nextElementSibling.classList.add("current");
    } else {
      // We are at the end of the slideshow
      currentElement.parentElement.children[0].classList.add("current");
    }
  };

  function showPreviousGif() {
    var currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");

    if (currentElement.previousElementSibling) {
      // That means there is another image 
      currentElement.previousElementSibling.classList.add("current");
    } else {
      // We are at the end of the slideshow
      var childImages = currentElement.parentElement.children;
      childImages[childImages.length - 1].classList.add("current");
    }
  };
  nextEl.addEventListener("click", showNextGif);
  prevEl.addEventListener("click", showPreviousGif);
}


//--------------------SEARCH PAGE------------------------
//--------------------SEARCH PAGE------------------------

var runLoop = true;

function loadSearchGifs(response) {

  var gifs = document.querySelector('.gifs');

  //if the api return can't find search let the user know
  if (response.data.length == 0) {
    if (runLoop) {
      var errorMessage = document.createElement('h3')
      errorMessage.innerText = "Opps. Please search again"
      gifs.appendChild(errorMessage)
    }
    runLoop = false;
    return;
  } else {
    for (var i = 0; i < response.data.length; i++) {

      //create element to place random gif
      var imageDiv = document.createElement('div');
      var image = document.createElement('img');

      // find image url in JSON object
      var imageUrl = response.data[i].images.fixed_width_downsampled.url;
      image.setAttribute('src', imageUrl);
      image.classList.add('gif');

      //append image to page
      imageDiv.appendChild(image)
      gifs.appendChild(imageDiv)
    }

  }

}

function searchGifs() {
  event.preventDefault();

  //clear images
  var gifs = document.querySelector('.gifs')
  gifs.innerHTML = "";

  // grab value of user input and place in api url
  var formData = document.querySelector('form').elements;
  var search = formData.search.value.split(" ").join("+");
  var ajaxUrlSearch = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC';

  ajaxCall(ajaxUrlSearch, true, "search");

  //clear imput form
  var input = document.querySelector('input')
  input.value = ""

}

// load images for the search url
if (href === "search") {
  var search = document.querySelector('button');
  search.addEventListener("click", searchGifs)
}
