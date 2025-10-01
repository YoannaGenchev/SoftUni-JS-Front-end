function flightSchedule(input) {
    const flights = input[0];
    const changes = input[1];
    const statusToCheck = input[2][0];

    const flightInfo = {};

    for (let line of flights) {
        let [flight, ...destinationParts] = line.split(' ');
        let destination = destinationParts.join(' ');
        flightInfo[flight] = {
            Destination: destination,
            Status: 'Ready to fly'
        };
    }

    for (let change of changes) {
        let [flight, status] = change.split(' ');
        if (flightInfo.hasOwnProperty(flight)) {
            flightInfo[flight].Status = status;
        }
    }

    for (let flight in flightInfo) {
        if (flightInfo[flight].Status === statusToCheck) {
            console.log(flightInfo[flight]);
        }
    }
}

flightSchedule([
    ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas'],
    ['WN269 Cancelled'],
    ['Cancelled']
]);