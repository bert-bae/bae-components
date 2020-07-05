import React from 'react';

const DateIndicator = ({ datesInMonth, selectDate }) => {
  const monthDates = datesInMonth.map((date, key) => {
    const selected = selectDate === date ? 'selected' : '';
    return (
      <div className={`date-icon ${selected}`} key={key}>
        {date}
      </div>
    );
  });

  return <div className="bae-date-indicator">{monthDates}</div>;
};

export default DateIndicator;
