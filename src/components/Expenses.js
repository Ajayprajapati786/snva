import React from 'react';
import { useSelector } from 'react-redux';

const Expenses = () => {
  const authenticationValue = useSelector((state) => state.authentication.valuee);

  // Assuming authenticationValue is an array of objects, each object having a property called 'value'
  const values = authenticationValue.map((item) => item.value);

  return (
    <div>
      Expenses:
      {values.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

export default Expenses;
