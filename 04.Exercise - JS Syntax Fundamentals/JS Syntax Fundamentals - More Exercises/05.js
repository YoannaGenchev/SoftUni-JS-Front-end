function spiceMustFlow(startingYield) {
    let totalSpice = 0;
    let days = 0;
    let yield = startingYield;

    while (yield >= 100) {
        totalSpice += yield;
        totalSpice -= 26;
        days++;
        yield -= 10;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(days);
    console.log(totalSpice);
}

spiceMustFlow(111);