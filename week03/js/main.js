
$(document).ready(function() {

// Step 1: Dynamic resize

 $(window).resize(function() {
        if ($(window).innerWidth() > 500) {

            $( "#frame" ).removeClass( "small" ).addClass( "big" );
             
        } else{
            $( "#frame" ).removeClass( "big" ).addClass( "small" );       
        }   
 	});



 // Step 2: Checkbox genre filters

		// $( "input[type='checkbox']" ).change(function(){
	 //  	if($('#animation').prop("checked")){
	 //  		$('.animation').show(); 
	 //  		$('.action').hide();
	 //  		$('.drama').hide();
	 //  	} 
	 //  	else if($('#action').prop("checked")){  		
	 //  		$('.animation').hide();
	 //  		$('.drama').hide();
	 //  		$('.action').show();
	 //  	} 
	 //  	else if($('#drama').prop("checked")){
	 //  	 $('.animation').hide();
	 //  		$('.action').hide();
	 //  		$('.drama').show();
	 //  	} else {
	 //  		$('.animation').show(); 
	 //  		$('.action').show();
	 //  		$('.drama').show();
	 //  	}
	// });



// Step 3: Text box year filter

    $('form').submit(function (event) { event.preventDefault(); })
    	

//     	$('#year').keyup(function(){
// 	    $('.movie').each(function (){
// 	    var userYear = parseInt($('[type="text"]').val());
// 	    var movieYear = parseInt($(this).find('dd.year').html());

// 		// comparison:
// 			if( movieYear > userYear){
// 				$(this).shoxw();
// 			} else {
// 				$(this).hide();
// 			}

// 		});
// 	});
// });



 // Step 4: Both filters together

 $('input').bind('keyup change', function (event) {
 	var userYear = parseInt($('#year').val());
  	if (isNaN(userYear)) {
	    	userYear = 0
	  }

  	$('.movie').each(function (){
 	var movieYear = parseInt( $(this).find('dd.year').html() );
 	var movieGenre = $(this).find('dd.genre').html();
	var checked = $('input#'+movieGenre).prop('checked')

		if( movieYear > userYear && checked){
					$(this).show();
				} else {
					$(this).hide();
				}
	});

  });

});

