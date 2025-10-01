
async function attachEvents()
{
    const tbody = document.querySelector("#results tbody");

    try
    {
        const response = await fetch('http://localhost:3030/jsonstore/collections/students');
        if (!response.ok)
        {
            throw new Error('Error fetching data');
        }

        tbody.innerHTML = '';

        const students = await response.json();
        const studentsArray = Object.values(students);

        studentsArray.forEach(student =>
        {
            const trElement = document.createElement('tr');

            const fnameTd = document.createElement('td');
            fnameTd.textContent = student.firstName;
            trElement.appendChild(fnameTd);

            const lnameTd = document.createElement('td');
            lnameTd.textContent = student.lastName;
            trElement.appendChild(lnameTd);

            const facultyNumberTd = document.createElement('td');
            facultyNumberTd.textContent = student.facultyNumber;
            trElement.appendChild(facultyNumberTd);

            const gradeTd = document.createElement('td');
            gradeTd.textContent = student.grade.toFixed(2);
            trElement.appendChild(gradeTd);
            
            tbody.appendChild(trElement);
        });
    }
    catch (error)
    {
        console.log('Error');
    }

    const student = {
        firstName: '',
        lastName: '',
        facultyNumber: '',
        grade: 0
    };

    const form = document.querySelector('form');
    form.addEventListener('submit', async () =>
    {
        const formData = new FormData(form);
        student.firstName = formData.get('firstName').trim();
        student.lastName = formData.get('lastName').trim();
        student.facultyNumber = formData.get('facultyNumber').trim();
        student.grade = parseFloat(formData.get('grade').trim());

        if (student.firstName === '' || student.lastName === '' || student.facultyNumber === '' || isNaN(student.grade))
        {
            alert('All fields are required and grade must be a number.');
            return;
        }

        try
        {
            const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });

            if (!response.ok)
            {
                throw new Error('Error creating student');
            }

            form.reset();
            attachEvents();
        }
        catch (error)
        {
            console.log('Error');
        }
    });
}

attachEvents();