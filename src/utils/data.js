//example
//'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/maracay?key=R7UWGHX8MKH4YHY83G8X3XJ3D'

const KEY = 'R7UWGHX8MKH4YHY83G8X3XJ3D';
const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const farenheitToCelcius = (num) => ((num - 32) * 5/9).toFixed(1);

function loading(){
  if(document.querySelector('.loading').style.display != 'block'){
    document.querySelector('.loading').style.display = 'block';
  }else{
    document.querySelector('.loading').style.display = 'none';
  }
}

function createWeatherFromObj(obj){
  document.querySelector('.info').innerHTML = 
  `Place: ${obj.resolvedAddress} <br>
  Condition: ${obj.currentConditions.conditions} <br>
  Humidity: ${obj.currentConditions.humidity} <br>
  Temp: ${obj.currentConditions.temp} °F/ ${farenheitToCelcius(obj.currentConditions.temp)} °C`;
};

export async function fetchCityWeather(city) {
  loading()
  const response = await fetch(`${URL}${city}?key=${KEY}`);
  const data = await response.json();

  //data.currentConditions.days <- explore to check if you can get more detailed info

  console.log(data);
  console.log(`Place: ${data.resolvedAddress}`);
  console.log(`Conditions: ${data.currentConditions.conditions}`);
  console.log(`Humidity: ${data.currentConditions.humidity}`);
  console.log(`Temp: ${data.currentConditions.temp}`);

  
  createWeatherFromObj(data);
  loading()
};