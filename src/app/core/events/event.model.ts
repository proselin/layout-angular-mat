import { NotificationConfig } from '../models/notification.model';

export interface AppEventMap {
  'loading:show': { message?: string };
  'loading:hide': void;
  'toast:show': NotificationConfig;
  'toast:dismiss': { id?: string };
  'toast:dismiss-all': void;
  'message:show': NotificationConfig;
  'message:hide': void;
  'sidebar:toggle': void;
  'sidebar:open': void;
  'sidebar:close': void;
  'layout:update': { [key: string]: unknown };
  'config:refresh': void;
}

export type AppEventType = keyof AppEventMap;

export interface AppEvent<T extends AppEventType = AppEventType> {
  type: T;
  payload: AppEventMap[T];
  timestamp: number;
}
