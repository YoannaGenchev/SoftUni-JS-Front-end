function bitcoinMining(goldMined) {
    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;

    let totalMoney = 0;
    let bitcoinsBought = 0;
    let dayOfFirstBitcoin = 0;

    for (let i = 0; i < goldMined.length; i++) {
        let day = i + 1;
        let gold = goldMined[i];

        if (day % 3 === 0) {
            gold *= 0.7;
        }

        let dailyMoney = gold * goldPricePerGram;
        totalMoney += dailyMoney;

        while (totalMoney >= bitcoinPrice) {
            bitcoinsBought++;
            totalMoney -= bitcoinPrice;
            if (bitcoinsBought === 1) {
                dayOfFirstBitcoin = day;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);