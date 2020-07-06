import React from 'react';
import { getMonth } from '../utils/moment-utils';
import './month-indicator.scss';

import { monthsFull } from '../constants/dates';

const MonthIndicator = ({ monthSet, setSelectDate }) => {
  const changeMonth = (e) => {
    setSelectDate(e.target.getAttribute('data-date'));
  };

  return (
    <div className="bae-month-indicator">
      <h4 data-date={monthSet.prev} onClick={changeMonth}>
        {monthsFull[getMonth(monthSet.prev)]}
      </h4>
      <h3>{monthsFull[getMonth(monthSet.current)]}</h3>
      <h4 data-date={monthSet.next} onClick={changeMonth}>
        {monthsFull[getMonth(monthSet.next)]}
      </h4>
    </div>
  );
};

export default MonthIndicator;
