import React, { useContext } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);



  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length === 0 
        ? <h5>No transaction history...</h5>
        : transactions.map(transaction => (
            <Transaction key={transaction.id} data={transaction} />
          ))
        }
      </ul>
    </>
  );
}

export default TransactionList;