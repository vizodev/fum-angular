import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  get(key: string): any {
    const value = localStorage.getItem(key);
    let finalValue: any;
    try {
      value ? (finalValue = JSON.parse(value)) : null;
    } catch (error) {
      finalValue = value;
    }
    return finalValue;
  }

  set(key: string, value: any): void {
    let finalValue;
    try {
      finalValue = JSON.stringify(value);
    } catch (error) {
      finalValue = value;
    }
    localStorage.setItem(key, finalValue);
  }
}
