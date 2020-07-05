import React from 'react';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeekdayIndicator = () => {
  const weekdayIcons = weekdays.map((day, key) => {
    return (
      <div className="weekday-indicator-icon" key={key}>
        {day}
      </div>
    );
  });
  return <div className="bae-weekday-indicators">{weekdayIcons}</div>;
};

export default WeekdayIndicator;
