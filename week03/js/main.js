$(document).ready(function() {

$(window).resize(function() {
 	if (window.innerWidth >= 500){
 $("#frame").removeClass("small").addClass("big");
 return;
 	 } else if (window.innerWidth < 500){
 $("#frame").removeClass("big").addClass("small");
  	}
		
	});



$("input:checkbox").on('change',function(){
	if($("#animation").prop("checked") == true){
			$(".animation").show();
		
		}else{
			$('.animation').hide();

}
	if($("#drama").prop("checked") == true){
			$(".drama").show();
	
		}else{
			$(".drama").hide();
		};

	if($("#action").prop("checked") == true){
			$(".action").show();
		}else{
			$(".action").hide();
	}
	
});	

	});


