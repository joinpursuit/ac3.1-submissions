$(document).ready( function () {
	//Activates as user begins scrolling through the div
	// $(".gifs").hover(function () {
	// 	//displays hidden div element & content 
	// 	$(".gifs").css("display", "show")
	// 	console.log("I am working")
	// 	//images animate from the left to center of screen
	// 	$(".1").animate( {
	// 				left: '250px'
	// 			}, 1500);
	// 	for (var i = 1; i <= 4; i++) {
	// 		if (i % 2 === 0) {
	// 			$('.' + i).animate( {
	// 				left: '250px'
	// 			}, 1500);
	// 		} else {
		//images animte from the right to center of screen
	// 			$('.' + i).animate( {
	// 				right: '250px'
	// 			}, 1500);
	// 		}
	// 	};
	// });
	//^^^^None of this shit works^^^^


	//Adds a numerical class name to every img element in a document, so as to manipulate them easier later. I chose to just add them manually however, since I was dealing with such a small number of gifs on each page.
	function addClass() {
		var imgArr = document.getElementsByTagName('img');
		for (var i = 0; i < imgArr.length; i++) {
			$(imgArr[i]).addClass((i + 1).toString())
			$(imgArr[i]).addClass("hide")
		}
		$(imgArr[0]).removeClass("hide")
	}
	addClass();

	//appends random gif to an empty div 
	function appendGif(gifObj) {	
		var gifURL = gifObj.data.image_url;
		$('.r-gif').append("<img src='" + gifURL + "'>");
	}

	//Requests a random gif url from giphy servers once "/random" page loads
	$.get("random.html", function () {
		$.ajax({
			url:'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=',
			success: appendGif
		});
	});

	//Runs the same function as above on button click instead of page load.
	$(".random").click(function () {
		$(".r-gif").empty();
		$.ajax({
			url:'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=',
			success: appendGif
		});
	});

	//appends multiple gifs to an ordered list element
	function appendTopGifs(gifObj) {
		var gifArr = gifObj.data;
		gifArr.forEach(function (gif) {
			var gifURL = gif.images.original.url;
			$('.top-ten').append("<li> <br><img src='" + gifURL + "'></li> <br>");
		});
	}

	//Requests the top 10 trending gifs from giphy's servers once "/trending" loads and then runs a callback function to show them on the page
	$.get("trending.html", function () {
		$.ajax({
			url:'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=10',
			success: appendTopGifs
		});
	});

	//Goes to next gif on page
	$(".next-gif").click(function () {
		var imgArr = document.getElementsByTagName('img')
		for (var i = 1; i < imgArr.length; i++) {
			//this if statement restarts the loop once the user has clicked past the last gif on the page
			if ($("." + (i + 1)).attr("class") === imgArr.length.toString()) {
				i = 1
				$("." + imgArr.length.toString()).addClass('hide');
				$("." + i).removeClass('hide');
				break
			 }
			//this if statement cycles the "hide" class through each progressive img element I've assigned a number (i.e. "1", "2", "3", etc.) class to
			if ($("." + i).attr("class") !== i + " hide") {
				$("." + i).addClass('hide');
				$("." + (i + 1)).removeClass('hide');
				break
			}
		}
	});


	//appends search result to dedicated div
	function searchGif(gifObj) {
		gifURL = gifObj.data[Math.floor(Math.random() * ((24 - 0) + 1)) + 0].images.original.url;
		$("#result").append("<img src='" + gifURL + "'>");
		$(".search").val('');

	}

	//Requests first search result of given search parameters from Giphy's servers
	$('form').submit(function(event) {
		event.preventDefault()
		$("#result").empty()
		var params = $(this).serializeArray()[0].value.split(' ').join('+');
		var url = "http://api.giphy.com/v1/gifs/search?q=";
		var key = "&api_key=dc6zaTOxFJmzC&limit=25";
		$.ajax({
			url: url + params + key,
			success: searchGif
		});
	});
});