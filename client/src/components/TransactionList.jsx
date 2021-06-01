import React, { useContext, useEffect } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length === 0 
        ? <h5>No transaction history...</h5>
        : transactions.map(transaction => (
            <Transaction key={transaction._id} data={transaction} />
          ))
        }
      </ul>
    </>
  );
}

export default TransactionList;
