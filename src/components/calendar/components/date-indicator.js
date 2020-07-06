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

  const monthDates = datesInMonth.map((date, key) => {
    const dayOfMonth = getDayOfMonth(date);
    const selected = selectDate === dayOfMonth ? 'selected' : '';
    const active = activeDates && activeDates[dayOfMonth] ? 'active' : '';

    return (
      <div
        className={`date-icon ${selected} ${active}`}
        data-date={date.toString()}
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
