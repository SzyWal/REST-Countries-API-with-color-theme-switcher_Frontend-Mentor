import {renderCountriesList} from "./dom-ul.js";
const API_URL_ALL = "https://restcountries.com/v3.1/all";

let countries; //global scope, it's not ideal solution 
let query = "";
let region = "";


    fetch(API_URL_ALL)
        .then((res) => res.json())
        .then((countriesInfo) => {
                countries = countriesInfo.map((country) => {
                return {
                    capital: country.capital && country.capital[0],
                    population: country.population,
                    name: country.name.common,
                    region: country.region,
                    flagUrl: country.flags.png,
                };
            });
            renderCountriesList(countries);
        });

const filterDataAndRenderCountriesList = () => {
    const filteredCountries = countries.filter((country) => {
        return (
        country.name.toLowerCase().includes(query) && (!git region || country.region === region)
        );
    });
};

    renderCountriesList(filterCountries);

document.querySelector("#query").addEventListener("input", (e) => {
        query = e.target.value.toLowerCase().trim();
        // const filterCountries = countries.filter((country) => country.name.toLowerCase().includes(query.toLowerCase())
        // );
        //  renderCountriesList(filterCountries);

        filterDataAndRenderCountriesList();

         //render countries based om query
    });

    document.querySelector("#region").addEventListener("change", (e) => {
        region = e.target.value;

        // const filteredCountries = countries.filter (
        //     (country) => country.region === region
        // );
        // renderCountriesList(filteredCountries);

        filterDataAndRenderCountriesList();
    });



