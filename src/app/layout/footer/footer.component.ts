import { Component, inject } from '@angular/core';
import { LayoutConfigService } from '../../core/config/layout-config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly configService = inject(LayoutConfigService);
}
