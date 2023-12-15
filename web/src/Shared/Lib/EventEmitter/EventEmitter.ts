/* eslint-disable @typescript-eslint/no-explicit-any */
import EventType from './eventType';

interface EventEmitter {
  readonly events: Record<string, (() => void)[]>;
  dispatch(eventType: EventType, eventName: string, payload?: unknown): void;
  subscribe(eventType: EventType, eventName: string, callback: (payload?: any ) => void): void;
  unsubscribe(eventType: EventType, eventName: string): void;
  getEventKey(eventType: EventType, eventName: string): string;
}

/**
 * Event emitter to subscribe, dispatch, and unsubscribe to events.
 */
const eventEmitter: EventEmitter = {

  events: {},

  getEventKey(eventType, eventName) {
    return `${eventType}_${eventName.toUpperCase()}`;
  },

  dispatch(event, name, payload) {
    const eventName = this.getEventKey(event, name);

    if (!this.events[eventName]) return;

    this.events[eventName].forEach((callback: (payload?: unknown) => void) =>
      callback(payload),
    );
  },

  subscribe(event, name, callback) {
    const eventName = this.getEventKey(event, name);

    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    if (!this.events[eventName]?.includes(this.events[eventName][0])) {
      this.events[eventName]?.push(callback);
    }
  },

  unsubscribe(event, name) {
    const eventName = this.getEventKey(event, name);

    if (!this.events[eventName]) return;

    delete this.events[eventName];
  },
};

export default eventEmitter;
