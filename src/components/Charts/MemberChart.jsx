import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const MemberChart = ({ totalMembers }) => {
  const data = {
    labels: ['Total Members'],
    datasets: [
      {
        label: 'Total Members',
        data: [totalMembers],
        backgroundColor: ['#ff6384'],
      },
    ],
  };

  return (
    <div>
      <h3>Total Members</h3>
      <Doughnut data={data} />
    </div>
  );
};

MemberChart.propTypes = {
  totalMembers: PropTypes.number.isRequired,
};

export default MemberChart;
