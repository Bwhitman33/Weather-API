// set api key for global use
const apiKey = '2e300aff68a4157db51a64418f47cc58';

// const searchHistory = [];

// create event handler to handle search button input functionality
$('#search-button').on('click', function(e) {
    e.preventDefault();
    const citySearched = $('#search-value').val();
    console.log(citySearched)

    if (citySearched === "" || citySearched == null) {
        alert('Please enter the name of a city');
        e.preventDefault();
    } else {
    // use variables here for setting todays weather and forecast after creating functions for them. Coming back to this
    }
})