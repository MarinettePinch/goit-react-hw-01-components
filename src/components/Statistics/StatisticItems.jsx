import PropTypes from 'prop-types';

const StatisticItems = ({label, percentage }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
};

StatisticItems.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticItems;
