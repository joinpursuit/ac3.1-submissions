$.ajax({
    url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC",
    success: function(gifs) {
        console.log(gifs);
        var counter = 1;
        var check = false;
        $("ul").append('<li><img src=' + gifs.data.fixed_height_downsampled_url + '></li>');
        $("#addOne").on("click", function() {
            if (counter < gifs.data.length) {
                $("ul").append('<li><img src=' + gifs.data.fixed_height_downsampled_url + '></li>');
                counter++;
            } else if (!check) {
                check = true;
                $("ul").append('<li><p>no more</p></li>');
            };
        });
        $("#addAll").on("click", function() {
            for (var i = counter; i < gifs.data.length; i++, counter++) {
                $("ul").append('<li><img src=' + gifs.data.fixed_height_downsampled_url + '></li>');
            };
        });
    }
});