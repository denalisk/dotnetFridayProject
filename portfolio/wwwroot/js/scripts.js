var sortStars = function(resultsArray) {
  var heldResults = resultsArray.sort(compareStars);
  return heldResults.slice(0, 3);
}

var compareStars = function(a, b) {
  var output = (a.stargazers_count < b.stargazers_count) ? 1 : (a.stargazers_count > b.stargazers_count) ? -1 : 0;
  return output;
}

var toHtmlProjects = function(projectsArray) {
  var newHtml = "";
  console.log(projectsArray);
  for (let i = 0; i < projectsArray.length; i++) {
    var htmlString = `<div class="projects-holder">
      <div class="container">
        <h3>` + projectsArray[i].name + `</h3>
        <hr>
        <p>` + projectsArray[i].description + `</p>
        <br>
        <a href="https://www.github.com/` + projectsArray[i].full_name + `">Github Link</a>
      </div>
    </div>`
    newHtml += htmlString;
  }
  console.log(htmlString);
  return htmlString;
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
          console.log(output[0].name);
          var myNewHtml = toHtmlProjects(output);
          $('#projects-container').html(toHtmlProjects(output));
        },
        error: function(result) {
          console.log("error");
        }
      })
    });
})
