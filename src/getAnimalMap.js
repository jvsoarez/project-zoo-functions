const { species } = require('../data/zoo_data');

const object = {};

const locationOfAnimals = () => {
  species.forEach((specie) => {
    object[specie.location] = species.filter((animal) => animal.location === specie.location)
      .map((obj) => obj.name);
  });
  return object;
};

const conditionsIncludeNamesAndSexAndSorted = (objOptions) => {
  const keys = Object.keys(objOptions);
  const condition = objOptions.includeNames === true && objOptions.sex;
  if (keys.length === 3 && (condition && objOptions.sorted === true)) {
    species.forEach((specie) => {
      const filterAnimalByLoc = species.filter((animal) => animal.location === specie.location);
      object[specie.location] = filterAnimalByLoc
        .map((obj) => ({ [obj.name]: obj.residents
          .filter((residentAnimal) => residentAnimal.sex === objOptions.sex)
          .map((resident) => resident.name).sort() }));
    });
    return object;
  }
};

// Esta função é retornada quando há 2 parâmetros que sejam { includeNames: true, sex: 'female' } ou,
// { includeNames: true, sex: 'male' }, traz um retorno parecido com a função conditionIncludeName, porém, filtrado pelo sexo do animal.

const conditionIncludeNamesAndSex = (objOptions) => {
  const keys = Object.keys(objOptions);
  if (keys.length === 2 && (objOptions.includeNames === true && objOptions.sex)) {
    species.forEach((specie) => {
      const filterAnimalByLoc = species.filter((animal) => animal.location === specie.location);
      object[specie.location] = filterAnimalByLoc
        .map((obj) => ({ [obj.name]: obj.residents
          .filter((residentAnimal) => residentAnimal.sex === objOptions.sex)
          .map((resident) => resident.name) }));
    });
    return object;
  }
  return conditionsIncludeNamesAndSexAndSorted(objOptions);
};

// Esta função é retornada quando há 2 parâmetros que sejam { includesName: true, sorted: true },
// Traz o mesmo retorno da funcão conditionIncludeName, porém com o array de nomes ordenados.

const conditionsIncludeNamesAndSorted = (objOptions) => {
  const keys = Object.keys(objOptions);
  if (keys.length === 2 && (objOptions.includeNames === true && objOptions.sorted === true)) {
    species.forEach((specie) => {
      const filterAnimalByLoc = species.filter((animal) => animal.location === specie.location)
        .map((obj) => ({ [obj.name]: obj.residents.map((resident) => resident.name).sort() }));
      object[specie.location] = filterAnimalByLoc;
    });
    return object;
  }
  return conditionIncludeNamesAndSex(objOptions);
};

// Já esta função é retornada quando há 1 parâmetro que sejam { includesName: true },
// retorna uma lógica de trazer um objeto cuja as keys são os estados, e os values são objetos com os nomes das espécies
// de cada estado como key. Como value, um array com o nome próprio de cada animal daquela espécie.
// Caso não sejam estes os parâmetro, retorna a função conditionsIncludeNameAndSorted.

const conditionIncludeNames = (objOptions) => {
  const keys = Object.keys(objOptions);
  if (keys.length === 1 && objOptions.includeNames === true) {
    species.forEach((specie) => {
      const filterAnimalByLoc = species.filter((animal) => animal.location === specie.location);
      object[specie.location] = filterAnimalByLoc
        .map((obj) => ({ [obj.name]: obj.residents.map((resident) => resident.name) }));
    });
    return object;
  }
  return conditionsIncludeNamesAndSorted(objOptions);
};

// Esta função por sua vez, é retornada quando há 2 parâmetros que sejam { sex: 'female', sorted: true },
// retorna também a função locationOfAnimals.
// Caso não sejam estes os parâmetro, retorna a função conditionsIncludeName.

const conditionsSexandSorted = (objOptions) => {
  const keys = Object.keys(objOptions);
  if (keys.length === 2 && (objOptions.sex === 'female' && objOptions.sorted === true)) {
    return locationOfAnimals();
  }
  return conditionIncludeNames(objOptions);
};

// Esta função por sua vez, é retornada quando há 1 parâmetro que seja { sex: 'female' }, retorna também a função locationOfAnimals.
// Caso não seja este o parâmetro, retorna a função conditionsSexandSorted.

const conditionBySex = (objOptions) => {
  const keys = Object.keys(objOptions);
  if (keys.length === 1 && objOptions.sex === 'female') return locationOfAnimals();
  return conditionsSexandSorted(objOptions);
};

// Função principal que retorna o objeto com a localização e o array de animais que se encontram na localização (função locationOfAnimals),
// caso não houver parâmetro. Caso houver, retorna a função conditionsNoParamOrSex;

function getAnimalMap(options) {
  if (!options) return locationOfAnimals();
  return conditionBySex(options);
}

module.exports = getAnimalMap;
