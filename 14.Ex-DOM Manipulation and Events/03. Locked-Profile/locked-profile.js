document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        const button = profile.querySelector('button');
        const hiddenFields = profile.querySelector('.hidden-fields');
        const unlockRadio = profile.querySelector('input[type="radio"][id$="Unlock"]');

        button.addEventListener('click', () => 
        {
            if (unlockRadio.checked)
            {
                if (hiddenFields.classList.contains('active'))
                {
                    hiddenFields.classList.remove('active');
                    button.textContent = 'Hide it';
                    hiddenFields.style.display = 'block';
                }
                else
                {
                    hiddenFields.classList.add('active');
                    button.textContent = 'Show more';
                    hiddenFields.style.display = 'none';
                }
            }
        });
    });
}
