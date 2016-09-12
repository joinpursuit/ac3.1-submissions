$.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=world+of+warcraft&limit=100&api_key=dc6zaTOxFJmzC",
    success: function(gifs) {
        console.log(gifs);
        var counter = 1;
        var check = false;
        $("ul").append('<li><img style = "height:' + gifs.data[0].images.downsized.height + 'px" src=' + gifs.data[0].images.downsized.url + '></li>');
        $("#addOne").on("click", function() {
            if (counter < gifs.data.length) {
                $("ul").append('<li><img style = "height:' + gifs.data[counter].images.downsized.height + 'px" src=' + gifs.data[counter].images.downsized.url + '></li>');
                counter++;
            } else if (!check) {
                check = true;
                $("ul").append('<li><p>no more</p></li>');
            };
        });
        $("#addAll").on("click", function() {
            for (var i = counter; i < gifs.data.length; i++, counter++) {
                $("ul").append('<li><img style = "height:100px" src=' + gifs.data[counter].images.downsized.url + '></li>');
            };
        });
    }
});
