async function lockedProfile()
{
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    try
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        main.innerHTML = "";

        Object.values(data).forEach((profile, index) =>
        {
            const profileDiv = document.createElement('div');
            profileDiv.className = 'profile';

            const userIndex = index + 1;

            profileDiv.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${userIndex}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${userIndex}Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user${userIndex}Username" value="${profile.username}" disabled readonly />
                <div id="user${userIndex}HiddenFields" style="display: none">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user${userIndex}Email" value="${profile.email}" disabled readonly />
                    <label>Age:</label>
                    <input type="number" name="user${userIndex}Age" value="${profile.age}" disabled readonly />
                </div>
                <button>Show more</button>
            `;

            const button = profileDiv.querySelector('button');
            const hiddenFields = profileDiv.querySelector(`#user${userIndex}HiddenFields`);
            const unlockRadio = profileDiv.querySelector(`input[value="unlock"]`);

            button.addEventListener('click', () => {
                if (unlockRadio.checked) {
                    const isHidden = hiddenFields.style.display === 'none';
                    hiddenFields.style.display = isHidden ? 'block' : 'none';
                    button.textContent = isHidden ? 'Hide it' : 'Show more';
                }
            });

            main.appendChild(profileDiv);
        });

    }
    catch (error)
    {
        console.error('Failed to load profiles:', error);
        main.innerHTML = `<p style="color: red;">Failed to load profiles. Please try again later.</p>`;
    };
}