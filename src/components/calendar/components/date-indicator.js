import React from 'react';
import {
  getDayOfMonth,
  getMonthDayYear,
  getMonth,
} from '../utils/moment-utils';

const DateIndicator = ({
  datesInMonth,
  activeDates,
  selectDate,
  setSelectDate,
}) => {
  const changeDate = (e) => {
    setSelectDate(e.target.getAttribute('data-date'));
  };

  const monthDates = datesInMonth.map((i, key) => {
    const selected =
      getMonthDayYear(selectDate) === getMonthDayYear(i.date) ? 'selected' : '';
    const active =
      activeDates && activeDates[getMonthDayYear(i.date)] ? 'active' : '';

    return (
      <div
        className={`date-icon ${selected} ${active}`}
        data-active-month={i.currentMonth}
        data-date={i.date.toString()}
        key={key}
        onClick={changeDate}
      >
        {getDayOfMonth(i.date)}
      </div>
    );
  });

  return (
    <div className="bae-date-indicator">
      {datesInMonth.length > 0 && monthDates}
    </div>
  );
};

export default DateIndicator;
