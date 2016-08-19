
$(document).ready(function() {

    // Step 1: Dynamic resize
    $(window).resize(function() {
        if ($(window).width() < 500) {
            $("#frame").removeClass("big");
            $("#frame").addClass("small")
        } else {
            $("#frame").removeClass("small");
            $("#frame").addClass("big")
        }
    });
    // Step 2: Checkbox genre filters
    $('#animation').change(function() {
        if ($(this).is(":checked")) {
            $(".animation").show();
        } else {
            $(".animation").hide();
        }
    });
    $('#drama').change(function() {
        if ($(this).is(":checked")) {
            $(".drama").show();
        } else {
            $(".drama").hide();
        }
    });
    $('#action').change(function() {
        if ($(this).is(":checked")) {
            $(".action").show();
        } else {
            $(".action").hide();
        }
    });



    // Step 3: Text box year filter
    $('form').submit(function(event) { event.preventDefault(); })
    // $("#year").keyup(function( event ) {
    // 	var userYear = parseInt($("#year").val());
    // 	// console.log(userYear);
    // 	// console.log("keyup");
    // 	 $('div.movie').each(function () {
		  //   var movieYear = parseInt( $(this).find('dd.year').html() );
	   //    	// comparison:
	   //    	// console.log("forEach");
	   //    	if(movieYear > userYear){
	   //    		// console.log("comparison");
	   //    		$(this).show();
	   //    	}else {
	   //    		// console.log("comparison else");
	   //    		$(this).hide();
	   //    	}
  		// });
   	// });



    // Step 4: Both filters together
    $('input').bind('keyup change', function (event) {
    	$("#year").keyup(function( event ) {
    	var userYear = parseInt($("#year").val());
    	if (isNaN(userYear)) {
    		userYear = 0
  		}

    	 	$('div.movie').each(function () {
		    	var movieYear = parseInt( $(this).find('dd.year').html() );
		    	var checked = $(this).find('dd.genre').html();
	      	// comparison:
		      	if(userYear !=0){
		      		if(movieYear > userYear && $("#"+checked).is(":checked")){
		      		// console.log("comparison");
		      			$(this).show();
		      		}else {
		      		// console.log("comparison else");
		      			$(this).hide();
		      		}
		      	}	
  			});
   		});
  	})



});
