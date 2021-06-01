import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { formatCurrency } from '../utils/format';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = Math.abs(amounts.reduce((acc, item) => (acc += item), 0));
  const sign = total < 0 ? '-' : '';

  return (
    <>
      <h4>Your Balance</h4>
      <h1 style={total < 0 ? {color: '#c0392b'} : {}}>
        {sign}{formatCurrency(total)}
      </h1>
    </>
  );
}

export default Balance;
