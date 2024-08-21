//example
//'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/maracay?key=R7UWGHX8MKH4YHY83G8X3XJ3D'

const KEY = 'R7UWGHX8MKH4YHY83G8X3XJ3D';
const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export async function fetchCityWeather(city) {
  const response = await fetch(`${URL}${city}?key=${KEY}`);
  const data = await response.json();

  //data.currentConditions.days <- explore to check if you can get more detailed info

  console.log(data);
  console.log(`Place: ${data.resolvedAddress}`);
  console.log(`Conditions: ${data.currentConditions.conditions}`);
  console.log(`Humidity: ${data.currentConditions.humidity}`);
  console.log(`Temp: ${data.currentConditions.temp}`);
}