import './App.css';
import SiteInfo from './components/site-info/site-info';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Device Monitoring Dashboard</h1>
      </header>
      <main className="app-content">
        <SiteInfo />
      </main>
    </div>
  );
}

export default App;
