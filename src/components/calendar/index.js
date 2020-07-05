import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './bae-calendar.scss';

import CalendarHeader from './components/calendar-header';
import WeekdayIndicator from './components/weekday-indicator';
import DateIndicator from './components/date-indicator';
import MonthIndicator from './components/month-indicator';
// https://uicookies.com/html-calendar/

import { getMonthDates, getMonthSet } from './utils/date-utils';

const themes = {
  salmon: 'salmon-theme',
};

const BaeCalendar = ({ theme, callback }) => {
  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment().month());
  const [selectDate, setSelectDate] = useState(moment().date());
  const [datesInMonth, setDatesInMonth] = useState([]);

  useEffect(() => {
    setDatesInMonth(getMonthDates(month, year));
  }, [month, year]);

  useEffect(() => {
    const fullDate = moment(`${month}-${selectDate}-${year}`, 'MM-DD-YYYY')
      .utc()
      .toDate();
    if (callback) {
      callback(fullDate);
    }
  }, [selectDate, month, year]);

  return (
    <div className={`bae-calendar-container ${themes[theme]}`}>
      <CalendarHeader
        theme="salmon"
        selectDate={selectDate}
        month={month}
        year={year}
      />
      <WeekdayIndicator />
      <DateIndicator
        datesInMonth={datesInMonth}
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      />
      <MonthIndicator
        monthSet={getMonthSet(month)}
        setMonth={setMonth}
        setYear={setYear}
      />
    </div>
  );
};

export default BaeCalendar;
