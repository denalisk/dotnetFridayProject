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
  for (let i = 0; i < projectsArray.length; i++) {
    var htmlString = `<div class="projects-holder panel panel-success">
      <div class="panel-heading">
        <h2>` + projectsArray[i].name + `</h2>
        </div><div class="panel-body">
        <p>` + projectsArray[i].description + `</p>
        <br>
        <a href="https://www.github.com/` + projectsArray[i].full_name + `">Github Link</a>
      </div>
    </div>`
    newHtml = newHtml + htmlString;
  }
  return newHtml;
}

﻿$(document).ready(function () {
    $.ajax({
      url: 'https://api.github.com/search/repositories?q=user%3Adenalisk&type=Repositories&ref=advsearch&l=&l=',
      type: 'GET',
      datatype: 'json',
      success: function(result) {
        var output = sortStars(result.items);
        $('#projects-container').html(toHtmlProjects(output));
      },
      error: function(result) {
        console.log("error");
      }
    })
})
