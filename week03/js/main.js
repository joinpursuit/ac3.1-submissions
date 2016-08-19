$(document).ready(function() {

    // Step 1: Dynamic resize
$(window).bind('resize', function() {
    var windowSize = $(window).width()
     if(windowSize <= 500){
            $('#frame').removeClass('big');
            $('#frame').addClass('small')
    } else if (windowSize > 500) {
            $('#frame').removeClass('small');
            $('#frame').addClass('big')
    }
            


})
// Step 2: Checkbox genre filters
  $('input:checkbox').on('change', function() {

      $("#" + this.id.replace('cb-action', 'action')).toggle(this.checked); 
  }).change();  

    $('input:checkbox').on('change', function() {
      $("#" + this.id.replace('cb-animation', 'animation')).toggle(this.checked);    
  }).change();  

  $('input:checkbox').on('change', function() {
      $("#" + this.id.replace('cb-drama', 'drama')).toggle(this.checked);
      }).change();  


// $("input:checkbox").change(function(){

//     if($('input#cb-action').prop("checked", true)){
//         $('.action').show();
//     } else {
//         $('.action').hide();
//     }

//     if($('input#cb-animation').prop("checked", true)){
//         $('.animation').show();
//     } else {
//         $('.animation').hide();
//     }

//     if($('input#cb-drama').prop("checked", true)){
//         $('.drama').show();
//     } else {
//         $('.drama').hide();
//     }
// });
 






    // Step 3: Text box year filter
    $('form').submit(function (event) { event.preventDefault(); })



    // Step 4: Both filters together



});

