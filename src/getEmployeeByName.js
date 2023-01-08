const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => (!employeeName ? {} : employees
  .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName));

module.exports = getEmployeeByName;
