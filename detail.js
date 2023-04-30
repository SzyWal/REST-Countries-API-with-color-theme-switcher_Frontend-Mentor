export const renderDetail = () => {
  console.log(window.Location.search);
  const searchParams = new URLSearchParams(window.Location.search);
  const countryCode = searchParams.get("country");
  if (!countryCode) {
    window.location.href = "/";
  }
  const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/pe${countryCode}`;
  fetch(API_URL_DETAIL)
    .then((res) => res.json())
    .then((res) => {

    });
};


const 