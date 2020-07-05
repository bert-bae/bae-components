import React from 'react';

const DateIndicator = ({ datesInMonth, selectDate, setSelectDate }) => {
  const onClick = (e) => {
    setSelectDate(Number(e.target.getAttribute('data-date')));
  };

  const monthDates = datesInMonth.map((date, key) => {
    const selected = selectDate === date ? 'selected' : '';
    return (
      <div
        className={`date-icon ${selected}`}
        data-date={date}
        key={key}
        onClick={onClick}
      >
        {date}
      </div>
    );
  });

  return <div className="bae-date-indicator">{monthDates}</div>;
};

export default DateIndicator;
