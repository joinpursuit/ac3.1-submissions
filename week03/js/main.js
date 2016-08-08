
$(document).ready(function() {

    // Step 1: Dynamic resize
$(window).resize(function(){   
	if(window.innerWidth>500)
		$('#frame').removeClass('small').addClass('big')
	else
		$('#frame').removeClass('big').addClass('small')
	
}) 
//     // Step 2: Checkbox genre filters

// $('input').change(function(){
// 	var ani = $('#animation')
// 	var act = $('#action')
// 	var dram = $('#drama')

// 	if(ani.prop('checked'))
// 		$('.animation').show()
// 	else	
// 		$('.animation').hide()

// 	if(act.prop('checked'))
// 		$('.action').show()
// 	else	
// 		$('.action').hide()

// 	if(dram.prop('checked'))
// 		$('.drama').show()
// 	else	
// 		$('.drama').hide()

// })

//     // Step 3: Text box year filter
$('form').submit(function (event) { event.preventDefault(); })
    
//     $('#year').keyup(function(){
//     var userYear = parseInt($(this).val() )	

//      $('div.movie').each(function () {

//       var movieYear = parseInt( $(this).find('dd.year').html() )

//       // comparison:
//       if(movieYear>=userYear)
//       		$(this).show()
//       	else
//       		$(this).hide()

//   })
// })
// INPUT BOX HOVER FUNCTION........................
    $('#year').hover(function(){
    	$(this).css({'background-color':'lightblue'}).mouseleave(function(){
    		$(this).css({'background-color':'white'})
    	})
    })


    // Step 4: Both filters together
    $('input').bind('keyup change', function (event) {
	    	 var userYear = parseInt($('input#year').val());
	    	 if (isNaN(userYear)) {
	   		 userYear = 0;
	 		 }

	    	$('div.movie').each(function () {

				var movieYear = parseInt( $(this).find('dd.year').html() );
				var movieGenre= $(this).find('dd.genre').html();
				var checked = $('input#'+movieGenre).prop('checked');
				
				if((movieYear > userYear)&&(checked===true))
					$(this).show();
				
				else	
				
					$(this).hide();
				

			})

	})


});
