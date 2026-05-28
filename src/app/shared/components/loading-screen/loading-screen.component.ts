import { Component, inject, signal, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EventBusService } from '../../../core/events/event-bus.service';
import { LayoutConfigService } from '../../../core/config/layout-config.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-loading-screen',
  imports: [MatProgressSpinnerModule],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class LoadingScreenComponent {
  private readonly eventBus = inject(EventBusService);
  private readonly configService = inject(LayoutConfigService);
  private readonly destroyRef = inject(DestroyRef);

  readonly visible = signal(false);
  readonly message = signal('');
  readonly config = this.configService.loading;

  private showTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.message.set(this.configService.loading().message);

    this.eventBus.on('loading:show').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(payload => {
      if (payload?.message) {
        this.message.set(payload.message);
      }
      const delay = this.configService.loading().delay;
      if (delay > 0) {
        this.showTimeout = setTimeout(() => this.visible.set(true), delay);
      } else {
        this.visible.set(true);
      }
    });

    this.eventBus.on('loading:hide').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => {
      if (this.showTimeout) {
        clearTimeout(this.showTimeout);
        this.showTimeout = null;
      }
      this.visible.set(false);
      this.message.set(this.configService.loading().message);
    });
  }
}
