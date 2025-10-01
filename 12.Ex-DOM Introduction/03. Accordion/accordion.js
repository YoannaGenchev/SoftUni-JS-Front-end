function toggle() {
    const extraContent = document.getElementById('extra');
    const button = document.getElementsByClassName('button')[0];

    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
        button.textContent = 'Less';
    } else {
        extraContent.style.display = 'none';
        button.textContent = 'More';
    }
}
