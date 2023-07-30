// set api key for global use
var apiKey = "2e300aff68a4157db51a64418f47cc58";

// set global for search history
var searchHistory = [];

// create event handler to handle search button input functionality
$("#search-button").on("click", function (e) {
  e.preventDefault();
  var citySearched = $("#search-value").val();
  console.log(citySearched);
  if (citySearched === "" || citySearched == null) {
    alert("Please enter the name of a city");
    e.preventDefault();
  } else {
    // use variables here for setting todays weather and forecast after creating functions for them. Coming back to this
    // localStorage.setItem('citySearched', citySearched)
    searchLog(citySearched);
  }
});

// create functions to define search history, add container to html, and append to container
var searchLog = function (citySearched) {
  $('.search-history:contains("' + citySearched + '")').remove();
  var logEntry = $("<p>");
  logEntry.addClass("search-history");
  logEntry.text(citySearched);

  var logEntryContainer = $("<div>");
  logEntryContainer.addClass("search-history-container");
  logEntryContainer.append(logEntry);

  var logEntryContainerEl = $("#previous-search-container");
  logEntryContainerEl.append(logEntryContainer);

  if (searchHistory.length > 0) {
    var totalSearchHistory = localStorage.getItem("searchHistory");
    searchHistory = JSON.parse(totalSearchHistory);
  }

  searchHistory.push(citySearched);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

  $("#search-value").val("");
};

var loadSearchLog = function () {
    var storedSearches = localStorage.getItem('searchHistory');
    if (!storedSearches) {
        return false;
    }

    storedSearches = JSON.parse(storedSearches);
    for (var i = 0; i < storedSearches.length; i++) {
        searchLog(storedSearches[i]);
    }
};

loadSearchLog();
