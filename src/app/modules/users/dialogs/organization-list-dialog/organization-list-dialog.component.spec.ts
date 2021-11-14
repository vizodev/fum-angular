import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationListDialogComponent } from './organization-list-dialog.component';

describe('OrganizationListDialogComponent', () => {
  let component: OrganizationListDialogComponent;
  let fixture: ComponentFixture<OrganizationListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
