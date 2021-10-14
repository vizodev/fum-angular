import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/core/router.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private router: RouterService) {}

  ngOnInit(): void {}
  dashboard() {}
  users() {}
  organization() {}
  team() {}
  roles() {}
  permission() {}
}
