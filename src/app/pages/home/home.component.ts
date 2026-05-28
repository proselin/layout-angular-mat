import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EventBusService } from '../../core/events/event-bus.service';
import { ToastService } from '../../shared/components/toast/toast.service';
import { DigitalClockComponent } from '../../shared/components/digital-clock/digital-clock.component';
import { NotificationType } from '../../core/models/notification.model';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, DigitalClockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly eventBus = inject(EventBusService);
  private readonly toastService = inject(ToastService);

  showToast(type: NotificationType): void {
    const messages: Record<string, string> = {
      success: 'Operation completed successfully!',
      error: 'Something went wrong. Please try again.',
      warning: 'Please review your input before proceeding.',
      info: 'Here is some useful information.',
    };
    this.toastService.show({ type, message: messages[type] });
  }

  showMessage(type: NotificationType): void {
    const configs: Record<string, { title: string; message: string }> = {
      success: { title: 'Success', message: 'Your changes have been saved.' },
      error: { title: 'Error', message: 'Failed to save changes. Please try again.' },
      info: { title: 'Information', message: 'System maintenance scheduled for tonight.' },
    };
    this.eventBus.emit('message:show', { type, ...configs[type], dismissible: true, duration: 5000 });
  }

  showLoading(): void {
    this.eventBus.emit('loading:show', { message: 'Processing your request...' });
    setTimeout(() => this.eventBus.emit('loading:hide', undefined as never), 2000);
  }
}
