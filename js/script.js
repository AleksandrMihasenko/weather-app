const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');


const updateApp = (data) => {
    const {cityDetails: cityInfo, weather: weatherInfo} = data;
    
    //update app template
    details.innerHTML = `
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
        <div class="my-3">${weatherInfo.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherInfo.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
    
    //update icons and images
    const iconSrc = `images/icons/${weatherInfo.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    
    let timeSrc = weatherInfo.IsDayTime
        ? 'images/day.svg'
        : 'images/night.svg';

    time.setAttribute('src', timeSrc);
};

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);
    
    return {
        cityDetails,
        weather
    };
};

cityForm.addEventListener('submit', event => {
    event.preventDefault();
    
    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    
    //update app
    updateCity(city)
        .then(data => updateApp(data))
        .catch(err => console.log(err));
});
