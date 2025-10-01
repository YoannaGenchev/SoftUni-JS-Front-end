window.addEventListener("load", solve);

function solve() {
    const emailInput = document.getElementById("email");
    const eventInput = document.getElementById("event");
    const locationInput = document.getElementById("location");
    const nextBtn = document.getElementById("next-btn");
    const previewList = document.getElementById("preview-list");
    const eventList = document.getElementById("event-list");

    nextBtn.addEventListener("click", handleNext);

    function handleNext() {
        const email = emailInput.value.trim();
        const event = eventInput.value.trim();
        const location = locationInput.value.trim();

        if (email === "" || event === "" || location === "") {
            return;
        }

        const listItem = document.createElement("li");
        listItem.className = "application";

        const article = document.createElement("article");

        const emailH4 = document.createElement("h4");
        emailH4.textContent = email;

        const eventP = document.createElement("p");
        eventP.innerHTML = `<strong>Event:</strong><br>${event}`;

        const locationP = document.createElement("p");
        locationP.innerHTML = `<strong>Location:</strong><br>${location}`;

        article.appendChild(emailH4);
        article.appendChild(eventP);
        article.appendChild(locationP);

        const editBtn = document.createElement("button");
        editBtn.className = "action-btn edit";
        editBtn.textContent = "edit";

        const applyBtn = document.createElement("button");
        applyBtn.className = "action-btn apply";
        applyBtn.textContent = "apply";

        listItem.appendChild(article);
        listItem.appendChild(editBtn);
        listItem.appendChild(applyBtn);
        previewList.appendChild(listItem);

        const savedEmail = email;
        const savedEvent = event;
        const savedLocation = location;

        emailInput.value = "";
        eventInput.value = "";
        locationInput.value = "";
        nextBtn.disabled = true;

        editBtn.addEventListener("click", function () {
            emailInput.value = savedEmail;
            eventInput.value = savedEvent;
            locationInput.value = savedLocation;

            previewList.removeChild(listItem);
            nextBtn.disabled = false;
        });

        applyBtn.addEventListener("click", function () {
            listItem.removeChild(editBtn);
            listItem.removeChild(applyBtn);
            eventList.appendChild(listItem);
            nextBtn.disabled = false;
        });
    }
}
