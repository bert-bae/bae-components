import React from 'react';
import { getDayOfMonth } from '../utils/moment-utils';

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
    const dayOfMonth = getDayOfMonth(i.date);
    const selected = getDayOfMonth(selectDate) === dayOfMonth ? 'selected' : '';
    const active = activeDates && activeDates[dayOfMonth] ? 'active' : '';

    return (
      <div
        className={`date-icon ${selected} ${active}`}
        data-active-month={i.currentMonth}
        data-date={i.date.toString()}
        key={key}
        onClick={changeDate}
      >
        {dayOfMonth}
      </div>
    );
  });

  return <div className="bae-date-indicator">{monthDates}</div>;
};

export default DateIndicator;
