import PropTypes from 'prop-types';

import StatisticItems from './StatisticItems';

const Statistic = ({ statisticalData }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {statisticalData.map(statistic => (
          <li key={statistic.id} className="item">
            <StatisticItems
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
  statisticalData: PropTypes.array,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistic;
