import { DeviceDetail, TrendData } from '../types';

export const fetchData = async <T>(endpoint: string, params: Record<string, string> = {}): Promise<T> => {
  try {
    const queryParams = new URLSearchParams({
      key: import.meta.env.VITE_API_KEY,
      ...params
    });

    const url = `${import.meta.env.VITE_API_BASE_URL}${endpoint}?${queryParams}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const getSiteDetails = (deviceId: string): Promise<DeviceDetail> => {
  return fetchData<DeviceDetail>('/device/detail', { id: deviceId });
};

export const getTemperatureData = (
  deviceId: string,
  startDate: string,
  endDate: string
): Promise<TrendData> => {
  return fetchData<TrendData>('/trend', {
    id: deviceId,
    type: 'TAvg',
    start: startDate,
    end: endDate,
    gran: 'Hourly'
  });
};
