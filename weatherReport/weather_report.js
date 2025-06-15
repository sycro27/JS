function showweatherDetails(event) {
    event.preventDefault();
  
    const city = document.getElementById('city').value.trim();
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
  
    const apiKey = '965a85a509c4dbe6df5725255f250dab';  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    console.log("Fetching from:", apiUrl);
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        document.getElementById('weatherInfo').innerHTML = `
          <p style="color:red;">${error.message}</p>
        `;
      });
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
  