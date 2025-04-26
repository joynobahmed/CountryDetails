# Global Explorer - Country Information Website

## Overview

Global Explorer is a modern, responsive web application that allows users to search for and explore detailed information about countries around the world. The application displays comprehensive country data including flags, population statistics, geographical information, and current weather conditions in an elegant and user-friendly interface.

## Live Demo

**[View Live Application: global-explorer-joynobahmed.netlify.app/](https://global-explorer-joynobahmed.netlify.app/)**

## Features

### Core Functionality

-   **Country Search**: Instantly search for any country by name
-   **Comprehensive Data Display**: View essential country information in a clean card layout
-   **Weather Information**: Access current weather conditions for the selected country
-   **Expandable Details**: Toggle additional weather metrics with the "Weather Details" button
-   **Responsive Design**: Optimized user experience across all device sizes

### UI Components

-   **Modern Navigation Bar**: Clean navigation with intuitive icons and links
-   **Search Section**: Prominent search functionality with clear instructions
-   **Country Cards**: Visually appealing cards with country flags and key information
-   **Weather Preview**: At-a-glance temperature and weather conditions
-   **Detailed Weather Data**: Expandable section showing humidity, pressure, visibility, etc.
-   **Comprehensive Footer**: Multi-section footer with links and contact information

## Technical Structure

### HTML Structure

```
├── Navbar
├── Main Container
│   ├── Search Section
│   │   ├── Title
│   │   └── Search Form
│   ├── Loading Indicator
│   ├── Error Message
│   └── Country Results
│       └── Country Cards
│           ├── Flag Image
│           ├── Country Information
│           ├── Weather Preview
│           ├── Expandable Weather Details
│           └── Toggle Button
└── Footer
    ├── About Section
    ├── Contact Information
```

### CSS Features

-   **CSS Variables**: Custom color scheme with reusable variables
-   **Flexbox & Grid**: Modern layout techniques for responsive design
-   **Animations**: Smooth transitions and loading animations
-   **Box Shadows**: Subtle depth effects for cards and UI elements
-   **Media Queries**: Responsive breakpoints for all screen sizes
-   **Icon Integration**: Font Awesome icons for improved visual communication

### JavaScript Functionality

-   **DOM Manipulation**: Dynamic creation of country cards
-   **Event Listeners**: Interactive UI with toggle functionality
-   **API Integration**: Fetches data from REST Countries and wttr.in APIs
-   **Error Handling**: Graceful error management with user feedback
-   **Number Formatting**: Population figures displayed with thousands separators
-   **Conditional Rendering**: Weather icons change based on temperature data

## API Integration

The application leverages two public APIs to retrieve country and weather data:

### REST Countries API

```
https://restcountries.com/v3.1/name/${countryName}?fullText=true
```

This API provides comprehensive country information including:

-   Country name and official name
-   Capital city
-   Continental location
-   Population statistics
-   Flag images
-   And more

### wttr.in Weather API

```
https://wttr.in/${countryName}?format=j1
```

This API delivers current weather conditions for the specified country:

-   Temperature
-   "Feels like" temperature
-   Humidity percentage
-   Precipitation levels
-   Atmospheric pressure
-   UV index
-   Visibility range

The application uses these APIs through the implemented `getCountryData()` and `getWeatherData()` functions which handle the API requests and format the data for display.

## Usage

1. Enter a country name in the search field
2. Click the "Search" button or press Enter
3. View the country information and weather data
4. Click "Weather Details" to expand additional weather information

## Installation

No installation is required. The application is built with vanilla HTML, CSS, and JavaScript and can be deployed directly to any web server or hosting service.

### Running Locally

1. Clone the repository

```bash
git clone https://github.com/joynobahmed/GlobalExplorer.git
```

2. Navigate to the project directory

```bash
cd GlobalExplorer
```

3. Open `index.html` in your browser

```bash
open index.html  # macOS
start index.html  # Windows
```

## Browser Compatibility

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)
-   Opera (latest)
-   Mobile browsers (iOS Safari, Android Chrome)

## Future Enhancements

-   **Search Autocomplete**: Suggest countries as the user types
-   **Country Comparison**: Compare statistics between multiple countries
-   **Historical Weather Data**: Display weather trends over time
-   **Interactive Maps**: Add map visualization of country location
-   **Language Support**: Multiple language options for international users
-   **Favorites System**: Allow users to save favorite countries
-   **Dark Mode**: Toggle between light and dark themes
-   **Extended Country Details**: Add more comprehensive country information
-   **Share Functionality**: Share country information on social media

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

-   Country data provided by [REST Countries API](https://restcountries.com)
-   Weather data provided by [wttr.in API](https://wttr.in)
-   Flag images hosted by [flagcdn.com](https://flagcdn.com)
-   Icons provided by [Font Awesome](https://fontawesome.com)
