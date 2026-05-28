import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutConfigService } from '../../core/config/layout-config.service';
import { EventBusService } from '../../core/events/event-bus.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly configService = inject(LayoutConfigService);
  private readonly eventBus = inject(EventBusService);

  toggleSidebar(): void {
    this.eventBus.emit('sidebar:toggle', undefined as never);
  }
}
