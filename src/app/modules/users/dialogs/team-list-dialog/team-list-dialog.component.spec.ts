import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListDialogComponent } from './team-list-dialog.component';

describe('TeamListDialogComponent', () => {
  let component: TeamListDialogComponent;
  let fixture: ComponentFixture<TeamListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
