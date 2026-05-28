export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface NotificationConfig {
  type: NotificationType;
  message: string;
  title?: string;
  duration?: number;
  dismissible?: boolean;
  action?: string;
}
