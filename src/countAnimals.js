const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((count, specie) => {
      const obj = count;
      obj[specie.name] = specie.residents.length;
      return obj;
    }, {});
  }
  if (animal.sex) {
    const findSpecie = species.find((specie) => specie.name === animal.specie);
    const residentsBySex = findSpecie.residents.filter((resident) => resident.sex === animal.sex);
    return residentsBySex.length;
  }
  let count = 0;
  species.forEach((specie) => {
    if (specie.name === animal.specie) count = specie.residents.length;
  });
  return count;
}

module.exports = countAnimals;
