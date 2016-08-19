$(document).ready(function() {
    // Step 1: Dynamic resize
    $(window).resize(function() {
            if (window.innerWidth > 500) {
                $('#frame').removeClass('small').addClass('big')
            } else {
                $('#frame').removeClass('big').addClass('small')
            }
        })
        // Step 2: Checkbox genre filters
        //     $('input:checkbox').change(function() {
        //             if ($('input#action').prop('checked')) {
        //                 $(".action").show()
        //             } else { $('.action').hide() }
        //             if ($('input#animation').prop('checked')) {
        //                 $(".animation").show()
        //             } else { $('.animation').hide() }
        //             if ($('input#drama').prop('checked')) {
        //                 $(".drama").show()
        //             } else { $('.drama').hide() }
        //         })
        //         // Step 3: Text box year filter
    $('form').submit(function(event) {
        event.preventDefault();
            })
        // $( "#year" ).keyup(function() {
        //     var userYear = parseInt($('#year').val());
        //     	$('div.movie').each(function() {

        //          var movieYear = parseInt($(this).find('dd.year').html())

        //             // comparison:
        //         if (movieYear > userYear) {
        //         	$(this).show()
        //         }
        //         else {$(this).hide()}
        //         })

            // });


        // Step 4: Both filters together
        $('input').bind('keyup change', function(event) {
            var userYear = parseInt($('#year').val());
            if (isNaN(userYear)) {
                userYear = 0
            }
            $('div.movie').each(function() {
            	var movieYear = parseInt($(this).find('dd.year').html());
                var movieGenre = $(this).find('dd.genre').html();
                var checked = $('input#' + movieGenre).prop('checked');

                // comparison:
                if (movieYear > userYear && checked) {
                    $(this).show()
                } 
                else { $(this).hide() 
                }
            })

        })
        //Bonus
        <form>Title:<input id = 'title' type='text' name='title'/>
          	<form>Genre:<input id = 'genre' type='text' name='genre'/>
          	<form>Year:<input id = 'year' type='text' name='year'/>
          	<form>Description:<input id = 'description' type='text' name='description'/>
          	<form>Actors:
          	<input id = 'actors1' type='text' name='actors1'/>
          	<input id = 'actors2' type='text' name='actors2'/>
          	<input id = 'actors3' type='text' name='actors3'/>
        $('input#title')

})
