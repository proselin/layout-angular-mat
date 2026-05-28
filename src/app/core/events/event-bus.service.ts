import { Injectable } from '@angular/core';
import { Subject, Observable, filter, map } from 'rxjs';
import { AppEvent, AppEventMap, AppEventType } from './event.model';

@Injectable({ providedIn: 'root' })
export class EventBusService {
  private readonly eventSubject = new Subject<AppEvent>();
  private readonly events$ = this.eventSubject.asObservable();

  emit<T extends AppEventType>(type: T, payload: AppEventMap[T]): void {
    this.eventSubject.next({
      type,
      payload,
      timestamp: Date.now(),
    } as AppEvent);
  }

  on<T extends AppEventType>(type: T): Observable<AppEventMap[T]> {
    return this.events$.pipe(
      filter((event): event is AppEvent<T> => event.type === type),
      map(event => event.payload)
    );
  }

  onAny(...types: AppEventType[]): Observable<AppEvent> {
    return this.events$.pipe(
      filter(event => types.length === 0 || types.includes(event.type))
    );
  }
}
