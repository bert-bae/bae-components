import React from 'react';
import moment from 'moment';
import { weekdays } from '../constants/dates';

const CalendarHeader = ({ selectDate, month, year }) => {
  const date = moment(`${month + 1}/${selectDate}/${year}`)
    .utc()
    .toDate();

  return (
    <div className="bae-calendar-header">
      <div className="left-container">
        <h1>{moment(date).format('dddd')}</h1>
        <h1>{moment(date).format('MMMM Do')}</h1>
      </div>
      <div className="right-container">
        <h3>{moment(date).year()}</h3>
      </div>
    </div>
  );
};

export default CalendarHeader;
