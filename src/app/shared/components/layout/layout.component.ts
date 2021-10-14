import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private settingService: SettingsService) {}

  ngOnInit(): void {}

  public get sidebarStyle() {
    return this.settingService.sidebarStyle;
  }
}
