import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './bae-calendar.scss';

import CalendarHeader from './components/calendar-header';
import WeekdayIndicator from './components/weekday-indicator';
import DateIndicator from './components/date-indicator';
// https://uicookies.com/html-calendar/

import { getMonthDates } from './utils/date-utils';

const themes = {
  salmon: 'salmon-theme',
};

const BaeCalendar = ({ theme, callback }) => {
  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment().month());
  const [selectDate, setSelectDate] = useState(moment().date());
  const [datesInMonth, setDatesInMonth] = useState([]);

  useEffect(() => {
    setDatesInMonth(getMonthDates(month));
  }, [month]);

  useEffect(() => {
    const fullDate = moment(`${month}-${selectDate}-${year}`, 'MM-DD-YYYY')
      .utc()
      .toDate();
    if (callback) {
      callback(fullDate);
    }
  }, [selectDate]);

  return (
    <div className={`bae-calendar-container ${themes[theme]}`}>
      <CalendarHeader theme="salmon" />
      <WeekdayIndicator />
      <DateIndicator
        datesInMonth={datesInMonth}
        selectDate={selectDate}
        setSelectDate={setSelectDate}
      />
    </div>
  );
};

export default BaeCalendar;
