import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  CloudRain, Cloud, Sun, CloudLightning, CloudSnow, CloudFog, Star,
} from 'phosphor-react';
import {
  Container, WeatherWrapper, SavedPlaces,
} from './styles';
// import Modal from '../Modal';

import PlaceCard from '../PlaceCard';

const apiKey = import.meta.env.VITE_API_KEY;

export default function Weather({ theme }) {
  const [searchedLocation, setSearchedLocation] = useState('');

  const [actualLocation, setActualLocation] = useState('');
  const [locationTemperature, setLocationTemperature] = useState('');

  const [weatherIcon, setWeatherIcon] = useState();

  const [favorite, setFavorite] = useState(false);

  const getLocation = (location) => {
    setSearchedLocation(location);
  };

  function toggleFavorite() {
    if (favorite) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  }

  const getWeatherData = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const apiRes = await fetch(apiUrl);
    const data = await apiRes.json();

    setActualLocation(data.name);
    setLocationTemperature(Number(data.main.temp).toFixed(0));
    switch (data.weather[0].main) {
      case 'Clouds':
        setWeatherIcon(
          <Cloud
            size={48}
            color={theme === 'dark' ? '#FFF' : '#1B2023'}
          />,
        );
        break;

      case 'Thunderstorm':
        setWeatherIcon(
          <CloudLightning
            size={48}
            color={theme === 'dark' ? '#FFF' : '#1B2023'}
          />,
        );
        break;

      case 'Drizzle':
        setWeatherIcon(
          <CloudRain
            size={48}
            color={theme === 'dark' ? '#FFF' : '#1B2023'}
          />,
        );
        break;

      case 'Rain':
        setWeatherIcon(
          <CloudRain
            size={48}
            color={theme === 'dark' ? '#FFF' : '#1B2023'}
          />,
        );
        break;

      case 'Snow':
        setWeatherIcon(
          <CloudSnow
            size={48}
            color={theme === 'dark' ? '#FFF' : '#1B2023'}
          />,
        );
        break;

      case 'Mist':
      case 'Smoke':
      case 'Haze':
      case 'Dust':
      case 'Fog':
      case 'Sand':
      case 'Ash':
      case 'Squall':
      case 'Tornado':
        setWeatherIcon(
          <CloudFog
            size={48}
            color={theme === 'dark' ? '#FFF' : '#1B2023'}
          />,
        );
        break;

      case 'Clear':
        setWeatherIcon(
          <Sun
            size={48}
            color={theme === 'dark' ? '#FFF' : '#1B2023'}
          />,
        );
        break;

      default:
        setWeatherIcon(null);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    getWeatherData(searchedLocation);

    setSearchedLocation('');
  };

  return (
    <Container>
      {/* <Modal /> */}
      <WeatherWrapper>
        {actualLocation === '' && <h1>Type a location</h1>}
        <div className="location">
          <h1>{actualLocation}</h1>
          {actualLocation && (
          <button
            type="button"
            title={
              favorite
                ? 'Unsave this location'
                : 'Save this location'
              }
            onClick={toggleFavorite}
          >
            {
              favorite !== true
                ? <Star color="#FFF" size={24} />
                : <Star color="#FFF" size={24} weight="fill" />
            }
          </button>
          ) }
        </div>

        {locationTemperature !== '' && (
        <div className="weather">
          {weatherIcon}
          <p>
            {locationTemperature}
            °C
          </p>
        </div>
        )}
      </WeatherWrapper>

      <form className="search-area" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Search a location"
          onChange={(event) => getLocation(event.target.value)}
          value={searchedLocation}
        />
        <button type="submit" disabled={searchedLocation.length < 3} title={searchedLocation.length < 3 ? 'Please, name a valid location' : null}>Search</button>
      </form>

      <SavedPlaces>
        <h2>Saved Places</h2>

        <PlaceCard
          cityName="Porto Seguro"
          cityWeather="22°C"
        />

        <PlaceCard
          cityName="Limeira"
          cityWeather="19°C"
        />

        <PlaceCard
          cityName="Salvador"
          cityWeather="24°C"
        />
      </SavedPlaces>
    </Container>
  );
}

Weather.propTypes = {
  theme: PropTypes.string.isRequired,
};
