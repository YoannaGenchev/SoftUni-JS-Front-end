function solve() {
    const daysInput = document.getElementById('days-input');
    const hoursInput = document.getElementById('hours-input');
    const minutesInput = document.getElementById('minutes-input');
    const secondsInput = document.getElementById('seconds-input');

    const buttons = {
        daysBtn: () => convert(Number(daysInput.value), 'days'),
        hoursBtn: () => convert(Number(hoursInput.value), 'hours'),
        minutesBtn: () => convert(Number(minutesInput.value), 'minutes'),
        secondsBtn: () => convert(Number(secondsInput.value), 'seconds')
    };

    Object.entries(buttons).forEach(([id, handler]) => {
        document.getElementById(id).addEventListener('click', (e) => {
            e.preventDefault();
            handler();
        });
    });

    function convert(value, from) {
        if (isNaN(value)) return;

        let days;
        switch (from) {
            case 'days': days = value; break;
            case 'hours': days = value / 24; break;
            case 'minutes': days = value / 1440; break;
            case 'seconds': days = value / 86400; break;
        }

        daysInput.value = format(days);
        hoursInput.value = format(days * 24);
        minutesInput.value = format(days * 1440);
        secondsInput.value = format(days * 86400);
    }

    function format(num) {
        return Number.isInteger(num) ? num : num.toFixed(2);
    }
}
