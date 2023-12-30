const images = {
    'Sunny': 'sun',
    'Clear': 'moon',
    'Partly Cloudy': 'partly-cloudy',
    'Cloudy': 'cloudy',
    'Overcast': 'overcast',
    'Mist': 'mist',
    'Patchy rain nearby': 'rain',
    'Patchy snow nearby': 'snow'
}


class WeatherWidget extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: var(--weather-font, sans-serif);
                    color: var(--weather-text-color, #333);
                    background-color: var(--weather-bg-color, #fff);
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    font-size: 24px;
                    margin-bottom: 40px;
                    text-align: center;
                    color: var(--weather-header-color, #059669);
                }

                p {
                    font-size: 18px;
                }
            </style>
            <div id="weather-container">
                <h1 id="weather-header">Loading...</h1>
                <p id="weather-day"></p>
                <p id="weather-night"></p>
            </div>
        `;

        this.updateWeather();
    }

    async fetchWeatherData() {
        const weatherData = await fetch('https://www.weatherapi.com/docs/conditions.json')
            .then(response => response.json())
            .then(data => data.slice(0, 7))
            .then(data => ([
                data.map(el => el.day),
                data.map(el => el.night)
            ]))
            .catch(error => console.error('Error fetching weather data:', error, '!!!'));
        // console.log(weatherData);
        return weatherData
    }

    async updateWeather() {
        const weatherHeader = this.shadowRoot.getElementById('weather-header');
        const weatherDay = this.shadowRoot.getElementById('weather-day');
        const weatherNight = this.shadowRoot.getElementById('weather-night');
        this.weatherData = await this.fetchWeatherData()
        console.log(this.weatherData);
        weatherHeader.textContent = `погода на неделю:`;
        weatherDay.innerHTML = `<div style="padding:10px 0;display:flex;flex-direction:row;align-items:center;justify-content:space-around;flex-wrap:wrap;border:3px solid #06b6d4;border-bottom-color:#0ea5e9;border-radius:10px;color:#334155;">
            <p style="font-weight:bold">погода днем:</p>
            ${this.weatherData[0].map(el => `<img
            style="width:70px"
            alt="" src="./images/${images[el]}-day.svg" />`).join('')}
        </div>`
        weatherNight.innerHTML = `<div style="padding:5px 0;display:flex;flex-direction:row;align-items:center;justify-content:space-around;flex-wrap:wrap;border:3px solid #f59e0b;border-top-color:#fbbf24;border-radius:10px;background-color:#334155;color:white;">
            <p stye="">погода ночью:</p>
            ${this.weatherData[1].map(el => `<img
            style="width:70px;height:35px;"
            alt="" src="./images/${images[el]}-night.svg" />`).join('')}
        </div>`

    }
}

customElements.define('weather-widget', WeatherWidget);
