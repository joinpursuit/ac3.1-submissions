
$(document).ready(function() {

  // Step 1: Dynamic resize
  $( window ).resize(function() {
	  if(window.innerWidth > 500){
	  	$('#frame').removeClass('small').addClass('big')
	  } else {
	  	$('#frame').removeClass('big').addClass('small')
	  }
	});

  // // Step 2: Checkbox genre filters
  // $('input:checkbox').change(function(){
  	
  // 	  	//show movies with class drama
  // 	if($('input#drama').prop('checked')){
  // 		$('div.drama').show()
  // 	} else {
  // 		$('div.drama').hide()
  // 	}

  // 	//show movies with class animation
  // 	if($('input#animation').prop('checked')){
  // 		$('div.animation').show()
  // 	} else {
  // 		$('div.animation').hide()
  // 	}

  // 	 //show movies with class action
  // 	if($('input#action').prop('checked')){
  // 		$('div.action').show()
  // 	} else {
  // 		$('div.action').show()
  // 	}

  // });


  // // Step 3: Text box year filter
  // $('form').submit(function (event) { event.preventDefault(); })
  
  // //allow user to press enter
  // $('#year').keyup(function(){
  // 	var userYear = parseInt( $('#year').val() )
  
  // 	 $('div.movie').each(function () {

  //     var movieYear = parseInt( $(this).find('dd.year').html() )

  //     // show movies that are greater then users input
  //     if(movieYear >= userYear) {
  //     	$(this).show()
  //     } else {
  //     	$(this).hide()
  //     }

  // 	})

  // })

  // Step 4: Both filters together
  $('form').submit(function (event) { event.preventDefault(); })

  $('input').bind('keyup change', function (event) {
  	var userYear = parseInt( $('#year').val() )

	  if (isNaN(userYear)) {
	    userYear = 0
	  }

	  $('div.movie').each(function () {

      var movieYear = parseInt( $(this).find('dd.year').html() )
      var movieGenre = $(this).find('dd.genre').html()
      
      var checked = $('input#'+ movieGenre).prop('checked')

      // show movies that are greater then users input
      if(movieYear >= userYear && checked) {
      	$(this).show()
      } else {
      	$(this).hide()
      }

  	})

  })


});
