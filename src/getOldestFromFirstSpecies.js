const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idFirtsSpecieByEmployee = employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const residentsOfSpecie = species
    .filter((specie) => specie.id === idFirtsSpecieByEmployee)[0].residents;
  const oldestAnimal = residentsOfSpecie
    .reduce((bigger, animal) => (animal.age > bigger.age ? animal : bigger));
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
