'use strict';

$(document).ready(function() {
  //
  // $.ajax({
  //     url: proxy + myUrl,
  //     success: function(response) {
  //
  //         debugger;
  //         var factString = response.facts;
  //         $("#fact").hide().fadeIn(1000);
  //         $("#fact").html(factString);
  //         $("#tweet").attr("href", "https://twitter.com/home/?status=" + factString);
  //
  //     },
  // });

  let facts;
  let currFact = 0;
  let myUrl2 = 'https://catfacts-api.appspot.com/api/facts';
  let myUrl = 'http://www.catfact.info/api/v1/facts.json?page=:page&per_page=:per_page';
  let proxy = 'https://cors-anywhere.herokuapp.com/';

  function getFact(currFact, facts) {
    let factString = facts[currFact].details;
    $("#fact").hide().fadeIn(1000);
    $("#fact").html(factString);
    $("#tweet").attr("href", "https://twitter.com/home/?status=" + factString);
    if (currFact >= 7){
      return 0
    }
    return currFact + 1;
  };

  $.get(proxy + myUrl)
  .done(function(response){
    facts = response.facts;
    currFact = getFact(currFact, facts);
  })
  .done(function(){
    $("#new").click(function(){
      currFact = getFact(currFact, facts);
    });
  })

});
