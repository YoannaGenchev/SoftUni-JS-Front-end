document.addEventListener('DOMContentLoaded', solve);

function solve()
{
    let input = document.getElementById('email');
    input.addEventListener('change', validateEmail);

    function validateEmail()
    {
        const value = input.value.trim();
        const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (emailRegex.test(value)) 
        {
            input.classList.remove('error');
        } 
        else 
        {
            input.classList.add('error');
        }
    }
}
