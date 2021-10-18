import PropTypes from 'prop-types';

const StatisticItems = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticItems.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticItems;
