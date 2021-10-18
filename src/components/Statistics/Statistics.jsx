import PropTypes from 'prop-types';

import StatisticItem from './StatisticItem';

const Statistic = ({ statisticalData }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {statisticalData.map(statistic => (
          <li key={statistic.id} className="item">
            <StatisticItem
              label={statistic.label}
              percentage={statistic.percentage}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  statisticalData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })),
};

export default Statistic;
