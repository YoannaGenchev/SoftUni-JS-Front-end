function solve()
{
    const infoBox = document.querySelector('#info .info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot',
        name: ''
    };

    async function depart()
    {
        try
        {
            const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`);
            if (!response.ok)
            {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            stop.name = data.name;
            stop.next = data.next;

            infoBox.textContent = `Next stop ${stop.name}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }
        catch (error)
        {
            infoBox.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive()
    {
        infoBox.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();