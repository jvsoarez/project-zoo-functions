const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((count, specie) => {
      const obj = count;
      obj[specie.name] = specie.residents.length;
      return obj;
    }, {});
  }
  const findSpecie = species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    const residentsBySex = findSpecie.residents.filter((resident) => resident.sex === animal.sex);
    return residentsBySex.length;
  }
  return findSpecie.residents.length;
}

module.exports = countAnimals;
