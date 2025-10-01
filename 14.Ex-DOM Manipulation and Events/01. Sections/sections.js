document.addEventListener('DOMContentLoaded', solve);

function solve()
{
   const form = document.getElementById('task-input');
   const content = document.getElementById('content');
   form.addEventListener('submit', (e) => {
      e.preventDefault();
      content.innerHTML = '';

      const str = document.getElementsByTagName('input')[0].value;
      const sections = str.split(', ').map(s => s.trim());
      
      sections.forEach((section) => {
         const sectionElement = document.createElement('div');
         const titleElement = document.createElement('p');
         titleElement.textContent = section;
         titleElement.style.display = 'none';
         sectionElement.appendChild(titleElement);
         sectionElement.addEventListener('click', () => {
            titleElement.style.display ='block';
         });
         document.getElementById('content').appendChild(sectionElement);
      });
   });
}