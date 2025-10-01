function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;

    for (let i = 1; i <= lostFights; i++) {
        let helmetBroken = false;
        let swordBroken = false;

        if (i % 2 === 0) {
            brokenHelmet++;
            helmetBroken = true;
        }

        if (i % 3 === 0) {
            brokenSword++;
            swordBroken = true;
        }

        if (helmetBroken && swordBroken) {
            brokenShield++;
            if (brokenShield % 2 === 0) {
                brokenArmor++;
            }
        }
    }

    let totalExpenses =
        brokenHelmet * helmetPrice +
        brokenSword * swordPrice +
        brokenShield * shieldPrice +
        brokenArmor * armorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);