import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-organization-list-dialog',
  templateUrl: './organization-list-dialog.component.html',
  styleUrls: ['./organization-list-dialog.component.scss'],
})
export class OrganizationListDialogComponent implements OnInit {
  @Output() done = new EventEmitter();
  @Output() cancelSelect = new EventEmitter();
  @Input() selectedOrganizations: any;

  constructor() {}

  ngOnInit(): void {}

  onSelect(organizations: any) {
    this.selectedOrganizations = organizations;
  }

  cancel() {
    this.cancelSelect.emit();
  }

  finishSelect() {
    this.done.emit(this.selectedOrganizations);
  }
}
