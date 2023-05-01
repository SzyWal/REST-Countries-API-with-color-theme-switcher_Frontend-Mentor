const createInfoElement = (labelName, value) => {
  const infoElement = document.createElement("div");

  const labelElement = document.createElement("strong");
  labelElement.innerText = `${labelName}: `;

  const valueElement = document.createElement("span");
  valueElement.innerText = value;

  infoElement.appendChild(labelElement);
  infoElement.appendChild(valueElement);

  return infoElement;
};

const createFlageImgElement = (country) => {
  const imgContainerElement = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.src = country.flagUrl;
  imgElement.alt = `${country.name} flag`;
  return imgElement;
};

const createCountryItemElement = (country) => {
  const countryElement = document.createElement("li");

  const anchorElement = document.createElement("a");
  anchorElement.href = `?country=${country.name}`;

  countryElement.appendChild(createFlageImgElement(country));

  const infoContainerElement = document.createElement("div");
  infoContainerElement.classList.add("info-container");

  const countryNameElement = document.createElement("strong");
  countryNameElement.innerText = country.name;
  countryNameElement.classList.add("country-name");

  countryElement.appendChild(countryNameElement);

  countryElement.appendChild(
    createInfoElement("Population", country.population)
  );

  countryElement.appendChild(createInfoElement("Region", country.region));

  countryElement.appendChild(createInfoElement("Capital", country.capital));

  countryElement.appendChild(infoContainerElement);

  anchorElement.appendChild(infoContainerElement);

  countryElement.appendChild(anchorElement);

  return countryElement;
};

const createListElement = (countries) => {
  const listElement = document.createElement("ul");
  countries.forEach((country) => {
    listElement.appendChild(createCountryItemElement(country));
  });
  return listElement;
};

const createDetailElement = (country) => {
  // capital: country.capital && country.capital[0],
  //       population: country.population.toLocaleString(),
  //       name: country.name.common,
  //       nativName: country.name.nativName,
  //       code: country.cioc,
  //       region: country.region,
  //       subregion: country.subregion,
  //       flagUrl: country.flags.png,
  //       currencies: country.currencies,
  //       languages: country.languages,
  //       tld: country.tld[0],
  const detailContainerElement = document.createElement("div");

  const flagImgElement = createFlageImgElement(country);
  const detailNameElement = document.createElement("strong");
  detailNameElement.innerHTML = country.name;

  detailContainerElement.appendChild(flagImgElement);
  detailContainerElement.appendChild(detailNameElement);

  detailContainerElement.appendChild(
    createInfoElement("Native name", country.nativeName)
  );
  detailContainerElement.appendChild(
    createInfoElement("Population", country.population)
  );
  detailContainerElement.appendChild(
    createInfoElement("Region", country.region)
  );
  detailContainerElement.appendChild(
    createInfoElement("Sub region", country.subregion)
  );
  detailContainerElement.appendChild(
    createInfoElement("Capital", country.capital)
  );
  detailContainerElement.appendChild(
    createInfoElement("Top level domain", country.tld)
  );
  detailContainerElement.appendChild(
    createInfoElement("Currencies", country.currencies)
  );
  detailContainerElement.appendChild(
    createInfoElement("Languages", country.languages)
  );

  const createDetailButton = (text, link) => {
    const anchorElement = document.createElement("a");
    button.innerText = text;
    button.classList.add("detail-button-link");
    anchorElement.href = link;

    return anchorElement;
  };

  return detailContainerElement;
};

const createBorderCountriesContainer = (country) => {
  
  const createBorderCountriesContainerElement = document.createElement("div");
  const labelElement = document.createElement("strong");
  labelElement.innerHTML = "Border Countries";

  borderCountriesContainerElement.appendChild(labelElement);

  country.borders.forEach((border) => {
    borderCountriesContainerElement.appendChild(createDetailButton(border, `/?country=${border}`))
  });
  return borderCountriesContainerElement()
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createListElement(countries));
};

export const renderCountryDetails = (country) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createBackButtonElement("Go back"));
  rootElement.appendChild(createDetailElement("/"));
  if(!country.borders && country.borders.length > 0) {
  rootElement.appendChild(createBorderCountriesContainer(country))
  }
};
