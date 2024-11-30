export interface Site {
  name: string;
  storenumber: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

export interface Device {
  deviceId: string;
  status: string;
  grade: string;
  lastDataReceived: string;
  friendlyName: string;
  statusLastUpdated: string;
  latestFirmwareVersion: string;
}

export interface DeviceDetail {
  device: Device;
  group: {
    site: Site;
  }
}

export interface Sample {
  time: string;
  data: number;
}

export interface TrendMetadata {
  granularity: string;
  start: string;
  end: string;
  timezone: string;
}

export interface TrendData {
  metadata: TrendMetadata;
  samples: Sample[];
  sampleCount: number;
  type: string;
}
