import { Injectable } from '@angular/core';
import { SidebarStyle } from '../types/enums/sideBarStyle';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  sidebarStyle: SidebarStyle;
  sidebarDefaults: SidebarStyle;

  constructor(private localStorage: LocalStorageService) {
    this.sidebarStyle = localStorage.get('sidebarStyle');
    this.sidebarDefaults = SidebarStyle.expanded;
  }

  public set SidebarStyle(sidebarStyle) {
    this.sidebarStyle = sidebarStyle;
  }

  save() {
    this.localStorage.set('sidebarStyle', this.sidebarStyle);
  }

  reset() {
    this.SidebarStyle(this.sidebarDefaults);
  }
}
