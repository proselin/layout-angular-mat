import { Component, inject } from '@angular/core';
import { ShellComponent } from './layout/shell/shell.component';
import { ToastService } from './shared/components/toast/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShellComponent],
  template: `<app-shell />`,
})
export class App {
  // Inject ToastService to ensure it initializes and listens for events
  private readonly toastService = inject(ToastService);
}
