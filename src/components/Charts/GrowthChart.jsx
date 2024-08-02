import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const GrowthChart = ({ growthRate }) => {
  const validGrowthRate = Array.isArray(growthRate) ? growthRate : [];
  const data = {
    labels: validGrowthRate.map((dataPoint) => dataPoint.period || 'Unknown'),
    datasets: [
      {
        label: 'Growth Rate',
        data: validGrowthRate.map((dataPoint) => dataPoint.rate || 0),
        backgroundColor: '#36a2eb',
      },
    ],
  };

  return (
    <div>
      <h3>Growth Rate</h3>
      <Line data={data} />
    </div>
  );
};

GrowthChart.propTypes = {
  growthRate: PropTypes.arrayOf(
    PropTypes.shape({
      period: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GrowthChart;
