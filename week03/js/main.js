
$(document).ready(function() {

    // Step 1: Dynamic resize
$(window).resize(function(){
	var h = window.innerWidth
	console.log(h)
	if(h > 500){
	  $('#frame').removeClass('small').addClass('big')
	}
	else
	{
	  $('#frame').removeClass('big').addClass('small')
	}
})


//     // Step 2: Checkbox genre filters
//     $('input:checkbox').change(function(){
//     	if($('input#animation').prop('checked')){
//     		$('div.animation').show();
//     	}
//     	else
//     	{
//     		$('div.animation').hide();
//     	}	
//     	if($('input#action').prop('checked')){
//     		$('div.action').show();

//     	}
//     	else
//     	{
//     		$('div.action').hide();
//     	}
//     	if($('input#drama').prop('checked')){
//     		$('div.drama').show();
//     	}
//     	else{
//     		$('div.drama').hide();
//     	}
// });



//     // Step 3: Text box year filter
     $('form').submit(function (event) { event.preventDefault(); })
       
//     $('#year').keyup(function(){
//     	var userYear = parseInt($('#year').val())
//     	$('div.movie').each(function(){
//     	    var movieYear = parseInt( $(this).find('dd.year').html() )
//     		if(movieYear > userYear){
//     			$(this).show()
//     		}
//     		else
//     		{
//     			$(this).hide()
//     		}
//     	})
//     });

    // Step 4: Both filters together
    $('input').bind('keyup change', function (event) {
    	
        var userYear = parseInt($('#year').val())
        if (isNaN(userYear)) {
             userYear = 0
        }
        $('div.movie').each(function(){
        var movieYear  = parseInt( $(this).find('dd.year').html() )
        var movieGenre = $(this).find('dd.genre').html() 
        var checked = $('input#'+movieGenre).prop('checked')
        if(movieYear > userYear  && checked){
        	$(this).show ()
        }
        else
        {
        	$(this).hide()
        }
  })
});



});
