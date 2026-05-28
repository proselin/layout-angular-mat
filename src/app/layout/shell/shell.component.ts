import { Component, inject, signal, DestroyRef, ViewChild, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { LayoutConfigService } from '../../core/config/layout-config.service';
import { EventBusService } from '../../core/events/event-bus.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { LoadingScreenComponent } from '../../shared/components/loading-screen/loading-screen.component';
import { MessagePanelComponent } from '../../shared/components/message-panel/message-panel.component';

@Component({
  selector: 'app-shell',
  imports: [
    MatSidenavModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainContentComponent,
    LoadingScreenComponent,
    MessagePanelComponent,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent implements OnInit {
  private readonly configService = inject(LayoutConfigService);
  private readonly eventBus = inject(EventBusService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('sidenav') sidenav!: MatSidenav;

  readonly sidenavMode = signal<'side' | 'over' | 'push'>('side');
  readonly sidenavOpened = signal(true);
  readonly isMobile = signal(false);

  ngOnInit(): void {
    const sidebarConfig = this.configService.sidebar();

    this.breakpointObserver
      .observe([
        `(max-width: ${sidebarConfig.mobileBreakpoint}px)`,
        `(max-width: ${sidebarConfig.tabletBreakpoint}px)`,
      ])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        const mobileMatch = result.breakpoints[`(max-width: ${sidebarConfig.mobileBreakpoint}px)`];
        const tabletMatch = result.breakpoints[`(max-width: ${sidebarConfig.tabletBreakpoint}px)`];

        if (mobileMatch) {
          this.isMobile.set(true);
          this.sidenavMode.set('over');
          this.sidenavOpened.set(false);
        } else if (tabletMatch) {
          this.isMobile.set(false);
          this.sidenavMode.set('push');
          this.sidenavOpened.set(false);
        } else {
          this.isMobile.set(false);
          this.sidenavMode.set('side');
          this.sidenavOpened.set(true);
        }
      });

    this.eventBus.on('sidebar:toggle').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => this.sidenav?.toggle());

    this.eventBus.on('sidebar:open').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => this.sidenav?.open());

    this.eventBus.on('sidebar:close').pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => this.sidenav?.close());
  }

  onNavigated(): void {
    if (this.isMobile()) {
      this.sidenav?.close();
    }
  }
}
