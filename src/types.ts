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
  deviceid: string;
  status: string;
  grade: string;
  lastdatareceived: string;
  friendlyname: string;
  statuslastupdated: string;
  latestfirmwareversion: string;
}

export interface DeviceDetail {
  device: Device;
  site: Site;
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