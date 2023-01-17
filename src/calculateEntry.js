const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const object = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      object.child += 1;
    } else if ((entrant.age >= 18 && entrant.age < 50)) {
      object.adult += 1;
    } else {
      object.senior += 1;
    }
  });
  return object;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const numberOfEntrants = countEntrants(entrants);
  const chidValue = numberOfEntrants.child * prices.child;
  const adultValue = numberOfEntrants.adult * prices.adult;
  const seniorValue = numberOfEntrants.senior * prices.senior;
  const totalValue = chidValue + adultValue + seniorValue;
  return totalValue;
};

module.exports = { calculateEntry, countEntrants };
