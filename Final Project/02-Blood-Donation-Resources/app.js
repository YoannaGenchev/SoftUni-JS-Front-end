window.addEventListener("load", solve);

function solve() 
{
  const typeInput = document.getElementById('type');
  const ageInput = document.getElementById('age');
  const genderSelect = document.getElementById('gender');
  const registerBtn = document.getElementById('register-btn');

  const registeredList = document.getElementById('registered-list');
  const confirmedList = document.getElementById('confirmed-list');

  registerBtn.addEventListener('click', onRegister);

  function onRegister(e) 
  {
    e.preventDefault();

    const bloodType = (typeInput.value || '').trim();
    const age = (ageInput.value || '').trim();
    const gender = (genderSelect.value || '').trim();

    if (!bloodType || !age || !gender) return;

    const li = document.createElement('li');
    const article = document.createElement('article');

    const pType = document.createElement('p');
    pType.textContent = `Blood Type: ${bloodType}`;
    article.appendChild(pType);

    const pGender = document.createElement('p');
    pGender.textContent = `Gender: ${gender}`;
    article.appendChild(pGender);

    const pAge = document.createElement('p');
    pAge.textContent = `Age: ${age}`;
    article.appendChild(pAge);

    li.appendChild(article);

    const btnWrap = document.createElement('div');
    btnWrap.className = 'buttons';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-btn';
    doneBtn.textContent = 'Done';

    btnWrap.appendChild(editBtn);
    btnWrap.appendChild(doneBtn);
    li.appendChild(btnWrap);
    registeredList.appendChild(li);

    typeInput.value = '';
    ageInput.value = '';
    genderSelect.value = '';

    editBtn.addEventListener('click', function() 
    {
      const currentType = pType.textContent.replace('Blood Type: ', '');
      const currentGender = pGender.textContent.replace('Gender: ', '');
      const currentAge = pAge.textContent.replace('Age: ', '');

      typeInput.value = currentType;
      genderSelect.value = currentGender;
      ageInput.value = currentAge;

      if (li.parentNode) 
      {
        li.parentNode.removeChild(li);
      }
    });

    doneBtn.addEventListener('click', function() 
    {
      if (btnWrap.parentNode) 
        {
        btnWrap.parentNode.removeChild(btnWrap);
      }

      const clearBtn = document.createElement('button');
      clearBtn.className = 'clear-btn';
      clearBtn.textContent = 'Clear';
      li.appendChild(clearBtn);

      if (li.parentNode === registeredList) 
      {
        registeredList.removeChild(li);
      }
      confirmedList.appendChild(li);
      clearBtn.addEventListener('click', function() 
      {
        if (li.parentNode) {
          li.parentNode.removeChild(li);
        }
      });
    });
  }
}
