$(document).ready(function() {

    // Step 1: Dynamic resize
    //  .resize(handler): Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
    $(window).resize(function() {
        // $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
        if (window.innerWidth > 500) {
            $("#frame").removeClass("small").addClass("big");
        } else {
            $("#frame").removeClass("big").addClass("small");
        }
    });

});


// // Step 2: Checkbox genre filters
// $("input:checkbox").change(function() {
//     // if( $("input#animation").prop('checked')){ => returns undefined if checked attr not set
//     // 	$("div.animation").show();
//     // } else if( $("input#action").prop('checked')){
//     // 	$("div.action").show();
//     // } else if( $("input#drama").prop('checked')){
//     // 	$("div.drama").show();
//     // } else {
//     // 	$("div.animation").hide();
//     // 	$("div.action").hide();
//     // 	$("div.drama").hide();
//     // } => THIS JUST HIDES EVERYTHING ONCE ANY CHECKBOX CHANGE IS TRIGGERED

//     var checkboxValues = [];
//     $("input[type='checkbox']:checked").each(function(index, element) {
//         checkboxValues.push($(element).attr("name"));
//     });
//     // $("#frame").before("<div> checkboxValues: " + checkboxValues + "</div>");

//     // switch (true) {
//     //     case checkboxValues.indexOf("animation") != -1:
//     //         console.log(checkboxValues.indexOf('animation'))
//     //         $("div.animation").show;
//     //         break;
//     //     case checkboxValues.indexOf("action") != -1:
//     //         console.log(checkboxValues.indexOf('action'))
//     //         $("div.action").show;
//     //         break;
//     //     case checkboxValues.indexOf("drama") != -1:
//     //         console.log(checkboxValues.indexOf('drama'))
//     //         $("div.drama").show;
//     //         break;
//     //     default:
//     //         $("#frame").hide();

//     // } => THIS DOESN'T WORK

//     // TRIPLE SIMPLE IF-ELSE WORKS
//     // if(checkboxValues.indexOf('animation') === -1){
//     // 	$("div.animation").hide();
//     // } else {
//     // 	$("div.animation").show();
//     // }

//     // if(checkboxValues.indexOf('action') === -1){
//     // 	$("div.action").hide();
//     // } else {
//     // 	$("div.action").show();
//     // }

//     // if(checkboxValues.indexOf('drama') === -1){
//     // 	$("div.drama").hide();
//     // } else {
//     // 	$("div.drama").show();
//     // }

//     // TERNARY A LITTLE:
//     checkboxValues.indexOf('animation') === -1 ?
//         $("div.animation").hide() : $("div.animation").show();
//     checkboxValues.indexOf('action') === -1 ?
//         $("div.action").hide() : $("div.action").show();
//     checkboxValues.indexOf('drama') === -1 ?
//         $("div.drama").hide() : $("div.drama").show();


// })



// // Step 3: Text box year filter
// // suppress the default submit behavior: avoid reloading => can't respond to event
$('form').submit(function(event) { event.preventDefault(); })

// // Keyup Event Handler:
// $("#year").keyup(function() {
//     var userYear = parseInt($("#year").val());

//     $('div.movie').each(function() {

//         var movieYear = parseInt($(this).find('dd.year').html()) // html() returns just the content, not the corresponding html tags/structure ?
//         console.log($(this).find('dd.year').html())

//         // comparison: only shows movieYear > userYear:
//         if (movieYear >= userYear) {
//         	$(this).show();
//         } else {
//         	$(this).hide();
//         }

//     })
// });


// Step 4: Both filters together
$('input').bind('keyup change', function(event) {
    var userYear = parseInt($("#year").val());

    if (isNaN(userYear)) { // Step 3 forced userYear to be a number
        userYear = 0
    }

    // Return movie genre checkbox value:
    var checkboxValues = [];
    $("input[type='checkbox']:checked").each(function(index, element) {
        checkboxValues.push($(element).attr("name"));
    });
     	// Check if a genre is selected
        var animationIndex = checkboxValues.indexOf('animation');
        console.log('animationIndex', animationIndex)
        var actionIndex = checkboxValues.indexOf('action');
        console.log('actionIndex', actionIndex)
        var dramaIndex = checkboxValues.indexOf('drama');
        console.log('dramaIndex', dramaIndex)

        // If selected => return genre name
        if(animationIndex !== -1) {
        	var animationChecked = checkboxValues[animationIndex];
        	console.log('animationChecked', animationChecked)
        }
        if(actionIndex !== -1) {
        	var actionChecked = checkboxValues[actionIndex];
        	console.log('actionChecked', actionChecked)
        }
        if(dramaIndex !== -1) {
        	var dramaChecked = checkboxValues[dramaIndex];
        	console.log('dramaChecked', dramaChecked)
        }


    // Movie display
    $('div.movie').each(function() {

        var movieYear = parseInt($(this).find('dd.year').html()); // html() returns just the content, not the corresponding html tags/structure ?
        // console.log($(this).find('dd.year').html())

        var movieGenre = $(this).find('dd.genre').html();
        console.log('movieGenre', movieGenre)

        // User movieGenre => get corresponding checkbox
        // var checked = $('input#'+movieGenre).prop('checked'); // => this syntax doesn't work: returns undefined unless it's the first checkbox (animation)

        // comparison: only shows movieYear > userYear AND matching selected genre
        //1. 
        // movieYear >= userYear && animationChecked === movieGenre ?
        // 	$(this).show(): $(this).hide();
        // 	===>>> NOT NESTED WILL CAUSE IT TO HIDE EVERY TIME
        // movieYear >= userYear && actionChecked === movieGenre ?
        // 	$(this).show(): $(this).hide();
        // movieYear >= userYear && dramaChecked === movieGenre ?
        // 	$(this).show(): $(this).hide();

        //2. NESTED IF-ELSE
        if (movieYear >= userYear && animationChecked === movieGenre) {
        	$(this).show();
        } else if (movieYear >= userYear && actionChecked === movieGenre) {
        	$(this).show();
        } else if (movieYear >= userYear && dramaChecked === movieGenre) {
        	$(this).show();
        } else {
        	$(this).hide();
        }

    })

})
