import { Component, inject, signal, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { interval } from 'rxjs';
import { LayoutConfigService } from '../../../core/config/layout-config.service';
import { TimeZoneConfig } from '../../../core/models/clock.model';

interface ClockDisplay {
  config: TimeZoneConfig;
  time: string;
  date: string;
  offset: string;
}

@Component({
  selector: 'app-digital-clock',
  imports: [MatCardModule],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.scss',
})
export class DigitalClockComponent implements OnInit {
  private readonly configService = inject(LayoutConfigService);
  private readonly destroyRef = inject(DestroyRef);

  readonly clocks = signal<ClockDisplay[]>([]);

  ngOnInit(): void {
    this.updateClocks();

    const updateInterval = this.configService.clock().updateIntervalMs;
    interval(updateInterval).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => this.updateClocks());
  }

  private updateClocks(): void {
    const clockConfig = this.configService.clock();
    const now = new Date();

    this.clocks.set(
      clockConfig.timeZones.map(tz => this.formatClock(now, tz, clockConfig.format))
    );
  }

  private formatClock(now: Date, tz: TimeZoneConfig, format: '12h' | '24h'): ClockDisplay {
    const hour12 = format === '12h';
    const timeStr = now.toLocaleTimeString('en-US', {
      timeZone: tz.timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12,
    });

    const dateStr = now.toLocaleDateString('en-US', {
      timeZone: tz.timezone,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

    const offsetStr = this.getOffset(now, tz.timezone);

    return {
      config: tz,
      time: timeStr,
      date: dateStr,
      offset: offsetStr,
    };
  }

  private getOffset(now: Date, timezone: string): string {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'shortOffset',
    });
    const parts = formatter.formatToParts(now);
    const tzPart = parts.find(p => p.type === 'timeZoneName');
    return tzPart?.value ?? '';
  }
}
