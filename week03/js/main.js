
$(document).ready(function() {

    // Step 1: Dynamic resize

    $( window ).resize(function() {
  		if($(window).width() < 500){
  			$('#frame').removeClass('big').addClass('small');
  			
  		}
  		else {
  			$('#frame').removeClass('small').addClass('big');

  		}

});

    // Step 2: Checkbox genre filters


   	//
   
    // $("input[type='checkbox']").change(function(){

   	// 	 $('#animation').prop('checked') ? $('.animation').show() : $('.animation').hide();
   	// 	 $('#drama').prop('checked') ? $('.drama').show() : $('.drama').hide();
   	// 	 $('#action').prop('checked') ? $('.action').show() : $('.action').hide();
    // });


    // Step 3: Text box year filter

    $('form').submit(function (event) { event.preventDefault(); })

	 // $('#year').keyup(function(){
  //   		var userYear = parseInt($('input#year').val());
  //   		$('div.movie').each(function () {

//  	      	var movieYear = parseInt( $(this).find('dd.year').html() )

 //      		// comparison:
 //      		if(movieYear > userYear){
 //      			$(this).show();
 //      		}
 //      		else{
 //      			$(this).hide();
 //      		}
  //   		})
	    	  

	 //  	})

	 //Bonus Question: add a form that appends new movie.


        $('.submitBtn').click(function(){
	         var castStr ='';
		    var castArr = $('.castFrm').val();
		    castArr= castArr.split(', ');
			for(var i=0;i<castArr.length;i++){
	            castStr+= '<li>'+castArr[i]+'</li>';
	        }
        var addMovie = '<div class ="movie '+$('.genreFrm').val()+'">'
	        +'<h1 class="name">'+$('.titleFrm').val()+'</h1>'+
	         '<dl><dt class="year">Release date:</dt><dd class="year">'+parseInt($('.yearFrm').val())+'</dd><dt class="genre">Genre:</dt><dd class="genre">'+$('.genreFrm').val()+'</dd></dl>'+
	         '<div class="cast">Starring: <ul>'+castStr+'<ul>'+'</div>'+

	         '<p class="description">'+$('.descriptionFrm').val()+'</p>'
	        +'</div>';


	        $('#frame').append(addMovie);
	        $(".submitForm")[0].reset();

        })

        //Extra: This code shows and hides the input form when the button add movie is clicked

	    $('.addMovie').click(function(){
	    	
	    	// $('.submitForm').toggle();
			if ( $('.submit').css('visibility') === 'hidden' )
		   		$('.submit').css('visibility','visible');
		  else
		    	$('.submit').css('visibility','hidden');

	    });




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
			if((movieYear > userYear)&&(checked===true)){
				$(this).show();
			}
			else	
			{
				$(this).hide();
			}

		})

	})




});







