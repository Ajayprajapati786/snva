import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/storee";


const Addexpenses = () => {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();
  const addTransaction = () => {
    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
      date: new Date().toISOString().split('T')[0],
      type: amount < 0 ? 'expense' : 'income',
    };
  
    setTransactions([...transactions, newTransaction]);
    dispatch(authActions.addTransaction([transactions]));

    setText("");
    setAmount(0);
  };
  
  const calculateBalance = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  const calculateIncome = () => {
    return transactions.reduce((total, transaction) => {
      if (transaction.amount > 0) {
        return total + transaction.amount;
      }
      return total;
    }, 0);
  };

  const calculateExpense = () => {
    return transactions.reduce((total, transaction) => {
      if (transaction.amount < 0) {
        return total + transaction.amount;
      }
      return total;
    }, 0);
  };

  return (
    <div className="container">
      <h1>Wallet</h1>
      <h4 className="text-center">YOUR BALANCE</h4>
      <h3 className="text-center">{calculateBalance()}</h3>

      <div className="incomParent">
        <div className="INCOME">
          <h3>INCOME</h3>
          <p>{calculateIncome()}</p>
        </div>
      </div>

      <div className="expenseParent my-3">
        <div className="EXPENSES">
          <h3>EXPENSE</h3>
          <p>{calculateExpense()}</p>
        </div>
      </div>

      <div>

        <input
          type="text"
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-control my-2"
        />
        <button onClick={addTransaction} className="btn btn-primary mt-3">Add Transaction</button>
      </div>

    </div>
  );
};

export default Addexpenses;
