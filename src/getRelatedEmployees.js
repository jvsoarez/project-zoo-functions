const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    return employees.filter((employee) => employee.managers.includes(managerId))
      .map((ObjEmployee) => `${ObjEmployee.firstName} ${ObjEmployee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
