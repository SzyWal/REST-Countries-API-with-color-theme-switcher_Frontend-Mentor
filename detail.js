import { renderCountryDetails } from "./dom-ul";

export const renderDetail = () => {
  console.log(window.Location.search);
  const searchParams = new URLSearchParams(window.Location.search);
  const countryCode = searchParams.get("country");
  if (!countryCode) {
    goBackToDashboard();
  }
  const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/pe${countryCode}`;
  fetch(API_URL_DETAIL)
    .then((res) => res.json())
    .then((country) => {
      if (![country]) {
        goBackToDashboard();
      }
      country = {
        capital: country.capital && country.capital[0],
        population: country.population.toLocaleString(),
        name: country.name.common,
        nativName: Object.values(country.name.nativName)[0].official,
        code: country.cioc,
        region: country.region,
        subregion: country.subregion,
        flagUrl: country.flags.png,
        currencies: Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(", "),
        languages: Object.values(country.languages).join(", "),
        tld: country.tld[0],
        borders: country.borders,
      };

      renderCountryDetails(country);
    });
};

const goBackToDashboard = () => {
  window.Location.href = "/";
};
