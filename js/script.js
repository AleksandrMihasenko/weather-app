const cityForm = document.querySelector('.change-location');



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
        .then(data => {})
        .catch(err => console.log(err));
});
