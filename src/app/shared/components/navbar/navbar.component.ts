import { Component, Input, OnInit } from '@angular/core';
import { toggleSidebar } from 'src/app/helpers/layout.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() isSticky: boolean = true;
  @Input() isCentered: boolean = false;
  @Input() showBrand: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  profile() {}

  logout() {}

  setting() {}

  dashboard() {}

  toggleSidebar(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    toggleSidebar();
  }
}
