import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { SidebarStyle } from 'src/app/types/enums/sideBarStyle';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  // sidebarStyle: SidebarStyle = SidebarStyle.expanded;
  SidebarStyle = SidebarStyle;
  constructor(public settings: SettingsService) {}

  ngOnInit() {}

  public get sidebarStyle() {
    
    return this.settings.sidebarStyle;
  }

  saveChanges(event: Event) {
    event.preventDefault();
    this.settings.save();
    alert('Settings Saved');
    window.location.reload();
  }
  cancelChanges(){
    window.location.reload();
  }
}
