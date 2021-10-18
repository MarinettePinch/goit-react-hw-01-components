import PropTypes from 'prop-types';

const TransactionsHistoryTableRow = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

TransactionsHistoryTableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};

export default TransactionsHistoryTableRow;
