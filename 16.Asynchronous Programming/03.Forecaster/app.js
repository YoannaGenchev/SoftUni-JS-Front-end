function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';
    const locationInput = document.getElementById('location');
    const submitButton = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    const weatherSymbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    };

    submitButton.addEventListener('click', async () => {
        const locationName = locationInput.value.trim();
        if (!locationName) return;

        try {
            clearForecasts();

            const locationsRes = await fetch(`${baseUrl}/locations`);
            if (!locationsRes.ok) throw new Error('Locations fetch failed');
            const locations = await locationsRes.json();

            const location = locations.find(l => l.name.toLowerCase() === locationName.toLowerCase());
            if (!location) throw new Error('Location not found');

            const code = location.code;

            const [todayRes, upcomingRes] = await Promise.all([
                fetch(`${baseUrl}/today/${code}`),
                fetch(`${baseUrl}/upcoming/${code}`)
            ]);

            if (!todayRes.ok || !upcomingRes.ok) throw new Error('Forecast fetch failed');

            const todayData = await todayRes.json();
            const upcomingData = await upcomingRes.json();

            forecastDiv.style.display = 'block';

            const current = createCurrentForecast(todayData);
            currentDiv.appendChild(current);

            const upcoming = createUpcomingForecast(upcomingData.forecast);
            upcomingDiv.appendChild(upcoming);

        } catch (err) {
            displayError();
        }
    });

    function clearForecasts() {
        document.querySelectorAll('#current .forecasts, #upcoming .forecast-info').forEach(el => el.remove());
    }

    function createCurrentForecast(data) {
        const condition = data.forecast.condition;
        const symbol = weatherSymbols[condition] || '';

        const forecasts = document.createElement('div');
        forecasts.className = 'forecasts';

        const symbolSpan = document.createElement('span');
        symbolSpan.className = 'condition symbol';
        symbolSpan.textContent = symbol;

        const conditionSpan = document.createElement('span');
        conditionSpan.className = 'condition';

        const locationSpan = document.createElement('span');
        locationSpan.className = 'forecast-data';
        locationSpan.textContent = data.name;

        const tempSpan = document.createElement('span');
        tempSpan.className = 'forecast-data';
        tempSpan.textContent = `${data.forecast.low}${weatherSymbols.Degrees}/${data.forecast.high}${weatherSymbols.Degrees}`;

        const condTextSpan = document.createElement('span');
        condTextSpan.className = 'forecast-data';
        condTextSpan.textContent = condition;

        conditionSpan.append(locationSpan, tempSpan, condTextSpan);
        forecasts.append(symbolSpan, conditionSpan);

        return forecasts;
    }

    function createUpcomingForecast(days) {
        const forecastInfo = document.createElement('div');
        forecastInfo.className = 'forecast-info';

        days.forEach(day => {
            const symbol = weatherSymbols[day.condition] || '';

            const upcomingSpan = document.createElement('span');
            upcomingSpan.className = 'upcoming';

            const symbolSpan = document.createElement('span');
            symbolSpan.className = 'symbol';
            symbolSpan.textContent = symbol;

            const tempSpan = document.createElement('span');
            tempSpan.className = 'forecast-data';
            tempSpan.textContent = `${day.low}${weatherSymbols.Degrees}/${day.high}${weatherSymbols.Degrees}`;

            const condSpan = document.createElement('span');
            condSpan.className = 'forecast-data';
            condSpan.textContent = day.condition;

            upcomingSpan.append(symbolSpan, tempSpan, condSpan);
            forecastInfo.appendChild(upcomingSpan);
        });

        return forecastInfo;
    }

    function displayError() {
        forecastDiv.style.display = 'block';
        clearForecasts();

        const errorDiv = document.createElement('div');
        errorDiv.className = 'forecasts';
        errorDiv.textContent = 'Error';

        currentDiv.appendChild(errorDiv);
    }
}

attachEvents();