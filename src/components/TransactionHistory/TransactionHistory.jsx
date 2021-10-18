import PropTypes from 'prop-types';
import TransactionsHistoryTableRow from './TransactionsHistoryTableRow';

function TransactionsHistory({ transactions }) {
  return (
    <table className="transaction-history">
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
            <tr key={transaction.id}>
              <TransactionsHistoryTableRow
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            </tr>
          ))}
        </>
      </tbody>
    </table>
  );
}

TransactionsHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })),
};

export default TransactionsHistory;
