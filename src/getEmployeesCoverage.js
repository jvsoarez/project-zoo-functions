const { species, employees } = require('../data/zoo_data');

const getSpecieAndLocation = (employee) => {
  const nameAnimalByIdArray = [];
  species.forEach((specie) => {
    employee.responsibleFor.forEach((idAnimal) => {
      if (idAnimal === specie.id) nameAnimalByIdArray.push(specie);
    });
  });
  return nameAnimalByIdArray;
};

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

const getAEmployeeCoverageById = (objectEmployee) => {
  verifyIdParam(objectEmployee);
  if (Object.keys(objectEmployee).length === 1 && Object.keys(objectEmployee).includes('id')) {
    const findForDesiredEmployee = coverageOfAllEmployees()
      .find((object) => object.id === objectEmployee.id);
    return findForDesiredEmployee;
  }
};

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

const getAEmployeeCoverageByName = (objectEmployee) => {
  verifyNameParam(objectEmployee);
  if (Object.keys(objectEmployee).length === 1 && Object.keys(objectEmployee).includes('name')) {
    const findForDesiredEmployee = coverageOfAllEmployees().find((object) => object.fullName
      .split(' ').includes(objectEmployee.name));
    return findForDesiredEmployee;
  }
  return getAEmployeeCoverageById(objectEmployee);
};

function getEmployeesCoverage(objectEmployee) {
  if (objectEmployee === undefined) return coverageOfAllEmployees();
  return getAEmployeeCoverageByName(objectEmployee);
}

module.exports = getEmployeesCoverage;
