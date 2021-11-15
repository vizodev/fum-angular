import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { ListComponent } from './pages/list/list.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoadingIndicatorModule } from 'src/app/shared/components/loading-indicator/loading-indicator.module';
import { DataTablesModule } from 'angular-datatables';
import { TypesModule } from 'src/app/shared/components/types/types.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganizationListDialogComponent } from './dialogs/organization-list-dialog/organization-list-dialog.component';
import { OrganizationListModule } from 'src/app/shared/components/organization-list/organization-list.module';
import { TeamsListModule } from 'src/app/shared/components/teams-list/teams-list.module';
import { TeamListDialogComponent } from './dialogs/team-list-dialog/team-list-dialog.component';

@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    ViewComponent,
    EditComponent,
    OrganizationListDialogComponent,
    TeamListDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    LayoutModule,
    LoadingIndicatorModule,
    DataTablesModule,
    TypesModule,
    FormsModule,
    ReactiveFormsModule,
    OrganizationListModule,
    TeamsListModule
  ],
})
export class UsersModule {}
