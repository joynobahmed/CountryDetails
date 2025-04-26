document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const countryInput = document.getElementById("country-input");
    const countryResults = document.getElementById("country-results");
    const loader = document.getElementById("loader");
    const errorMessage = document.getElementById("error-message");
    function getWeatherIcon(temperature) {
        const temp = parseInt(temperature);
        if (temp >= 30) return "fas fa-sun";
        if (temp >= 20) return "fas fa-cloud-sun";
        if (temp >= 10) return "fas fa-cloud";
        return "fas fa-snowflake";
    }

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function createCountryCard(countryData, weatherData) {
        const card = document.createElement("div");
        card.className = "country-card";

        const detailsId = `weather-details-${Date.now()}`;

        card.innerHTML = `
          <img src="${countryData.flagURL}" alt="${
            countryData.name
        } flag" class="country-flag">
          <div class="country-info">
            <h2 class="country-name">${countryData.name}</h2>
            <p class="country-subtitle">${countryData.officialName}</p>
            
            <div class="country-details">
              <div class="detail-item">
                <i class="fas fa-map-marker-alt detail-icon"></i>
                <span>Capital: ${countryData.capital}</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-globe-asia detail-icon"></i>
                <span>Continent: ${countryData.continent}</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-users detail-icon"></i>
                <span>Population: ${formatNumber(countryData.population)}</span>
              </div>
            </div>
            
            <div class="weather-preview">
              <div>
                <div class="temperature">${weatherData.temperature}°C</div>
                <div>Feels like: ${weatherData.feelsLike}°C</div>
              </div>
              <div class="weather-icon">
                <i class="${getWeatherIcon(weatherData.temperature)}"></i>
              </div>
            </div>
            
            <div class="weather-details" id="${detailsId}">
              <div class="weather-grid">
                <div class="weather-item">
                  <i class="fas fa-tint weather-icon-small"></i>
                  <span>Humidity: ${weatherData.humidity}%</span>
                </div>
                <div class="weather-item">
                  <i class="fas fa-cloud-rain weather-icon-small"></i>
                  <span>Precipitation: ${weatherData.precipitation}mm</span>
                </div>
                <div class="weather-item">
                  <i class="fas fa-compress-alt weather-icon-small"></i>
                  <span>Pressure: ${weatherData.pressure}hPa</span>
                </div>
                <div class="weather-item">
                  <i class="fas fa-sun weather-icon-small"></i>
                  <span>UV Index: ${weatherData.uvIndex}</span>
                </div>
                <div class="weather-item">
                  <i class="fas fa-eye weather-icon-small"></i>
                  <span>Visibility: ${weatherData.visibility}km</span>
                </div>
              </div>
            </div>
            
            <button class="show-details-btn" data-details="${detailsId}">
              <i class="fas fa-chevron-down"></i>
              <span>Weather Details</span>
            </button>
          </div>
        `;

        return card;
    }

    function setupDetailsToggle() {
        document.querySelectorAll(".show-details-btn").forEach((button) => {
            button.addEventListener("click", () => {
                const detailsId = button.getAttribute("data-details");
                const detailsElement = document.getElementById(detailsId);
                const buttonIcon = button.querySelector("i");
                const buttonText = button.querySelector("span");

                if (detailsElement.style.display === "block") {
                    detailsElement.style.display = "none";
                    buttonIcon.className = "fas fa-chevron-down";
                    buttonText.textContent = "Weather Details";
                } else {
                    detailsElement.style.display = "block";
                    buttonIcon.className = "fas fa-chevron-up";
                    buttonText.textContent = "Hide Details";
                }
            });
        });
    }

    searchForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const countryName = countryInput.value.trim();

        if (!countryName) return;
        loader.style.display = "block";
        errorMessage.style.display = "none";
        countryResults.innerHTML = "";

        try {
            const countryData = await getCountryData(countryName);
            const weatherData = await getWeatherData(countryName);

            const card = createCountryCard(countryData, weatherData);
            countryResults.appendChild(card);

            setupDetailsToggle();
        } catch (error) {
            console.error("Error fetching data:", error);
            errorMessage.style.display = "block";
        } finally {
            loader.style.display = "none";
        }
    });

    const loadExample = async () => {
        try {
            const countryData = await getCountryData("Bangladesh");
            const weatherData = await getWeatherData("Bangladesh");

            const card = createCountryCard(countryData, weatherData);
            countryResults.appendChild(card);

            setupDetailsToggle();
        } catch (error) {
            console.error("Error loading example:", error);
        }
    };

    loadExample();
});
