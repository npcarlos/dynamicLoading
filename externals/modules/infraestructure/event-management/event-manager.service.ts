import { Injectable } from '@angular/core';

export interface Event {
  type: string;
  source: string;
  name: string;
  timestamp: number;
  status: 'start' | 'end';
}

type EventListener = (event: Event) => void;

@Injectable({
  providedIn: 'root',
})
export class EventManagerService {
  private eventListeners: { [type: string]: EventListener[] } = {};

  constructor() {}

  /**
   *
   * @param type
   * @param eventListener
   */
  addEventListener(type: string, eventListener: EventListener) {
    const eventListeners = this.eventListeners[type];
    if (!eventListeners) {
      this.eventListeners[type] = [];
    }
    this.eventListeners[type].push(eventListener);
  }

  /**
   *
   * @param type
   * @param eventListener
   */
  removeEventListener(type: string, eventListener: EventListener) {
    const eventListeners = this.eventListeners[type];
    if (eventListeners) {
      this.eventListeners[type] = eventListeners.filter((oldEventListener) => oldEventListener !== eventListener);
    }
  }

  /**
   *
   * @param event
   */
  notifyEvent(event: Event) {
    (this.eventListeners[event.type] || []).forEach((eventListener) => eventListener(event));
  }
}
