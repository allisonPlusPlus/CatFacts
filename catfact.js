$(document).ready(function() {
  $("#new").click(function(){
      $.ajax({url: "http://catfacts-api.appspot.com/api/facts", success: function(result){
          $("#fact").html(result);
      }});
  });
});
