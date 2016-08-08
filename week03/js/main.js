
$(document).ready(function() {

    // Step 1: Dynamic resize

    $(window).resize(function () {
    	return window.innerWidth > 500 ? $('#frame').removeClass('small').addClass('big') : $('#frame').removeClass('big').addClass('small');
    })


    // Step 2: Checkbox genre filters

    // $('input:checkbox').change(function () {
    // 	$('input#animation').prop('checked') === true ? $('div.animation').show() : $('div.animation').hide();
    // 	$('input#action').prop('checked') === true ? $('div.action').show() : $('div.action').hide();
    // 	$('input#drama').prop('checked') === true ? $('div.drama').show() : $('div.drama').hide();

    // })




    // Step 3: Text box year filter
    $('form').submit(function (event) { event.preventDefault(); 
	    // $('input#year').keyup(function () {
		   //  var userYear = parseInt( $('input#year').val() );
		   //  $('div.movie').each(function () {

     //  			var movieYear = parseInt( $(this).find('dd.year').html() );

     //  			// comparison:

     //  			movieYear > userYear ? $(this).show() : $(this).hide();

  			// });
	    // });
    })




    // Step 4: Both filters together
    $('input').bind('keyup change', function (event) {
    	var userYear = parseInt( $('input#year').val() );
    	if (isNaN(userYear)) { userYear = 0 }
		$('div.movie').each(function () {
      			var movieYear = parseInt( $(this).find('dd.year').html() );
      			var movieGenre = $(this).find('dd.genre').html();
      			var checked = $('input#'+movieGenre).prop('checked')
      			// comparison:

      			movieYear > userYear && checked === true ? $(this).show() : $(this).hide();

  			});

  })

    //bonus
	$('button').click(function () {
		$('#new-movie').submit(function () {
			var newEntry = '';
		    var castStr = '';
		    $('input#cast').val().split(',').forEach( function(actor) {
		            castStr += '<li>' + actor + '</li>'; 
		    }) //Sorts the actors into an array and then wraps code around each of their names. I'm unsure how to require commas for the input and how to limit it to three names.

			newEntry += '<div class="movie ' + $('input#genre').val().toLowerCase() + '"> <h1 class="name">' + $('input#title').val() + '</h1> <p>Release date: <span class="year">' + $('input#newYear').val() + '</span>, Genre: <span class="genre">' + $('input#genre').val().toLowerCase() + '</span>.</p> <div> Starring: <ul>' + castStr + '</ul> </div> <p class="description">' + $('input#description').val() + '</p> </div>';

			$('div#frame').append(newEntry) //adds new movie entry with info to the end of the page
			$('input#genre').val('') //these are for clearing the input values afterwards
			$('input#title').val('')
			$('input#newYear').val('')
			$('input#description').val('')
			$('input#cast').val('')

		})
	})    

});

