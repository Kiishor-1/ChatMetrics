import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
// import { Chart } from 'chart.js';
import { useRef } from 'react';

const TopContributorsChart = ({ topContributors }) => {
  const validTopContributors = Array.isArray(topContributors) ? topContributors : [];
  const chartRef = useRef(null);
  const navigate = useNavigate();

  const data = {
    labels: validTopContributors.map((user) => user.username || 'Unknown'),
    datasets: [
      {
        label: 'Contribution',
        data: validTopContributors.map((user) => user.messageCount || 0),
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#cc65fe',
          '#ffce56',
          '#2ecc71',
        ],
      },
    ],
  };

  const onClickHandler = (event) => {
    if (!chartRef.current) return;

    const chartInstance = chartRef.current;
    const elements = chartInstance.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);

    if (elements.length === 0) return;

    const index = elements[0].index;
    const user = validTopContributors[index];
    console.log(user)

    if (user && user.username) {
      console.log(user);
      navigate(`/profile/${user.userId}`);
    }
  };

  return (
    <div>
      <h3>Top Contributors</h3>
      <Pie style={{"cursor":"pointer"}} ref={chartRef} data={data} onClick={onClickHandler} />
    </div>
  );
};

TopContributorsChart.propTypes = {
  topContributors: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      messageCount: PropTypes.number,
    })
  ),
};

export default TopContributorsChart;
