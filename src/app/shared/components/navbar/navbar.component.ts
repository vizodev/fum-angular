import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from 'src/app/core/router.service';
import { toggleSidebar } from 'src/app/helpers/layout.helper';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() isSticky: boolean = true;
  @Input() isCentered: boolean = false;
  @Input() showBrand: boolean = false;
  constructor(private user: UserService, private router: RouterService) {}

  ngOnInit(): void {}

  logout() {
    this.user.signOut();
    this.router.login();
  }

  dashboard() {}

  toggleSidebar(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    toggleSidebar();
  }
}
