import React, { useEffect, useState } from 'react';
import './bae-calendar.scss';

import CalendarHeader from './components/calendar-header';
import WeekdayIndicator from './components/weekday-indicator';
// https://uicookies.com/html-calendar/

const themes = {
  salmon: 'salmon-theme',
};

const BaeCalendar = ({ theme }) => {
  return (
    <div className={`bae-calendar-container ${themes[theme]}`}>
      <CalendarHeader theme="salmon" />
      <WeekdayIndicator />
    </div>
  );
};

export default BaeCalendar;
