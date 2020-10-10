const key = 'GDzJCuxipYxBVIgqYXSWMBkGMWwB7gmr';



//get city information
const getCity = async (city) => {
    
    //make queries
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    
    //wait responses
    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];
};

//get weather information
const getWeather = async (id) => {
    
    //make queries for id location
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    
    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];
};
