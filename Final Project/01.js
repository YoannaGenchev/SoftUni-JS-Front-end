function vikingSaga(input) 
{
  const n = Number(input.shift());

  const warriors = new Map();
  const order = [];

  for (let i = 0; i < n; i++) 
{
    const [name, weapon, strengthStr] = input.shift().split("-");
    const strength = Number(strengthStr);
    warriors.set(name, { weapons: new Set([weapon]), strength });
    order.push(name);
  }

  const isInactive = (w) => !w || w.strength <= 0;

  while (input.length) 
    {
    const line = input.shift();
    if (line === "The Saga Ends") break;

    const [command, name, arg1, arg2] = line.split(" -> ");
    const w = warriors.get(name);

    if (isInactive(w)) continue;
    if (command === "Raid") 
    {
      const weapon = arg1;
      const needed = Number(arg2);

      if (w.weapons.has(weapon) && w.strength >= needed) 
      {
        w.strength -= needed;
        console.log(
          `${name} fought bravely with ${weapon} and now has ${w.strength} strength!`
        );
      } 
      else 
      {
        console.log(`${name} couldn't join the raid with ${weapon}!`);
      }

    } 
    else if (command === "Train") 
    {
      const gain = Number(arg1);

      if (w.strength >= 100) 
      {
        console.log(`${name} is already at full strength!`);
      } 
      else 
      {
        const actualGain = Math.min(gain, 100 - w.strength);
        w.strength += actualGain;
        console.log(`${name} trained hard and gained ${actualGain} strength!`);
      }

    } 
    else if (command === "Forge") 
    {
      const newWeapon = arg1;
      if (w.weapons.has(newWeapon)) 
     {
        console.log(`${name} already wields ${newWeapon}.`);
     }
      else 
     {
        w.weapons.add(newWeapon);
        console.log(`${name} has forged a new weapon: ${newWeapon}!`);
     }
    }
  }
  for (const name of order) 
 {
    const w = warriors.get(name);
    if (!w || w.strength <= 0) continue;

    console.log(`Warrior: ${name}`);
    console.log(` - Weapons: ${Array.from(w.weapons).join(", ")}`);
    console.log(` - Strength: ${w.strength}`);
  }
}
