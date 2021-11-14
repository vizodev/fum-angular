import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { LoadingIndicatorModule } from 'src/app/shared/components/loading-indicator/loading-indicator.module';
import { DataTablesModule } from 'angular-datatables';
import { TypesModule } from 'src/app/shared/components/types/types.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganizationListModule } from 'src/app/shared/components/organization-list/organization-list.module';

@NgModule({
  declarations: [
    OrganizationsComponent,
    ViewComponent,
    EditComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    LayoutModule,
    LoadingIndicatorModule,
    DataTablesModule,
    TypesModule,
    FormsModule,
    ReactiveFormsModule,
    OrganizationListModule,
  ],
})
export class OrganizationsModule {}
