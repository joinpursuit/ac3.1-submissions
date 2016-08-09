
$(document).ready(function() {

    // Step 1: Dynamic resize
    // var width = window.innerWidth;

    $(window).resize(function(){
    	// document.getElementById("#frame").onClick=function(){
    		if($(window).width() > 500){
    			$("#frame").removeClass("small").addClass("big");
    		} else {
    			$("#frame").removeClass("small").addClass("big");
    		}
    	// }
    });

    // Step 2: Checkbox genre filters
    $("input[type='checkbox']").change(function(){
       if($("#animation").prop('checked')){
        $("div.animation").show();
       } else {
        $("div.animation").hide();
       }
       if($("#action").prop('checked')){
        $("div.action").show();
       } else {
        $("div.action").hide();
       }
       if($("#drama").prop('checked')){
        $("div.drama").show();
       } else {
        $("div.drama").hide();
       }
    });

    
    // Step 3: Text box year filter
    $('form').submit(function (event) { event.preventDefault(); })


    $("#year").keyup(function(){
      var userYear = parseInt($("#year").val());

     $('div.movie').each(function() {

      var movieYear = parseInt($(this).find('dd.year').html() )

      // comparison:

      if(movieYear > userYear){
        $(this).show();
      } 
      else {
        $(this).hide();
      }
     
    })


  });


    // Step 4: Both filters together
    //  $('input').bind('keyup change', function (event) {
      
    //     var userYear = parseInt($("input#year").val());
    //     if (isNaN(userYear)) {
    //       userYear = 0
    //    }

    //    $('div.movie').each(function () {

    //        var movieYear = parseInt( $(this).find('dd.year').html() )
    //        var movieGenre = $(this).find('dd.genre').html()
    //        var checked = $('input#' + movieGenre).prop('checked');
    //        if((movieYear > userYear )&& (checked===true)){
    //          $(this).show();
    //        } else {
    //          $(this).hide();
    //        }
    //   })
    // });

});




