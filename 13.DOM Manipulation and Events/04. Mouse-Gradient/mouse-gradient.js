function attachGradientEvents()
{
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event)
    {
        let percentage = event.offsetX / (event.target.clientWidth - 1);
        percentage = Math.trunc(percentage * 100);
        document.getElementById('result').textContent = percentage + '%'; 
    }

    function gradientOut()
    {
        document.getElementById('result').textContent = '';
    }
}
