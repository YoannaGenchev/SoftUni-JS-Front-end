function armies(data) {
    let leaders = {};

    for (let line of data) {
        if (line.endsWith('arrives')) {
            let leader = line.replace(' arrives', '');
            if (!leaders[leader]) {
                leaders[leader] = {};
            }
        } else if (line.includes(':')) {
            let [leader, armyInfo] = line.split(': ');
            let [armyName, count] = armyInfo.split(', ');
            count = Number(count);
            if (leaders.hasOwnProperty(leader)) {
                leaders[leader][armyName] = count;
            }
        } else if (line.includes('+')) {
            let [armyName, count] = line.split(' + ');
            count = Number(count);
            for (let leader in leaders) {
                if (leaders[leader].hasOwnProperty(armyName)) {
                    leaders[leader][armyName] += count;
                }
            }
        } else if (line.endsWith('defeated')) {
            let leader = line.replace(' defeated', '');
            delete leaders[leader];
        }
    }

    let sortedLeaders = Object.entries(leaders)
        .map(([leader, armies]) => {
            let total = Object.values(armies).reduce((a, b) => a + b, 0);
            return { leader, armies, total };
        }) 
        .sort((a, b) => b.total - a.total);

    for (let { leader, armies, total } of sortedLeaders) {
        console.log(`${leader}: ${total}`);
        let sortedArmies = Object.entries(armies)
            .sort((a, b) => b[1] - a[1]);
        for (let [armyName, count] of sortedArmies) {
            console.log(`>>> ${armyName} - ${count}`);
        }
    }
}

armies([
  'Rick Burr arrives',
  'Fergus: Wexamp, 30245',
  'Rick Burr: Juard, 50000',
  'Findlay arrives',
  'Findlay: Britox, 34540',
  'Wexamp + 6000',
  'Juard + 1350',
  'Britox + 4500',
  'Porter arrives',
  'Porter: Legion, 55000',
  'Legion + 302',
  'Rick Burr defeated',
  'Porter: Retix, 3205'
]);
