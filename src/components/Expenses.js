import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Expenses = () => {
  const Income = useSelector((state) => state.authentication.valuee);

  return (
    <div>
      Expenses:
      {Income.map((incomeItem) => (
        <div key={incomeItem.id}>
          <p>{incomeItem.text}</p>
          <p>Amount: {incomeItem.amount}</p>
          <p>Date: {incomeItem.date}</p>
          <p>Type: {incomeItem.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Expenses;
