import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ data }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = data.amount < 0 ? '-' : '+';

  return (
    <li className={data.amount < 0 ? 'minus' : 'plus'}>
      {data.text}
      <span>{sign}${Math.abs(data.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(data.id)}>x</button>
    </li>
  );
}

export default Transaction;
