const moment = require('moment');
const { deepCopy } = require('./object-utils');
const { getSpecificDate, getMonth, getYear } = require('./moment-utils');

const getPrevMonthYear = (month, year) => {
  if (month === 0) {
    return {
      month: 11,
      year: year - 1,
    };
  } else {
    return {
      month: month - 1,
      year,
    };
  }
};

const getMonthDates = (month, year) => {
  const daysInMonth = moment([year, month]).daysInMonth();
  const firstWeekday = moment([year, month]).startOf('month').weekday();
  const result = [];

  const prevMonthYear = getPrevMonthYear(month, year);
  const prevDaysInMonth = moment([
    prevMonthYear.year,
    prevMonthYear.month,
  ]).daysInMonth();
  for (let i = firstWeekday - 1; i >= 0; i--) {
    result.push(
      getSpecificDate(
        prevMonthYear.month,
        prevDaysInMonth - i,
        prevMonthYear.year
      )
    );
  }

  for (let j = 1; j <= daysInMonth; j++) {
    result.push(getSpecificDate(month + 1, j, year));
  }

  return result;
};

const getMonthSet = (selectDate) => {
  const month = getMonth(selectDate) + 1;
  const result = {
    current: selectDate,
    prev: getSpecificDate(month - 1, 1, getYear(selectDate)),
    next: getSpecificDate(month + 1, 1, getYear(selectDate)),
  };

  if (month === 1) {
    result.prev = getSpecificDate(12, 1, getYear(selectDate) - 1);
  }

  if (month === 12) {
    result.next = getSpecificDate(1, 1, getYear(selectDate) + 1);
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
