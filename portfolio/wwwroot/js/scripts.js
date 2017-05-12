var sortStars = function(resultsArray) {
  var heldResults = resultsArray.sort(compareStars);
  while (heldResults.length > 3) {
    heldResults.pop();
  }
  return heldResults;
}

var compareStars = function(a, b) {
  var output = (a.stargazers_count < b.stargazers_count) ? 1 : (a.stargazers_count > b.stargazers_count) ? -1 : 0;
  return output;
}

﻿$(document).ready(function () {
    console.log("js loaded!");
    $("#github-ajax").click(function() {
      console.log("clicky");
      $.ajax({
        url: 'https://api.github.com/search/repositories?q=user%3Adenalisk&type=Repositories&ref=advsearch&l=&l=',
        type: 'GET',
        datatype: 'json',
        success: function(result) {
          var output = sortStars(result.items);
          console.log(output);
        },
        error: function(result) {
          console.log("error");
        }
      })
    });
})
