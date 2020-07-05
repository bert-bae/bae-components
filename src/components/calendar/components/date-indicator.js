import React from 'react';

const DateIndicator = ({
  datesInMonth,
  activeDates,
  selectDate,
  setSelectDate,
}) => {
  const changeDate = (e) => {
    setSelectDate(Number(e.target.getAttribute('data-date')));
  };

  const monthDates = datesInMonth.map((date, key) => {
    const selected = selectDate === date ? 'selected' : '';
    const active = activeDates && activeDates[date] ? 'active' : '';

    return (
      <div
        className={`date-icon ${selected} ${active}`}
        data-date={date}
        key={key}
        onClick={changeDate}
      >
        {date}
      </div>
    );
  });

  return <div className="bae-date-indicator">{monthDates}</div>;
};

export default DateIndicator;
