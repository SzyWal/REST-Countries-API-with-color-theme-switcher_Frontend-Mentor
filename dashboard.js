import { renderCountriesList } from "./dom-ul.js";


export const renderDashboard = () => {
    const API_URL_ALL = "https://restcountries.com/v3.1/all";

    // console.log(window.location.search) --> to check working

    let countries; //global scope, it's not ideal solution
    let query = "";
    let region = "";
    
    fetch(API_URL_ALL)
      .then((res) => res.json())
      .then((countriesInfo) => {
        countries = countriesInfo.map((country) => {
          return {
            capital: country.capital && country.capital[0],
            population: country.population.toLocaleString(),
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
          country.name.toLowerCase().includes(query) &&
          (!region || country.region === region)
        );
      });
      renderCountriesList(filteredCountries);
    };
    
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
      
      //Longer func
      // const filteredCountries = countries.filter (
      //     (country) => country.region === region
      // );
      // renderCountriesList(filteredCountries);
    
      filterDataAndRenderCountriesList();
    });
    
};