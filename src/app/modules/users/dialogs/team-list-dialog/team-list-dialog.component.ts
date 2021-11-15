import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-team-list-dialog',
  templateUrl: './team-list-dialog.component.html',
  styleUrls: ['./team-list-dialog.component.scss'],
})
export class TeamListDialogComponent implements OnInit {
  @Output() done = new EventEmitter();
  @Output() cancelSelect = new EventEmitter();
  @Input() selectedTeams: any;

  constructor() {}

  ngOnInit(): void {}

  onSelect(teams: any) {
    this.selectedTeams = teams;
  }

  cancel() {
    this.cancelSelect.emit();
  }

  finishSelect() {
    this.done.emit(this.selectedTeams);
  }
}
