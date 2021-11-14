import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-organization-list-dialog',
  templateUrl: './organization-list-dialog.component.html',
  styleUrls: ['./organization-list-dialog.component.scss'],
})
export class OrganizationListDialogComponent implements OnInit {
  selected: any[] = [];
  @Output() selectOrganizations = new EventEmitter();
  @Output() done = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSelect(organizations: any) {
    this.selected = organizations;
    this.selectOrganizations.emit(this.selected);
  }

  cancel() {
    this.selected = [];
    this.selectOrganizations.emit(this.selected);
  }
  
  close() {
    this.done.emit();
  }
}
