


$(document).ready(function() {

    $(window).resize(function(){
    	window.innerWidth > 500 ? $('#frame').removeClass('small').addClass('big') :$('#frame').removeClass('big').addClass('small')
    })


    $('form').submit(function (event) { event.preventDefault(); })


    $('input').bind('keyup change', function (event) {
    	//event.preventDefault();

    	var userYear = parseInt($('input#year').val());
    	
    	if (isNaN(userYear)) userYear = 0;

    	$('div.movie').each(function () {

        	var movieYear = parseInt( $(this).find('dd.year').html() );
        	var movieGenre = $(this).find('dd.genre').text();
        	var checked = $('input#' + movieGenre).prop('checked');

      		((movieYear > userYear) && checked) ? $(this).show() : $(this).hide();

  		})
  
  	})



});
