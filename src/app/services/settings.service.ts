import { Injectable } from '@angular/core';
import { SidebarStyle } from '../types/enums/sideBarStyle';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  sidebarStyle: SidebarStyle = 'expanded';
}
