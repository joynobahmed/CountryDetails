async function getCountryData(countryName) {
    const result = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    if (result.ok) {
        const data = await result.json();
        const countryData = data[0];
        return {
            name: countryData.name.common,
            officialName: countryData.name.official,
            capital: countryData.capital[0],
            flagURL: countryData.flags.png,
            population: countryData.population,
            continent: countryData.continents[0],
        };
    }
}

async function getWeatherData(countryName) {
    const result = await fetch(`https://wttr.in/${countryName}?format=j1`);
    if (result.ok) {
        const data = await result.json();
        const weather = data.current_condition[0];

        const {
            FeelsLikeC,
            humidity,
            precipMM,
            pressure,
            temp_C,
            uvIndex,
            visibility,
        } = weather;

        return {
            temperature: temp_C,
            humidity: humidity,
            feelsLike: FeelsLikeC,
            precipitation: precipMM,
            pressure: pressure,
            uvIndex: uvIndex,
            visibility: visibility,
        };
    }
}
