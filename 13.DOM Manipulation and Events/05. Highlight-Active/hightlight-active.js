document.addEventListener('DOMContentLoaded', focused);

function focused()
{
    const elements = document.querySelectorAll('input');
    for (let element of elements)
    {
        element.addEventListener('focus', focus);
        function focus()
        {
            removeFocusFromAllDivs();
            const container = element.closest('div');
            if (container)
            {
                container.classList.add('focused');
            }
        }

        element.addEventListener('blur', blur);
        function blur()
        {
            const container = element.closest('div');
            if (container)
            {
                container.classList.remove('focused');
            }
        }
    }

    function removeFocusFromAllDivs()
    {
        const focusedDivs = document.querySelectorAll('div.focused');
        for (let div of focusedDivs)
        {
            div.classList.remove('focused');
        }
    }
}
