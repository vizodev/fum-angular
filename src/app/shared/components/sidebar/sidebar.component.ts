import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from 'src/app/core/router.service';
import { toggleSidebar } from 'src/app/helpers/layout.helper';
import { SidebarItem } from 'src/app/types/interfaces/sideBarItem';
import { SidebarStyle } from '../../../types/enums/sideBarStyle';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() sidebarStyle: SidebarStyle = 'expanded';

  items: SidebarItem[] = [
    { label: 'Home', icon: '&#xE917;' },
    { label: 'Users', icon: '&#xE917;' },
    { label: 'Organizations', icon: '&#xE917;' },
    { label: 'Team', icon: '&#xE917;' },
    { label: 'Permissions', icon: '&#xE917;' },
    { label: 'Roles', icon: '&#xE917;' },
  ];
  constructor(private router: RouterService) {}

  public set value(sidebarStyle: SidebarStyle) {
    this.sidebarStyle = sidebarStyle;
  }

  ngOnInit(): void {}
  dashboard() {}
  
  toggle() {
    toggleSidebar();
  }
}
