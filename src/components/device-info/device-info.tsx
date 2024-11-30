// src/components/SiteInfo/SiteInfo.tsx
import { useSiteDetails } from '../../hooks/useDataFetch';
import { formatDate } from '../../utils/dateUtils';
import './styles.css';

function SiteInfo() {
  const { data, loading, error } = useSiteDetails('ND00001095');

  if (loading) {
    return <div className="loading">Loading site information...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!data?.device || !data?.group?.site) {
    return <div className="warning">No site information available</div>;
  }

  const { device, group: { site } } = data;

  return (
    <div className="site-info">
      <div className="site-info-section">
        <h2>Device Information</h2>

        <div className="info-group">
          <div className="info-item">
            <span className="info-label">Site Name: </span>
            <span className="info-value">{site.name}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Address:</span>
            <div className="info-value">
              {site.street}<br />
              {site.city}, {site.state} {site.zipcode}<br />
              {site.country}
            </div>
          </div>
        </div>

        <div className="info-group">
          <div className="info-item">
            <span className="info-label">Firmware Version: </span>
            <span className="info-value">{device.latestFirmwareVersion}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Last Updated: </span>
            <span className="info-value">
              {formatDate(device.statusLastUpdated)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteInfo;
