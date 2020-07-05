const moment = require('moment');
const { deepCopy } = require('./object-utils');

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

const presetDateTracker = (dates) => {
  const result = {};
  const dateTracker = {
    '0': {},
    '1': {},
    '2': {},
    '3': {},
    '4': {},
    '5': {},
    '6': {},
    '7': {},
    '8': {},
    '9': {},
    '10': {},
    '11': {},
  };

  if (dates && Array.isArray(dates)) {
    dates.forEach((date) => {
      const year = moment(date).year();
      const month = moment(date).month();
      const dateOfMonth = moment(date).date();
      if (!result[year]) {
        result[year] = deepCopy(dateTracker);
      }

      if (!result[year][month][dateOfMonth]) {
        result[year][month][dateOfMonth] = 1;
      } else {
        result[year][month][dateOfMonth] += 1;
      }
    });
  }

  return result;
};

export { getMonthDates, getMonthSet, presetDateTracker };
