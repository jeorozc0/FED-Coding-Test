import { useState, useEffect } from 'react';
import { DeviceDetail, TrendData } from '../types';
import { getSiteDetails, getTemperatureData } from '../services/api';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useSiteDetails = (deviceId: string) => {
  const [state, setState] = useState<ApiState<DeviceDetail>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true }));
        const result = await getSiteDetails(deviceId);
        setState({ data: result, loading: false, error: null });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : 'An error occurred'
        });
      }
    };

    fetchData();
  }, [deviceId]);

  return state;
};

export const useTemperatureData = (deviceId: string, startDate: string, endDate: string) => {
  const [state, setState] = useState<ApiState<TrendData>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true }));
        const result = await getTemperatureData(deviceId, startDate, endDate);
        setState({ data: result, loading: false, error: null });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : 'An error occurred'
        });
      }
    };

    fetchData();
  }, [deviceId, startDate, endDate]);

  return state;
};
