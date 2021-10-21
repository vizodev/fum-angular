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
  @Input() sidebarStyle: SidebarStyle = SidebarStyle.expanded;
  SidebarStyle = SidebarStyle;
  items: SidebarItem[] = [
    { label: 'Home', icon: '&#xE917;', router: '/', childrens: [] },
    {
      label: 'Users',
      icon: '&#xE917;',
      router: '/users',
      childrens: [
        {
          label: 'List',
          router: 'users',
        },

        {
          label: 'Add',
          router: 'users/new',
        },
      ],
    },
    {
      label: 'Organizations',
      icon: '&#xE917;',
      router: '/organizations',
      childrens: [
        {
          label: 'List',
          router: 'organizations',
        },

        {
          label: 'Add',
          router: 'organizations/new',
        },
      ],
    },
    {
      label: 'Team',
      icon: '&#xE917;',
      router: '/teams',
      childrens: [
        {
          label: 'List',
          router: 'teams',
        },

        {
          label: 'Add',
          router: 'teams/new',
        },
      ],
    },
    { label: 'Permissions', icon: '&#xE917;', router: '/permissions' },
    { label: 'Roles', icon: '&#xE917;', router: '/roles' },
  ];
  constructor(private router: RouterService) {}

  public set value(sidebarStyle: SidebarStyle) {
    this.sidebarStyle = sidebarStyle;
  }

  ngOnInit(): void {}

  navigateByUrl(url: string) {
    return this.router.navigateByUrl(url);
  }

  dashboard() {}

  toggle() {
    toggleSidebar();
  }
}
