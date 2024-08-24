import '../styles/info.css';

const weatherInfo = (elm, obj) => {
  const info = document.createElement('div');
  info.classList.add('info');

  info.innerHTML = `
  Place: <br>
  Condition: <br>
  Humidity: <br>
  Temp: `;

  elm.appendChild(info)
};

export default weatherInfo;