import React from 'react';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeekdayIndicator = () => {
  const weekdayIcons = weekdays.map((day) => {
    return <div className="weekday-indicator-icon">{day}</div>;
  });
  return <div className="bae-weekday-indicators">{weekdayIcons}</div>;
};

export default WeekdayIndicator;
