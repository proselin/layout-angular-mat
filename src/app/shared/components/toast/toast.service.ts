import { Injectable, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventBusService } from '../../../core/events/event-bus.service';
import { LayoutConfigService } from '../../../core/config/layout-config.service';
import { NotificationConfig } from '../../../core/models/notification.model';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly snackBar = inject(MatSnackBar);
  private readonly eventBus = inject(EventBusService);
  private readonly configService = inject(LayoutConfigService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.eventBus.on('toast:show').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(config => this.show(config));

    this.eventBus.on('toast:dismiss-all').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => this.snackBar.dismiss());
  }

  show(config: NotificationConfig): void {
    const toastConfig = this.configService.toast();
    const duration = config.duration ?? toastConfig.defaultDuration;

    this.snackBar.open(config.message, config.action ?? (config.dismissible !== false ? 'Dismiss' : undefined), {
      duration,
      panelClass: [`toast-${config.type}`],
      horizontalPosition: toastConfig.position.includes('left') ? 'left' :
                          toastConfig.position.includes('right') ? 'right' : 'center',
      verticalPosition: toastConfig.position.startsWith('top') ? 'top' : 'bottom',
    });
  }

  success(message: string, duration?: number): void {
    this.show({ type: 'success', message, duration });
  }

  error(message: string, duration?: number): void {
    this.show({ type: 'error', message, duration });
  }

  warning(message: string, duration?: number): void {
    this.show({ type: 'warning', message, duration });
  }

  info(message: string, duration?: number): void {
    this.show({ type: 'info', message, duration });
  }
}
