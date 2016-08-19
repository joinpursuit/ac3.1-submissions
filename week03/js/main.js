$(document).ready(function() {
 
    // // Step 1: Dynamic resize
    $(window).resize(function() {
  		// This only works sometimes
    	// $('#frame').toggleClass(function() {
    	// 	if(window.innerWidth > 500) {
    	// 		console.log(window.innerWidth);
    	// 		return 'big';
    	// 	} else {
    	// 		console.log(window.innerWidth);
    	// 		return 'small';
    	// 	}
    	// })
		if(window.innerWidth > 500) {
    		console.log(window.innerWidth);
    		$('#frame').removeClass('small').addClass('big');
    	} else {
    		$('#frame').removeClass('big').addClass('small');
    	}
     })
    // Step 2: Checkbox genre filters

    // $('input:checkbox').change(function() {
    // 	if($('input#animation').prop('checked')) {
    // 		$('div.animation').show();
    // 	} else {
    // 		$('div.animation').hide();
    // 	} if($('input#action').prop('checked')) {
    // 		$('div.action').show();
    // 	} else {
    // 		$('div.action').hide();
    // 	} if($('input#drama').prop('checked')) {
    // 		$('div.drama').show();
    // 	} else {
    // 		$('div.drama').hide();
    // 	}
    // })

    // Step 3: Text box year filter
    $('form').submit(function (event) { event.preventDefault(); })

    // $('#year').keyup(function() {
    // 	var userYear = parseInt($('#year').val());
    // 	$('div.movie').each(function() {												
    // 		var movieYear = parseInt($(this).find('dd.year').html());
    // 		if( movieYear > userYear) {
    // 			$(this).show();
    // 		} else {
    // 			$(this).hide();
    // 		}
    // 	});
    // });

    // Step 4: Both filters together

    $('input').bind('keyup change', function (event) {
    	
    	var userYear = parseInt($('#year').val());
    	if (isNaN(userYear)) {
    		userYear = 0;
    	} 
		
		$('div.movie').each(function() {							 											
		
		var movieYear = parseInt($(this).find('dd.year').html());
		// console.log(movieYear)

		var movieGenre = $(this).find('dd.genre').html();				
		var checked = $('input#' + movieGenre).prop('checked');	
		if( movieYear > userYear && checked) {
			$(this).show();
			console.log(movieYear)
		} else {
			$(this).hide();
		}
	
	});
    })


});
