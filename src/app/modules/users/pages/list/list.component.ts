import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  isLoading: boolean = false;
  users = [
    { key: 'id', type: { id: 'string' } },
    { key: 'name', type: { id: 'string' } },
    { key: 'organizations', type: { id: 'Oganization[]' } },
    { key: 'teams', type: { id: 'Team[]' } },
    { key: 'roles', type: { id: 'string[]' } },
    { key: 'permissions', type: { id: 'string[]' } },
  ];
  constructor() {}

  ngOnInit(): void {}
}
