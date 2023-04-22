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
    const imgContainerElement = document.createElement("div")
    const imgElement = document.createElement("img");
    imgElement.src = country.flagUrl;
    imgElement.alt = `${country.name} flag`
    return imgElement;
}

const createCountryItemElement = (country) => {
    const countryElement = document.createElement("li");

    countryElement.appendChild(createFlageImgElement(country));

    const infoContainerElement = document.createElement("div")
    infoContainerElement.classList.add("info-container")

    const countryNameElement = document.createElement("strong");
    countryNameElement.innerText = country.name;
    countryNameElement.classList.add("country-name");

    countryElement.appendChild(countryNameElement);

    countryElement.appendChild(
        createInfoElement(
            "Population", country.population));

 countryElement.appendChild(
        createInfoElement(
            "Region", country.region));

 countryElement.appendChild(
        createInfoElement(
            "Capital", country.capital));

    countryElement.appendChild(infoContainerElement)

    return countryElement;
}
 
const createListElement = (countries) => {
    const listElement = document.createElement("ul");
    countries.forEach((country) => {
        listElement.appendChild(createCountryItemElement(country));
    });
    return listElement;
};

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.appendChild(createListElement(countries));
}; //render countries items into main element