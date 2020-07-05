const moment = require('moment');

const getMonthDates = (month, year) => {
  const daysInMonth = moment().daysInMonth(month);
  const firstWeekday = moment([year, month]).startOf('month').weekday();
  const result = [];

  for (let i = 0; i < firstWeekday; i++) {
    result.push(null);
  }

  for (let j = 1; j <= daysInMonth; j++) {
    result.push(j);
  }

  return result;
};

const getMonthSet = (month) => {
  const result = {
    current: month,
    prev: month - 1,
    next: month + 1,
  };

  if (month === 0) {
    result.prev = 11;
  }

  if (month === 11) {
    result.next = 0;
  }

  return result;
};

export { getMonthDates, getMonthSet };
