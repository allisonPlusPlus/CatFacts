$(document).ready(function() {
  $("#new").click(function(){
      $.ajax({url: "https://catfacts-api.appspot.com/api/facts", success: function(result){
          var factObject = JSON.parse(result);
          var factString = factObject.facts.join();
          $("#fact").html(factString);
          $("#tweet").attr("href", "https://twitter.com/home/?status=" + factString);
      }});

  });

});
