$(document).ready(function() {

    // Step 1: Dynamic resize

    $(window).resize(function() {
        if (window.innerWidth > 500) {
            $("#frame").removeClass("small")
            $("#frame").addClass("big")
        } else {
            $("#frame").removeClass("big")
            $("#frame").addClass("small")
        }
    })

    // Step 2: Checkbox genre filters

    // $("input:checkbox").change(function() {
    //     if ($("input#animation").prop("checked")) {
    //         $("div.animation").show()
    //     } else {
    //         $("div.animation").hide()
    //     }

    //     if ($("input#action").prop("checked")) {
    //         $("div.action").show()
    //     } else {
    //         $("div.action").hide()
    //     }

    //     if ($("input#drama").prop("checked")) {
    //         $("div.drama").show()
    //     } else {
    //         $("div.drama").hide()
    //     }
    // })

    // Step 3: Text box year filter
    $('#year').submit(function(event) {
        event.preventDefault();
    })


    // $("#year").keyup(function() {

    // 	// $("#year").val doesn't work for some reason
    //     var userYear = parseInt(document.getElementById("year").value);
    //     $('div.movie').each(function() {
    //         var movieYear = parseInt($(this).find('dd.year').html())

    //         // comparison:
    //         if (movieYear > userYear) {
    //             $(this).show()
    //         } else {
    //             $(this).hide()
    //         }
    //     })
    // })




    // Step 4: Both filters together

    $('input').bind('keyup change', function(event) {
        var userYear = parseInt(document.getElementById("year").value);
        if (isNaN(userYear)) {
            userYear = 0
        }
        $('div.movie').each(function() {
            var movieYear = parseInt($(this).find('dd.ye').html())

            // comparison:
            if (movieYear > userYear) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })
    })


});
