async function solution()
{
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    try
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        main.innerHTML = "";

        data.forEach(accordion =>
        {
            const accordionDiv = document.createElement('div');
            accordionDiv.className = 'accordion';

            accordionDiv.innerHTML = `
                <div class="head">
                <span>${accordion.title}</span>
                <button class="button" id="${accordion._id}">More</button>
            </div>
            <div class="extra">
                <p id="extraContent"></p>
            </div>
            `;

            const button = accordionDiv.querySelector('button');
            button.addEventListener('click', async () =>
            {
                const extraDiv = accordionDiv.querySelector('.extra');
                const extraContent = extraDiv.querySelector('#extraContent');

                if (extraDiv.style.display === 'block')
                {
                    extraDiv.style.display = 'none';
                    button.textContent = 'More';
                }
                else
                {
                    try
                    {
                        const detailsResponse = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${accordion._id}`);
                        if (!detailsResponse.ok)
                        {
                            throw new Error(`Error: ${detailsResponse.status} ${detailsResponse.statusText}`);
                        }
                        
                        const detailsData = await detailsResponse.json();
                        extraContent.textContent = detailsData.content;
                        extraDiv.style.display = 'block';
                        button.textContent = 'Less';
                    }
                    catch (error)
                    {
                        console.error('Error fetching details:', error);
                    }
                }
            });

            main.appendChild(accordionDiv);
        });
    }
    catch (error)
    {
        console.error('Error:', error);
    }
}

solution();