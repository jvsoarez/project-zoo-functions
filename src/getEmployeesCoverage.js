const { species, employees } = require('../data/zoo_data');

// Esta é uma função auxiliar para a chave species e locations do objeto com as informações (coverage) dos funcionários.
// Ela retorna um array com o objeto inteiro da espécie que cada funcionário gerencia, podendo posteriormente
// ser filtrada para retornar um array com apenas os nomes das espécies ou apenas a localização dos animais que cada funcionário gerencia.

const getSpecieAndLocation = (employee) => {
  const nameAnimalByIdArray = [];
  species.forEach((specie) => {
    employee.responsibleFor.forEach((idAnimal) => {
      if (idAnimal === specie.id) nameAnimalByIdArray.push(specie);
    });
  });
  return nameAnimalByIdArray;
};

// Esta função retorna um array de objetos com as informações (coverage) de todos os funcionários do Zoo. À partir dela
// Faremos os filtros necessários. Ela é retornada também quando a função getEmployeesCoverage é chamada sem parâmetro.

const coverageOfAllEmployees = () => {
  const arrayOfCoverageEmployees = employees.map((employee) => {
    const object = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getSpecieAndLocation(employee).map((specie) => specie.name),
      locations: getSpecieAndLocation(employee).map((specie) => specie.location),
    };
    return object;
  });
  return arrayOfCoverageEmployees;
};

// Função auxiliar da getAEmployeeCoverageById, para reduzir a complexidade reclamada pelo lint. Esta também faz verificação e
// Caso o parâmetro { id: '' } exista mas seja um id inválido, um erro é lançado.

const idsArr = [];

employees.forEach((employee) => {
  idsArr.push(employee.id);
});

const verifyIdParam = (objectEmployee) => {
  if ((Object.keys(objectEmployee).length === 1
  && Object.keys(objectEmployee).includes('id')) && !idsArr.includes(objectEmployee.id)) {
    throw new Error('Informações inválidas');
  }
};

// Esta função faz a verificação do parâmetro, se estiver de acordo com o requisito, ela retorna apenas o coverage do funcionário
// com o id passado no parâmetro objectEmployee da função getEmployeesCoverage, que também é recebido por esta.
// Também chama a função verifyIdParam para ajudar na verificação de validade do parâmetro, caso n esteja de acordo, lança um erro.

const getAEmployeeCoverageById = (objectEmployee) => {
  verifyIdParam(objectEmployee);
  if (Object.keys(objectEmployee).length === 1 && Object.keys(objectEmployee).includes('id')) {
    const findForDesiredEmployee = coverageOfAllEmployees()
      .find((object) => object.id === objectEmployee.id);
    return findForDesiredEmployee;
  }
};

// Função auxiliar da getAEmployeeCoverageByName, para reduzir a complexidade reclamada pelo lint. Esta também faz verificação e
// Caso o parâmetro { name: '' } exista mas seja um nome inválido, um erro é lançado.

const firstNamesArr = [];
const lastNamesArr = [];

employees.forEach((employee) => {
  firstNamesArr.push(employee.firstName);
  lastNamesArr.push(employee.lastName);
});

const allNames = [...firstNamesArr, ...lastNamesArr];

const verifyNameParam = (objectEmployee) => {
  if ((Object.keys(objectEmployee).length === 1
  && Object.keys(objectEmployee).includes('name')) && !allNames.includes(objectEmployee.name)) {
    throw new Error('Informações inválidas');
  }
};

// Esta função faz a verificação do parâmetro, se estiver de acordo com o requisito, ela retorna apenas o coverage do funcionário
// com o nome passado no parâmetro objectEmployee da função getEmployeesCoverage, que também é recebido por esta.
// Caso não atenda os requisitos da condição, retorna a função getAEmployeeCoverageById.

const getAEmployeeCoverageByName = (objectEmployee) => {
  verifyNameParam(objectEmployee);
  if (Object.keys(objectEmployee).length === 1 && Object.keys(objectEmployee).includes('name')) {
    const findForDesiredEmployee = coverageOfAllEmployees().find((object) => object.fullName
      .split(' ').includes(objectEmployee.name));
    return findForDesiredEmployee;
  }
  return getAEmployeeCoverageById(objectEmployee);
};

// Esta função verifica se há parâmetros, se não, retorna a função coverageOfAllEmployees.
// Caso tenha algum parâmetro, retorna a função getAEmployeeCoverageByName.

const getEmployeesCoverage = (objectEmployee) => (objectEmployee === undefined
  ? coverageOfAllEmployees() : getAEmployeeCoverageByName(objectEmployee));

module.exports = getEmployeesCoverage;
