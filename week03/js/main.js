$(document).ready(function() {

    // Step 1: Dynamic resize

$(window).resize(function(){
  if (window.innerWidth >= 500){
     $("#frame").removeClass("small").addClass("big");
      return;
  } else if (window.innerWidth < 500) {
      $("#frame").removeClass("big").addClass("small");
}
})





    // Step 2: Checkbox genre filters


$("input").click(function() {
 if ($('#animation').prop('checked')==true) {
      $(".animation").show();
  
  } else if ($('#animation').prop('checked')==false) {
      $(".animation").hide();
  }
});

// action genre

$("input").click(function() {
 if ($('#action').prop('checked')==true) {
      $(".action").show();
  
  } else if ($('#action').prop('checked')==false) {
      $(".action").hide();
  }
});

// drama genre

$("input").click(function() {
 if ($('#drama').prop('checked')==true) {
      $(".drama").show();
  
  } else if ($('#animation').prop('checked')==false) {
      $(".drama").hide();
  }
});



// Step 3: Text box year filter
    $('form').submit(function (event) { event.preventDefault(); })

$("#year").keyup(function() {
  var userYear = parseInt($("input").val())

$('div.movie').each(function () {

      var movieYear = parseInt( $(this).find('dd.year').html() )


      // comparison:
      if ($('movieYear' > userYear)){
      $(this).show();
  
  } else if ($('movieYear' < userYear)){
      $(this).hide();
  }

  })


});



//$("ul").append("<li>" + $("input").val() + "</li>");



    // Step 4: Both filters together



});


	 

