export interface TimeZoneConfig {
  id: string;
  label: string;
  timezone: string;
  showDate?: boolean;
  showOffset?: boolean;
}

export type TimeFormat = '12h' | '24h';
