import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

const EngagementChart = ({ engagementRate }) => {
  const validEngagementRate = Array.isArray(engagementRate) ? engagementRate : [];
  const data = {
    labels: validEngagementRate.map((dataPoint) => dataPoint.period || 'Unknown'),
    datasets: [
      {
        label: 'Messages per Period',
        data: validEngagementRate.map((dataPoint) => dataPoint.messages || 0),
        backgroundColor: '#4bc0c0',
      },
    ],
  };

  return (
    <div>
      <h3>Engagement Rate</h3>
      <Bar data={data} />
    </div>
  );
};

EngagementChart.propTypes = {
  engagementRate: PropTypes.arrayOf(
    PropTypes.shape({
      period: PropTypes.string.isRequired,
      messages: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default EngagementChart;
