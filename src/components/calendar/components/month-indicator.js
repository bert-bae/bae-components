import React from 'react';
import './month-indicator.scss';

import { monthsFull } from '../constants/dates';

const MonthIndicator = ({ monthSet, setMonth, setYear }) => {
  const changeMonth = (e) => {
    const month = Number(e.target.getAttribute('data-month'));

    if (month === 0 && monthSet.current === 11) {
      setYear((y) => y + 1);
    }

    if (month === 11 && monthSet.current === 0) {
      setYear((y) => y - 1);
    }

    setMonth(month);
  };

  return (
    <div className="bae-month-indicator">
      <h4 data-month={monthSet.prev} onClick={changeMonth}>
        {monthsFull[monthSet.prev]}
      </h4>
      <h3>{monthsFull[monthSet.current]}</h3>
      <h4 data-month={monthSet.next} onClick={changeMonth}>
        {monthsFull[monthSet.next]}
      </h4>
    </div>
  );
};

export default MonthIndicator;
