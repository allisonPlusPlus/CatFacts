$(document).ready(function() {

var getFact = function() {
  $.ajax({
      url: "https://catfacts-api.appspot.com/api/facts",
      success: function( response ) {
        var factObject = JSON.parse(response);
        var factString = factObject.facts.join();
        $("#fact").html(factString);
        $("#tweet").attr("href", "https://twitter.com/home/?status=" +factString);
      }
  });
};
getFact();

  $("#new").click(getFact);
      });
