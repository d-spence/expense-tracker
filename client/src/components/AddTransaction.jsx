import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('+');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: (Math.abs(+amount) * (type === '+' ? 1 : -1))
    }

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <div className="transaction-type">
        <button
          className={`btn ${type === '+' ? 'trans-income-btn' : 'trans-default-btn'}`}
          onClick={() => setType('+')}
        >Income</button>
        <button
          className={`btn ${type === '-' ? 'trans-expense-btn' : 'trans-default-btn'}`}
          onClick={() => setType('-')}
        >Expense</button>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
