import React, { useEffect, useState, useRef } from 'react';
import { getMonth, getYear, getToday } from './utils/moment-utils';
import './bae-calendar.scss';

import CalendarHeader from './components/calendar-header';
import WeekdayIndicator from './components/weekday-indicator';
import DateIndicator from './components/date-indicator';
import MonthIndicator from './components/month-indicator';
// https://uicookies.com/html-calendar/

import {
  getMonthDates,
  getMonthSet,
  presetDateTracker,
} from './utils/date-utils';

const themes = {
  salmon: 'salmon-theme',
  monochrome: 'monochrome-theme',
  rouge: 'rouge-theme',
};

const BaeCalendar = ({ theme, activeDates, onDateSelect }) => {
  const presetActiveDates = useRef(presetDateTracker(activeDates || []));
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [selectDate, setSelectDate] = useState(getToday());
  const [datesInMonth, setDatesInMonth] = useState([]);

  useEffect(() => {
    setDatesInMonth(getMonthDates(month, year));
  }, [month, year]);

  useEffect(() => {
    setMonth(getMonth(selectDate) + 1);
    setYear(getYear(selectDate));
    if (onDateSelect) {
      onDateSelect(selectDate);
    }
  }, [selectDate]);

  return (
    <div className={`bae-calendar-container ${themes[theme]}`}>
      <CalendarHeader theme="salmon" selectDate={selectDate} />
      <WeekdayIndicator />
      <DateIndicator
        datesInMonth={datesInMonth}
        activeDates={
          presetActiveDates.current[year] &&
          presetActiveDates.current[year][month]
        }
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      />
      <MonthIndicator
        monthSet={getMonthSet(selectDate)}
        setSelectDate={setSelectDate}
      />
    </div>
  );
};

export default BaeCalendar;
