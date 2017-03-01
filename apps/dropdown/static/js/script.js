$(document).ready(function() {
  countrylist = $.get('https://restcountries.eu/rest/v2/all', function() {
    console.log(countrylist);
  }, "json");
});
