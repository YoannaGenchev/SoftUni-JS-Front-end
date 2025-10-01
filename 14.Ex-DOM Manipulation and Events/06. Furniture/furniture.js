document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputFormEL = document.querySelector('#input');
    const inputTextareaEL = document.querySelector('#input textarea');
    const tbodyEl = document.querySelector('tbody');

    inputFormEL.addEventListener('submit', handleGenerateProducts);

    function handleGenerateProducts(e)
    {
        e.preventDefault();

        const json = inputTextareaEL.value.trim();
        const furnitureArr = JSON.parse(json);
        console.log(furnitureArr);

        furnitureArr.forEach(furnitureObj => 
        {
            const trEl = document.createElement('tr');

            const imgTdEl = document.createElement('td');
            const imgEl = document.createElement('img');
            imgEl.src = furnitureObj.img;
            imgTdEl.appendChild(imgEl);

            const nameTdEl = document.createElement('td');
            const namePEl = document.createElement('p');
            namePEl.textContent = furnitureObj.name;
            nameTdEl.appendChild(namePEl);

            const priceTdEl = document.createElement('td');
            const pricePEl = document.createElement('p');
            pricePEl.textContent = furnitureObj.price;
            priceTdEl.appendChild(pricePEl);

            const decFactorTdEl = document.createElement('td');
            const decFactorPEl = document.createElement('p');
            decFactorPEl.textContent = furnitureObj.decFactor;
            decFactorTdEl.appendChild(decFactorPEl);

            const checkedTdEl = document.createElement('td');
            const checkedInputEl = document.createElement('input');
            checkedInputEl.type = 'checkbox';
            checkedTdEl.appendChild(checkedInputEl);

            trEl.appendChild(imgTdEl);
            trEl.appendChild(nameTdEl);
            trEl.appendChild(priceTdEl);
            trEl.appendChild(decFactorTdEl);
            trEl.appendChild(checkedTdEl);

            tbodyEl.appendChild(trEl);
        });
    }

    const inputFormShop = document.querySelector('#shop');
    inputFormShop.addEventListener('submit', handleBuyProducts);

    function handleBuyProducts(e) 
    {
        e.preventDefault();

        const formEl = e.target;
        const allSelectedCheckboxEls = Array.from(formEl.querySelectorAll('input:checked'));
        const allSelectedEls = allSelectedCheckboxEls.map(checkboxEl => checkboxEl.closest('tr'));
        console.log(allSelectedEls);

        const allFurnitureNames = allSelectedEls.map(trEl => trEl.querySelector('td:nth-child(2) p').textContent);
        const allFurniturePrices = allSelectedEls.map(trEl => Number(trEl.querySelector('td:nth-child(3) p').textContent));
        const allFurnitureDecFactors = allSelectedEls.map(trEl => Number(trEl.querySelector('td:nth-child(4) p').textContent));

        const totalFurniturePrice = allFurniturePrices.reduce((acc, price) => acc + price, 0);
        const avgFurnitureDecFactor = allFurnitureDecFactors.reduce((acc, decFactor) => acc + decFactor, 0) / allFurnitureDecFactors.length;
        
        const resultTextareaEl = formEl.querySelector('textarea');
        resultTextareaEl.value = `Bought furniture: ${allFurnitureNames.join(', ')}\nTotal price: ${totalFurniturePrice}\nAverage decoration factor: ${avgFurnitureDecFactor}`;
    }
  }