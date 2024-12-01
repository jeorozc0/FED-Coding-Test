import './App.css';
import SiteInfo from './components/device-info/device-info';
import TemperatureTable from './components/temp-table/temp-table';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Device Monitoring Dashboard</h1>
      </header>
      <main className="app-content">
        <SiteInfo />
        <TemperatureTable />
      </main>
    </div>
  );
}

export default App;
