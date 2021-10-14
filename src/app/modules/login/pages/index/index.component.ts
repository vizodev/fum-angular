import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/core/router.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private router: RouterService) {}

  ngOnInit(): void {}

  email() {}

  facebook() {}

  google() {}

  login() {
    this.router.signin();
  }
}
