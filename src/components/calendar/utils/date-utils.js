const moment = require('moment');

const getMonthDates = (month) => {
  const year = moment().year();
  const daysInMonth = moment().daysInMonth(month);
  const firstWeekday = moment().startOf('month').weekday();
  const result = [];

  for (let i = 0; i < firstWeekday; i++) {
    result.push(null);
  }

  for (let j = firstWeekday; j <= daysInMonth; j++) {
    result.push(j);
  }

  return result;
};

export { getMonthDates };
