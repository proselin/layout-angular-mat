import { MenuItem } from '../models/menu.model';
import { TimeZoneConfig, TimeFormat } from '../models/clock.model';
import { LoadingConfig } from '../models/loading.model';

export interface LayoutConfig {
  appTitle: string;
  appSubtitle: string;

  wording: WordingConfig;
  menu: MenuItem[];
  loading: LoadingConfig;
  clock: ClockConfig;
  transitions: TransitionConfig;
  toast: ToastConfig;
  sidebar: SidebarConfig;
}

export interface WordingConfig {
  loadingText: string;
  noDataText: string;
  errorText: string;
  footerText: string;
  [key: string]: string | undefined;
}

export interface ClockConfig {
  timeZones: TimeZoneConfig[];
  format: TimeFormat;
  updateIntervalMs: number;
}

export interface TransitionConfig {
  sidebarDuration: number;
  loadingFadeIn: number;
  loadingFadeOut: number;
  toastDuration: number;
}

export interface ToastConfig {
  defaultDuration: number;
  maxVisible: number;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

export interface SidebarConfig {
  mode: 'side' | 'over' | 'push';
  opened: boolean;
  mobileBreakpoint: number;
  tabletBreakpoint: number;
}
