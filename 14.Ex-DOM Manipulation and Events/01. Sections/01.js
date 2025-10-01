function solve() {
    const form = document.getElementById('task-input');
    const input = form.querySelector('input[type="text"]');
    const content = document.getElementById('content');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        content.innerHTML = '';

        const sections = input.value.split(',').map(s => s.trim());

        sections.forEach(section => {
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.textContent = section;
            p.style.display = 'none';

            div.appendChild(p);
            div.addEventListener('click', () => {
                p.style.display = 'block';
            });

            content.appendChild(div);
        });
    });
}
