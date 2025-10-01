function solve() {
    const textarea = document.querySelector('#inputs textarea');
    const input = textarea.value.trim();
    
    const bestRestaurantP = document.querySelector('#outputs #bestRestaurant p');
    const bestWorkersP = document.querySelector('#outputs #workers p');
    
    bestRestaurantP.textContent = '';
    bestWorkersP.textContent = '';
    
    try {
        const restaurantStrings = JSON.parse(input);

        const restaurants = {};

        restaurantStrings.forEach(restaurantString => {
            const parts = restaurantString.split(' - ');
            const restaurantName = parts[0].trim();
            const workersData = parts[1].trim();
        
            const workerPairs = workersData.split(', ');
            const workers = [];
            
            workerPairs.forEach(pair => {
                const workerParts = pair.trim().split(' ');
                const salary = parseInt(workerParts.pop());
                const name = workerParts.join(' ');
                workers.push({ name, salary });
            });

            if (restaurants[restaurantName]) {
                restaurants[restaurantName].workers.push(...workers);
            } else {
                restaurants[restaurantName] = {
                    name: restaurantName,
                    workers: workers,
                    order: Object.keys(restaurants).length
                };
            }
        });

        let bestRestaurant = null;
        let bestAvgSalary = -1;
        let bestOrder = Infinity;
        
        Object.values(restaurants).forEach(restaurant => {
            const salaries = restaurant.workers.map(worker => worker.salary);
            const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
            const avgSalary = totalSalary / salaries.length;
            const bestSalary = Math.max(...salaries);
            
            restaurant.avgSalary = avgSalary;
            restaurant.bestSalary = bestSalary;
            
            if (avgSalary > bestAvgSalary || (avgSalary === bestAvgSalary && restaurant.order < bestOrder)) {
                bestRestaurant = restaurant;
                bestAvgSalary = avgSalary;
                bestOrder = restaurant.order;
            }
        });
        
        if (bestRestaurant) {
            const bestRestaurantText = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
            bestRestaurantP.textContent = bestRestaurantText;
            const sortedWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
            const workersText = sortedWorkers.map(worker => 
                `Name: ${worker.name} With Salary: ${worker.salary}`
            ).join(' ');
            
            bestWorkersP.textContent = workersText;
        }
        
    } catch (error) {
        bestRestaurantP.textContent = 'Error: Invalid input format';
        bestWorkersP.textContent = '';
        console.error('Parsing error:', error);
    }
}