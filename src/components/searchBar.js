import { fetchCityWeather } from '../utils/data';

import '../styles/searchBar.css';

const searchBar = () => {
  const searchBox = document.createElement('div');
  searchBox.classList.add('search-box');

  const cityInput = document.createElement('input');
  const searchButton = document.createElement('button');
  searchButton.innerHTML = 'Go!'

  searchButton.addEventListener('click', () => fetchCityWeather(cityInput.value))

  searchBox.appendChild(cityInput);
  searchBox.appendChild(searchButton);

  return searchBox;
}

export default searchBar