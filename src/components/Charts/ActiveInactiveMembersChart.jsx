import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import './ActiveInactiveChart.css'

const ActiveInactiveMembersChart = ({ activeMembers, inactiveMembers }) => {
  const data = {
    labels: [' Active Members ', ' Inactive Members '],
    datasets: [
      {
        data: [activeMembers, inactiveMembers],
        backgroundColor: ['rgba(75, 192, 192, 0.6) ', 'rgba(255, 99, 132, 0.6) '],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Members Status</h3>
      <Pie data={data} />
    </div>
  );
};

ActiveInactiveMembersChart.propTypes = {
  activeMembers: PropTypes.number.isRequired,
  inactiveMembers: PropTypes.number.isRequired,
};

export default ActiveInactiveMembersChart;
