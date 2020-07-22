import { Injectable } from '@angular/core';

export interface ManagedError {
  source: string;
  event?: string;
  error: any;
}

export type ErrorListener = (err: ManagedError) => void;

@Injectable({
  providedIn: 'root',
})
export class ErrorManagementService {
  private registeredErrors: { [source: string]: { [event: string]: ManagedError[] } } = {};
  private errorListeners: { [source: string]: { [event: string]: ErrorListener[] } } = {};

  constructor() {}

  /**
   * Register a new event in the manager
   * @param err The error to register
   */
  registerError(err: ManagedError) {
    const sourceDict = this.registeredErrors[err.source];
    if (!sourceDict) {
      this.registeredErrors[err.source] = {};
    }

    const event = err.event || 'default';
    const eventDict = this.registeredErrors[err.source][event];
    if (!eventDict) {
      this.registeredErrors[err.source][event] = [];
    }
    this.registeredErrors[err.source][event].push(err.error);
    return this.reportError(err).error;
  }

  /**
   * Removes registered error events
   * @param source The source of events to delete
   * @param event The event to delete. Is this value is null, remove all events of the source.
   */
  clearRegisteredEvents(source: string, event: string = null) {
    if (this.registeredErrors[source]) {
      if (event && this.registeredErrors[source][event]) {
        this.registeredErrors[source][event] = [];
      } else if (!event) {
        this.registeredErrors[source] = {};
      }
    }
  }

  /**
   *
   * @param callback The function to flush all the reported errors
   */
  flushReportedErrors(
    callback: (reportedErrors: { [source: string]: { [event: string]: ManagedError[] } }) => void
  ): void {
    callback(this.registeredErrors);
    this.registeredErrors = {};
  }

  /**
   * Reports an error to a listener
   * @param err Error to report
   */
  private reportError(err: ManagedError) {
    const sources = [err.source].filter((source) => source || source !== 'default').concat(['default']);
    const events = [err.event].filter((event) => event || event !== 'default').concat(['default']);

    sources.forEach((source) =>
      events.forEach((event) =>
        ((this.errorListeners[source] || {})[event] || []).forEach((errorListener) => errorListener(err))
      )
    );
    return err;
  }

  /**
   * Register an error listener to register
   * @param errorListener The error listener to register
   * @param source The source name
   * @param event The event name
   */
  addErrorListener(errorListener: ErrorListener, source: string = null, event: string = null) {
    const listenerSource = source || 'default';
    const listenerEvent = event || 'default';

    const sourceItem = this.errorListeners[listenerSource];
    if (!sourceItem) {
      this.errorListeners[listenerSource] = {};
    }

    const eventItem = this.errorListeners[listenerSource][listenerEvent];
    if (!eventItem) {
      this.errorListeners[listenerSource][listenerEvent] = [];
    }

    const exists = !!this.errorListeners[listenerSource][listenerEvent].find((listener) => listener === errorListener);
    if (!exists) {
      this.errorListeners[listenerSource][listenerEvent].push(errorListener);
    }
  }

  /**
   * Removes an error listener of an source and event
   * @param errorListener The error listener to remove
   * @param source The source name
   * @param event The event name
   */
  removeErrorListener(errorListener: ErrorListener, source: string = null, event: string = null) {
    Object.keys(this.errorListeners).forEach((sourceKey) => {
      if ((source && sourceKey === source) || !source) {
        Object.keys(this.errorListeners[sourceKey]).forEach((eventKey) => {
          if ((event && eventKey === event) || !event) {
            this.errorListeners[sourceKey][eventKey] = this.errorListeners[sourceKey][eventKey].filter(
              (errListener) => errListener !== errorListener
            );
          }
        });
      }
    });
  }
}
