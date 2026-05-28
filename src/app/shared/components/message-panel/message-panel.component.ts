import { Component, inject, signal, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EventBusService } from '../../../core/events/event-bus.service';
import { NotificationConfig } from '../../../core/models/notification.model';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-message-panel',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './message-panel.component.html',
  styleUrl: './message-panel.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class MessagePanelComponent {
  private readonly eventBus = inject(EventBusService);
  private readonly destroyRef = inject(DestroyRef);

  readonly visible = signal(false);
  readonly notification = signal<NotificationConfig | null>(null);

  readonly iconMap: Record<string, string> = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info',
  };

  constructor() {
    this.eventBus.on('message:show').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(config => {
      this.notification.set(config);
      this.visible.set(true);
      if (config.duration && config.duration > 0) {
        setTimeout(() => this.dismiss(), config.duration);
      }
    });

    this.eventBus.on('message:hide').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => this.dismiss());
  }

  dismiss(): void {
    this.visible.set(false);
    this.notification.set(null);
  }
}
