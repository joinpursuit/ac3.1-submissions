$(document).ready(function() {

    // Step 1: Dynamic resize
    $(window).resize(function(){
    	if ($(window).innerWidth() > 500) {
    		$("#frame").removeClass("small").addClass("big")
    	} else {
    		$("#frame").removeClass("big").addClass("small")
    	}
    })
    	

   
    //Step 2: Checkbox genre filters
 //    $("input:checkbox").change(function(){
 //    	if ($("#animation").prop('checked')) {
 //    			$("#animation").show()
 //    	} else {
 //    		$("#animation").hide()
 //    	}
 //    })
    

 //    $("input:checkbox").change(function(){
 //    	if ($("#action").prop('checked')) {
 //    			$("#action").show()
 //    	} else {
 //    		$("#action").hide()
 //    	}
 //    })

 //    $("input:checkbox").change(function(){
 //    	if ($("#drama").prop('checked')) {
 //    			$().show()
 //    	} else {
 //    		$("#drama").hide()
 //    	}
 //    })
    

 //    // Step 3: Text box year filter
  
    $('form').submit(function (event) { 
    	event.preventDefault(); 
    });

 //    $("#year").keyup(function(){
 //    	var userYear = parseInt($("#year").val());

 //    	$('div.movie').each(function () {

 //      	var movieYear = parseInt( $(this).find('dd.year').html() )

 //      	if(userYear < movieYear) {
 //      		$(this).hide()
 //      	} else {
 //      		$(this).show()
 //      	}

 //  	})

 // });


//     Step 4: Both filters together
 	$('input').bind('keyup change', function (event) {
  		var userYear = parseInt($("#year").val());

  		if (isNaN(userYear)) {
    		userYear = 0
  		}

  		$('div.movie').each(function () {

      	var movieYear = parseInt($(this).find('dd.year').html())
      	var movieGenre = $(this).find('dd.genre').html()
      	var checked = $('input#'+movieGenre).prop('checked')

      	if(movieYear > userYear && checked) {
      		$(this).show()
      	} else {
      		$(this).hide()
      	}

  	})

 	});
});
