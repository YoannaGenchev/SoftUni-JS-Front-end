async function getInfo()
{
    const stopIdInput = document.getElementById('stopId');
    const stopNameDiv = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');

    const stopId = stopIdInput.value.trim();
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    stopNameDiv.textContent = '';
    busesUl.innerHTML = '';

    try
    {
        const response = await fetch(url);
        if (!response.ok)
        {
            throw new Error('Error fetching data');
        }

        const data = await response.json();

        stopNameDiv.textContent = data.name;

        for (const busId in data.buses) {
            const li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
            busesUl.appendChild(li);
        }
    }
    catch (error)
    {
        stopNameDiv.textContent = 'Error';
    }
}