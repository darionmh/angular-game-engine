import {HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  private keydownEvents: KeydownEvent[] = [];

  constructor() {
  }

  public registerEvent(keycode: number, callback: () => void): () => void {
    const event: KeydownEvent = {
      keycode,
      callback
    };

    this.keydownEvents.push(event);
    console.log(this.keydownEvents);
    return () => {
      this.deregisterEvent(event);
    };
  }

  private deregisterEvent(event: KeydownEvent): void {
    this.keydownEvents = this.keydownEvents.filter(it => it !== event);
  }
}

export interface KeydownEvent {
  keycode: number;
  callback: () => void;
}

export const KEYS = {
  W: 87,
  A: 65,
  S: 83,
  D: 68,
  SPACE: 32,
};
