
$(document).ready(function() {

    // Step 1: Dynamic resize

		$( window ).resize(function() {
		  //$( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
		  if (window.innerWidth > 500 ){
		  	 $('#frame').removeClass('small').addClass('big');
		  	}else if(window.innerWidth < 500){
		  		$('#frame').removeClass('big').addClass('small')
		  	}
		  
		});


  //   // Step 2: Checkbox genre filters
  //   $('#animation').on('click', function(){
  //   	if ('this:checked'){
  //   		div.animation.show()
  //   	}else{
  //   		div.animation.hide()
  //   	}

  //   })
  //   $('#action').on('click', function(){
  //   	if ('this:checked'){
  //   		div.action.show()
  //   	}else{
  //   		div.action.hide()
  //   	}
  //   })
  //   $('#drama').on('click', function(){
  //   	if('this.checked'){
  //   		div.dama.show()
  //   	}else{
  //   		div.drama.show
  //   	}
  //   })


  //   // Step 3: Text box year filter
    $('form').submit(function (event) { event.preventDefault(); })

	 //  	var userYear = parseInt('input').val()
	 //    $('div.movie').each(function () {

	 //      var movieYear = parseInt( $(this).find('dd.year').html() )

  //     // comparison:

  //     		if(movieYear > userYear){
  //     			$(this).show()

  //     		}else{
  //     			$(this).hide()
  //     		}
  // })

    // Step 4: Both filters together
$('input').bind('keyup change', function(event) {
	var userYear = parseInt($('input').val())
    if (isNaN(userYear)) {
       userYear = 0
          }
 		 $('div.movie').each(function () {

   		var movieYear = parseInt( $(this).find('dd.year').html())
   		var movieGenre = $(this).find('dd.genre').html()
   		var checked = $('input#'+ movieGenre).prop('checked')
   		
      if(movieYear > userYear &&  checked == true){
       			$(this).show()
           }else{
              $(this).hide()
              }
     })
})
})
