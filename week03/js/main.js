$(document).ready(function() {

    // Step 1: Dynamic resize
    $(window).resize(function(){
    	if $(window.innerwidth > 500) {
    		$("#frame").removeClass("small").addClass("big")
    	} else {
    		$("#frame").removeClass("big").addClass("small")
    	}
    })
    	
}
    

    // Step 2: Checkbox genre filters
    // $("input:checkbox").onclick =function(){
    // 	if ($("#animation").prop('checked') == true) {
    // 			$("#animation").show()
    // 	} else {
    // 		$("#animation").hide()
    // 	}
    

    // $("input:checkbox").onclick =function(){
    // 	if ($("#action").prop('checked') == true) {
    // 			$("#action").show()
    // 	} else {
    // 		$("#action").hide()
    // 	}
    // }

    // $("input:checkbox").onclick =function(){
    // 	if ($("#drama").prop('checked') == true) {
    // 			$("#drama").show()
    // 	} else {
    // 		$("#drama").hide()
    // 	}
    // }
    

    // Step 3: Text box year filter
    $('form').submit(function (event) { event.preventDefault(); })

  //   $("#year").keyup(function(){
  //   	var userYear = parseInt($("#year").val())

  //   	$('div.movie').each(function () {

  //     	var movieYear = parseInt( $(this).find('dd.year').html() )

  //     	if(userYear < movieYear) {
  //     		$(this).hide()
  //     	} else {
  //     		$(this).show()
  //     	}

  // })

  //   })


    // Step 4: Both filters together
  	$('input').bind('keyup change', function (event) {
  		var userYear = parseInt($("input:year").val())

 	})


});

