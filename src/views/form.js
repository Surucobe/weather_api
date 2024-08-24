import searchBar from "../components/searchBar";
import weatherInfo from "../components/weatherInfo";
import loading from "../components/loading";

import '../styles/weather.css';

const weather = () => {
  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');

  const searchBox = searchBar();

  weatherContainer.appendChild(searchBox);
  weatherInfo(weatherContainer);

  weatherContainer.appendChild(loading());

  return weatherContainer;
}

export default weather;