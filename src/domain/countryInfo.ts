// https://restcountries.com/

import { Country } from "./countries";

export function get_country_info(country: Country) {

    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://restcountries.com/name/' + country.name, true)

    request.onload = function () {
    // Begin accessing JSON data here
    }
    //ajax call etc 
    // Send request
    request.send()

    country.name 
}   