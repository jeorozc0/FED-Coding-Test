import { useTemperatureData } from '../../hooks/useDataFetch';
import { formatReadableDate } from '../../utils/dateUtils';
import './styles.css';

function TemperatureTable() {
  const { data, loading, error } = useTemperatureData(
    'ND00001095',
    '3/1/2021',
    '4/1/2021'
  );

  if (loading) {
    return <div className="loading">Loading temperature data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!data?.samples || data.samples.length === 0) {
    return <div className="warning">No temperature data available for March 1, 2021 - April 1, 2021</div>;
  }

  return (
    <div className="temperature-table">
      <h2>Temperature Averages</h2>
      <p className="date-range">March 1, 2021 - April 1, 2021</p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature (°C)</th>
            </tr>
          </thead>
          <tbody>
            {data.samples.map((sample, index) => (
              <tr key={index}>
                <td>{formatReadableDate(sample.time)}</td>
                <td className="temperature">{sample.data.toFixed(1)}°C</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TemperatureTable;
