document.addEventListener('DOMContentLoaded', solve);

function solve() {
    function format(num) {
        return Number.isInteger(num) ? num : num.toFixed(2);
    }

    const daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const daysInput = document.getElementById('days-input');
        
        const days = Number(daysInput.value);
        const hours = format(days * 24);
        const minutes = format(hours * 60);
        const seconds = format(minutes * 60);
        document.getElementById('hours-input').value = hours;
        document.getElementById('minutes-input').value = minutes;
        document.getElementById('seconds-input').value = seconds;
    });

    const hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const hoursInput = document.getElementById('hours-input');

        const hours = Number(hoursInput.value);
        const days = format(hours / 24);
        const minutes = format(hours * 60);
        const seconds = format(minutes * 60);
        document.getElementById('days-input').value = days;
        document.getElementById('minutes-input').value = minutes;
        document.getElementById('seconds-input').value = seconds;
    });

    const minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const minutesInput = document.getElementById('minutes-input');
        
        const minutes = Number(minutesInput.value);
        const days = format(minutes / (24 * 60));
        const hours = format(minutes / 60);
        const seconds = format(minutes * 60);
        document.getElementById('days-input').value = days;
        document.getElementById('hours-input').value = hours;
        document.getElementById('seconds-input').value = seconds;
    });

    const secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const secondsInput = document.getElementById('seconds-input');
        
        const seconds = Number(secondsInput.value);
        const days = format(seconds / (24 * 60 * 60));
        const hours = format(seconds / 3600);
        const minutes = format(seconds / 60);
        document.getElementById('days-input').value = days;
        document.getElementById('hours-input').value = hours;
        document.getElementById('minutes-input').value = minutes;
    });
}