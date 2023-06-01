import React from 'react';
import { useSelector } from 'react-redux';

const Expenses = () => {
  const income = useSelector((state) => state.authentication.valuee);


  console.log(income);
  return (
    <div>
      Expenses:
      {income.map((incomeItem) => (
        <div
          key={incomeItem.id}
          style={{
            borderRight: `5px solid ${incomeItem.type === 'income' ? 'green' : 'red'}`,
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <p>Text: {incomeItem.text}</p>
          <p>Amount: {incomeItem.amount}</p>
          <p>Date: {incomeItem.date}</p>
          <p>Type: {incomeItem.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Expenses;
