import { Component, OnInit } from '@angular/core';
import { initDropdown, toggleSidebar } from 'src/app/helpers/layout.helper';
import { SettingsService } from 'src/app/services/settings.service';
import { SidebarStyle } from 'src/app/types/enums/sideBarStyle';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  SidebarStyle = SidebarStyle;
  constructor(private settingService: SettingsService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    initDropdown();
  }

  toggle() {
    toggleSidebar();
  }
  public get sidebarStyle() {
    return this.settingService.sidebarStyle;
  }
}
