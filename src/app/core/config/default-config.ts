import { LayoutConfig } from './layout-config.model';

export const DEFAULT_LAYOUT_CONFIG: LayoutConfig = {
  appTitle: 'Layout App',
  appSubtitle: 'Angular Material Layout',

  wording: {
    loadingText: 'Loading...',
    noDataText: 'No data available',
    errorText: 'An error occurred',
    footerText: '© 2026 Layout App. All rights reserved.',
  },

  menu: [
    { id: 'home', label: 'Home', icon: 'home', route: '/home' },
    { id: 'about', label: 'About', icon: 'info', route: '/about' },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
      dividerAfter: true,
      children: [
        { id: 'profile', label: 'Profile', icon: 'person', route: '/settings/profile' },
        { id: 'preferences', label: 'Preferences', icon: 'tune', route: '/settings/preferences' },
      ],
    },
  ],

  loading: {
    enabled: true,
    message: 'Loading...',
    delay: 300,
    minDuration: 500,
    showSpinner: true,
  },

  clock: {
    timeZones: [
      { id: 'utc', label: 'UTC', timezone: 'UTC', showDate: true, showOffset: true },
      { id: 'nyc', label: 'New York', timezone: 'America/New_York', showDate: false, showOffset: true },
      { id: 'london', label: 'London', timezone: 'Europe/London', showDate: false, showOffset: true },
      { id: 'tokyo', label: 'Tokyo', timezone: 'Asia/Tokyo', showDate: false, showOffset: true },
    ],
    format: '24h',
    updateIntervalMs: 1000,
  },

  transitions: {
    sidebarDuration: 300,
    loadingFadeIn: 200,
    loadingFadeOut: 200,
    toastDuration: 4000,
  },

  toast: {
    defaultDuration: 4000,
    maxVisible: 5,
    position: 'bottom-right',
  },

  sidebar: {
    mode: 'side',
    opened: true,
    mobileBreakpoint: 768,
    tabletBreakpoint: 1024,
  },
};
