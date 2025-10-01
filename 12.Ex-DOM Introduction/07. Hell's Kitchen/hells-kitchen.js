function solve() {
    const input = JSON.parse(document.querySelector('textarea').value);
    const restaurants = {};

    for (let entry of input) {
        const [restaurantName, workersString] = entry.split(' - ');
        const workers = workersString.split(', ').map(workerStr => {
            const [name, salary] = workerStr.split(' ');
            return { name, salary: Number(salary) };
        });

        if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = [];
        }

        restaurants[restaurantName] = restaurants[restaurantName].concat(workers);
    }

    let bestRestaurantName = '';
    let bestAverageSalary = 0;

    for (const name in restaurants) {
        const workers = restaurants[name];
        const average = workers.reduce((sum, w) => sum + w.salary, 0) / workers.length;

        if (average > bestAverageSalary) {
            bestAverageSalary = average;
            bestRestaurantName = name;
        }
    }

    const bestWorkers = restaurants[bestRestaurantName].sort((a, b) => b.salary - a.salary);
    const bestSalary = bestWorkers[0].salary;

    document.querySelector('#bestRestaurant span').textContent =
        `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    document.querySelector('#workers p').textContent =
        bestWorkers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
}
