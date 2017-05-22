$(document).ready(function() {



    var getFact = function() {
        var myUrl = 'https://catfacts-api.appspot.com/api/facts';
        var proxy = 'https://cors-anywhere.herokuapp.com/';

        $.ajax({
            url: proxy + myUrl,
            success: function(response) {
                var factObject = JSON.parse(response);
                var factString = factObject.facts.join();
                $("#fact").hide().fadeIn(1000);
                $("#fact").html(factString);
                $("#tweet").attr("href", "https://twitter.com/home/?status=" + factString);
            }
        });
    };
    getFact();

    $("#new").click(getFact);
});
