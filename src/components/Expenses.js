import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Expenses = () => {
  const [filter, setFilter] = useState('All');
  const transactions = useSelector((state) => state.authentication.valuee);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTransactions = filter === 'All' ? transactions : transactions.filter((transaction) => {
    if (filter === 'Debit') {
      return transaction.type === 'expense';
    }
    if (filter === 'Credit') {
      return transaction.type === 'income';
    }
    return false;
  });

  return (
    <div className='container'>
      <h1>Expenses:</h1>
      <div>
        <label className='mx-2'>
          <input type='radio' value='All' checked={filter === 'All'} onChange={handleFilterChange} />
          All
        </label>
        <label className='mx-2'>
          <input type='radio' value='Debit' checked={filter === 'Debit'} onChange={handleFilterChange} />
          Debit
        </label>
        <label className='mx-2'>
          <input type='radio' value='Credit' checked={filter === 'Credit'} onChange={handleFilterChange} />
          Credit
        </label>
      </div>
      {filteredTransactions.map((transaction) => (
        <div
          key={transaction.id}
          style={{
            borderRight: `5px solid ${transaction.type === 'income' ? 'green' : 'red'}`,
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <p>Text: {transaction.text}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Date: {transaction.date}</p>
          {/* <p>Type: {transaction.type}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Expenses;
