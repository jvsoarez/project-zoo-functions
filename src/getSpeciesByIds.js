const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => (!ids ? [] : species.filter(({ id }) => ids.includes(id)));

module.exports = getSpeciesByIds;
