$(document).ready(function() {
	var changeWindow = document.getElementById('frame')

    // Step 1: Dynamic resize
	$( window ).resize(function() {
		if($(window).innerWidth() > 500){
			$(changeWindow).removeClass("small")
			$(changeWindow).addClass("big")
		}
		else{
			$(changeWindow).removeClass("big")
			$(changeWindow).addClass("small")
		}

	});


// 	var userYear =0; 
// 	  $( "#year" ).keyup(function() {
// 	   userYear = parseInt($("input#year").val())
// 		console.log(userYear)
// 		$('div.movie').each(function () {

//       var movieYear = parseInt( $(this).find('dd.year').html() )

//       // comparison:
//       if(movieYear < userYear){
//       	$(this).hide()
//       }
//       else{
//       	$(this).show()
//       }

//   		})
// 		});

	  


// 	$( "input:checkbox" ).change(function(){

// 	    if($("input#animation").is(':checked'))
// 	    {
// 	    	$('.animation').show()
// 	        // Checkbox is checked.
// 	    }
// 	    else
// 	    {
// 	       $('.animation').hide()

// 	        // Checkbox is not checked.
// 	    }    

// 	    if($("input#action").is(':checked'))
// 	    {
// 	    	$('.action').show()
// 	        // Checkbox is checked.
// 	    }
// 	    else
// 	    {
// 	       $('.action').hide()

// 	        // Checkbox is not checked.
// 	    } 

// 	    if($("input#drama").is(':checked'))
// 	    {
// 	    	$('.drama').show()
// 	        // Checkbox is checked.
// 	    }
// 	    else
// 	    {
// 	       $('.drama').hide()
// 	        // Checkbox is not checked.
// 	    } 


// });

	var userYear = 0;
    // Step 3: Text box year filter
    $('form').submit(function (event) { event.preventDefault(); 

    $('input').bind('keyup change', function (event) {
	  userYear = parseInt($("input#year").val())

	  if (isNaN(userYear)) {
    	userYear = 0
  		}
  		$('div.movie').each(function () {

      var movieYear = parseInt( $(this).find('dd.year').html() )
      var movieGenre = $(this).find('dd.genre').html()
      var checked = $('input#'+movieGenre).prop('checked')
      console.log(movieGenre)

      // comparison:
      if(movieYear > userYear && checked === true){
      	$(this).show()
      }
      else{
      	$(this).hide()
      }

  		})

  })
    })

    // var newDiv;
    // // Update movie list
    // $(".submitButton").click(function(){
    // 	var newTitle = $('input.newTitle').val()
    // 	var newYear = $('input.newYear').val()
    // 	var newGenre = $('input.newGenre').val()
    // 	var newDate = $('input.newDate').val()
    // 	var newCast = $('input.newCast').val().split(",")
    // 	var newPlot = $('input.newPlot').val()
    // 	var newCastUl ="<ul class='newCaster'></ul>"

    // 	if(newGenre == "animation"){
    // 	newDiv = "<div class = 'movie animation'><h1 class ='name'>"+newTitle+"</h1><dl><dt class='year'>Release date:</dt> <dd class='year'>"+newDate + "</dd><dt class='genre'>Genre:</dt> <dd class='genre'>"+ newGenre+"</dd></dl><div class='cast'>Starring:"+newCastUl+"</div><p class ='description'>"+newPlot+"</p></div>"
    	
    // 	for (var i = 0; i < newCast.length; i++) {
    // 		newCastUl.append(newCast[i])
    // 	}

    // 	}

    // 	console.log(newDiv)


    // })




});

