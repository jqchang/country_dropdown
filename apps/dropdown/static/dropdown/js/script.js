$(document).ready(function() {
  countrylist = $.get('https://restcountries.eu/rest/v2/all', function() {
    for(var i in countrylist.responseJSON) {
      $('#dropdown').append(`<option name=${countrylist.responseJSON[i]["name"]} value=${countrylist.responseJSON[i]["name"]}>${countrylist.responseJSON[i]["name"]}</option>`);
    }
  }, "json");
});
