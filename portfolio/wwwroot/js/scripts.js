var sortStars = function(resultsArray) {
  for (let i = 0; i < resultsArray.length; i++) {
    
  }
}

﻿$(document).ready(function () {
    console.log("js loaded!");
    $("#github-ajax").click(function() {
      console.log("clicky");
      $.ajax({
        url: 'https://api.github.com/search/repositories?q=user%3Adenalisk+stars%3A>0&type=Repositories',
        type: 'GET',
        datatype: 'json',
        success: function(result) {
          for (var item in result) {
            ;
          }
          console.log("success");
          console.log(result);
        },
        error: function(result) {
          console.log("error");
        }
      })
    });
})
