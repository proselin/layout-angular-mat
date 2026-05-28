import { Injectable, signal, computed } from '@angular/core';
import { LayoutConfig, SidebarConfig, ClockConfig, ToastConfig, TransitionConfig, WordingConfig } from './layout-config.model';
import { DEFAULT_LAYOUT_CONFIG } from './default-config';
import { MenuItem } from '../models/menu.model';
import { LoadingConfig } from '../models/loading.model';

@Injectable({ providedIn: 'root' })
export class LayoutConfigService {
  private readonly config = signal<LayoutConfig>(structuredClone(DEFAULT_LAYOUT_CONFIG));

  readonly appTitle = computed(() => this.config().appTitle);
  readonly appSubtitle = computed(() => this.config().appSubtitle);
  readonly wording = computed(() => this.config().wording);
  readonly menu = computed(() => this.config().menu);
  readonly loading = computed(() => this.config().loading);
  readonly clock = computed(() => this.config().clock);
  readonly transitions = computed(() => this.config().transitions);
  readonly toast = computed(() => this.config().toast);
  readonly sidebar = computed(() => this.config().sidebar);

  getConfig(): LayoutConfig {
    return this.config();
  }

  updateConfig(partial: Partial<LayoutConfig>): void {
    this.config.update(current => ({ ...current, ...partial }));
  }

  updateWording(partial: Partial<WordingConfig>): void {
    this.config.update(current => ({
      ...current,
      wording: { ...current.wording, ...partial },
    }));
  }

  updateMenu(menu: MenuItem[]): void {
    this.config.update(current => ({ ...current, menu }));
  }

  updateLoading(partial: Partial<LoadingConfig>): void {
    this.config.update(current => ({
      ...current,
      loading: { ...current.loading, ...partial },
    }));
  }

  updateClock(partial: Partial<ClockConfig>): void {
    this.config.update(current => ({
      ...current,
      clock: { ...current.clock, ...partial },
    }));
  }

  updateToast(partial: Partial<ToastConfig>): void {
    this.config.update(current => ({
      ...current,
      toast: { ...current.toast, ...partial },
    }));
  }

  updateSidebar(partial: Partial<SidebarConfig>): void {
    this.config.update(current => ({
      ...current,
      sidebar: { ...current.sidebar, ...partial },
    }));
  }

  updateTransitions(partial: Partial<TransitionConfig>): void {
    this.config.update(current => ({
      ...current,
      transitions: { ...current.transitions, ...partial },
    }));
  }
}
