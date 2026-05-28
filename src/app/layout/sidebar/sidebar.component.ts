import { Component, inject, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutConfigService } from '../../core/config/layout-config.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatBadgeModule,
    MatDividerModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  readonly configService = inject(LayoutConfigService);
  readonly navigated = output<void>();
}
