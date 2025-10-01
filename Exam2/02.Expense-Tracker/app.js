window.addEventListener("load", solve);

function solve() {
    const expenseInput = document.getElementById("expense");
    const amountInput = document.getElementById("amount");
    const dateInput = document.getElementById("date");
    const addBtn = document.getElementById("add-btn");

    const previewList = document.getElementById("preview-list");
    const expensesList = document.getElementById("expenses-list");
    const deleteBtn = document.querySelector(".btn.delete");

    addBtn.addEventListener("click", onAdd);
    deleteBtn.addEventListener("click", () => location.reload());

    function onAdd() {
        const type = expenseInput.value.trim();
        const amount = amountInput.value.trim();
        const date = dateInput.value.trim();

        if (!type || !amount || !date) return;
        
        const numAmount = Number(amount);
        if (isNaN(numAmount)) return;

        const li = document.createElement("li");
        li.className = "expense-item";

        const article = document.createElement("article");

        const typeP = document.createElement("p");
        typeP.textContent = `Type: ${type}`;

        const amountP = document.createElement("p");
        amountP.textContent = `Amount: ${numAmount}$`;

        const dateP = document.createElement("p");
        dateP.textContent = `Date: ${date}`;

        article.appendChild(typeP);
        article.appendChild(amountP);
        article.appendChild(dateP);

        const editBtn = document.createElement("button");
        editBtn.className = "btn edit";
        editBtn.textContent = "Edit";

        const okBtn = document.createElement("button");
        okBtn.className = "btn ok";
        okBtn.textContent = "Ok";

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(okBtn);
        previewList.appendChild(li);

        expenseInput.value = "";
        amountInput.value = "";
        dateInput.value = "";
        addBtn.disabled = true;

        editBtn.addEventListener("click", () => {
            expenseInput.value = type;
            amountInput.value = numAmount;
            dateInput.value = date;
            previewList.removeChild(li);
            addBtn.disabled = false;
        });

        okBtn.addEventListener("click", () => {
            editBtn.parentNode.removeChild(editBtn);
            okBtn.parentNode.removeChild(okBtn);
            previewList.removeChild(li);
            expensesList.appendChild(li);
            addBtn.disabled = false;
        });
    }
}