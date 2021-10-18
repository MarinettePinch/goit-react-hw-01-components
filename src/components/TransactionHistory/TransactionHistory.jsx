import PropTypes from 'prop-types';
import TransactionsHistoryTableRow from './TransactionsHistoryTableRow';

function TransactionsHistory({ transactions }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <>
          {transactions.map(transaction => (
            <TransactionsHistoryTableRow
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </>
      </tbody>
    </table>
  );
}

TransactionsHistory.propTypes = {
  transactions: PropTypes.array,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionsHistory;
