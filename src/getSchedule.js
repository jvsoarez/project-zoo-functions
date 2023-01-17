const { species, hours } = require('../data/zoo_data');

const object = {};

const allDaysOfTheWeek = ['Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday', 'Sunday', 'Monday'];

// Função que retorna um objeto com as keys sendo todos os dias da semana. Cada dia da semana é um objeto com mais duas keys,
// 'officeHour' e 'exhibition', tendo como valores os horários de funcionamento e quais animais estarão em exibição naquele dia,
// respectivamente.

const scheduleOfAllAnimalsAndAllDays = () => {
  species.forEach((specie) => {
    allDaysOfTheWeek.forEach((days) => {
      object[days] = {
        officeHour: `Open from ${hours[days].open}am until ${hours[days].close}pm`,
        exhibition: species.filter((animal) => animal.availability.includes(days))
          .map((obj) => obj.name),
      };
    });
    object.Monday.officeHour = 'CLOSED';
    object.Monday.exhibition = 'The zoo will be closed!';
  });
  return object;
};

// Função que quando recebe um parâmetro que é um dia da semana, retorna um objeto contendo o dia e suas chaves, 'officeHour' e
// 'exhibition'. Quando o parâmetro é o nome de uma espécie, retorna um array com os dias da semana que os animais daquela espécie
// estarão em exibição.

const animalsArr = [];
species.forEach(({ name }) => animalsArr.push(name));

const scheduleByDayOfWeek = (scheduleTarget) => {
  if (allDaysOfTheWeek.includes(scheduleTarget)) {
    const scheduleObject = scheduleOfAllAnimalsAndAllDays();
    return { [scheduleTarget]: scheduleObject[scheduleTarget] };
  }
  if (animalsArr.includes(scheduleTarget)) {
    const scheduleDaysBySpecie = species.find((specie) => specie.name === scheduleTarget);
    return scheduleDaysBySpecie.availability;
  }
};

// Função que quando recebe um parâmetro, mas este não é um dia da semana e nem um animal, também retorna a função
// scheduleOfAllAnimalsAndAllDays. Caso contrário, retorna a função scheduleByDayOfWeek.

const getScheduleWithUnexpectedParam = (scheduleTarget) => {
  if (!allDaysOfTheWeek.includes(scheduleTarget) && !animalsArr.includes(scheduleTarget)) {
    return scheduleOfAllAnimalsAndAllDays();
  }
  return scheduleByDayOfWeek(scheduleTarget);
};

// Função que quando chamada sem parâmetro, retorna a função scheduleOfAllAnimalsAndAllDays. Caso contrário, retorna
// a função getScheduleWithUnexpectedParam.

const getSchedule = (scheduleTarget) => (scheduleTarget === undefined
  ? scheduleOfAllAnimalsAndAllDays() : getScheduleWithUnexpectedParam(scheduleTarget));

module.exports = getSchedule;
