import PropTypes from 'prop-types';

import StatisticItems from './StatisticItems';

const Statistic = ({ statisticalData }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <>
          {statisticalData.map(statistic => (
            <StatisticItems
              key={statistic.id}
              label={statistic.label}
              percentage={statistic.percentage}
            />
          ))}
        </>
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
