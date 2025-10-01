document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const correctAnswers = [
        'onclick',
        'JSON.stringify()',
        'A programming API for HTML and XML documents'
    ];

    const sections = Array.from(document.querySelectorAll('section.question'));
    const resultDiv = document.getElementById('results');
    const resultHeader = document.createElement('h1');
    resultDiv.appendChild(resultHeader);

    let currentQuestion = 0;
    let rightAnswers = 0;

    const allAnswers = document.querySelectorAll('.quiz-answer');
    allAnswers.forEach(answer => {
        answer.addEventListener('click', () => {
            const userAnswer = answer.textContent.trim();
            if (userAnswer === correctAnswers[currentQuestion])
            {
                rightAnswers++;
            }

            sections[currentQuestion].classList.add('hidden');
            currentQuestion++;

            if (currentQuestion < sections.length)
            {
                sections[currentQuestion].classList.remove('hidden');
            } 
            else
            {
                resultDiv.style.display = 'block';
                if (rightAnswers === correctAnswers.length)
                {
                    resultHeader.textContent = 'You are recognized as top JavaScript fan!';
                }
                else
                {
                    resultHeader.textContent = `You have ${rightAnswers} right answer${rightAnswers !== 1 ? 's' : ''}`;
                }
            }
        });
    });
}
